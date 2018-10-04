import React, {Component} from 'react';
import Globals from '../js/globals';

export default class VideoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devices: []
        }
    }

    componentDidMount() {
        navigator.mediaDevices.enumerateDevices().then((value) => {
            const videoInput = value.filter(d => d.kind === "videoinput");
            let devices = [];

            videoInput.map((value, index) => {
                devices.push({ deviceId: value.deviceId, label: value.label });    
            });

            this.setState({
                devices: devices
            });
        });
    }

    render() {
        return (
            <select className="videoInput">
                {
                    this.state.devices.map((value, index) => {
                        return (
                            <option 
                                key={value.deviceId} 
                                value={value.deviceId}
                                selected={value.deviceId === Globals.defaultDeviceId} 
                            >  
                                {value.label}
                            </option>
                        );
                    })
                }
            </select>
        );
    }
}