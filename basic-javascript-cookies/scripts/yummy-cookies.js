// https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

function randomHexColor() {
    chars = "0123456789abcdef"
    hexColor = "";
    for (i=0; i < 6; i++) {
        // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
        hexColor += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return hexColor
}

let sitevisits = document.cookie;

window.addEventListener("load", (event) => {
    if (sitevisits == "") {
        document.cookie = "sitevisits=1"
    } else {
        document.cookie = "sitevisits=" +  (parseInt(getCookie("sitevisits")) + 1)
        document.getElementById("site-visits-amount").innerHTML = "Times you have visited this site: " + getCookie("sitevisits") + "!"
        document.getElementById("site-visits-amount").style = "color: #" + randomHexColor() + "; font-size: " + parseInt(getCookie("sitevisits")) + "px;"
        document.getElementById("body").style = "background-color: #" + randomHexColor() + ";"
    }
  });