let a = "aa" + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
let d = c.apple + 4;

console.log(c, d);

//////////////////////////

type Age = number;
type Person = {
  name: string;
  age: Age;
};

const Minji: Person = {
  name: "minji",
  age: 27,
};

console.log("타입 별칭");
console.log(Minji);

///////////////////////////
