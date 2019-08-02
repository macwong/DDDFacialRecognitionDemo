import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';

export default class IntroSlides extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PowerpointSection
                section={this.props.section}
                cssClass={this.props.cssClass}
            >
                <Slide>
                    <div className="row header">
                        <h1>Facial Recognition</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>How does it work?</li>
                            <li>Training</li>
                            <li>Accuracy</li>
                            <li>Performance</li>
                            <li>Technologies</li>
                            <li>End-to-end Scenario</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
            </PowerpointSection>
        );
    }
}