function getArrayParams(...arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((acc, current) => acc + current, 0);
    let avg = +(sum / arr.length).toFixed(2);

    return {max, min, avg};
}

console.log(getArrayParams(2.4555, 3.09998, 5));