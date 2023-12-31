let user: string = "Awakened Mutant";
let num: number = 2;

interface ObjSetter {
  id: number;
  name: string;
  regexValue: RegExp;
}

const obj: ObjSetter = {
  id: 1,
  name: "Awakened Mutant",
  regexValue: /foo/,
};

type Valid = "true" | "false";

const validChecker: Record<Valid, string> = {
  true: "true",
  false: "false",
};

const ids: Record<number, string> = {
  10: "ten",
  20: "twenty",
  30: "thirty",
};

ids[40] = "fourty";

console.log(ids);

