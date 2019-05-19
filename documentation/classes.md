# TypeScript Features

| indexes | examples |
|---|---|
| [Type Checking]() | *[reference]()* |
| [Classes]() | *[reference]()* |
| [Interfaces]() | *[reference]()* | 
| [Generics]() | *[reference]()* |
| [Modules]() | *[reference]()* |
| [Compile]() | *[reference]()* |

## Type Checking

*[reference]()*

...

* `string`
* `number`
* `boolean`
* `void`
* `null`
* `undefined`
* `any`

**result:** `element` `seperator` `element` `seperator` `element`

#### Structure
```ts
let name: type = object
const name: type = object

const foo1 = (param: type): return_value => {}
function foo1(param: type): return_value {}
```

#### Sketch
```ts
let mathematicians: string = "Archimedes";
const pi: number = 3.14159265359;

const doubled = (value: number): number => 2 * value;
function squared(value: number): number {
    return number ** 2;
}

console.log("mathematicians::", mathematicians);
console.log("pi::", pi);
console.log("doubled(4)::", doubled(4));
console.log("squared(5)::", squared(5));
```

#### Result
```
mathematicians:: Archimedes
pi:: 3.14159265359
doubled(4):: 8
squared(5):: 25
```
---

## Classes

*[reference]()*

...

* `readonly`

**result:** `element` `seperator` `element` `seperator` `element`

#### Structure
```ts
class myClass {
    name: type
    ...
    constructor(name: type, ...) {
        this.name = name;
        ...
    }

    getName(): type {
        return this.name;
    }
}
```

#### Sketch
```ts

console.log("squared(5)::", squared(5));
```

#### Result
```
squared(5):: 25
```
---