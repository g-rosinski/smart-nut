import * as FileSystem from 'expo-file-system';
import * as Firebase from "../../../services/api/firebase"

import { DailyModel, MealModel } from '../../../types/models';

import { ActionProps } from "../../reducers/settings/settings.reducer"
import { ID } from '../../../types';
import { isValidHttpUrl } from '../../../utils/functions';

export const ADD_MEAL='ADD_MEAL'
export const UPDATE_MEAL='UPDATE_MEAL'
export const SET_MEALS='SET_MEALS'
export const REMOVE_MEAL='REMOVE_MEAL'
export const SET_DAY='SET_DAY'
export const CLEAR_DAY='CLEAR_DAY'
export const UPLOADING_DAY='UPLOADING_DAY'
export const FETCH_DAYS='FETCH_DAYS'
export const FETCHING_DAYS='FETCHING_DAYS'

export const createDay = (day: DailyModel) => {
    return async dispatch => {
        try{
            dispatch(uploadingDay(true))
            const response = await Firebase.postDaily({...day, updated_at: Date.now()})
            dispatch(setDay({...day, id: response.data.name}))
        } catch(err: any) {
            console.log(err?.message);
            throw err;
        }finally{
            dispatch(uploadingDay(false))
        }
    }
}

export const fetchDaily = (settings_id: ID, date: number) => {
    return async dispatch => {
        try{     
            dispatch(uploadingDay(true))
            const response = await Firebase.getDailysByField("settings_id", String(settings_id))
            const dailys: any[] = Object.entries(response.data)
            const dayFound:any[] | undefined = (dailys.length)? dailys.find(([id, daily]) => daily.date === date) : undefined
            if(!dayFound){
                dispatch(clearDay())
            }else{
                const [id, daily] = dayFound
                const day: DailyModel & {id: ID} = {
                    ...daily, 
                    id: id, 
                    meals: daily.meals? daily.meals : []
                }
                dispatch(setDay(day))
            }

        } catch(err: any) {
            console.log( err?.message);
            throw err;
        } finally{
            dispatch(uploadingDay(false))
        }
    }
}
export const fetchDailys = (settings_id: ID) => {
    return async dispatch => {
        try{     
            dispatch(fetchingDailys(true))
            const response = await Firebase.getDailysByField("settings_id", String(settings_id))
            const dailys: any[] = Object.entries(response.data)
            if(dailys.length){
                const allDailys = dailys.map(([id, d]) => ({
                    ...d,
                    id: id,
                    meals: d.meals? d.meals : []
                }))
                dispatch(setDailys(allDailys))
            }else{
                dispatch(clearDay())
            }

        } catch(err: any) {
            console.log( err?.message);
            throw err;
        } finally{
            dispatch(fetchingDailys(false))
        }
    }
}

export const saveMeal = (daily_id: ID, meal: MealModel, meals: MealModel[]) => {
    return async dispatch => {
        try{
            if(!isValidHttpUrl(meal.image_url)){
                const fileName = meal.image_url.split('/').pop();
                const path = FileSystem.documentDirectory + fileName;
                FileSystem.moveAsync({
                    from: meal.image_url,
                    to: path,
                })
                meal.image_url = path
            }
            const totalKcals = meal.kcal + meals.reduce((total:number, m: MealModel) => total + m.kcal, 0)
            const response = await Firebase.patchDaily(daily_id,{
                updated_at: Date.now(),
                total_meal_kcal: totalKcals,
                meals: meals.concat(meal) 
            })
            dispatch(addMeal(meal))
        } catch(err: any) {
            console.log(err?.message);
            throw err;
        }
    }
}

export const updateMeals = (daily_id: ID, meals: MealModel[]) => {
    return async dispatch => {
        try{
            dispatch(uploadingDay(true))
            const data = {
                updated_at: Date.now(),
                total_meal_kcal: meals.reduce((total:number, m: MealModel) => total + m.kcal, 0),
                meals: meals
            }
            const response = await Firebase.patchDaily(daily_id, data)
            dispatch(setMeals(data))
        } catch(err: any) {
            console.log(err?.message);
            throw err;
        }finally{
            dispatch(uploadingDay(false))
        }
    }
}

export const addMeal = (meal: MealModel): ActionProps => ({
    type: ADD_MEAL,
    payload: meal
})

export const setMeals = (payload: Pick<DailyModel, 'meals' | 'updated_at' | 'total_meal_kcal'>): ActionProps => ({
    type: SET_MEALS,
    payload: payload
})

export const removeMeal = (mealId: ID): ActionProps => ({
    type: REMOVE_MEAL,
    payload: mealId
})

export const setDay = (day: DailyModel): ActionProps => ({
    type: SET_DAY,
    payload: day
})

export const setDailys = (dailys: any[]): ActionProps => ({
    type: FETCH_DAYS,
    payload: dailys
})

export const fetchingDailys = (fetching: boolean): ActionProps => ({
    type: FETCHING_DAYS,
    payload: fetching
})

export const clearDay = (): ActionProps => ({
    type: CLEAR_DAY
})

export const uploadingDay = (loading: boolean): ActionProps => ({
    type: UPLOADING_DAY,
    payload: loading
})