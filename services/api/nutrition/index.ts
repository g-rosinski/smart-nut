import { EDAMAM_API_ID, EDAMAM_API_KEY, EDAMAM_API_URL } from "../../../env"
import axios, { AxiosResponse } from "axios"

import { objToQueryParams } from "../../../utils/parser"

const API_PARAMS = {
    app_id: EDAMAM_API_ID,
    app_key: EDAMAM_API_KEY,
}

export const getAutocompleteMeals = (query:string, opts?:{limit?: number}):Promise<AxiosResponse<any, any>> => {
    const params = {
        ...API_PARAMS,
        q: query,
        ...opts
    }
    const queryParams = objToQueryParams(params)
    return axios.get(`${EDAMAM_API_URL}/auto-complete?${queryParams}`)
}

interface ParserParams{
    ingr: string,
    nutritionType: 'cooking' | 'logging'
}
export const getMeal = (parserParams:ParserParams):Promise<AxiosResponse<any, any>> => {
    const {nutritionType, ...restOfParams} = parserParams
    let params = {
        ...API_PARAMS,
        ...restOfParams
    }
    params["nutrition-type"] = nutritionType
    const queryParams = objToQueryParams(params)
    return axios.get(`${EDAMAM_API_URL}/api/food-database/v2/parser?${queryParams}`)
}
