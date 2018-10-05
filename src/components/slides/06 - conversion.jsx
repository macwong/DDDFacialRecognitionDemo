import React, {Component} from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';

export default class ConversionSlides extends Component {
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
                    <h1>Header</h1>
                </div>
                <div className="row content">
                    <ul>
                        <li>First point</li>
                        <li>Second point</li>
                        <li>Third point</li>
                    </ul>
                </div>
                <div className="row footer">
                    Footer
                </div>
            </Slide>
            <Slide>
                <div className="row header">
                    <h1>Header</h1>
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