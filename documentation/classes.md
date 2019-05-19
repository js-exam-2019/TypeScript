# TypeScript Features

| indexes | examples |
|---|---|
| [Classes]() | *[reference]()* |
| [Interface Implementation]() | *[reference]()* | 
| []() | *[reference]()* |

## Classes

...

* `readonly`


#### Structure
```ts
class myClass {
    readonly name: type
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