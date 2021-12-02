import { ActionProps } from './../../reducers/settings/settings.reducer';

export const UPDATE_OBJECTIVE='UPDATE_OBJECTIVE'
export const UPDATE_MEASURES='UPDATE_MEASURES'
export const UPDATE_EXERCISE='UPDATE_EXERCISE'


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