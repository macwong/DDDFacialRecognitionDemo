import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import DemoSlide from './demoslide';

export default class ConclusionSlides extends Component {
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
                        <h1>Resources</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>
                                Wiki article:<br />
                                <a style={{ color: 'blue' }} href="https://wiki.starrez.com/display/RD/Facial+Recognition">https://wiki.starrez.com/display/RD/Facial+Recognition</a>
                            </li>
                            <li>
                                This demo:<br />
                                <a style={{ color: 'blue' }} href="https://github.com/macwong/PimpedFacialRecognitionDemo">https://github.com/macwong/PimpedFacialRecognitionDemo</a>
                            </li>
                            <li>
                                Facial recognition service:<br />
                                <a style={{ color: 'blue' }} href="https://github.com/macwong/FacialRecognitionService">https://github.com/macwong/FacialRecognitionService</a>
                            </li>
                            <li>
                                Youtube playlist:<br />
                                <a style={{ color: 'blue' }} href="https://www.youtube.com/playlist?list=PLG-CffjFV9JRnVdHX4LJD_DrCpptiU1mc">https://www.youtube.com/playlist?list=PLG-CffjFV9JRnVdHX4LJD_DrCpptiU1mc</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                    </div>
                    <div className="row content">
                        <div style={{ width: '100%' }}>
                            <div className="centre-image">
                                <img src="./images/askquestions.png" style={{ width: '800px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
            </PowerpointSection>

        );
    }
}