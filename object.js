const object = {
    name: "Jon",
    age: 28,
    address: null,
    
};

// object with property age is exists;
console.info(
    `Object with property age is ${"age" in object ? "exists" : "not exists"}.`
    );
// object with property address is exists;   
console.info(
    `Object with property address is ${"address" in object ? "exists" : "not exists"}.`
    );
