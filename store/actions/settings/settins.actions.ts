import { fetchSettings, insertSettings, updateSettings } from './../../../db';

import { ActionProps } from './../../reducers/settings/settings.reducer';
import { FIREBASE_DB_URL } from '../../../env';
import { ID } from './../../../types/index';
import { SettingsState } from '../../reducers/settings/settings.state';
import axios from 'axios';

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
        const defaultSettings = {
            age: settings.age? Number(settings.age) : 0,
            height: settings.height? Number(settings.height) : 0, 
            weight: settings.weight? Number(settings.weight) : 0, 
            objective: settings.objective? settings.objective : "", 
            exercise: settings.exercise? settings.exercise : ""
        }
        const response = await axios.post(`${FIREBASE_DB_URL}/settings.json`,{date: Date.now(), ...defaultSettings})
        const settingsInserted = await insertSettings({id: response.data.name, ...defaultSettings})
        
        if(settingsInserted?.rows?.length){
            dispatch(setSettings({id: response.data.name, ...defaultSettings}))
        }
    }
}

export const refreshSetting = (id:ID, settings: any) => {
    return async dispatch => {
        const newSettings = {
            age: settings.age? Number(settings.age) : 0,
            height: settings.height? Number(settings.height) : 0, 
            weight: settings.weight? Number(settings.weight) : 0, 
            objective: settings.objective? settings.objective : "", 
            exercise: settings.exercise? settings.exercise : ""
        }
        let data:{[id:string]:any}  = {}
        data[id] =  {date: Date.now(), ...newSettings}
        await axios.put(`${FIREBASE_DB_URL}/settings.json`, data)
        await updateSettings({id, ...newSettings})

    }
}