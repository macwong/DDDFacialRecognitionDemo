import React, {Component} from 'react';
import Slider from 'react-slick';
import Slide from './slide';
import EmbeddingsBlock from '../react/InfoBlocks/embeddingsblock';

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
                    <Slide>
                        <div className="row header">
                           <h1>Header</h1>
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
                    </Slide>
                    <Slide>
                        Test 2
                    </Slide>
                    <Slide>
                        Test 3
                    </Slide>
                    <Slide>
                        Test 4
                    </Slide>
                </Slider>
            </div>
        </div>

        );
    }
}