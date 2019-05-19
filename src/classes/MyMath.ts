import { IMath } from "../interfaces/interfaces";

export default class MyMath implements IMath {
    PI: number = Math.PI;
    
    double(value: number): number {
        return 2 * value;
    }

    squared(value: number): number {
        return value ** 2;
    }

    floor(value: number): number {
        return Math.floor(value)
    }

    ceil(value: number): number {
        return Math.ceil(value)
    }
}