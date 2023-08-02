const isPermitted = confirm(`May I know your name?`);

if (isPermitted){
const personName = prompt (`What is your name?`);

alert(`Your Name is ${personName}`);
}else{
alert("Sok tau lu");
}