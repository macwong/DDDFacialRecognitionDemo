import React, {Component} from 'react';
import Slider from 'react-slick';

export default class PowerpointSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div id={this.props.section} className={"powerpoint-section " + this.props.cssClass}>
            <div>
                <Slider {...settings}>
                    <div>
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
                    </div>
                </Slider>
            </div>
        </div>

        );
    }
}