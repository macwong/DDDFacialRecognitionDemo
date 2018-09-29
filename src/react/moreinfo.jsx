import React, {Component} from 'react';
import SliderSection from '../components/slidersection';
import $ from 'jquery';

export default class MoreInfo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            prediction: props.prediction
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.prediction !== prevProps.prediction) {
            this.setState({
                prediction: this.props.prediction
            });
        }
    }

    render() {
        const pred = this.state.prediction;

        if (pred == null || pred === undefined) {
            return <div></div>;
        }

        const model_info = pred.model_info;

        return (
            <div>
                <header>
                    <div className="title">Prediction</div>
                    <img className="close-button" onClick={this.closePopup.bind(this)} />
                </header>
                <SliderSection 
                    section="" 
                    cssClass=""
                    prediction={pred}
                />
            </div>
        );
    }

    closePopup(e) {
        let $popup = $(e.currentTarget).closest(".info-overlay");
        $popup.hide();
    }
}