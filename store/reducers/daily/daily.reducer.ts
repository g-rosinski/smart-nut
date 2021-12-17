import { ADD_MEAL } from "../../actions/daily/daily.actions"
import { ActionProps } from "../settings/settings.reducer"
import { DailyState } from "./daily.state"

const DailyReducer = (initialState: DailyState) => (state = initialState, action: ActionProps) => {
    switch(action.type){
        case ADD_MEAL:
            return {
                meals: state.meals.concat(action.payload)
            }
        default:
            return state
    }
}

export default DailyReducer