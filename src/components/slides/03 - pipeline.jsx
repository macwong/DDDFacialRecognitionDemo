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
                    <h1>Pipeline - Demo</h1>
                </div>
                <div className="row content">
                    Demo...
                </div>
                <div className="row footer">
                </div>
            </Slide>
            <Slide>
                <div className="row header">
                    <h1>1. Initial Input</h1>
                </div>
                <div className="row content">
                    <ul>
                        <li>First point</li>
                        <li>Second point</li>
                        <li>Third point</li>
                    </ul>
                </div>
                <div className="row footer">
                </div>
            </Slide>
            <Slide>
                <div className="row header">
                    <h1>2. Face Detection</h1>
                </div>
                <div className="row content">
                    <ul>
                        <li>First point</li>
                        <li>Second point</li>
                        <li>Third point</li>
                    </ul>
                </div>
                <div className="row footer">
                </div>
            </Slide>
            <Slide>
                <div className="row header">
                    <h1>3. FaceNet Conversion</h1>
                </div>
                <div className="row content">
                    <ul>
                        <li>First point</li>
                        <li>Second point</li>
                        <li>Third point</li>
                    </ul>
                </div>
                <div className="row footer">
                </div>
            </Slide>
            <Slide>
                <div className="row header">
                    <h1>4. Prediction</h1>
                </div>
                <div className="row content">
                    <ul>
                        <li>First point</li>
                        <li>Second point</li>
                        <li>Third point</li>
                    </ul>
                </div>
                <div className="row footer">
                </div>
            </Slide>
        </PowerpointSection>

        );
    }
}