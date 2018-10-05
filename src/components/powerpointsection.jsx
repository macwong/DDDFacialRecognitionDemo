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
            slidesToScroll: 1,
            infinite: false
        };

        return (
            <div id={this.props.section} className={"powerpoint-section " + this.props.cssClass}>
            <div>
                <Slider {...settings}>
                    {this.props.children}
                </Slider>
            </div>
        </div>

        );
    }
}