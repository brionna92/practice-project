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

document.querySelector("#root").innerHTML = `
${Header(state.home.heading)}
${Nav()}
${Main()}
${Footer()}
`
