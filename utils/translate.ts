import { StringKeyValuePair } from '../models/types';
import translationsJson from './translation.json'

export default (key:string|undefined):string => {
    if(!key) return "-"
    const translations: StringKeyValuePair = translationsJson
    return translations[key];
}