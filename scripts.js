function greeter(question = "What is you name?"){
let answer = prompt(question);

if (answer === ""){
 return greeter();  //recursion
}


return answer;
}

const getter = document.querySelector("h1").textContent;

//const answer = greeter();

//document.querySelector("h1").textContent = greeter();
