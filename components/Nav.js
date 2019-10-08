function linksBuilder(links){
let linksHTML =""

for(let i =0; i< links.length; i += 1) {
  linksHTML += `<li><a href=" ./${links[i]}">${links[i]</a></li>}`;
}



  return links
}










export default function(){
  return `<nav>
<span class="fas fa-hamburger is-hidden--desktop"></span>


<ul class="is-hidden--mobile is-shown--desktop is-hidden-tablet">

</ul>
<!-- We Usually only have one <na> to represent -->
</nav>`
}
