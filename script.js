let display = document.getElementById('screen');
const Delete = () => {
    display.value = display.value.slice(0,-1);
}
const wipe =() => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}
