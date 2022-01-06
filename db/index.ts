import * as SQLite from 'expo-sqlite'

import { ID } from '../types'
import { SettingsModel } from '../types/models'

const db = SQLite.openDatabase('smart-nut.db')

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS settings (
                    id VARCHAR(24) PRIMARY KEY NOT NULL,
                    created_at INTEGER NOT NULL,
                    updated_at INTEGER NOT NULL,
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

export const insertSettings = (id: ID,settings:SettingsModel) => {
    return new Promise((resolve, reject) => {
        const { created_at, updated_at, age, height, weight, objective, exercise} = settings
        db.transaction(tx => {
            tx.executeSql(
            `INSERT INTO settings (id, created_at, updated_at, age, height, weight, objective, exercise)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [id, created_at? created_at : Date.now(), updated_at, String(age), String(height), String(weight), objective, exercise],
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

export const updateSettings = (id: ID, settings:SettingsModel) => {
    return new Promise((resolve, reject) => {
        const { updated_at, age, height, weight, objective, exercise} = settings
        db.transaction(tx => {
            tx.executeSql(
            `UPDATE settings SET updated_at=?, age=?, height=?, weight=?, objective=?, exercise=? WHERE id=?`,
            [updated_at, age, height, weight, objective, exercise, id],
            (_, result) => resolve(result),
            (_, err) => reject(err),
            )
        })
    })
}

export const patchSettings = (id:ID, settings:Partial<SettingsModel>) => {
    return new Promise((resolve, reject) => {
        if(Object.keys(settings).length){
            let query = "UPDATE settings SET " + Object.keys(settings).join("=?, ") + "=? WHERE id=?"
            let values:any = Object.values(settings).concat(id).map(value => String(value))
            db.transaction(tx => {
                tx.executeSql(
                    query,
                    values,
                    (_, result) => resolve(result),
                    (_, err) => reject(err),
                )
            })
        }
    })
}