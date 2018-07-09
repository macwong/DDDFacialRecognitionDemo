import Actions from "../js/actionkeys";

export function addFaceVal(val) {
    return {
        type: Actions.UPDATE_FACE_VAL,
        payload: {
            addFace: val
        }
    };
}

export function updateInfoMessage(val) {
    return {
        type: Actions.UPDATE_INFO_MESSAGE,
        payload: {
            infoMessage: val
        }
    };
}

export function updateCSSClass(val) {
    return {
        type: Actions.UPDATE_CSS_CLASS,
        payload: {
            buttonClass: val
        }
    };
}

export function resetFace() {
    return {
        type: Actions.RESET_ADD_FACE
    };
}
