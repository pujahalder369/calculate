function btn(v) {
  document.getElementById("display").value += v;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function Delete() {
  document.getElementById("display").value = display.value.toString().slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}
