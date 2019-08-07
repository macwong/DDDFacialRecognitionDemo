import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import DemoSlide from './demoslide';
import SimpleSlide from '../simpleslide';

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
                <SimpleSlide title="Accuracy Scale">
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
                </SimpleSlide>
                <SimpleSlide title="Measuring Accuracy">
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ marginBottom: '10px' }}>
                            <img src="./images/diagrams/accuracy.png" style={{ width: '700px' }} />
                        </div>
                    </div>
                </SimpleSlide>
                <SimpleSlide title="What can affect accuracy?">
                    <ul>
                        <li>Input resolution / quality</li>
                        <li>Facial expressions, age, makeup, lighting, doppelgangers</li>
                        <li>Obscuring of face</li>
                        <li>Large quantity of people to compare against</li>
                        <li>Wrong choice of algorithm for prediction</li>
                        <li>Unknown person</li>
                    </ul>
                </SimpleSlide>
                <DemoSlide />
            </PowerpointSection>
        );
    }
}