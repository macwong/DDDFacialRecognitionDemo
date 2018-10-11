import React, {Component} from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import DemoSlide from './demoslide';

export default class BasicConceptsSlides extends Component {
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
                        <div style={{width: '100%'}}>
                            <ul>
                                <li>Identifying a person from an image (or video frame)</li>
                            </ul>
                            <div className="centre-image" style={{height: '400px'}}>
                            <img src="./images/facerec.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>Examples</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Facebook tagging</li>
                            <li>Apple Face ID</li>
                            <li>Law enforcement and security</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>Implementation Options?</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Microsoft: Face API</li>
                            <li>Amazon: Rekognition</li>
                            <li>Google: Cloud Vision</li>
                            <li>Roll your own?</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>Ideal Features of Facial Recognition System</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Accurate predictions</li>
                            <li>Input from image, video and cam</li>
                            <li>Robust to variables (e.g. image quality, larger datasets)</li>
                            <li>Real-time predictions</li>
                            <li>"Train" and evolve models</li>
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