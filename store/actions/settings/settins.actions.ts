import * as firebase from '../../../services/api/firebase'

import { fetchSettings, insertSettings, patchSettings } from './../../../db';

import { ActionProps } from './../../reducers/settings/settings.reducer';
import { ID } from './../../../types/index';
import { SettingsModel } from './../../../types/models';

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
        const settingsResult = await fetchSettings()
        if(settingsResult?.rows?.length){
            const localSettings:SettingsModel = settingsResult?.rows?._array[0]
            dispatch(setSettings(localSettings))
            if(localSettings.id){
                const response = await firebase.getUserSettings(localSettings.id)
                const firebaseSettings:SettingsModel = response.data
                if(localSettings.updated_at > firebaseSettings.updated_at){
                    const {id, ...settings} = localSettings
                    firebase.patchUserSettings(id, settings)
                }
            }
        }
    }
}

export const newSetting = (settings: Partial<SettingsModel>) => {
    return async dispatch => {
        const data = {
            created_at: Date.now(),
            updated_at: Date.now(),
            age: settings.age? Number(settings.age) : 0,
            height: settings.height? Number(settings.height) : 0, 
            weight: settings.weight? Number(settings.weight) : 0, 
            objective: settings.objective? settings.objective : "", 
            exercise: settings.exercise? settings.exercise : ""
        }
        const response = await firebase.postUserSettings(data)
        const id: ID = response.data.name
        const settingsInserted = await insertSettings(id, data)
        dispatch(setSettings({id: id, ...data}))
    }
}

export const refreshSetting = (id:ID, settings:Partial<SettingsModel>) => {
    return async dispatch => {
        try{
            const newSettings = {
                updated_at: Date.now(),
                ...settings
            }
            const response = await firebase.patchUserSettings(id, newSettings)
            const settingsUpdated = await patchSettings(id, newSettings)
        } catch(err:any){
            console.log(err?.message);
            throw err;

        }
    }
}