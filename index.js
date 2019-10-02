//import * as components from " ./components"; ----- This is one way to import components

import {Header, Nav ,Main, Footer} from "./components";

const state = {
  home: {
heading: "Home Page"
  },

  about: {
    heading: "About Page"
  }
};






/*
Currently #root div is empty
We want to grb the #root div
We want tko assign the markup that is contained in the components*/


// st represents a piece of states
function render( st = state.home){
document.querySelector("#root").innerHTML = `
${Header(st.heading)}
${Nav()}
${Main()}
${Footer()}
`;
}

render()

const link = document.querySelectorAll('nav a');
console.log(Array.isArray(links));

console.log(links[3]);
for(let i = 0; i<links.length; i+=1){
  aboutLink.addEventListener('click', function (event){
    event.preventDefault();
 console.log(event.target.textContent);

  //console.log(links[i].textContent);
  }



//aboutLink.addEventListener('click', function (event){
//event.preventDefault();
//render(state[event.target. textContent]);


})
