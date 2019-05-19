

// >>> Generics <<<

//// A) Implement a generic function, which when called like this: printType<string>("Hello") will print "String" (and similar for other types)
function printType<T>(param: T): string {
    return typeof(param)
}

console.log(`type checking...
    input: 'marc', type of: ${printType<String>('marc')}
    input: 4, type of: ${printType<Number>(4)}
    input: true, type of: ${printType<Boolean>(true)}
    input: [], type of: ${printType<Array<any>>([])}
    input: {}, type of: ${printType<Object>({})}
`)

//// B) Implement a generic function which when called like this: 
function printTypes<T, U, V>(param1: T, param2: U, param3: V): Array<any>{
    return [typeof(param1), typeof(param2), typeof(param3)]
}

console.log(`
    input: true, 2, 'hello TS', output: ${printTypes<Boolean, Number, String>(true, 2, 'hello TS')}
    input: {}, false, 42, output: ${printTypes<Object, Boolean, Number>({}, false, 42)}
    input: {}, [], true, output: ${printTypes<Object, Array<any>, Boolean>({}, [], true)}
`)

//// C) Implement a generic function which will take an array of any kind, and return the array reversed (just use the built-in reverse function), so the three first calls below will print the reversed array, and the last call will fail.
function reverseArr<T>(param: Array<T>) {
    return param.reverse()
}

console.log(`
    input: 'a', 'b', 'c', output: ${reverseArr<String>(['a', 'b', 'c'])}
    input: 1, 2, 3, output: ${reverseArr<Number>([1, 2, 3])}
    input: true, true, false, output: ${reverseArr<Boolean>([true, true, false])}

    err:: Type 'string' is not assignable to type 'Number'.
    input: 'a', 'b', 'c', output: reverseArr<Number>(['a', 'b', 'c'])
`)

//// D) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
class DataHolder<T> {
    _param: T
    
    constructor(param: T){
        this._param = param
    }
    
    getValue(): T {
        return this._param
    }
    
    setValue(param: T) {
        this._param = param
    }
}

let d1 = new DataHolder<String>("Hello");
console.log(d1.getValue());
d1.setValue("World");
console.log(d1.getValue());

let d2 = new DataHolder<Number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());

// verification
let d3 = new DataHolder<Boolean>(true);
console.log(d3.getValue());
d3.setValue(false);
console.log(d3.getValue());

//// E) Using this interface:  
interface Owner {
    owner: String;
}

function printOwner(owner: Owner) {
    return `the owner is ${owner.owner}`
}

console.log(printOwner({ owner: 'noah' }))