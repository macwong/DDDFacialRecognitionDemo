import React, { Component } from 'react';
import { jumpToDemo } from '../../actions/actions_menu';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import $ from 'jquery';

import Slide from '../slide';

class DemoSlide extends Component {
    constructor(props) {
        super(props);

        this.onDemoClick = this.onDemoClick.bind(this);
    }

    onDemoClick(e) {
        if (this.props.title) {
            this.props.jumpToDemo(this.props.title);
        }
        else {
            this.props.jumpToDemo("Features Demo");
        }

        // Let's cheat...
        if (this.props.model) {
            $(document).find(".models select").val(this.props.model);
        }
    }

    render() {
        return (
            <Slide>
                <div className="row header">
                    {/* <h1>Demo</h1> */}
                </div>
                <div className="row content">
                    <div className="centre-image" style={{ width: '100%', height: 'calc(100vh - 200px)' }}>
                        <img
                            src="./images/livedemo.png"
                            style={{ width: '500px', cursor: 'pointer' }}
                            onClick={this.onDemoClick}
                        />
                    </div>
                </div>
                <div className="row footer">
                </div>
            </Slide>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ jumpToDemo }, dispatch);
}

export default connect(null, mapDispatchToProps)(DemoSlide);