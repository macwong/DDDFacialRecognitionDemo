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
            };
        }
        case Actions.MENU_CLICK: {
            return {
                currentKey: action.payload.selectedKey,
                isOpen: action.payload.isOpen,
                currentSection: action.payload.selectedSection,
                currentTitle: action.payload.selectedTitle,
            };
        }
        case Actions.MENU_OPEN: {
            return {
                currentKey: state.currentKey,
                isOpen: action.payload.isOpen,
                currentSection: state.currentSection,
                currentTitle: state.currentTitle,
            }
        }
        case Actions.JUMP_TO_DEMO: {
            // TODO: More strongly typed version of this...
            return {
                currentKey: "Demo",
                isOpen: false,
                currentSection: Globals.sectionIDs.demo,
                currentTitle: action.payload.title
            }
        }
        default: {
            if (_.isEmpty(state)) {
                return {
                    currentKey: "Welcome",
                    isOpen: false,
                    currentSection: Globals.sectionIDs.welcome,
                    currentTitle: "",
                };
            }
            
            return state;
        }
    }
}