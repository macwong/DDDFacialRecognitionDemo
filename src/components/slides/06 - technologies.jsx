import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import SimpleSlide from '../simpleslide';

export default class TechnologiesSlides extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PowerpointSection
                section={this.props.section}
                cssClass={this.props.cssClass}
            >
                <SimpleSlide title="Technologies">
                    <div style={{ width: '100%' }}>
                        <div className="centre-image" style={{ height: '400px' }}>
                            <img src="./images/technologies.webp" style={{ width: '700px' }} />
                        </div>
                    </div>
                </SimpleSlide>
                <Slide>
                    <div className="row header">
                        <h1>Technologies Used - Server Side</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Language: Python</li>
                            <li>Maths computation graphs on GPU: Tensorflow</li>
                            <li>Web service: Python Flask</li>
                            <li>Python environment: Anaconda</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <Slide>
                    <div className="row header">
                        <h1>Technologies Used - Client Side</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Electron!</li>
                            <li>JQuery!</li>
                            <li>React!</li>
                            <li>Redux!</li>
                            <li>HTML5!</li>
                            <li>CSS3!</li>
                            <li>Babel!</li>
                            <li>(insert buzzword here...)</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
            </PowerpointSection>
        );
    }
}