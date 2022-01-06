import { ID } from ".";

export interface SettingsModel{
    id?: ID,
    created_at?: number,
    updated_at: number,
    age: number,
    height: number, 
    weight: number, 
    objective: string, 
    exercise: string
}
export interface MealModel{
    created_at?: number,
    updated_at: number,
    image_url: string,
    kcal: number
    name: string,
}
export interface DailyModel{
    created_at?: number,
    updated_at: number,
    settings_id?: ID,
    date: number,
    daily_kcal: number,
    total_meal_kcal: number,
    meals?: MealModel[]
}