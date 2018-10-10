import React, {Component} from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';

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
                    <h1>How does it work?</h1>
                </div>
                <div className="row content">
                    <div style={{width: '100%'}}>
                        <ul>
                            <li>What is going on between the input and the output?</li>
                        </ul>
                        <div className="centre-image" style={{height: '400px'}}>
                        <img src="./images/question.png" />
                        </div>
                    </div>
                </div>
                <div className="row footer">
                </div>
            </Slide>
            <Slide>
                <div className="row header">
                    <h1>Pipeline Overview</h1>
                </div>
                <div className="row content">
                    <div className="centre-image" style={{height: '400px', width: '100%'}}>
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
                    <div style={{width: '100%'}}>
                        <div className="centre-image" style={{marginBottom: '10px'}}>
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
                    <div style={{width: '100%'}}>
                        <div className="centre-image" style={{marginBottom: '10px'}}>
                        <img src="./images/2 - face detection.png" />
                        </div>
                        <div style={{display: 'flex'}}>
                            <img src="./images/mtcnn.png" style={{width: '400px', height: '320px'}} />
                            <ul>
                                <li>MTCNN Neural Network</li>
                                <li>Outputs a 160px x 160px face</li>
                                <li>Finds key face landmarks</li>
                                <li>Attempts to locate landmarks consistently</li>
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
                    <div style={{width: '100%'}}>
                        <div className="centre-image" style={{marginBottom: '10px'}}>
                            <img src="./images/3 - conversion.png" />
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
                    <h1>4. Prediction</h1>
                </div>
                <div className="row content">
                    <div style={{width: '100%'}}>
                        <div className="centre-image" style={{marginBottom: '10px'}}>
                            <img src="./images/4 - prediction.png" />
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
                    <h1>5. Output</h1>
                </div>
                <div className="row content">
                    <div style={{width: '100%'}}>
                        <div className="centre-image" style={{marginBottom: '10px'}}>
                            <img src="./images/5 - output.png" />
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
        </PowerpointSection>

        );
    }
}