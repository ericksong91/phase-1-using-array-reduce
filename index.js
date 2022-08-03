const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


const batteryReducer = (accu, init) => accu + init;
const totalBatteries = batteryBatches.reduce(batteryReducer, 0)

console.log(totalBatteries)