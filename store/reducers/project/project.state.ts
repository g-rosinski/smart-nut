import { ID } from "../../../types";
import { MealModel } from './../../../types/models';

export interface ProjectState{
    dailys: {
        id: ID | undefined,
        meals?: MealModel[],
        date: number,
        updated_at: number,
        daily_kcal: number,
        total_meal_kcal: number,
    }[]
    loading: boolean,
}

export const projectInitialState:ProjectState = {
    dailys: [],
    loading: true
}