export interface SettingsState{
    objective: string,
    age: string,
    height: string,
    weight: string,
    exercise: string,
}
export const settingsInitialState:SettingsState = {
    objective: "",
    age: "",
    height: "",
    weight: "",
    exercise: "",
}