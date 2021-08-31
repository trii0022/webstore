document.querySelector("button#add").addEventListener("click", doStuff);

let counter = 0;
function doStuff() {
  counter = counter + 1;
  const myTemplate = document.querySelector("template").content;
  const myCopy = myTemplate.cloneNode(true);
  myCopy.querySelector("h2").textContent = "Your turn " + counter;
  document.querySelector("main").appendChild(myCopy);
}
