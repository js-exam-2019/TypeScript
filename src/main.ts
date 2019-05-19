// Classes
import SuperHero from "./classes/SuperHero";
import Person from "./classes/Person";
import Car from "./classes/Car";
import MyMath from "./classes/MyMath";

// Interfaces
import { IPerson } from "./interfaces/interfaces";

const simpleClass = (): void => {
    const math = new MyMath();
    console.log("simpleClass::", math.PI);
}

const simpleConstructor = (): void => {
    const hercules = new SuperHero("Hercules", 2000, "Demigod");
    console.log("simpleConstructor::", hercules)
}

const duckTyping = (): void => {
    const printPerson = (person: IPerson): void => {
        console.log("duckTyping::", `name: ${person.name}, age: ${person.age}`)
    }

    printPerson({ name: "Archimedes", age: 37 })
}

simpleClass();
simpleConstructor();
duckTyping();