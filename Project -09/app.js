/**
 * Date: 16-07-24
 * Author: Abdul Aziz
 * Description: Color picker application with huge dom functionalities
 */

// Globals
let div = null;

// onload handler
window.onload = () => {
    main();
}

// main or boot function, this function will take care of getting all the DOM references
function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const output2 = document.getElementById('output2');
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');
    const copyBtn2 = document.getElementById('copy-btn2');

    changeBtn.addEventListener("click", function () {
        const color = generateColorDecimal();
        const hex = generateHexColor(color);
        const rgb = generateRGBColor(color);
        root.style.backgroundColor = hex;
        output.value = hex.substring(1);
        output2.value = rgb;
    });
}

// event handlers

// Dom function
function generateToastMessage(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', function () {
            div.remove();
            div = null;
        });
    });
    docuemnt.body.appendChild(div);
}

function updateColorCodeToDom(color) {

}

// Utils

/**
 * generate and return an object of three color decimal values
 * @returns {object}
 */
function generateColorDecimal() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.randome() * 255);
    const blue = Math.floor(Math.random() * 255);

    return {
        red,
        green,
        blue,
    };
}

/**
 * take a color object of three decimal values and return a hexadecimal color code
 * @param {object} color
 * @param {string}
 */
function generateHexColor({red, green, blue}) {
    const getTwoCode = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    };

    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase();
}

/**
 * take a color object of three decimal values and return a rgb color code
 * @param {object} color
 * @param {string}
 */
function generateRGBColor({ red, green, blue }) {
    return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * convert hex color to rgb
 * @param {string} hex
 */
function hexToRgb(hex) {
    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4), 16);

    return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * validate hex color code
 * @param {string} color : ;
 * @param {boolean}
 */
function isValidHex(color) {
    if (color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}