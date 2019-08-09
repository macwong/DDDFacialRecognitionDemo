import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import DemoSlide from './demoslide';
import SimpleSlide from '../simpleslide';

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
                <SimpleSlide title="What is going on between the input and the output?">
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ height: '400px' }}>
                            <img src="./images/diagrams/How does it work.png" />
                        </div>
                    </div>
                </SimpleSlide>
                <SimpleSlide title="Pipeline Overview">
                    <div className="centre-image" style={{ height: '400px', width: '100%' }}>
                        <img src="./images/pipeline.png" />
                    </div>
                </SimpleSlide>
                <SimpleSlide>
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ marginBottom: '10px' }}>
                            <img src="./images/1 - input.png" />
                        </div>
                        <ul>
                            <li>Images, video or live camera</li>
                            <li>Can be variable in resolution and quality</li>
                        </ul>
                    </div>
                </SimpleSlide>
                <SimpleSlide>
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ marginBottom: '10px' }}>
                            <img src="./images/2 - face detection.png" />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <img src="./images/mtcnn.png" style={{ width: '400px', height: '320px' }} />
                            <ul>
                                <li>Cropping the face from the input</li>
                                <li>Find key face landmarks</li>
                                <li>Consistent face positioning</li>
                                <li>Examples: Viola-Jones, HOG, DLIB, MTCNN</li>
                                <li>Demo uses MTCNN (3 neural networks)</li>
                            </ul>
                        </div>
                    </div>
                </SimpleSlide>
                <SimpleSlide>
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ marginBottom: '10px' }}>
                            <img src="./images/3 - conversion.png" />
                        </div>
                        <ul>
                            <li>FaceNet neural network</li>
                            <li>Converts image of face to numeric "embeddings"</li>
                            <li>Size can be 128, 256 or 512</li>
                            <li>Learns how to convert image of face to embeddings via training</li>
                            <li>Pre-trained on VGGFace2 dataset, from 3.3+ million images of faces</li>
                        </ul>
                    </div>
                </SimpleSlide>
                <SimpleSlide>
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ marginBottom: '10px' }}>
                            <img src="./images/4 - prediction.png" />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <img src="./images/neighbours.png" style={{ width: '400px', height: '300px' }} />
                            <ul>
                                <li>Use FaceNet embeddings for prediction</li>
                                <li>Compare with "known" FaceNet faces</li>
                                <li>Logistic regression? SVM? Neural Networks?</li>
                                <li>Nearest neighbour algorithm is simple, and works consistently</li>
                                <li>One-shot learning</li>
                            </ul>
                        </div>
                    </div>
                </SimpleSlide>
                <SimpleSlide>
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ marginBottom: '10px' }}>
                            <img src="./images/5 - output.png" />
                        </div>
                        <ul>
                            <li>Putting a name to a face...</li>
                        </ul>
                    </div>
                </SimpleSlide>
                <DemoSlide title="Pipeline Demo" model="Pipeline" />
            </PowerpointSection>

        );
    }
}