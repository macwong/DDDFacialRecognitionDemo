import React, {Component} from 'react';
import Slider from 'react-slick';

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

        return (
            <div id={this.props.section} className={"slider-section " + this.props.cssClass}>
            <div>
                <Slider {...settings}>
                    <div className="box">
                        Summary
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