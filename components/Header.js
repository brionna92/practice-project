export default function(heading= "Welcome Baby "){
  return `<header>
      <figure>
        <img
          srcset="
            https://picsum.photos/200,
            https://picsum.photos/300 1.5x,
            https://picsum.photos/400 2x,
            https://picsum.photos/600 3x
          "
          src="https://picsum.photos/600"
          alt="Lorem Picsum"
        />


      </figure>
      <h1>${heading}</h1>
        Practice Project</h1>
    </header>`;
}
