import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import Globals from '../js/globals';
import { onMenuClick, updateMenuIsOpen } from '../actions/actions_menu';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default class SettingsMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Menu 
                isOpen={false}
                pageWrapId={ "page-wrap" } 
                outerContainerId={ "outer-container" }
                width={350}
                burgerButtonClassName={ "settings-menu" }
                right
            >
                <div>Test</div>
            </Menu>
        );
    }
}

// function mapStateToProps(state) {
//     return state.menu;
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ onMenuClick, updateMenuIsOpen }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);