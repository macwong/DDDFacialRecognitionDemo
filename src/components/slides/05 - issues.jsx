import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import DemoSlide from './demoslide';
import SimpleSlide from '../simpleslide';

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
                <SimpleSlide title="Performance considerations">
                    <ul>
                        <li>Amount of known people in dataset</li>
                        <li>Amount of faces in the input image</li>
                        <li>Initial image resolution</li>
                        <li>Choice of algorithms for face detection, embeddings and predictions</li>
                        <li>Hardware (e.g. CPU vs GPU)</li>
                    </ul>
                </SimpleSlide>
                <DemoSlide title="Performance Demo" />
            </PowerpointSection>

        );
    }
}