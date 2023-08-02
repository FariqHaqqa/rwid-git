const person = {
    name: "Jon",
    age: 28,
    address: "Bantul"
};

//without "with"
console.info(person.name);
console.info(person.age );
console.info(person.address);

//using "with"
with (person){
    console.info(name);
    console.info(age);
    console.info(address);
}