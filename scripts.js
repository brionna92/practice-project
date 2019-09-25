function greeter(question = "What is you name?"){
let answer = prompt(question);

if (answer === ""){
 return greeter();  //recursion
}


return answer;
}

//const getter = document.querySelector("h1").textContent;
//document.querySelector("#root").innerHTML = "<p>Hello World</p>";
//document.querySelector("#root").textContent = "<p>Hello World</p>";

document.querySelector("#root").innerHTML = `<p>${greeter()}</p>`;


//const answer = greeter();
document.querySelector("h1").textContent;
