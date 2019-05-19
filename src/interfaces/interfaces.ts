export interface IPerson {
    name: string
    age: number
}

export interface IVechicle {
    type: string
    color: string
    topSpeed: number
}

export interface ICar extends IVechicle{
    model: string
    brand: string
    insurance: boolean
}

export interface IMath {
    PI: number
    double(value: number): number
    squared(value: number): number
    floor(value: number): number
    ceil(value: number): number
}