import { DailyModel, MealModel, SettingsModel } from './../../../types/models';
import axios, { AxiosResponse } from "axios"

import { FIREBASE_DB_URL } from "../../../env"
import { ID } from "../../../types"

/** SETTINGS */
export const postUserSettings = (data:SettingsModel):Promise<AxiosResponse<any, any>> => {
    return axios.post(`${FIREBASE_DB_URL}/settings.json`,data)
}

export const putUserSettings = (data:{[id:ID]:SettingsModel}):Promise<AxiosResponse<any, any>> => {
    return axios.put(`${FIREBASE_DB_URL}/settings.json`,data)
}

export const patchUserSettings = (id:ID, data:Partial<SettingsModel>):Promise<AxiosResponse<any, any>> => {
    return axios.patch(`${FIREBASE_DB_URL}/settings/${id}.json`,data)
}

export const patchNUsersSettings = (data:{[id:ID]:Partial<SettingsModel>}):Promise<AxiosResponse<any, any>> => {
    return axios.patch(`${FIREBASE_DB_URL}/settings.json`,data)
}

export const deleteUserSettings = (id:ID):Promise<AxiosResponse<any, any>> => {
    return axios.delete(`${FIREBASE_DB_URL}/settings/${id}.json`)
}

export const getUserSettings = (id:ID):Promise<AxiosResponse<any, any>> => {
    return axios.get(`${FIREBASE_DB_URL}/settings/${id}.json`)
}

/** DAILY */

export const postDaily = (data:DailyModel):Promise<AxiosResponse<any, any>> => {
    return axios.post(`${FIREBASE_DB_URL}/daily.json`,data)
}

export const putDaily = (data:{[id:ID]:DailyModel}):Promise<AxiosResponse<any, any>> => {
    return axios.put(`${FIREBASE_DB_URL}/daily.json`,data)
}

export const patchDaily = (id:ID, data:Partial<DailyModel>):Promise<AxiosResponse<any, any>> => {
    return axios.patch(`${FIREBASE_DB_URL}/daily/${id}.json`,data)
}

export const patchNsDaily = (data:{[id:ID]:Partial<DailyModel>}):Promise<AxiosResponse<any, any>> => {
    return axios.patch(`${FIREBASE_DB_URL}/daily.json`,data)
}

export const deleteDaily = (id:ID):Promise<AxiosResponse<any, any>> => {
    return axios.delete(`${FIREBASE_DB_URL}/daily/${id}.json`)
}

export const getDaily = (id:ID):Promise<AxiosResponse<any, any>> => {
    return axios.get(`${FIREBASE_DB_URL}/daily/${id}.json`)
}

export const getDailysByField = (orderBy:string, value:string):Promise<AxiosResponse<any, any>> => {
    return axios.get(`${FIREBASE_DB_URL}/daily.json?orderBy="${orderBy}"&equalTo="${value}"`)
}

/** MEALS */

export const postMeal = (data:MealModel):Promise<AxiosResponse<any, any>> => {
    return axios.post(`${FIREBASE_DB_URL}/meal.json`,data)
}

export const putMeal = (data:{[id:ID]:MealModel}):Promise<AxiosResponse<any, any>> => {
    return axios.put(`${FIREBASE_DB_URL}/meal.json`,data)
}

export const patchMeal = (id:ID, data:Partial<MealModel>):Promise<AxiosResponse<any, any>> => {
    return axios.patch(`${FIREBASE_DB_URL}/meal/${id}.json`,data)
}

export const patchNMeal = (data:{[id:ID]:Partial<MealModel>}):Promise<AxiosResponse<any, any>> => {
    return axios.patch(`${FIREBASE_DB_URL}/meal.json`,data)
}

export const deleteMeal = (id:ID):Promise<AxiosResponse<any, any>> => {
    return axios.delete(`${FIREBASE_DB_URL}/meal/${id}.json`)
}

export const getMeal = (id:ID):Promise<AxiosResponse<any, any>> => {
    return axios.get(`${FIREBASE_DB_URL}/meal/${id}.json`)
}

export const getMealsByDate = ():Promise<AxiosResponse<any, any>> => {
    return axios.get(`${FIREBASE_DB_URL}/meal.json?orderBy=date`)
}