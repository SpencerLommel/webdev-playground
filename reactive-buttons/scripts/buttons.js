
var button1 = document.getElementById("button-1");

button1.addEventListener("click", (event) => {
    handleButtonClick()
})

function handleButtonClick() {
    alert("You clicked button-1!");
}