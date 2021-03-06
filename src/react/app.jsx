import React, { Component } from 'react';
import Viewer from './viewer';
import Globals from '../js/globals';
import Helpers from '../js/helpers';
import electron from 'electron';
import { remote } from 'electron';
import $ from 'jquery';

import Predictions from './predictions';
import History from './history';
import Info from './info';
import path from 'path';
import AddModel from './addmodel';

import { showHideAddModel } from '../actions/actions_addmodel';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MoreInfo from './moreinfo';

const { dialog } = electron.remote;

class App extends Component {
    constructor(props) {
        super(props);

        this.videoEl = null;
        this.canvasEl = null;
        this.$resultsContainer = null;
        this.$history = null;
        this.$info = null;
        this.$models = null;

        this.$resultsOverlay = null;
        this.isVideo = false;
        this.verbose = true;
        this.currentImages = [];
        this.predictionHistory = {};

        this.reactPredictions = null;
        this.reactHistory = null;
        this.reactInfo = null;

        this.state = {
            historyPredictions: [],
            predictions: [],
            currentModel: "",
            selectedPrediction: null,
            success: false,
            error: "Please select image"
        };
    }

    render() {
        return (
            <div className="capture-container">
                <div className="videoContainer">
                    <div className="column column-one">
                        <Viewer />
                    </div>
                    <div className="column column-two col-history">
                        <History
                            predictions={this.state.historyPredictions}
                            infoCallback={this.updateInfo.bind(this)}
                        />
                    </div>
                </div>
                <Predictions
                    predictions={this.state.predictions}
                    success={this.state.success}
                    error={this.state.error}
                />
                <AddModel
                    addCallback={this.addModelCallback.bind(this)}
                    cancelCallback={this.cancelAddModelCallback.bind(this)}
                />
                <div className="info-overlay">
                    <MoreInfo
                        prediction={this.state.selectedPrediction}
                    />
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.videoEl = document.getElementById("video");
        this.canvasEl = document.getElementById("canvas");
        this.$resultsContainer = $(document.getElementById("resultsContainer"));
        this.$history = $(document.getElementsByClassName("col-history"));
        this.$info = $(document.getElementsByClassName("info-overlay"));
        this.$resultsOverlay = this.$resultsContainer.find(".resultsOverlay");

        this.initApp();

        $(document).find(".videoInput").change((e) => {
            const $videoInput = $(e.currentTarget);
            this.getVideoStream();
        });

        $(document).find(".input-checkbox").change((e) => {
            let $inputCheckbox = $(e.currentTarget);

            if ($inputCheckbox.is(":checked")) {
                this.$history.removeClass("hidden");
                this.verbose = true;
            }
            else {
                this.$history.addClass("hidden");
                this.verbose = false;
            }
        });

        let $segment = $(".segmented label input[type=radio]");

        $segment.on("change", (e) => {
            let $option = $(e.currentTarget);
            let $parent = $option.parent();

            if ($option.is(":checked")) {
                $parent.siblings().each((sigIndex, sibValue) => {
                    $(sibValue).removeClass("checked");
                });

                $parent.addClass("checked");

                let $video = $(this.videoEl);
                $video.prop("controls", false);

                if ($parent.hasClass("option-live") || $parent.hasClass("option-video")) {
                    $video.show();
                    $(this.canvasEl).hide();
                    this.isVideo = true;

                    if ($parent.hasClass("option-live")) {
                        this.getVideoStream();
                    }
                    else {
                        $video.addClass("file");
                        $video.prop("src", "");
                        $video.removeAttr("src");
                    }
                }
                else if ($parent.hasClass("option-image")) {
                    if ($video.hasClass("file")) {
                        $video.removeClass("file");

                        this.canvasEl.width = Globals.defaultWidth;
                        this.canvasEl.height = Globals.defaultHeight;
                    }

                    $video.hide();
                    $video.prop("src", "");
                    $video.removeAttr("src");
                    $(this.canvasEl).show();
                    this.isVideo = false;
                }
            }
        });

        $segment.first().trigger("change");

        $(this.videoEl).click((e) => {
            if ($(e.currentTarget).hasClass("file")) {
                this.openVideo();
            }
        });

        $(this.canvasEl).click((e) => {
            this.openImage();
        });
    }

    addModelCallback($modal) {
        let $name = $modal.find(".model-name");
        let $folderLocation = $modal.find(".folder-location");
        let $algorithm = $modal.find(".algorithm");
        let $loading = $modal.find(".loading");

        $loading.addClass("is-visible");

        $.ajax({
            url: path.join(Globals.endpoint, "train"),
            type: "POST",
            data: JSON.stringify({
                input_folder_path: $folderLocation.val(),
                model_folder_name: $name.val(),
                model_type: $algorithm.val()
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",

        }).done((result) => {
            $loading.removeClass("is-visible");
            $modal.removeClass('is-visible');

            this.props.showHideAddModel(false);

            let $select = this.$models.find("select");

            Helpers.getModels($select).then(() => {
                $select.val(this.state.currentModel);
            });
        }).fail((jqXHR, textStatus, errorThrown) => {
            $loading.removeClass("is-visible");
            let $errorMsg = $modal.find(".error-message");
            $errorMsg.text(jqXHR.responseJSON.error);
        });
    }

    cancelAddModelCallback() {
        this.props.showHideAddModel(false);
    }

    initApp() {
        this.$models = $(document).find(".models");
        let $select = $("<select></select>");

        // Updating a dropdown that is about three component levels deep...
        // This is about as anti-pattern as it gets for React.
        // TODO: Add a global state management layer such as Redux, 
        // then I can manage this code from within the Controls component, but still have global state. 
        Helpers.getModels($select).then(() => {
            this.$models.html($select);

            this.setState({
                currentModel: $select.find("option:first").val()
            });

            $select.change((e) => {
                this.setState({
                    currentModel: $select.val()
                });
            })

            $('.add-model').click((e) => {
                this.props.showHideAddModel(true);
            });

            var ctx = this.canvasEl.getContext('2d');

            // default image
            var defImg = new Image();
            // defImg.src = "./images/qr.png";
            defImg.onload = () => {
                ctx.drawImage(defImg, Globals.defaultWidth / 2 - defImg.width / 2, Globals.defaultHeight / 2 - defImg.height / 2);
            };


            this.getVideoStream();
        });
    }

    getVideoStream() {
        let $videoInput = $(document).find(".videoInput");

        let videoOptions = {
            advanced: [{
                deviceId: $videoInput.val().toString()
            }]
        };

        navigator.mediaDevices.getUserMedia({ video: videoOptions }).then((stream) => {
            this.videoEl.src = URL.createObjectURL(stream);

            this.videoEl.onloadedmetadata = (e) => {
                this.captureImage();
            };
        }).catch(() => {
            alert('could not connect stream');
        });
    }

    openVideo() {
        dialog.showOpenDialog(
            remote.getCurrentWindow(),
            {
                defaultPath: 'c:/',
                filters: [
                    { name: 'Images', extensions: ['avi', 'mov', 'mkv', 'mp4'] }
                ],
                properties: ['openFile']
            },
            (filePaths) => {
                $(this.videoEl).prop("controls", true);

                Helpers.fadeStuff(this.$resultsContainer.find(".resultsOverlay"));
                this.captureImage();

                this.videoEl.src = filePaths[0];
            }
        );
    }

    openImage() {
        dialog.showOpenDialog(
            remote.getCurrentWindow(),
            {
                defaultPath: 'c:/',
                filters: [
                    { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
                ],
                properties: ['openFile', 'multiSelections']
            },
            (filePaths) => {
                this.currentImages = filePaths;
                this.updateImage();
            }
        );
    }

    captureImage() {
        let currentWidth = this.videoEl.videoWidth;

        if (currentWidth === 0) {
            currentWidth = Globals.defaultWidth;
        }

        let currentHeight = this.videoEl.videoHeight;

        if (currentHeight === 0) {
            currentHeight = Globals.defaultHeight;
        }

        var dataURL = $(this.canvasEl).data("file_source");

        if (this.isVideo) {
            if (this.videoEl.src === "") {
                return;
            }

            this.canvasEl.width = currentWidth;
            this.canvasEl.height = currentHeight;
            this.canvasEl.getContext('2d').drawImage(this.videoEl, 0, 0, this.canvasEl.width, this.canvasEl.height);
            var dataURL = this.canvasEl.toDataURL('image/jpeg', 1.0);
        }

        $.ajax({
            url: path.join(Globals.endpoint, "predict"),
            type: "POST",
            data: JSON.stringify({
                image: dataURL,
                model: $(document).find(".models select").val(),
                verbose: this.verbose
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",

        }).done((result) => {
            Helpers.clearOverlay(this.$resultsOverlay);
            let success = String.prototype.toLowerCase.call(result.success) === "true";
            this.updatePredictions(result.predictions, success, result.error);

            if (this.verbose) {
                this.updateHistory(result);
            }

            if (this.isVideo && this.videoEl.src !== "") {
                Helpers.fadeStuff(this.$resultsOverlay);
            }

            if (this.isVideo) {
                // When one request is done, do it all over again...
                this.captureImage();
            }
            else {
                if (this.currentImages !== null && this.currentImages !== undefined && this.currentImages.length > 0) {
                    this.currentImages.shift();

                    Helpers.sleep(2000).then(() => {
                        this.updateImage();
                    });
                }
            }
        }).fail((jqXHR, textStatus, errorThrown) => {
            Helpers.clearOverlay(this.$resultsOverlay);

            let error = "Please select image";

            if (jqXHR.responseJSON !== undefined) {
                error = jqXHR.responseJSON.error;
            }

            this.updatePredictions(null, false, error);

            if (this.isVideo) {
                this.captureImage();
            }
        });
    }

    updateImage() {
        var ctx = this.canvasEl.getContext('2d');
        var img = new Image();
        img.onload = () => {
            var canvasLeft = 0;
            var canvasTop = 0;
            var imageWidth = img.width;
            var imageHeight = img.height;

            var ratio = 0;

            // Check if the current width is larger than the max
            if (imageWidth > Globals.defaultWidth) {
                ratio = Globals.defaultWidth / imageWidth;   // get ratio for scaling image
                $(img).css("width", Globals.defaultWidth); // Set new width
                $(img).css("height", imageHeight * ratio);  // Scale height based on ratio
                imageHeight = imageHeight * ratio;    // Reset height to match scaled image
                imageWidth = imageWidth * ratio;    // Reset width to match scaled image
            }

            // Check if current height is larger than max
            if (imageHeight > Globals.defaultHeight) {
                ratio = Globals.defaultHeight / imageHeight; // get ratio for scaling image
                $(img).css("height", Globals.defaultHeight);   // Set new height
                $(img).css("width", imageWidth * ratio);    // Scale width based on ratio
                imageWidth = imageWidth * ratio;    // Reset width to match scaled image
                imageHeight = imageHeight * ratio;    // Reset height to match scaled image
            }

            canvasLeft = (Globals.defaultWidth - imageWidth) / 2;
            canvasTop = (Globals.defaultHeight - imageHeight) / 2;

            let opacity = 0;

            (function fadeIn() {
                ctx.clearRect(0, 0, Globals.defaultWidth, Globals.defaultHeight);
                ctx.globalAlpha = opacity;
                ctx.drawImage(img, canvasLeft, canvasTop, imageWidth, imageHeight);
                opacity += 0.015;
                if (opacity < 1) {
                    requestAnimationFrame(fadeIn);
                }
            })();

            Helpers.fadeStuff(this.$resultsOverlay);

            this.captureImage();
        }

        if (this.currentImages !== null && this.currentImages !== undefined && this.currentImages.length > 0) {
            img.src = this.currentImages[0];
            $(this.canvasEl).data("file_source", this.currentImages[0]);
        }
    }

    updatePredictions(predictions, success, error) {
        this.setState({
            predictions: predictions,
            success: success,
            error: error
        });
    }

    updateHistory(prediction) {
        this.setState({
            historyPredictions: prediction.predictions
        });

        // Store in a dictionary
        for (var pred in prediction.predictions) {
            const predValues = prediction.predictions[pred];
            this.predictionHistory[predValues.prediction_id] = predValues;
        }
    }

    updateInfo(predictionID) {
        this.setState({
            selectedPrediction: this.predictionHistory[predictionID]
        });

        this.$info.show();
    }
}

function mapStateToProps(state) {
    return state.addModel;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showHideAddModel }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);