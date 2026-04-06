let title = document.getElementById("title");
let button = document.getElementById("btn");

function changeText() {
    title.textContent = "You clicked!";
    document.body.style.backgroundColor = "lightblue";
    console.log("Clicked!");
}

button.addEventListener("click", changeText);
