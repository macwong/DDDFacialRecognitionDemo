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
                        <h1>What is Facial Recognition?</h1>
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <ul>
                                <li>Identifying a person from an image (or video frame)</li>
                            </ul>
                            <div className="centre-image" style={{ height: '400px' }}>
                                <img src="./images/diagrams/What is facial recognition.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>How does it work?</h1>
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <div className="centre-image" style={{ height: '400px' }}>
                                <img src="./images/diagrams/How does it work.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>Accuracy</h1>
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <div className="centre-image" style={{ height: '400px' }}>
                                <img src="./images/diagrams/Accuracy.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>Performance</h1>
                    </div>
                    <div className="row content" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div className="dl">
                            <div className="dl__container">
                                <div className="dl__corner--top"></div>
                                <div className="dl__corner--bottom"></div>
                            </div>
                            <div className="dl__square">
                                <div className="dl__loading">Predicting face, please wait...</div>
                            </div>
                        </div>

                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>Technologies</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Technologies</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>End-to-end Scenario</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>End-to-end Scenario</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
            </PowerpointSection >
        );
    }
}