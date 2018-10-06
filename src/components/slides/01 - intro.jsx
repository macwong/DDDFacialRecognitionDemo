import React, {Component} from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';

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
                <Slide>
                    <div className="row header">
                        <h1>Facial Recognition</h1>
                    </div>
                    <div className="row content">
                        <ul>
                            <li>Concepts and features</li>
                            <li>Recognition pipeline</li>
                            <li>Use cases and issues</li>
                            <li>Technologies / resources</li>
                            <li>Live demo</li>
                        </ul>
                    </div>
                    <div className="row footer">
                    </div>
                </Slide>
            </PowerpointSection>
        );
    }
}