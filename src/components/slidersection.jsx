import React, {Component} from 'react';
import Slider from 'react-slick';
import Helpers from "../js/helpers";
import Globals from "../js/globals";
import ModelInfoBlock from '../react/InfoBlocks/modelinfoblock';
import AddFaceBlock from '../react/InfoBlocks/addfaceblock';

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
                <div>
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
                        <div className="box">
                            <img className="original-image" src={Globals.pngSource + pred.original_image} />
                        </div>
                        <div className="box">
                            {/* <div>
                                <div>
                                    <img src={Globals.pngSource + pred.image} />
                                    <div>right</div>
                                </div>
                                <div>
                                    <div>bottom</div>
                                    <div>bottom</div>
                                </div>
                            </div> */}
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
                            Convert: Embeddings
                        </div>
                        <div className="box">
                            Predict: Final result
                        </div>
                    </Slider>
                </div>
            </div>

        );
    }
}