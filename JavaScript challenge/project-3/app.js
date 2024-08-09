const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const successButton = document.getElementById("btn-success");
const resetButton = document.getElementById("btn-reset");
const result = document.getElementById("dynamic__bmi");
const message = document.getElementById("bmi_text");
// // Project Steps
/**
 * Step 1
 * Find the function
 */

/**
 * Step 2
 * bind functions to EventListener
 */

/**
 * Step 3
 * Find Variables and Data
 */

/**
 * Step 4
 * Implement calculateBMI function
 */

/**
 * Step 5
 * Implement showMessage function
 */

/**
 * Step 6
 * Implement reset function
 */

/**
 * Step 7
 * Implement eventHandler function
 */

/**
 * Step 8
 * Make the Application Bug free
 */

function calculateBMI() {
  let height, weight, bmi;
  height = Number(heightInput.value);
  weight = Number(weightInput.value);
  bmi = weight / (height * 0.0254 * height * 0.0254);
  result.textContent = bmi.toFixed(2);
  let msg = showMessage(bmi);
  message.textContent = msg;
}

function showMessage(bmiValue) {
  if (bmiValue < 16) {
    return "You are Severe Thin";
  } else if (bmiValue >= 16 && bmiValue <= 17) {
    return "You are Moderate Thin";
  } else if (bmiValue > 17 && bmiValue <= 18.5) {
    return "You are Mid Thin";
  } else if (bmiValue > 18 && bmiValue <= 25) {
    return "You are Normal";
  } else if (bmiValue > 25) {
    return "Your are Overweight";
  }
}

function reset() {
  heightInput.value = "";
  weightInput.value = "";
  result.textContent = "_________";
  message.textContent = "";
}

function eventHandler() {
  if (Number(heightInput.value) && Number(weightInput.value)) {
    calculateBMI();
  } else {
    alert("Please provide valid inputs")
    reset();
  }
}

successButton.addEventListener("click", eventHandler);
resetButton.addEventListener("click", reset);
