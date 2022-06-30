'use strict';
import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export default class Mitsuba_RX2 extends Model {
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    adSensorError : boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    motorCurrSensorUError : boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    motorCurrSensorWError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    fetThermError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    battVoltSensorError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    battCurrSensorError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    battCurrSensorAdjError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    motorCurrSensorAdjError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    accelPosError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    contVoltSensorError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    powerSystemError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    overCurrError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    overVoltError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    overCurrLimit: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    motorSystemError: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    motorLock: boolean


    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    hallSensorShort: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: null
    })
    hallSensorOpen: boolean

    @Column({
        type: DataType.INTEGER,
        defaultValue: null
    })
    overHeatLevel: number
}
