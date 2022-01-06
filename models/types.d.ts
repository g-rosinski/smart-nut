export type StringKeyValuePair = {
    [key: string]: string;
}

export type Meal = {
    id?: number,
    imageUrl: string,
    name: string,
    kcal: number,
}