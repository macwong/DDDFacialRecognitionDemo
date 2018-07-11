import Actions from "../js/actionkeys";

export function showHideAddModel(show) {
    return {
        type: Actions.ADD_MODEL,
        payload: {
            show: show
        }
    };
}