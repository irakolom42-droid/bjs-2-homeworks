function getArrayParams(...arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((acc, current) => acc + current, 0);
    let avg = +(sum / arr.length).toFixed(2);

    return {max: max, min: min, avg: avg};
}

function summElementsWorker(...arr) {
    return arr.reduce((acc, current) => acc + current, 0);
    
}

function differenceMaxMinWorker(...arr) {
    let max = -Infinity;
    let min = Infinity;
   
    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }    
    }

    return (max - min);
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }

    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
        } else {
            sumOddElement += arr[i];
        }
    }
    return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    
    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }
    }

    return (sumEvenElement / countEvenElement);
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
        let result = func(...arrOfArr[i]);

        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}