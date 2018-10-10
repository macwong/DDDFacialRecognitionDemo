import React, {Component} from 'react';
import PowerpointSection from '../powerpointsection';
import Slide from '../slide';

export default class UseCaseSlides extends Component {
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
                    <h1>Measuring Accuracy</h1>
                </div>
                <div className="row content">
                    <div style={{width: '100%'}}>
                        <div className="centre-image" style={{marginBottom: '10px'}}>
                            <img src="./images/scoring.png" style={{width: '100%'}} />
                        </div>
                        <ul>
                            <li>Nearest neighbour algorithm</li>
                            <li>Compare embeddings of prediction vs known embeddings</li>
                            <li>Example is 2-dimensional, but in reality it's 512-dimensional</li>
                            <li>Don't need many examples of each person (one-shot learning)</li>
                        </ul>
                    </div>
                </div>
                <div className="row footer">
                </div>
            </Slide>
            <Slide>
                <div className="row header">
                    <h1>Performance</h1>
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