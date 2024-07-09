var dot1position = [0, 0];

const sleep = ms => new Promise(r => setTimeout(r, ms));

function movePoint(dot, y) {
    dot.style.setProperty('top', y + 'px');
}

var dot1 = document.getElementById("dot1");

async function moveDot() {
    for (let i = 0; i < 5000; i++) {
        var newPos = ((Math.sin(i) * 10))+ 20

        movePoint(dot1, newPos);
        console.log(newPos)
        await sleep(60);
    }
}

moveDot();
