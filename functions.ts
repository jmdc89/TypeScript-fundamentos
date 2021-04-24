//funcion con nombre
function funcion1(x, y) {
  return x + y;
}

//funcion anonima
let funcion2 = function (x, y) {
  return x + y;
};

//arrow functions
const funcion3 = (x, y) => {
  return x + y;
};

//funcion con nombre
function funcion1v2(x: number, y: number): number {
  return x + y;
}

//funcion anonima
let funcion2v2 = function (x: number, y: number): number {
  return x + y;
};

//arrow functions
const funcion3v2 = (x: number, y: number): number => {
  return x + y;
};

//Funcion opcional
const funcionOpcionalv1 = (x: number, y: number = 0) => {
  console.log(x, y);
};

const funcionOpcionalv2 = (x: number, y?: number) => {
  console.log(x, y);
};
