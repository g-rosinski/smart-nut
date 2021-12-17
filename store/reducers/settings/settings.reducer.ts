import { UPDATE_EXERCISE, UPDATE_MEASURES, UPDATE_OBJECTIVE } from "../../actions/settings/settins.actions"

import { SET_SETTINGS } from './../../actions/settings/settins.actions';
import { SettingsState } from "./settings.state"

export interface ActionProps{
    type: string,
    payload?: any,
}

const SettingsReducer = (initialState: SettingsState) => (state = initialState, action: ActionProps) => {
    switch(action.type){
        case UPDATE_OBJECTIVE: 
        case UPDATE_EXERCISE: 
        return {
            ...state,
            ...action.payload
        }
        case UPDATE_MEASURES: 
            return {
                ...state,
                ...action.payload.measures
            }
        case SET_SETTINGS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default SettingsReducer