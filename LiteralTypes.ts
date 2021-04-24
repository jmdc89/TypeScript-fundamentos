type Color = "red" | "green" | "blue";

const color: Color = "yellow";

//

type Dado = 1 | 2 | 3 | 4 | 5 | 6;

const dado: Dado = 8;

//

interface ValidExito {
  esValido: true;
  reason: null;
}

interface ValidFail {
  esValido: false;
  reason: string;
}

type ResultadoValidacion = ValidExito | ValidFail;

const result: ResultadoValidacion = {
  esValido: true,
  reason: null,
};
