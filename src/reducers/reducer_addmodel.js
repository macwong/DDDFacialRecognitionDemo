

import Actions from "../js/actionkeys";
import Globals from "../js/globals";
import _ from "lodash";

export default function(state = {}, action) {
    switch (action.type) {

        case Actions.ADD_MODEL: {
            return {
                showAddModel: action.payload.show
            }
        }
        default: {
            if (_.isEmpty(state)) {
                return {
                    showAddModel: false
                };
            }

            return state;
        }
    }
}