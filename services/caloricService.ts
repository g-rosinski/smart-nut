export const mapLevelValue:{[level:string]:number} = {
    sendetary: 1.40,
    low_exercise: 1.69,
    medium_exercise: 1.70,
    highly_exercise: 1.99,
    vigorous_exercise: 2.00,
}
type baseKcal = {
    weightKcal: number,
    dailyKcal: number,
    minAge: number,
    maxAge: number,
}
export const manBaseKcal:baseKcal[] = [
    {minAge: 0, maxAge:3, weightKcal: 59.512, dailyKcal: 30.4},
    {minAge: 3, maxAge:10, weightKcal: 22.706, dailyKcal: 504.3},
    {minAge: 10, maxAge:18, weightKcal: 17.686, dailyKcal: 658.2},
    {minAge: 18, maxAge:30, weightKcal: 15.057, dailyKcal: 692.2},
    {minAge: 30, maxAge:60, weightKcal: 11.472, dailyKcal: 873.1},
    {minAge: 60, maxAge:150, weightKcal: 11.711, dailyKcal: 587.7},
]

export const womanBaseKcal:baseKcal[] = [
    {minAge: 0, maxAge:3, weightKcal: 58.317, dailyKcal: 31.1},
    {minAge: 3, maxAge:10, weightKcal: 20.315, dailyKcal: 485.9},
    {minAge: 10, maxAge:18, weightKcal: 13.384, dailyKcal: 692.6},
    {minAge: 18, maxAge:30, weightKcal: 14.818, dailyKcal: 486.6},
    {minAge: 30, maxAge:60, weightKcal: 8.126, dailyKcal: 845.6},
    {minAge: 60, maxAge:150, weightKcal: 9.082, dailyKcal: 658.5},
]

export const calculateDailyKcal = (sex: 'f'|'m', age:number, weight:number, activity:string):number => {
    let dailyKcal = 0;
    const kcalValue = getKcalValuesByAge(sex, age)
    const activityValue = getValueByExerciseLevel(activity)
    if(kcalValue){
        dailyKcal = age < 3? ((kcalValue.weightKcal * weight) - dailyKcal) : ((kcalValue.weightKcal * weight) + dailyKcal)
    }
    dailyKcal = activityValue? dailyKcal * activityValue : dailyKcal
    return Math.round(dailyKcal * 100) / 100

}

export const getValueByExerciseLevel = (level:string):number | undefined => {
    return mapLevelValue[level]
}

export const getKcalValuesByAge  = (sex: 'f'|'m', age:number):baseKcal | undefined => {
    const baseKcal:baseKcal[] = sex === 'm'? manBaseKcal : womanBaseKcal
    return baseKcal.find(({minAge, maxAge}) => age >= minAge && age < maxAge)
}

export default calculateDailyKcal