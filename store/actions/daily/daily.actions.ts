import { ActionProps } from "../../reducers/settings/settings.reducer"

export const ADD_MEAL='ADD_MEAL'


export const addMeal = (image: string): ActionProps => ({
    type: ADD_MEAL,
    payload: {image: image, id:0}
})