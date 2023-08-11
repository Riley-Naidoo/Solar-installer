var inverterPrices = {
"inverter-1-dynamic" : 12499,
"inverter-2-dynamic" : 13749,
"inverter-3-dynamic" : 14374,
"inverter-4-dynamic" : 24438,
"inverter-5-dynamic" : 30749,
"inverter-6-dynamic" : 43689,
"inverter-7-dynamic" : 48249,
"inverter-8-dynamic" : 58625,
"inverter-9-dynamic" : 62375,
"inverter-10-dynamic" : 82499,
"inverter-11-dynamic" : 87499,
"inverter-12-dynamic" : 87499,

};

// Define a global variable for inverter price

    // Function to format the price with currency symbol and comma separation
function formatPrice(price) {
    return "R" + price.toLocaleString("en-ZA") + ".00"; // Adding ".00" for cents
}

// Function to update inverter price placeholders
function updateInverterPrices() {
    for (var inverterId in inverterPrices) {
        var element = document.getElementById(inverterId);
        if (element) {
            element.textContent = formatPrice(inverterPrices[inverterId]);
        }
    }
}

// Run the updateInverterPrices function when the DOM is ready
document.addEventListener("DOMContentLoaded", updateInverterPrices);






