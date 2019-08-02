import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import DemoSlide from './demoslide';

export default class AccuracySlides extends Component {
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
                        <h1>Measuring Accuracy</h1>
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <div className="centre-image" style={{ marginBottom: '10px' }}>
                                <img src="./images/scoring.png" style={{ width: '900px' }} />
                            </div>
                            <ul>
                                <li>Calculate "distance"</li>
                                <li>Anything lower than 0.75 is considered accurate</li>
                                <li>Larger than 1.2 is rotten</li>
                                <li>Could add "unknown" threshold</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>What Causes Bad Predictions?</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Large quantity of people to compare against</li>
                            <li>Bad input (e.g. bad resolution, face obscured)</li>
                            <li>Wrong choice of algorithm for prediction</li>
                            <li>Unknown person</li>
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