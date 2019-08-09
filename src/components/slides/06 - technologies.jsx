import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import SimpleSlide from '../simpleslide';

export default class TechnologiesSlides extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PowerpointSection
                section={this.props.section}
                cssClass={this.props.cssClass}
            >
                <SimpleSlide title="Technologies">
                    <div style={{ width: '100%' }}>
                        <div className="centre-image">
                            <img src="./images/technologies.webp" style={{ width: '800px' }} />
                        </div>
                    </div>
                </SimpleSlide>
                <SimpleSlide>
                    <div style={{ width: '100%' }}>
                        <div className="centre-image">
                            <img src="./images/diagrams/technologies.png" style={{ width: '750px' }} />
                        </div>
                    </div>
                </SimpleSlide>
            </PowerpointSection>
        );
    }
}