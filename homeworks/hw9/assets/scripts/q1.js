/**
 * @param {string} color The background color that #q1-container should change to
 */
function setBackgroundColor(color) {
    document.getElementById('q1-container').style.background = color
}

function redButtonClicked() {
    setBackgroundColor("#EF476F")
}

function yellowButtonClicked() {
    setBackgroundColor("#FFD166")
}

document.getElementById("q1-btn-red").onclick = redButtonClicked;
document.getElementById("q1-btn-yellow").onclick = yellowButtonClicked;
document.getElementById("q1-btn-green").onclick = function () { setBackgroundColor('#06D6A0') };
document.getElementById("q1-btn-lightblue").onclick = function () { setBackgroundColor('#118AB2') };
document.getElementById("q1-btn-blue").onclick = function () { setBackgroundColor('#073B4C') };
