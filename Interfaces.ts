function printLabel(obj: { label: string }) {
  console.log(obj.label);
}

const testObj = { size: 20, label: "prueba" };

//No da error porque al menos uno cumple la condición
printLabel(testObj);

//Otra forma de hacerlo seria declarando una interface
interface ObjectInterface {
  label: string;
}

function printLabel2(obj: ObjectInterface) {
  console.log(obj.label);
}

interface ObjectInterface2 {
  label: string;
  //propiedad no requerida
  name?: string;
  //no podemos modificar esta propiedad
  readonly secret: number;
}
