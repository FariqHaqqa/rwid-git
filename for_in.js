const person = {
    name: "Jon",
    age: 28,
    address: "Bantul"
};

for(const property in person){
    const value = person[property];

    console.info(`property: ${property}, value: ${value} `)
}

const members = ["Ian", "Angga", "Indra"];

for (const Index in members){
    const member = members[Index];

    console.info(`Index: ${Index}, member: ${member}`);
    
}
    