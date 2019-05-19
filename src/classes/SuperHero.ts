import { IPerson } from "../interfaces/interfaces";

export default class SuperHero implements IPerson {
    readonly name: string;   // implemented
    readonly age: number;    // implemented

    superPower: string;

    constructor(name: string, age: number, superPower: string) {
        this.name = name
        this.age = age
        this.superPower = superPower
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }

    getSuperPower(): string {
        return this.superPower
    }

    setSuperPower(superPower: string): void {
        this.superPower = superPower
    }
}