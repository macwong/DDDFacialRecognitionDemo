import React, {Component} from 'react';
import Slider from 'react-slick';
import Helpers from "../js/helpers";
import Globals from "../js/globals";
import ModelInfoBlock from '../react/InfoBlocks/modelinfoblock';

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
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const pred = this.props.prediction;
        const model_info = pred.model_info;

        return (
            <div id={this.props.section} className={"slider-section " + this.props.cssClass}>
                <div>
                    <Slider {...settings}>
                        <div className="box">
                            <div>
                                <figure className="profile">
                                    <img className="profile-pic" src={Globals.pngSource + pred.image} />
                                    <figcaption className="caption">
                                        <h2>{pred.pred_name}</h2>
                                    </figcaption>
                                    <img className="icon" src={Helpers.getPredictionIcon(Helpers.getIndividualPredictionInfo(pred.pred_info, pred.pred_name).distance)} />
                                </figure>
                                <div>
                                    <div className="scores">
                                        <div className="Rtable Rtable--2cols Rtable--collapse">
                                            <div className="table-header Rtable-cell Rtable-cell--alignCenter"><h3>Probability</h3></div>
                                            <div className="table-cell probability Rtable-cell Rtable-cell--alignCenter">
                                            {Helpers.getProbability(pred.probability)}
                                            </div>

                                            <div className="table-header Rtable-cell Rtable-cell--alignCenter"><h3>Distance</h3></div>
                                            <div className="table-cell distance Rtable-cell Rtable-cell--alignCenter">
                                        {pred.distance.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                    <ModelInfoBlock model_info={model_info} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            Input: Original snapshot image
                        </div>
                        <div className="box">
                            Find Face: Cropped snapshot
                        </div>
                        <div className="box">
                            Convert: Embeddings
                        </div>
                        <div className="box">
                            Predict: Final result
                        </div>
                        
                        {/* <div>
                            <div className="box">
                                <div className="row header">
                                    <p><b>header</b>
                                    <br />
                                    <br />(sized to content)</p>
                                </div>
                                <div className="row content">
                                    <p>
                                    <b>content</b>
                                    (fills remaining space)
                                    </p>
                                </div>
                                <div className="row footer">
                                    <p><b>footer</b> (fixed height)</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            Test 2
                        </div>
                        <div>
                            Test 3
                        </div>
                        <div>
                            Test 4
                        </div> */}
                    </Slider>
                </div>
            </div>

        );
    }
}