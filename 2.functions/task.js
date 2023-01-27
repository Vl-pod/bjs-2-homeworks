// 1. зад.
function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b, 0);
  let avg = (sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: Number(avg)};
}
let result = getArrayParams(1, 2, 3, 4, 5);
console.log(result);

// // 2. зад.
function summElementsWorker(...arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if(arr.length === 0) {
    return 0;
  } 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
}
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  } 
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
          countEvenElement++;
      }
  }
  return sumEvenElement / countEvenElement;
}
// // 3.зад.
function makeWork (arrOfArr, func) {
    if (!arrOfArr.length) return 0;
    let maxWorkerResult = -Infinity;
    maxWorkerResult = func(...arrOfArr[0]);
    for (let i = 1; i < arrOfArr.length; i++) {
      const workerResult = func(...arrOfArr[i]);
      if (workerResult > maxWorkerResult) {
        maxWorkerResult = workerResult;
      }
    }
    return maxWorkerResult;
}
