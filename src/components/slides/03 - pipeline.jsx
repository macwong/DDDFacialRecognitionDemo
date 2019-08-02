import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import DemoSlide from './demoslide';

export default class PipelineSlides extends Component {
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
                        <h1>What is going on between the input and the output?</h1>
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <div className="centre-image" style={{ height: '400px' }}>
                                <img src="./images/question.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>Training</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Training stuff</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>Pipeline Overview</h1>
                    </div>
                    <div className="row content">
                        <div className="centre-image" style={{ height: '400px', width: '100%' }}>
                            <img src="./images/pipeline.png" />
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>1. Input</h1>
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <div className="centre-image" style={{ marginBottom: '10px' }}>
                                <img src="./images/1 - input.png" />
                            </div>
                            <ul>
                                <li>Images, video or live camera</li>
                                <li>Can be variable in resolution and quality</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>2. Face Detection</h1>
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <div className="centre-image" style={{ marginBottom: '10px' }}>
                                <img src="./images/2 - face detection.png" />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <img src="./images/mtcnn.png" style={{ width: '400px', height: '320px' }} />
                                <ul>
                                    <li>MTCNN neural network</li>
                                    <li>Outputs a 160px x 160px face</li>
                                    <li>Finds key face landmarks</li>
                                    <li>Attempts to align landmarks consistently</li>
                                    <li>Consistency is key</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>3. Conversion</h1>
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <div className="centre-image" style={{ marginBottom: '10px' }}>
                                <img src="./images/3 - conversion.png" />
                            </div>
                            <ul>
                                <li>FaceNet neural network</li>
                                <li>Converts image of face to 512 numbers (called embeddings)</li>
                                <li>Also supports 128 and 256 dimension embeddings</li>
                                <li>Learns how to convert image of face to embeddings via training</li>
                                <li>Pre-trained on VGGFace2 dataset, from 3.3+ million images of faces</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>4. Prediction</h1>
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <div className="centre-image" style={{ marginBottom: '10px' }}>
                                <img src="./images/4 - prediction.png" />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <img src="./images/neighbours.png" style={{ width: '500px', height: '350px' }} />
                                <ul>
                                    <li>Nearest neighbour algorithm</li>
                                    <li>Compare embeddings of prediction vs known embeddings</li>
                                    <li>Example is 2-dimensional, but in reality it's 512-dimensional</li>
                                    <li>Don't need many examples of each person (one-shot learning)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>5. Output</h1>
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <div className="centre-image" style={{ marginBottom: '10px' }}>
                                <img src="./images/5 - output.png" />
                            </div>
                            <ul>
                                <li>Output is a number, that represents an ID of the person</li>
                                <li>Number maps to person's name (label)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <DemoSlide />
            </PowerpointSection>

        );
    }
}