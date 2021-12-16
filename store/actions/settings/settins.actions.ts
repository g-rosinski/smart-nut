import { fetchSettings, insertSettings, updateSettings } from './../../../db';

import { ActionProps } from './../../reducers/settings/settings.reducer';
import { SettingsState } from '../../reducers/settings/settings.state';

export const UPDATE_OBJECTIVE='UPDATE_OBJECTIVE'
export const UPDATE_MEASURES='UPDATE_MEASURES'
export const UPDATE_EXERCISE='UPDATE_EXERCISE'
export const SET_SETTINGS='SET_SETTINGS'


export const updateObjective = (objective: string): ActionProps => ({
    type: UPDATE_OBJECTIVE,
    payload: {
        objective: objective
    }
})

export const updateMeasures = (measures: {age: string, height: string, weight: string}): ActionProps => ({
    type: UPDATE_MEASURES,
    payload: {
        measures
    }
})

export const updateExercise = (exercise: string): ActionProps => ({
    type: UPDATE_EXERCISE,
    payload: {
        exercise: exercise
    }
})

export const setSettings = (settings: any): ActionProps => ({
    type: SET_SETTINGS,
    payload: settings
})

export const fetchSetting = () => {
    return async dispatch => {
        const settings = await fetchSettings()
        console.log("fetchSetting", settings?.rows?._array[0])
        const setting:SettingsState = {
            id: undefined,
            age: "0",
            weight: "0",
            height: "0",
            objective: "-",
            exercise: "-"
        }
        if(settings?.rows?.length){
            const {id, age, exercise, weight, height, objective} = settings?.rows?._array[0]
            setting.id = id
            setting.age = String(age)
            setting.exercise = String(exercise)
            setting.weight = String(weight)
            setting.height = String(height)
            setting.objective = String(objective)
        }
        dispatch(setSettings(setting))
    }
}

export const newSetting = (settings: any) => {
    return async dispatch => {
        const settingsInserted = await insertSettings({
            age: settings.age? Number(settings.age) : 0,
            height: settings.height? Number(settings.height) : 0, 
            weight: settings.weight? Number(settings.weight) : 0, 
            objective: settings.objective? settings.objective : "", 
            exercise: settings.exercise? settings.exercise : ""
        })
        dispatch(setSettings(settingsInserted?.rows?.length? settingsInserted?.rows?._array[0] : {}))
    }
}

export const refreshSetting = (id:number, settings: any) => {
    return async dispatch => {
        const settingsUpdated = await updateSettings(id, {
            age: settings.age? Number(settings.age) : 0,
            height: settings.height? Number(settings.height) : 0, 
            weight: settings.weight? Number(settings.weight) : 0, 
            objective: settings.objective? settings.objective : "", 
            exercise: settings.exercise? settings.exercise : ""
        })
        console.log({settingsUpdated:settingsUpdated})
        // dispatch(setSettings(settingsUpdated?.rows?.length? settingsUpdated?.rows?._array[0] : {}))
    }
}