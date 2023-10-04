interface User {
  name: string;
  age: number;
  email: string;
}

// without partial
interface UserOptions {
  name?: string;
  age?: number;
  email?: string;
}
// Required Utility Type
// changing all optional field into required
type RequiredUser = Required<UserOptions>;

//with partial - making everything optional
type UserOption = Partial<User>;
const mergeUser = (user: User, userOptions: UserOption): User => {
  return { ...user, ...userOptions };
};

console.log(
  mergeUser(
    {
      name: "awakened_mutant",
      age: 20,
      email: "awakenedMutant@gmail.com",
    },
    { email: "notyou@gmail.com" }
  )
);

