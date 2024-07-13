var dot1position = [0, 0];

const sleep = ms => new Promise(r => setTimeout(r, ms));

function movePoint(dot, y) {
    dot.style.setProperty('top', y + 'px');
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

function setColor(dot, hexColor) {
    dot.style.setProperty('background-color', "#" + hexColor)
}

dot1 = document.getElementById("dot1")

dot1.addEventListener("click", (event) => {
    setColor(dot1, randomHexColor());
    document.getElementById('ball-clicks').innerHTML = parseInt(document.getElementById('ball-clicks').innerHTML) + 1;

})

var dot1 = document.getElementById("dot1");

async function moveDot() {
    for (let i = 0; i < 5000; i++) {
        var newPos = ((Math.sin(i) * 40))+ 200

        movePoint(dot1, newPos);
        console.log(newPos)
        await sleep(700);
    }
}

moveDot();
