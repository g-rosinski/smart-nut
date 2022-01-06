import moment from "moment";
import translate from "./translate";

export const objToQueryParams = (params: {[param:string]:any}):string => Object.keys(params).map(key => key + '=' + params[key]).join('&');

export const todayTitle = (timestamp: number) => {
    const today = (moment(timestamp))
    const dayName = today.format('dddd')
    const dayMonth = today.format('DD')
    return translate(dayName) + ` ${dayMonth}`
  }