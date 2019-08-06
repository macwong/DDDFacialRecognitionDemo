import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import SimpleSlide from '../simpleslide';

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
                <SimpleSlide>
                    <div style={{ width: '100%' }}>
                        <div className="centre-image">
                            <img src="./images/sponsors.png" style={{ width: "900px" }} />
                        </div>
                    </div>
                </SimpleSlide>
                <SimpleSlide title="What is Facial Recognition?">
                    <div style={{ width: '100%' }}>
                        <ul>
                            <li>Identifying a person from an image (or video frame)</li>
                        </ul>
                        <div className="centre-image" style={{ height: '400px' }}>
                            <img src="./images/diagrams/What is facial recognition.png" />
                        </div>
                    </div>
                </SimpleSlide>
                <SimpleSlide title="How does it work?">
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ height: '400px' }}>
                            <img src="./images/diagrams/How does it work.png" />
                        </div>
                    </div>
                </SimpleSlide>
                <SimpleSlide title="Accuracy">
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ height: '400px' }}>
                            <img src="./images/diagrams/Accuracy.png" />
                        </div>
                    </div>
                </SimpleSlide>
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
                <SimpleSlide title="Technologies">
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ height: '400px' }}>
                            <img src="./images/technologies.webp" />
                        </div>
                    </div>
                </SimpleSlide>
            </PowerpointSection>
        );
    }
}