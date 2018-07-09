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
                customBurgerIcon={ <img src="./images/cog.png" /> }
                right
            >
                <div className="controlsContainer">
                    <div className="models-container">
                        <div className="models">
                        </div>
                        <div>
                            <button className="primary add-model">Add</button>
                        </div>
                    </div>
                    <div className="segmented">
                        <label className="checked option-live"><input type="radio" name="segmented" defaultChecked={true} />Live</label>
                        <label className="option-video"><input type="radio" name="segmented" />Video</label>
                        <label className="option-image"><input type="radio" name="segmented" />Image</label>
                    </div>
                    <div className='busyMode'>
                        <div className='field'>
                            <label className='label label-toggle' htmlFor='night-mode2'>
                            <div className='input-toggle'>
                                <input className='input-checkbox' id='night-mode2' type='checkbox' />
                                <span className='input-toggle-handle'></span>
                            </div>
                            </label>
                        </div>
                    </div>
                </div>
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