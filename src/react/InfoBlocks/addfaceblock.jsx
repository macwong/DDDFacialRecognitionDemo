import React, {Component} from 'react';
import Block from '../block';
import $ from 'jquery';
import path from 'path';
import Globals from '../../js/globals';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {addFaceVal, updateCSSClass, updateInfoMessage} from '../../actions/actions_addface';

class AddFaceBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Block title="Add Face" containerClass="add-face">
                <div className="editable-dropdown">
                    <input
                        onChange={ this.handleChange.bind(this) }
                        value={this.props.addFace}
                        className="input" list="names" name="name"
                    />
                    <datalist id="names" className="data-list">
                    {
                        this.props.model_info.class_names.map((name) => {
                            return (
                                <option key={name} value={name} />
                            );
                        })
                    }
                    </datalist>
                </div>
                <div className="add-container">
                    <button className={this.props.buttonClass} onClick={this.onAddNewFaceClick.bind(this)}>Add</button>
                    <div className="add-info">{this.props.infoMessage}</div>
                </div>
            </Block>
        );
    }

    handleChange(e) {
        this.props.addFaceVal(e.target.value);
    }

    onAddNewFaceClick(e) {
        let $button = $(e.currentTarget);
        let model_name = this.props.model_info.model_name;

        if (!$button.hasClass("disabled")) {
            $.ajax({
                url: path.join(Globals.endpoint, "addface"),
                type: "POST",
                data: JSON.stringify({
                    image: this.props.image,
                    model: model_name,
                    name: this.props.addFace
                }),
                contentType: "application/json; charset=utf-8",
                dataType:"json"
            }).done(() => {
                this.props.updateInfoMessage("New face added!");
            });

            this.props.updateCSSClass(this.props.buttonClass + " disabled");
        }
    }


}

function mapStateToProps(state) {
    return state.addFace;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addFaceVal, updateCSSClass, updateInfoMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFaceBlock);