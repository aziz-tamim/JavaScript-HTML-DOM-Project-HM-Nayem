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
    const generateRandomColorBtn = document.getElementById('generate-random-color');
    const colorModeHexInp = document.getElementById('color-code-hex');

    generateRandomColorBtn.addEventListener(
        'click',
        handleGenerateRandomColorBtn
    );

    colorModeHexInp.addEventListener('keyup', function (e) {
        const hexColor = e.target.value;
        if (hexColor) {
            colorModeHexInp.value = hexColor.toUpperCase();
            if (isValidHex(hexColor)) {
                const colorDecimal = hexToDecimalColors(color);

            }
        }
    })
}

// event handlers
function handleGenerateRandomColorBtn() {
    const color = generateColorDecimal();
    updateColorCodeToDom(color);
}

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

/**
 * update dom elements with calculated color values
 * @param {object} color
 */
function updateColorCodeToDom(color) {
    const hexColor = generateHexColor(color);
    const rgbColor = generateRGBColor(color);

    document.getElementById('color-display').style.backgroundColor = hexColor;
    document.getElementById('color-mode-hex').value = hexColor;
    document.getElementById('color-mode-rgb').value = rgbColor;
    document.getElementById('color-slider-red').value = color.red;
    document.getElementById('color-slider-red-label').innerText = color.red;
    document.getElementById('color-slider-green').value = color.green;
    document.getElementById('color-slider-green-label').innerText = color.green;
    document.getElementById('color-slider-blue').value = color.blue;
    document.getElementById('color-slider-blue-label').innerText = color.blue;

}

// Utils

/**
 * generate and return an object of three color decimal values
 * @returns {object}
 */
function generateColorDecimal() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
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
 * convert hex color to decimal colors object
 * @param {string} hex
 * @returns {object}
 */
function hexToDecimalColors(hex) {
    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4), 16);

    return {
        red,
        green,
        blue
    };
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