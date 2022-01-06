import { FETCHING_DAYS, FETCH_DAYS } from "../../actions/daily/daily.actions"

import { ActionProps } from "../settings/settings.reducer"
import { ProjectState } from "./project.state"

const ProjectReducer = (initialState: ProjectState) => (state = initialState, action: ActionProps) => {
    switch(action.type){
        case FETCH_DAYS: 
            return {
                ...state,
                dailys: action.payload
            }
        case FETCHING_DAYS: 
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default ProjectReducer