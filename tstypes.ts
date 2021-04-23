//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let big: bigint = 100n;

//String
let fullName: string = `Bob`;
let sentence: string = `Hello, my name is ${fullName}`;

//ARRAY
let list1: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];

//Tuple
let x: [string, number];

//Enum
//Sirve para establecer tipos especificos definidos por el programador
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;

//Unknown
// Cuando no estamos seguros pero queremos compilar el código
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;

//Any
//No se realizará el checkeoen esta parte
declare function getValue(key: string): any;
//Ok, return value of 'getValue' is not checked

//Void
//Funciones que no retornan nada
function warnUser(): void {
  console.log("This is my warning message");
}

//Null y undefined
let u: undefined = undefined;
let n: null = null;

//Never
function error(message: string): never {
  throw new Error(message);
}

//Object
declare function create(o: object | null): void;

//Type assertions
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
