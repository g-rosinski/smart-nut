import { ADD_MEAL, CLEAR_DAY, SET_DAY, SET_MEALS, UPLOADING_DAY } from "../../actions/daily/daily.actions"
import { DailyState, dailyInitialState } from "./daily.state"

import { ActionProps } from "../settings/settings.reducer"

const DailyReducer = (initialState: DailyState) => (state = initialState, action: ActionProps) => {
    switch(action.type){
        case SET_DAY:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_DAY:
            return {
                ...dailyInitialState,
            }
        case UPLOADING_DAY:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_MEAL:
            return {
                ...state,
                meals: state.meals.concat(action.payload)
            }
        case SET_MEALS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default DailyReducer