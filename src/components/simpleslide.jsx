import React, { Component } from 'react';

export default class SimpleSlide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box">
                {
                    this.props.title ?
                        <div className="row header">
                            <h1>{this.props.title}</h1>
                        </div>
                        : null
                }

                <div className="row content">
                    {this.props.children}
                </div>
                <div className="row footer">
                </div>
            </div>
        );
    }
}