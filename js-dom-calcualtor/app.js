const calculate = (e) => {
    let value = e.target.innerText;
    let input = document.getElementById("input");
    input.value += value;
    if (value === "=") {
      input.value = eval(input.value.slice(0, -1));
    }
    if (value === "C") {
      input.value = "";
    }
    if (value === "AC") {
        input.value = "";
      }
  };
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", calculate);
  });