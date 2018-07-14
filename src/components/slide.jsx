import React, {Component} from 'react';

export default class Slide extends Component {
    render() {
        return (
            <div>
                <div className="box">
                    {this.props.children}
                </div>
            </div>
        );
    }
}