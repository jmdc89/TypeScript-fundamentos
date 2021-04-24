class Hello {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  saludos() {
    return "saludos" + this.message;
  }
}

let hola = new Hello("Typescript");

console.log(hola.saludos());

//Inheritance
class Animal {
  public name: string;
  private size: number;
  //readonly size: number;
  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  public isBig() {
    if (this.size > 10) {
      return true;
    } else {
      return false;
    }
  }
}

class Snake extends Animal {
  constructor(name: string, size: number) {
    super(name, size);
  }
}

let snake = new Snake("Serpiente", 11);

//no podemos acceder porque es privada
snake.size;
//podemos acceder al método porque es público
snake.isBig();
