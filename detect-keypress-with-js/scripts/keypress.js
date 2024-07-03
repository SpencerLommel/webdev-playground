// onkeypress is depreceated so using this for best practice 
// https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event

// I used the following reference to access js var in html
// https://codedamn.com/news/frontend/use-javascript-variables-inside-html

addEventListener("keypress", (event) => {
    console.log(event.code)
    document.getElementById("last-key-pressed").innerHTML = "Last key pressed: " + event.code
});

  
