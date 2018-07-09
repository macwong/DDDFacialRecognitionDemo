import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import Globals from '../js/globals';
import { onMenuClick, updateMenuIsOpen } from '../actions/actions_menu';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Settings from '../react/ViewerControls/settings';

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
                burgerButtonClassName={ "settings-burger" }
                customBurgerIcon={ <img src="./images/cog.png" /> }
                menuClassName={ "settings-menu" }
                crossButtonClassName={ "settings-cross" }
                right
            >
                <header>
                    <div className="title">Settings</div>
                </header>
                <Settings />
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