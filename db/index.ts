import * as SQLite from 'expo-sqlite'

import { ID } from '../types'

const db = SQLite.openDatabase('smart-nut.db')

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS settings (
                    id VARCHAR(24) PRIMARY KEY NOT NULL,
                    age INTEGER NOT NULL,
                    height INTEGER NOT NULL,
                    weight INTEGER NOT NULL,
                    exercise TEXT NOT NULL,
                    objective TEXT NOT NULL
                  )`, 
                [], 
                () => { resolve() },
                (_, err) => { reject(err) }
            )
        })
    })
}

type settingModel = {
    id: ID,
    age: number,
    height: number,
    weight: number,
    objective: string,
    exercise: string,
}

export const insertSettings = ({id, age, height, weight, objective, exercise}:settingModel) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
            `INSERT INTO settings (id, age, height, weight, objective, exercise)
                VALUES (?, ?, ?, ?, ?, ?)`,
            [id, age, height, weight, objective, exercise],
            (_, result) => resolve(result),
            (_, err) => reject(err),
            )
        })
    })
}
  
export const fetchSettings = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
            `SELECT * FROM settings`,
            [],
            (_, result) => resolve(result),
            (_, err) => reject(err),
            )
        })
    })
}

export const updateSettings = ({id, age, height, weight, objective, exercise}:settingModel) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
            `UPDATE settings SET age=?, height=?, weight=?, objective=?, exercise=? WHERE id=?`,
            [age, height, weight, objective, exercise, id],
            (_, result) => resolve(result),
            (_, err) => reject(err),
            )
        })
    })
}