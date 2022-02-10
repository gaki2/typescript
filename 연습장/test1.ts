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

console.log("타입 별칭");

///////////////////////////

let b3: undefined = undefined;

let a1: null = null;
let b2 = "apple";
const c1 = "pinapple";
let d1 = [true, false, false];
let e1 = { type: "ficus" };
let f1 = [1, false];
const g = [3];
let h = null;

function voidFunction(): void {
  console.log("dd");
}

voidFunction();

/////////////////////////
type Person = { name: string; age: number };
let my: Person = { name: "gak", age: 23 };

function changeAge(person: Person, num: number) {
  person.age += num;
  return person;
}

let ret = changeAge(my, 3);
console.log(ret);

//////////////////////////
function* createFiboGenerater() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let generator = createFiboGenerater();
console.log(generator.next()); // {value: 0, done: false};
console.log(generator.next()); // {value: 1, done: false};
console.log(generator.next()); // {value: 1, done: false};
console.log(generator.next()); // {value: 2, done: false};
///////////////////////

// 함수 호출 시그니처
type myFunc = (a: string, b: string) => string;

let signiture: myFunc = (firstString, secondString) => {
  firstString += "a";
  secondString += "c";
  return firstString + secondString;
};

let rett = signiture("aa", "cc");
console.log(rett); // aaaccc
