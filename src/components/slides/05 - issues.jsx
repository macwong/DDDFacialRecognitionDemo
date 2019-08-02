import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import DemoSlide from './demoslide';

export default class UseCaseSlides extends Component {
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
                        <h1>Performance Considerations</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Hardware (e.g. GPU vs CPU)</li>
                            <li>Amount of known people in dataset (high quantity = slower)</li>
                            <li>Choice of algorithms for face detection, embeddings and predictions</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <DemoSlide />
            </PowerpointSection>

        );
    }
}