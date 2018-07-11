import Actions from "../js/actionkeys";
import Globals from "../js/globals";
import _ from "lodash";

export default function(state = {}, action) {
    switch (action.type) {
        case Actions.POLAROID_CLICK: {
            return {
                currentKey: state.currentKey,
                isOpen: action.payload.isOpen,
                currentSection: state.currentSection,
                currentTitle: state.currentTitle,
                showAddModel: state.showAddModel
            };
        }
        case Actions.MENU_CLICK: {
            return {
                currentKey: action.payload.selectedKey,
                isOpen: action.payload.isOpen,
                currentSection: action.payload.selectedSection,
                currentTitle: action.payload.selectedTitle,
                showAddModel: state.showAddModel
            };
        }
        case Actions.MENU_OPEN: {
            return {
                currentKey: state.currentKey,
                isOpen: action.payload.isOpen,
                currentSection: state.currentSection,
                currentTitle: state.currentTitle,
                showAddModel: state.showAddModel
            }
        }
        case Actions.ADD_MODEL: {
            return {
                currentKey: state.currentKey,
                isOpen: state.isOpen,
                currentSection: state.currentSection,
                currentTitle: state.currentTitle,
                showAddModel: action.payload.show
            }
        }
        default: {
            if (_.isEmpty(state)) {
                return {
                    currentKey: "Welcome",
                    isOpen: false,
                    currentSection: Globals.sectionIDs.welcome,
                    currentTitle: "",
                    showAddModel: false
            };
            }
            
            return state;
        }
    }
}