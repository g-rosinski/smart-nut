export interface DailyState{
    meals: Meal[],
}

export type Meal = {
    id: number | undefined,
    image: string | undefined,
}
export const dailyInitialState:DailyState = {
    meals: []
}