export interface SettingsState{
    id: number | undefined,
    objective: string,
    age: string,
    height: string,
    weight: string,
    exercise: string,
}
export const settingsInitialState:SettingsState = {
    id: undefined,
    objective: "",
    age: "",
    height: "",
    weight: "",
    exercise: "",
}