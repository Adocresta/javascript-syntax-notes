// To make an object literal:
const dog = {
  name: "Rusty",
  breed: "unknown",
  isAlive: false,
  age: 7,
};
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

// we can add new vars to our obj both way is fine

dog.isVaccinated = true;
dog["ownerExist"] = true;

// we can have objects inside arrays and vice versa

const comments = [
  {
    username: "Tammy",
    text: "lolololo",
    upvotes: 23,
  },
  {
    username: "Honor",
    text: "lolololo",
    upvotes: 1,
  },
  {
    username: "Wasdazz",
    text: "lolololo",
    upvotes: 0,
  },
];
