// select fa-hamburger
// Listen for a click on the hamburger
// remove mobile hidden class from the ul

const hamburger = document.querySelector("fa-hamburger");
const hiddenUL = document.querySelector("ul");
console.log(hamburger, hiddenUL);

hamburger.addEventListener(`click`, function(){
console.log("hello from hamburger");
});
