/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthVal = document.getElementById("length-val")
const volumeVal = document.getElementById("volume-val")
const massVal = document.getElementById("mass-val")
const convertBtn = document.getElementById("btn")
const inputVal = document.getElementById("input-val")

convertBtn.addEventListener("click", () => {
    let input = inputVal.value
    conversions(input)
})

function conversions(enteredNumber) {
    let list = ''
    
    let meterToFeet = enteredNumber * 3.281 
    let feetToMeter = enteredNumber / 3.281
    let lengthSentence = `${enteredNumber} meters = ${meterToFeet.toFixed(2)} feet | ${enteredNumber} feet = ${feetToMeter.toFixed(2)} meters`
    lengthVal.textContent = lengthSentence
    
    let litersToGallon = enteredNumber * 0.264
    let gallonToLiters = enteredNumber / .264
    let volumeSentence = `${enteredNumber} liters = ${litersToGallon.toFixed(2)} gallons | ${enteredNumber} gallons = ${gallonToLiters.toFixed(2)} liters`
    volumeVal.textContent = volumeSentence
    
    let kilogramsToPounds = enteredNumber * 2.204
    let poundsToKilograms = enteredNumber / 2.204
    let massSentence = `${enteredNumber} kilos = ${kilogramsToPounds.toFixed(2)} pounds | ${enteredNumber} pounds = ${poundsToKilograms.toFixed(2)} kilos`
    massVal.textContent = massSentence
}