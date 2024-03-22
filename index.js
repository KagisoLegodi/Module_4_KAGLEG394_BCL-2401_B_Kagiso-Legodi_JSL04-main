// #### Challenge 1: Flavor Selection
let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined

let preferenceMessage = (userPreference === 'Regular') ? "User prefers Regular Monster Energy drink." :
                       (userPreference === 'Sugar-free') ? "User prefers Sugar-free Monster Energy drink." :
                       "User preference not set, defaulting to Regular Monster Energy drink.";

console.log(preferenceMessage);

// #### Challenge 2: Stock Check
let cansLeft = 3; // Any number of cans

let stockMessage = (cansLeft < 5) ? "Time to restock!" : "We're stocked!";
console.log(stockMessage);

// #### Challenge 3: Workout Intensity
let heartRate = 95; // Current heart rate in bpm

let workoutMessage = (heartRate < 100) ? "Boost needed!" : "Energy levels are high!";
console.log(workoutMessage);

// #### Challenge 4: Temperature Suitability
let currentTemp = 4; // Current temperature in °C

let temperatureMessage = (currentTemp <= 5) ? "Chilled to perfection!" : "Needs a cooler!";
console.log(temperatureMessage);

// #### Challenge 5: Late Night Coding Session
let currentHour = 22; // Define the current hour in 24-hour format

let codingSessionMessage = (currentHour >= 7 && currentHour < 24) ? "Unleash the beast!" : "Better stick to water.";
console.log(codingSessionMessage);
