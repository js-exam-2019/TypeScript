import { ICar } from "../interfaces/interfaces";

export default class Car implements ICar {
    model: string;    
    brand: string;
    insurance: boolean;
    type: string;
    color: string;
    topSpeed: number;

    constructor(model: string, brand: string, insurance: boolean, type: string, color: string, topSpeed: number) {
        this.model = model;
        this.brand = brand;
        this.insurance = insurance;
        this.type = type;
        this.color = color;
        this.topSpeed = topSpeed;
    }
}