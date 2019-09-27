import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

/*
Currently #root div is empty
We want to grb the #root div
We want tko assign the markup that is contained in the components*/

document.querySelector("#root").innerHTML = `
${Header("Hello from Yo Mama")}
${Nav()}
${Main()}
${Footer()}
`
