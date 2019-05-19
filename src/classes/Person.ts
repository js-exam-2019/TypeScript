import { IPerson } from "../interfaces/interfaces";

export default class Person implements IPerson {
    readonly name: string;   // implemented
    readonly age: number;    // implemented

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }
}