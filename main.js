let input = document.querySelector("#input");
let button = document.querySelector("#btn")
let text = document.querySelector("#text");
let container = document.querySelector(".container");
let body = document.querySelector("body");
let arr = []

container.style.cssText = "max-width: 1440px;  text-align: center; margin: 50px auto;";
body.style.background = "#212121";
text.style.textAlign = "left";

input.addEventListener("change", (event) => {
    let inputValue = event.target.value;
    
    if (event.target.value != false) {
        text.innerHTML += `<li>${inputValue}</li>`;
        arr.push(inputValue)
    };

    event.target.value = "";
});

button.addEventListener("click", (event) => {
  if (event.target.value != "") {
    text.innerHTML += `<li>${inputValue}</li>`;
  }
});

