import React, {Component} from 'react';
import Globals from '../js/globals';
import Helpers from '../js/helpers';

export default class SummaryProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="summary-profile">
            <figure className="profile">
                <img className="profile-pic" src={Globals.pngSource + this.props.pred.image} />
                <figcaption className="caption">
                    <h2>{this.props.pred.pred_name}</h2>
                </figcaption>
                <img className="icon" src={Helpers.getPredictionIcon(Helpers.getIndividualPredictionInfo(this.props.pred.pred_info, this.props.pred.pred_name).distance)} />
            </figure>
            <div className="scores">
                <div className="Rtable Rtable--1col Rtable--collapse">
                    <div className="table-header Rtable-cell Rtable-cell--alignCenter"><h3>Probability</h3></div>
                    <div className="table-cell probability Rtable-cell Rtable-cell--alignCenter">
                        {Helpers.getProbability(this.props.pred.probability)}
                    </div>
                </div>
                <div className="Rtable Rtable--1col Rtable--collapse">
                    <div className="table-header Rtable-cell Rtable-cell--alignCenter"><h3>Distance</h3></div>
                    <div className="table-cell distance Rtable-cell Rtable-cell--alignCenter">
                        {this.props.pred.distance.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}