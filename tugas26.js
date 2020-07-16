var numbers = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

numbers.forEach(function (value, index, array) {
  if (isFinite(value) == true) {
    console.log("Angka ", value, "Is Infinity");
  } else if (isFinite(value) == false) {
    console.log("Angka ", value, "Not Infinity");
  }
});
