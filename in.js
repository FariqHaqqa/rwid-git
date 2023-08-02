const object = {
    name : "Ian",
    age : 27,
    address:undefined,
};

//Object with property age is exists.
console.info(
    `Object with property age is ${"age" in object ? "exsists" : "non exsists"}`
);
//Object with proprety address is exists.
console.info(
    `Object with property address is ${
        "address" in object ? "exsists" : "non exsists"}`
    
)