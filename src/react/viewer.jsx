import React, {Component} from 'react';

export default class Viewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <video className="video" id="video" width="640" height="480" autoPlay></video>
                <canvas className="canvas" id="canvas" width="640" height="480"></canvas>
            </div>
        );
    }
}