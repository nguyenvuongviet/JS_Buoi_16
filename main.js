let array = [];

function addToArray() {
  const input = document.getElementById("inputArray").value;
  array = input.split(",").map(Number);
  result = `Mảng sau khi nhập thêm: ${array}`;
  document.getElementById("addToArray").innerHTML = result;
}

function sumPositive() {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  result = `<p>Mảng: ${array}</p>
  Tổng các số dương trong mảng là: ${sum}`;
  document.getElementById("sumPositive").innerHTML = result;
}

function countPositive() {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++;
    }
  }
  result = `<p>Mảng: ${array}</p>
  Số dương trong mảng là: ${count}`;
  document.getElementById("countPositive").innerHTML = result;
}

function findMin() {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  result = `<p>Mảng: ${array}</p>
  Số nhỏ nhất trong mảng là: ${min}`;
  document.getElementById("findMin").innerHTML = result;
}

function findMinPositive() {
  let minPositive = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && (minPositive === null || array[i] < minPositive)) {
      minPositive = array[i];
    }
  }
  result = `<p>Mảng: ${array}</p>
  Số dương nhỏ nhất trong mảng là: ${minPositive}`;
  document.getElementById("findMinPositive").innerHTML = result;
}

function findLastEven() {
  let lastEven = -1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      lastEven = array[i];
      break;
    }
  }
  result = `<p>Mảng: ${array}</p>
  Số chẵn cuối cùng trong mảng là: ${lastEven}`;
  document.getElementById("findLastEven").innerHTML = result;
}

function swapPosition() {
  const position1 = parseInt(document.getElementById("position1").value);
  const position2 = parseInt(document.getElementById("position2").value);
  result = `<p>Mảng: ${array}</p>`;
  const temp = array[position1];
  array[position1] = array[position2];
  array[position2] = temp;
  result += `Mảng sau khi đổi vị trí: ${array}`;
  document.getElementById("swapPosition").innerHTML = result;
}

function sortAscending() {
  result = `<p>Mảng: ${array}</p>`;
  array.sort((a, b) => a - b);
  result += ` Mảng sau khi sắp xếp tăng dần: ${array}`;
  document.getElementById("sortAscending").innerHTML = result;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function firstPrime() {
  let firstPrime = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && isPrime(array[i])) {
      firstPrime = array[i];
      break;
    }
  }
  result = `<p>Mảng: ${array}</p>
  Số nguyên tố đầu tiên trong mảng là: ${firstPrime}`;
  document.getElementById("firstPrime").innerHTML = result;
}

function countPrime() {
  const input = document.getElementById("inputArray2").value;
  const newArray = input.split(",").map(Number);
  array = array.concat(newArray);
  const count = array.filter((num) => Number.isInteger(num)).length;
  result = `<p>Mảng sau khi nhập thêm: ${array}</p>
  Số lượng số nguyên trong mảng là: ${count}`;
  document.getElementById("countPrime").innerHTML = result;
}

function comparePosNeg() {
  let positiveCount = 0;
  let negativeCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveCount++;
    } else if (array[i] < 0) {
      negativeCount++;
    }
  }
  result = `<p>Mảng: ${array}</p>
  Số lượng số dương trong mảng là: ${positiveCount}, số lượng số ám trong mảng là: ${negativeCount}`;
  document.getElementById("comparePosNeg").innerHTML = result;
}
