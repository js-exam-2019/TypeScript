/* 
function printType<T>(param: T): string {
    return typeof(param)
}

console.log(`type checking...
    input: 'marc', type of: ${printType<String>('marc')}
    input: 4, type of: ${printType<Number>(4)}
    input: true, type of: ${printType<Boolean>(true)}
    input: [], type of: ${printType<Array<any>>([])}
    input: {}, type of: ${printType<Object>({})}
`) */