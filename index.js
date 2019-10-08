//import * as components from " ./components"; ----- This is one way to import components

import {Header, Nav ,Main, Footer} from "./components";

const state = {
  home: {
heading: "Home Page"
links: ["Home", "About", "Contact", "Gallery", "Blog"]

},

  about: {
    heading: "About Page"
    links: ["Home", "About", "Contact", "Gallery", "Blog"]
  },

  contact: {
    heading: "Contact"
    links: ["Home", "About", "Contact", "Gallery", "Blog"]

  },

  gallery: {
    heading: "Gallery"
    links: ["Home", "About", "Contact", "Gallery", "Blog"]
  },

  blog: {
    heading: "Blog"
    links: ["Home", "About", "Contact", "Gallery", "Blog"]
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
console.log(st.heading);
}

render()

const links = document.querySelectorAll('nav a');



for(let i = 0; i<links.length; i+=1){
  links[i].addEventListener('click', function (event){
    event.preventDefault();
 console.log(state[event.target.textContent.toLowerCase()]);

  //console.log(links[i].textContent);
  })
}


//aboutLink.addEventListener('click', function (event){
//event.preventDefault();
//render(state[event.target. textContent]);

