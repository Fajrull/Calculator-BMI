const button = document.getElementById("calculate");
button.addEventListener("click", function () {
  const weightElement = document.getElementById("weight");
  const weight = parseFloat(weightElement.value);
  const heightElement = document.getElementById("height");
  const height = parseFloat(heightElement.value);

  if (isNaN(weight) || isNaN(height)) {
    alert("Masukkan berat dan tinggi dalam bentuk angka.");
    return;
  }

  const bmi = calculateBMI(weight, height);
  let category = getBmi(bmi);
  const result = document.getElementById("result");
  result.innerHTML = `Your BMI is  <strong>${bmi}</strong> which means you are <strong>${category}</strong>`;
});

function calculateBMI(weight, height) {
  let result = weight / (height / 100) ** 2;
  return mathRoundDecimal(result);
}

function mathRoundDecimal(num) {
  return Math.round(num * 10) / 10;
}

function getBmi(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}
