window.onload = function () {
  main();
};

const converter = {
  area: {
    name: "Area",
    units: {
      squareKm: "Square Kilometer",
      squareM: "Square Meter",
      squareMile: "Square Mile",
      squareYard: "Square Yard",
      squareFoot: "Square Foot",
    },
    variants: {
      "squareKm:squareM": {
        formula: "multiply the area value by 1000000",
        calculation(n) {
          return n * 1000000;
        },
      },
      "squareKm:squareMile": {
        formula: "divide the area value by 2.59",
        calculation(n) {
          return n / 2.59;
        },
      },
      "squareKm:squareYard": {
        formula: "multiply the area value by 1196000",
        calculation(n) {
          return n * 1196000;
        },
      },
      "squareKm:squareFoot": {
        formula: "multiply the area value by 10760000",
        calculation(n) {
          return n * 10760000;
        },
      },
      "squareM:squareKm": {
        formula: "divide the area value by 1e+6",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "squareM:squareMile": {
        formula: "divide the area value by 2.59e+6",
        calculation(n) {
          return n / new Number("2.59e+6");
        },
      },
      "squareM:squareYard": {
        formula: "multiply the area value by 1.196",
        calculation(n) {
          return n * 1.196;
        },
      },
      "squareM:squareFoot": {
        formula: "multiply the area value by 10.764",
        calculation(n) {
          return n * 10.764;
        },
      },
      "squareMile:squareKm": {
        formula: "multiply the area value by 2.59",
        calculation(n) {
          return n * 2.59;
        },
      },
      "squareMile:squareM": {
        formula: "multiply the area value by 2.59e+6",
        calculation(n) {
          return n * new Number("2.59e+6");
        },
      },
      "squareMile:squareYard": {
        formula:
          "for an approximate result, multiply the area value by 3.098e+6",
        calculation(n) {
          return n * new Number(3.098e6);
        },
      },
      "squareMile:squareFoot": {
        formula:
          "for an approximate result, multiply the area value by 2.788e+7",
        calculation(n) {
          return n * new Number("2.788e+7");
        },
      },
      "squareYard:squareKm": {
        formula: "divide the area value by 1.196e+6",
        calculation(n) {
          return n / new Number("1.196e+6");
        },
      },
      "squareYard:squareM": {
        formula: "divide the area value by 1.196",
        calculation(n) {
          return n / 1.196;
        },
      },
      "squareYard:squareMile": {
        formula: "for an approximate result, divide the area value by 3.098e+6",
        calculation(n) {
          return n / new Number("3.098e+6");
        },
      },
      "squareYard:squareFoot": {
        formula: "multiply the area value by 9",
        calculation(n) {
          return n / 9;
        },
      },
      "squareFoot:squareKm": {
        formula: "for an approximate result, divide the area value by 1.076e+7",
        calculation(n) {
          return n / new Number("1.076e+7");
        },
      },
      "squareFoot:squareM": {
        formula: "divide the area value by 10.764",
        calculation(n) {
          return n / 10.764;
        },
      },
      "squareFoot:squareMile": {
        formula: "for an approximate result, divide the area value by 2.788e+7",
        calculation(n) {
          return n / new Number("2.788e+7");
        },
      },
      "squareFoot:squareYard": {
        formula: "divide the area value by 9",
        calculation(n) {
          return n / new Number("9");
        },
      },
    },
  },
  mass: {
    name: "Mass",
    units: {
      tonne: "Tonne",
      kilogram: "Kilogram",
      gram: "Gram",
      milligram: "Milligram",
    },
  },
  length: {
    name: "Length",
    units: {
      kilometer: "Kilometer",
      meter: "Meter",
      centimeter: "Centimeter",
      millimeter: "Millemeter",
    },
  },
  time: {
    name: "Time",
    units: {
      second: "Second",
      minute: "Minute",
      hour: "Hour",
      day: "Day",
    },
  },
};

let lastLeftSelectedValue = "";
let lastRightSelectedValue = "";

function main() {
  const categorySelect = document.getElementById("category-select");
  const leftSelect = document.getElementById("left-select");
  const rightSelect = document.getElementById("right-select");
  const leftInput = document.getElementById("left-inp");
  const rightInput = document.getElementById("right-inp");

  const converterKeys = Object.keys(converter).sort();
  removeAllChild(categorySelect);
  converterKeys.forEach((item) => {
    addOption(categorySelect, { value: item, text: converter[item].name });
  });

  // set default category units
  updateCategoryChanges(categorySelect, leftSelect, rightSelect);

  categorySelect.addEventListener("change", function () {
    updateCategoryChanges(categorySelect, leftSelect, rightSelect);
  });

  leftInput.addEventListener("keyup", function (event) {
    if (event.target.value && !isNaN(event.target.value)) {
      const converterName = categorySelect.value;
      const variants = converter[converterName].variants;
      const variantKey = `${leftSelect.value}:${rightSelect.value}`;
      const variant = variants[variantKey];
      leftInput.value = Number(event.target.value);
      rightInput.value = variant.calculation(Number(event.target.value));
    } else {
      rightInput.value = "";
    }
  });

  rightInput.addEventListener("keyup", function (event) {
    if (event.target.value && !isNaN(event.target.value)) {
      const converterName = categorySelect.value;
      const variants = converter[converterName].variants;
      const variantKey = `${leftSelect.value}:${rightSelect.value}`;
      const variant = variants[variantKey];
      rightInput.value = Number(event.target.value);
      leftInput.value = variant.calculation(Number(event.target.value));
    } else {
      leftInput.value = "";
    }
  });

  leftSelect.addEventListener("change", function (event) {
    if (event.target.value == rightSelect.value) {
      const options = rightSelect.getElementsByTagName("option");
      for (let i = 0; i < options.length; i++) {
        if (lastLeftSelectedValue == options[i].value) {
          options[i].selected = "selected";
          lastRightSelectedValue = options[i].value;
          break;
        }
      }
    }

    lastLeftSelectedValue = event.target.value;
    calculateValue(categorySelect, leftSelect, rightSelect);
  });

  rightSelect.addEventListener("change", function (event) {
    if (event.target.value == leftSelect.value) {
      const options = leftSelect.getElementsByTagName("option");
      for (let i = 0; i < options.length; i++) {
        if (lastRightSelectedValue == options[i].value) {
          options[i].selected = "selected";
          lastLeftSelectedValue = options[i].value;
          break;
        }
      }
    }
    lastRightSelectedValue = event.target.value;
    calculateValue(categorySelect, leftSelect, rightSelect);
  });
}

function addOption(parent, option) {
  const opt = document.createElement("option");
  opt.setAttribute("value", option.value);
  opt.innerText = option.text;

  parent.appendChild(opt);
}

function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}

