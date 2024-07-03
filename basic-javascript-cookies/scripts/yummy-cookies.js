// https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

let sitevisits = document.cookie;

window.addEventListener("load", (event) => {
    if (sitevisits == "") {
        document.cookie = "sitevisits=1"
    } else {
        document.cookie = "sitevisits=" +  (parseInt(getCookie("sitevisits")) + 1)
        document.getElementById("site-visits-amount").innerHTML = "Times you have visited this site: " + getCookie("sitevisits") + "!"

        
    }
  });