const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function sum(acc, val){
    return acc + val;
}

let totalBatteries = batteryBatches.reduce(sum);

console.log(totalBatteries)