function updateCategoryChanges(categorySelect, leftSelect, rightSelect) {
  const converterName = categorySelect.value;
  const units = converter[converterName].units;
  const options = Object.keys(units);

  // handle left select
  removeAllChild(leftSelect);
  options.forEach((item) => {
    addOption(leftSelect, { value: item, text: units[item] });
  });
  lastLeftSelectedValue = leftSelect.value;

  // handle right select
  removeAllChild(rightSelect);
  options.forEach((item) => {
    addOption(rightSelect, { value: item, text: units[item] });
  });

  // change default option of right select
  rightSelect.getElementsByTagName("option")[1].selected = "selected";
  lastRightSelectedValue = rightSelect.value;

  calculateValue(categorySelect, leftSelect, rightSelect);
}

function calculateValue(categorySelect, leftSelect, rightSelect) {
  const leftInput = document.getElementById("left-inp");
  const rightInput = document.getElementById("right-inp");
  const formulaText = document.getElementById("formula-text");

  const converterName = categorySelect.value;
  const variants = converter[converterName].variants;
  const variantKey = `${leftSelect.value}:${rightSelect.value}`;
  const variant = variants[variantKey];
  formulaText.innerText = variant.formula;
  leftInput.value = 1;
  rightInput.value = variant.calculation(1);
}
