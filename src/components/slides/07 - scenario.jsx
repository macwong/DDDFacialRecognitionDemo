import React, { Component } from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';
import DemoSlide from './demoslide';

export default class ScenarioSlides extends Component {
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
                        <h1>Government Surveillance</h1>
                    </div>
                    <div className="row content">
                        Content
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
                <DemoSlide />
            </PowerpointSection>

        );
    }
}