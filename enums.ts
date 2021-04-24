//Los valores se incrementan linealmente a no ser que lo alteremos

enum Direccion {
  Arriba, //es igual a 0
  Abajo, // es igual a 1
  Derecha,
  Izquierda,
}

enum Direccion2 {
  Arriba = 1,
  Abajo = 5,
  Derecha = 10,
  Izquierda,
}

//Valores textuales
enum Direccion3 {
  Arriba = "UP",
  Abajo = "DOWN",
  Derecha = "RIGHT",
  Izquierda = "LEFT",
}

interface Bola {
  size: number;
  posicionInicial: Direccion3;
}

const bola: Bola = {
  size: 10,
  posicionInicial: Direccion3.Abajo,
};
