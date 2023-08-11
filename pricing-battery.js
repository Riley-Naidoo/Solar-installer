// Define a global variable for inverter price

var batteryPrices = {
"battery-1-dynamic" : 24999,
"battery-2-dynamic" : 27499,
"battery-3-dynamic" : 29374,
"battery-4-dynamic" : 33750,
"battery-5-dynamic" : 37375,
"battery-6-dynamic" : 43749,
"battery-7-dynamic" : 48749,
"battery-8-dynamic" : 57499,
"battery-9-dynamic" : 63749,
"battery-10-dynamic": 92499,
"battery-11-dynamic": 74875,
"battery-12-dynamic": 111250,
"battery-13-dynamic": 146250,

};




// Function to format the price with currency symbol and comma separation
function formatPrice(price) {
    return "R" + price.toLocaleString("en-ZA") + ".00"; // Adding ".00" for cents
}

// Function to update battery price placeholders
function updateBatteryPrices() {
    for (var batteryId in batteryPrices) {
        var element = document.getElementById(batteryId);
        if (element) {
            element.textContent = formatPrice(batteryPrices[batteryId]);
        }
    }
}

// Run the updateBatteryPrices function when the DOM is ready
document.addEventListener("DOMContentLoaded", updateBatteryPrices);





