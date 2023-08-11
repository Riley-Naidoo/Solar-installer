// Define a global object for panel prices
var panelPrices = {
    "panel-1-dynamic": 2750,
    "panel-2-dynamic": 3348,
    "panel-3-dynamic": 3886,
    "panel-4-dynamic": 11000,
    // Add other panel prices
};

// Function to format the price with currency symbol and comma separation
function formatPrice(price) {
    return "R" + price.toLocaleString("en-ZA") + ".00"; // Adding ".00" for cents
}

// Function to update panel price placeholders
function updatePanelPrices() {
    for (var panelId in panelPrices) {
        var element = document.getElementById(panelId);
        if (element) {
            element.textContent = formatPrice(panelPrices[panelId]);
        }
    }
}

// Run the updatePanelPrices function when the DOM is ready
document.addEventListener("DOMContentLoaded", updatePanelPrices);







