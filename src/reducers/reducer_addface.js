import Actions from "../js/actionkeys";

export default function(state = {}, action) {
    switch (action.type) {
        case Actions.UPDATE_FACE_VAL: {
            return {
                addFace: action.payload.addFace,
                buttonClass: state.buttonClass,
                infoMessage: state.infoMessage
            };
        }
        case Actions.UPDATE_INFO_MESSAGE: {
            return {
                addFace: state.addFace,
                buttonClass: state.buttonClass,
                infoMessage: action.payload.infoMessage
            };
        }
        case Actions.UPDATE_CSS_CLASS: {
            return {
                addFace: state.addFace,
                buttonClass: action.payload.buttonClass,
                infoMessage: state.infoMessage
            };
        }
        case Actions.RESET_ADD_FACE:
        default: {
            return {
                addFace: "",
                buttonClass: "add-new-face",
                infoMessage: "Clicking \"Add\" will add this person to the training data."
            };
        }

    }
}