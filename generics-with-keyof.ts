const dogs = [
  {
    name: "Labrador",
    age: 20,
  },
  {
    name: "Husky",
    age: 10,
  },
];
// generics with keyof
function pluck<dogType, keyType extends keyof dogType>(
  dogs: dogType[],
  key: keyType
) {
  return dogs.map((item) => item[key]);
}

console.log(pluck(dogs, "age"));

interface Breed {
  name: string;
  age: number;
}
interface advanceBreed {
  american: Breed & { height: number; weight: number };
  african: Breed;
}

function checkBreed<Check extends keyof advanceBreed>(
  name: Check,
  data: advanceBreed[Check]
): void {
  console.log([name, { ...data }]);
}

checkBreed("american", { name: "handy", age: 10, height: 10, weight: 10 });
checkBreed("african", { name: "fandy", age: 12 });

