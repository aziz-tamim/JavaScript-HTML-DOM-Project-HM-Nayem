// Step 1 - create onload function
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");

  btn.addEventListener("click", function () {
    const bgColor = genarateRGBColor();
    root.style.backgroundColor = bgColor;
  });
}
// Step 2 - random color generator function
function genarateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
// Step 3 - collect all necessary references

// Step 4 - handle the click event
