interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

//Diferencia entre interface y type
//La interface puede ser extendida, el type no

interface Animal {
  name: string;
}

//para extender una interface
interface Tiger extends Animal {
  gender: string;
}

const tiger: Tiger = {};

type Animal2 = {
  name: string;
};

//tambien podemos extender interface
//esto no podemos hacerlo en type
interface Animal {
  size: number;
}

//para extender un type
type Tiger2 = Animal2 & {
  gender: string;
};

const tiger2: Tiger2 = {
  name: "hola",
};
