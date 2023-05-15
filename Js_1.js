const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
  const valueInput = document.getElementById("value");
  const fromSelect = document.getElementById("from");
  const toSelect = document.getElementById("to");
  const resultP = document.getElementById("result");

  const value = parseFloat(valueInput.value);
  if (isNaN(value)) {
    resultP.innerHTML = "Не вдалося конвертувати";
    return;
  }

  const bytes = convertToBytes(value, fromSelect.value);
  const result = convertFromBytes(bytes, toSelect.value);

  resultP.innerHTML = `${value} ${fromSelect.value} = ${result} ${toSelect.value}`;
});

function convertToBytes(size, unit) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  const index = units.indexOf(unit.toUpperCase());
  return size * Math.pow(1024, index);
}

function convertFromBytes(bytes, unit) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  const index = units.indexOf(unit.toUpperCase());
  return bytes / Math.pow(1024, index);
}