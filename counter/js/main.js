let display = document.getElementById('display');
let count = 0;
//display.innerText=count;

function counter() {
    count++;
    display.innerText = count;
};
function recounter() {
    if (count > 0) {
        count--;
        display.innerText = count;
    }
};
function counterreset() {
    count = 0;
    display.innerText = count;
};