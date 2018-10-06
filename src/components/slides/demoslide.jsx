import React, {Component} from 'react';
import Slide from '../slide';

export default class DemoSlide extends Component {
    render() {
        return (
            <Slide>
                <div className="row header">
                    {/* <h1>Demo</h1> */}
                </div>
                <div className="row content">
                    <div className="centre-image" style={{width: '100%', height: 'calc(100vh - 200px)'}}>
                        <img src="./images/livedemo.png" style={{width: '500px'}} />
                    </div>
                </div>
                <div className="row footer">
                </div>
            </Slide>
        );
    }
}