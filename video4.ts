type SomethingComplex = {
  foo: number;
  bar: string;
};

function takeSomethingComplex(arg: SomethingComplex) {
  console.log(arg.foo, arg.bar);
}

//Example error production

const fail = {
  foo: 123,
  bar: getBar,
};

takeSomethingComplex(fail);
