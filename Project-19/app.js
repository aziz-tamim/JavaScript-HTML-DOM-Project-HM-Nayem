window.onload = function () {
  main();
};

const converter = {
  area: {
    name: "Area",
    units: {
      squareKm: 'Square Kilometer',
      squareM: 'Square Meter',
      squareMile: 'Square Mile',
      squareYard: 'Square Yard',
      squareFoot: 'Square Foot'
    }
  },
  mass: {
    name: "Mass",
    units: {
      tonne: 'Tonne',
      kilogram: 'Kilogram',
      gram: 'Gram',
      milligram: 'Milligram'
    }
  },
  length: {
    name: "Length",
    units: {
        kilometer: 'Kilometer',
        meter: 'Meter',
        centimeter: 'Centimeter',
        millimeter: 'Millemeter'
    }
  },
  time: {
    name: "Time",
    units: {
        second: 'Second',
        minute: 'Minute',
        hour: 'Hour',
        day: 'Day'
    }
  },
};

function main() {
  const categorySelect = document.getElementById("category-select");
  const leftSelect = document.getElementById('left-select');
  const rightSelect = document.getElementById('right-select');

  const converterKeys = Object.keys(converter).sort();
  removeAllChild(categorySelect);
  converterKeys.forEach((item) => {
    addOption(categorySelect, { value: item, text: converter[item].name });
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
