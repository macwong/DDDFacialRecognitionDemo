import React, {Component} from 'react';
import Slider from 'react-slick';
import Helpers from "../js/helpers";
import Globals from "../js/globals";
import ModelInfoBlock from '../react/InfoBlocks/modelinfoblock';
import AddFaceBlock from '../react/InfoBlocks/addfaceblock';
import TopPredictionsBlock from '../react/InfoBlocks/toppredictionsblock';

export default class SliderSection extends Component {
    constructor(props) {
        super(props);
    }

    renderBreadcrumbTitle(index) {
        switch(index) {
            case 0:
                return "Summary";
            case 1:
                return "Input";
            case 2:
                return "Find Face";
            case 3:
                return "Convert";
            case 4:
                return "Predict";
            default:
                return "Extra";
        }
    }

    render() {
        const settings = {
            customPaging: (i) => {
                if (i > 0) {
                    return (
                        <a>
                            <span>{i}</span>
                            <span className="breadcrumb-description">
                                {this.renderBreadcrumbTitle(i)}
                            </span>
                        </a>
                    );
                }
                else {
                    return (
                        <a className="summary">
                            <span className="breadcrumb-description">
                                {this.renderBreadcrumbTitle(i)}
                            </span>
                        </a>
                    )
                }
            },
            dots: true,
            dotsClass: "cf breadcrumbs inner",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const pred = this.props.prediction;
        const model_info = pred.model_info;

        return (
            <div id={this.props.section} className={"slider-section " + this.props.cssClass}>
                <div className="pipeline">
                    <Slider {...settings}>
                        <div className="box">
                            <div className="summary-page">
                                <div className="summary-profile">
                                    <figure className="profile">
                                        <img className="profile-pic" src={Globals.pngSource + pred.image} />
                                        <figcaption className="caption">
                                            <h2>{pred.pred_name}</h2>
                                        </figcaption>
                                        <img className="icon" src={Helpers.getPredictionIcon(Helpers.getIndividualPredictionInfo(pred.pred_info, pred.pred_name).distance)} />
                                    </figure>
                                    <div className="scores">
                                        <div className="Rtable Rtable--1col Rtable--collapse">
                                            <div className="table-header Rtable-cell Rtable-cell--alignCenter"><h3>Probability</h3></div>
                                            <div className="table-cell probability Rtable-cell Rtable-cell--alignCenter">
                                                {Helpers.getProbability(pred.probability)}
                                            </div>
                                        </div>
                                        <div className="Rtable Rtable--1col Rtable--collapse">
                                            <div className="table-header Rtable-cell Rtable-cell--alignCenter"><h3>Distance</h3></div>
                                            <div className="table-cell distance Rtable-cell Rtable-cell--alignCenter">
                                                {pred.distance.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="summary-model">
                                    <div>
                                        <ModelInfoBlock model_info={model_info} />
                                        <AddFaceBlock 
                                            model_info={model_info} 
                                            image={pred.image}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box centre">
                            <img className="original-image" src={Globals.pngSource + pred.original_image} />
                        </div>
                        <div className="box centre">
                        <section className="f-table">
                        <div className="f-table-row">
                                <div className="f-table-cell">
                                    <div className="f-table-cell-item">
                                        <img src={Globals.pngSource + pred.image} />
                                    </div>
                                </div>

                                <div className="f-table-cell f-table-measure-right">
                                    <div className="f-table-cell-item">
                                    </div>
                                </div>

                                <div className="f-table-cell">
                                    <div className="f-table-cell-item f-table-text-right">
                                        160px
                                    </div>
                                </div>
                                
                            </div>
                            <div className="f-table-row">
                                <div className="f-table-cell f-table-measure-bottom">
                                    <div className="f-table-cell-item">
                                        
                                    </div>
                                </div>

                                <div className="f-table-cell">
                                    <div className="f-table-cell-item">
                                    </div>
                                </div>
                                <div className="f-table-cell">
                                    <div className="f-table-cell-item">
                                    </div>
                                </div>
                            </div>
                            <div className="f-table-row">
                                <div className="f-table-cell">
                                    <div className="f-table-cell-item f-table-cell-text-bottom">
                                        160px
                                    </div>
                                </div>

                                <div className="f-table-cell">
                                    <div className="f-table-cell-item">
                                    </div>
                                </div>
                                <div className="f-table-cell">
                                    <div className="f-table-cell-item">
                                    </div>
                                </div>
                            </div>
                        </section>
                        </div>
                        <div className="box">
                            <div className="embeddings">
                            {
                                pred.embeddings.map((emb, index) => {
                                    emb = emb.toFixed(5);
                                    let embDisplay = emb.toString();

                                    if (emb > 0) {
                                        embDisplay = " " + embDisplay;
                                    }

                                    return (
                                        <span key={index} className="emb">{embDisplay}</span>
                                    );
                                })
                            }
                            </div>
                        </div>
                        <div className="box">
                            <TopPredictionsBlock pred_info={pred.pred_info} />
                            {/* <div className="top-predictions">
                            {
                                pred.pred_info.map((infoItem, index) => {
                                    let rating = Helpers.getRating(infoItem.distance);
                                    let imgSrc = Helpers.getPredictionIcon(infoItem.distance);

                                    return (
                                    <div key={index + 1} className="row">
                                        <div className="top-name">
                                            <span className="top-name-heading">{(index + 1) + ". " + infoItem.name}</span>
                                            <span className="rating">
                                            {
                                                [...Array(rating).keys()].map((val) => {
                                                    return <img key={val} src={imgSrc} />
                                                })
                                            }
                                            </span>
                                        </div>
                                        <div className="more">
                                            <div className="top-scores">
                                                <ul>
                                                    <li>
                                                        <label>Probability:</label><span className="probability">{Helpers.getProbability(infoItem.probability)}</span>
                                                    </li>
                                                    <li>
                                                        <label>Distance:</label><span className="distance">{infoItem.distance.toFixed(2)}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="training-container">
                                                <label>Training Images:</label>
                                                <div className="training-images">
                                                {
                                                    infoItem.photo_path.map((photo, index) => {
                                                        return <img key={index} src={photo} />
                                                    })
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })
                            }
                            </div> */}
                        </div>
                    </Slider>
                </div>
            </div>

        );
    }
}