
const button1 = document.getElementById("button-1");
const incrementButton = document.getElementById("increment-button")
const resetButton = document.getElementById("reset-button")

button1.addEventListener("click", (event) => {
    handleButtonClick()
})

incrementButton.addEventListener("click", (event) => {
    incrementCounter()
})

resetButton.addEventListener("click", (event) => {
    resetCounter()
})



// https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

var cookies = document.cookie;


function handleButtonClick() {
    alert("You clicked button-1!");
}

function incrementCounter() {
    if (getCookie("counter_value")) {
        document.cookie = "counter_value=" + (parseInt(getCookie("counter_value")) + 1)
    } else {
        document.cookie = "counter_value=1"
    }

    document.getElementById("counter-value").innerHTML = getCookie("counter_value")
}

function resetCounter() {
    document.cookie = "counter_value=0"
    document.getElementById("counter-value").innerHTML = getCookie("counter_value")

}