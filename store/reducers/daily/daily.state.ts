import { ID } from "../../../types";
import { Meal } from "../../../models/types";

export interface DailyState{
    id: ID | undefined,
    meals: Meal[],
    date: number,
    updated_at: number,
    daily_kcal: number,
    total_meal_kcal: number,
    loading: boolean,
}

export const dailyInitialState:DailyState = {
    id: undefined,
    meals: [],
    date: 0,
    updated_at: 0,
    daily_kcal: 0,
    total_meal_kcal: 0,
    loading: true
}