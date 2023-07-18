function formatPrice(price) {
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
  });
  var formattedNumber = formatter.format(price); 
  formattedNumber = formattedNumber.replace(/,/g, ' '); 
  formattedNumber = formattedNumber.replace('$', 'R '); 
  return formattedNumber;

}
let Total = 0;
let panelTotal = 0;
let inverterTotal = 0;
let batteryTotal = 0;

let handle1Total = 0; // the total Price
let handle1Inverter = 0; //Price of the inverter
let handleBattery1Total = 0; // Total Price
let handle1Battery = 0; //Price of the battery

let handle2Total = 0;
let handle2Inverter = 0;
let handleBattery2Total = 0; // Total Price
let handle2Battery = 0; //Price of the battery

let handle3Total = 0;
let handle3Inverter = 0;
let handleBattery3Total = 0; // Total Price
let handle3Battery = 0; //Price of the battery

let handle4Total = 0;
let handle4Inverter = 0;
let handleBattery4Total = 0; // Total Price
let handle4Battery = 0; //Price of the battery

let handle5Total = 0;
let handle5Inverter = 0;
let handleBattery5Total = 0; // Total Price
let handle5Battery = 0; //Price of the battery

let handle6Total = 0;
let handle6Inverter = 0;
let handleBattery6Total = 0; // Total Price
let handle6Battery = 0; //Price of the battery

let handle7Total = 0;
let handle7Inverter = 0;
let handleBattery7Total = 0; // Total Price
let handle7Battery = 0; //Price of the battery

let handle8Total = 0;
let handle8Inverter = 0;
let handleBattery8Total = 0; // Total Price
let handle8Battery = 0; //Price of the battery

let handle9Total = 0;
let handle9Inverter = 0;
let handleBattery9Total = 0; // Total Price
let handle9Battery = 0; //Price of the battery

let handle10Total = 0;
let handle10Inverter = 0;
let handleBattery10Total = 0; // Total Price
let handle10Battery = 0; //Price of the battery

let handle11Total = 0;
let handle11Inverter = 0;
let handleBattery11Total = 0; // Total Price
let handle11Battery = 0; //Price of the battery

let handle12Total = 0;
let handle12Inverter = 0;
let handleBattery12Total = 0; // Total Price
let handle12Battery = 0; //Price of the battery

let handleBattery13Total = 0; // Total Price
let handle13Battery = 0; //Price of the battery

let inv1 = "3.5 Kw Growatt 48V Hybrid Inverter"
let inv1Price = 8694.00;

let inv2 = "5 Kw Growatt 48V Hybrid Inverter";
let inv2Price = 12399.00;

let inv3 = "5.5 Kw Luxpower Hybrid Inverter";
let inv3Price = 13999.00;

let inv4 = "5 Kw Deye Hybrid Inverter";
let inv4Price = 25999;

let inv5 = "5 Kw Sunsynk Hybrid Inverter";
let inv5Price = 27899;

let inv6 = "8 Kw Deye Hybrid Inverter";
let inv6Price = 39999;

let inv7 = "8 Kw Sunsynk Hybrid Inverter";
let inv7Price = 43499;

let inv8 = "12 Kw Luxpower Hybrid Inverter";
let inv8Price = 46900;

let inv9 = "12 Kw 3 Phase Deye Hybrid Inverter";
let inv9Price = 55999;

let inv10 = "12 Kw 3 Phase Sunsynk Hybrid Inverter";
let inv10Price = 63999;

let inv11 = "16 Kw Deye Hybrid Inverter";
let inv11Price = 69999;

let inv12 = "16 Kw Sunsynk Hybrid Inverter"
let inv12Price = 76999;

let inverterPrice = 0;

//Battery Pricing
let bat1 = "3.6 Kwh Dyness Li-Ion";
let bat1Price = 19999;

let bat2 = "5 Kwh Felicity Li-Ion";
let bat2Price = 22999;

let bat3 = "5.12 Kwh Dyness Li-Ion";
let bat3Price = 25799;

let bat4 = "4.96 Kwh Greenrich Li-Ion";
let bat4Price = 29999;

let bat5 = "5.12 Kwh Hubble AM-5 Li-Ion";
let bat5Price = 31299;

let bat6 = "5/4 Kwh Freedom One";
let bat6Price = 34999;

let bat7 = "8.7 Kwh Felicity Li-Ion";
let bat7Price = 40999;

let bat8 = "12.5 Kwh Felicity Li-Ion";
let bat8Price = 48999;

let bat9 = "10.24 Kwh Dyness Li-Ion";
let bat9Price = 55000;

let bat10 = "10 Kwh Hubble AM-5 Li-Ion";
let bat10Price = 73999;

let bat11 = "10/8 Kwh Freedom One";
let bat11Price = 79999;

let bat12 = "15/12 Kwh Freedom One";
let bat12Price = 107000;

let bat13 = "20/16 Kwh Freedom One";
let bat13Price = 142999;

//function start

//function end


function increaseValue() {
  var input = document.getElementById('btn-value');
  var currentValue = parseInt(input.value);
  input.value = currentValue + 1;
}

function decreaseValue() {
  var input = document.getElementById('btn-value');
  var currentValue = parseInt(input.value);
  if (currentValue > 0) {
    input.value = currentValue - 1;
  }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#calc-form').addEventListener('submit', function(event) {
      event.preventDefault();
      calculate();
    });
  
    document.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        document.querySelector('#submit-button').click();
      }
    });
  
    document.getElementById('change-btn').addEventListener('click', function() {
      var panel = document.getElementById('inverter-panel');
      panel.classList.toggle('show');
    });
    
    // Handle click event on the inverters in the panel
    document.getElementById('inverter-panel').addEventListener('click', function(event) {
      var selectedInverter = event.target.innerText;

    
      // Hide the panel after selecting an inverter
      var panel = document.getElementById('inverter-panel');
      panel.classList.remove('show');
    });

    //battery panel below

    document.getElementById('changeBat-btn').addEventListener('click', function() {
      var panel = document.getElementById('battery-panel');
      panel.classList.toggle('show');
    });
    
    // Handle click event on the inverters in the panel
    document.getElementById('battery-panel').addEventListener('click', function(event) {
      var selectedInverter = event.target.innerText;
      // Hide the panel after selecting an inverter
      var panel = document.getElementById('battery-panel');
      panel.classList.remove('show');
    });
    function handleinv1() {
      document.getElementById('config-9').innerHTML = inv1;
      document.getElementById('price-2').innerHTML = formatPrice(inv1Price);
      let inv1img = document.getElementById('product-image');
      inv1img.src = "inverter1.jpg";
      inv1img.style.height = '300px';
      handle1Total = handle1Total - handle1Inverter + inv1Price
      document.getElementById('price-13').innerHTML = formatPrice(handle1Total);
    }

    function handlebat1(){
      document.getElementById('config-11').innerHTML = bat1;
      document.getElementById('price-3').innerHTML = formatPrice(bat1Price);
      let bat1img = document.getElementById('product-image-battery');
      bat1img.src = "battery1.jpg";
      bat1img.style.height = '300px';
      handleBattery1Total = handleBattery1Total - handle1Battery + bat1Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery1Total);
    }
    
  
    function handleinv2(){
      document.getElementById('config-9').innerHTML = inv2;
      document.getElementById('price-2').innerHTML = formatPrice(inv2Price);
      let inv2img = document.getElementById('product-image');
      inv2img.src= "inverter2.jpg";
      inv2img.style.height = '300px';
      handle2Total = handle2Total - handle2Inverter + inv2Price
      document.getElementById('price-13').innerHTML = formatPrice(handle2Total);
    }

    function handlebat2(){
      document.getElementById('config-11').innerHTML = bat2;
      document.getElementById('price-3').innerHTML = formatPrice(bat2Price);
      let bat2img = document.getElementById('product-image-battery');
      bat2img.src = "battery2.jpg";
      bat2img.style.height = '300px';
      handleBattery2Total = handleBattery2Total - handle2Battery + bat2Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery2Total);
    }
    
    function handleinv3(){
      document.getElementById('config-9').innerHTML = inv3;
      document.getElementById('price-2').innerHTML = formatPrice(inv3Price);
      let inv3img = document.getElementById('product-image');
      inv3img.src= "inverter3.jpg";
      inv3img.style.height = '300px';
      handle3Total = handle3Total - handle3Inverter + inv3Price
      document.getElementById('price-13').innerHTML = formatPrice(handle3Total);
    }

    
    function handlebat3(){
      document.getElementById('config-11').innerHTML = bat3;
      document.getElementById('price-3').innerHTML = formatPrice(bat3Price);
      let bat3img = document.getElementById('product-image-battery');
      bat3img.src = "battery3.jpg";
      bat3img.style.height = '300px';
      handleBattery3Total = handleBattery3Total - handle3Battery + bat3Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery3Total);
    }
    
    function handleinv4(){
      document.getElementById('config-9').innerHTML = inv4;
      document.getElementById('price-2').innerHTML = formatPrice(inv4Price);
      let inv4img = document.getElementById('product-image');
      inv4img.src= "inverter4.png";
      inv4img.style.height = '300px';
      handle4Total = handle4Total - handle4Inverter + inv4Price
      document.getElementById('price-13').innerHTML = formatPrice(handle4Total);
    }

    
    function handlebat4(){
      document.getElementById('config-11').innerHTML = bat4;
      document.getElementById('price-3').innerHTML = formatPrice(bat4Price);
      let bat4img = document.getElementById('product-image-battery');
      bat4img.src = "battery4.png";
      bat4img.style.height = '300px';
      handleBattery4Total = handleBattery4Total - handle4Battery + bat4Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery4Total);
    }
    
    function handleinv5(){
      document.getElementById('config-9').innerHTML = inv5;
      document.getElementById('price-2').innerHTML = formatPrice(inv5Price);
      let inv5img = document.getElementById('product-image');
      inv5img.src= "inverter5.jpg";
      inv5img.style.height = '300px';
      handle5Total = handle5Total - handle5Inverter + inv5Price
      document.getElementById('price-13').innerHTML = formatPrice(handle5Total);
    }

    
    function handlebat5(){
      document.getElementById('config-11').innerHTML = bat5;
      document.getElementById('price-3').innerHTML = formatPrice(bat5Price);
      let bat5img = document.getElementById('product-image-battery');
      bat5img.src = "battery5.jpg";
      bat5img.style.height = '300px';
      handleBattery5Total = handleBattery5Total - handle5Battery + bat5Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery5Total);
    }
    
    function handleinv6(){
      document.getElementById('config-9').innerHTML = inv6;
      document.getElementById('price-2').innerHTML = formatPrice(inv6Price);
      let inv6img = document.getElementById('product-image');
      inv6img.src= "inverter6.png";
      inv6img.style.height = '300px';
      handle6Total = handle6Total - handle6Inverter + inv6Price
      document.getElementById('price-13').innerHTML = formatPrice(handle6Total);
    }
    
    function handlebat6(){
      document.getElementById('config-11').innerHTML = bat6;
      document.getElementById('price-3').innerHTML = formatPrice(bat6Price);
      let bat6img = document.getElementById('product-image-battery');
      bat6img.src = "battery6.png";
      bat6img.style.height = '300px';
      handleBattery6Total = handleBattery6Total - handle6Battery + bat6Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery6Total);
    }
    
    function handleinv7(){
      document.getElementById('config-9').innerHTML = inv7;
      document.getElementById('price-2').innerHTML = formatPrice(inv7Price);
      let inv7img = document.getElementById('product-image');
      inv7img.src= "inverter7.jpg";
      inv7img.style.height = '300px';
      handle7Total = handle7Total - handle7Inverter + inv7Price
      document.getElementById('price-13').innerHTML = formatPrice(handle7Total);
    }

    
    function handlebat7(){
      document.getElementById('config-11').innerHTML = bat7;
      document.getElementById('price-3').innerHTML = formatPrice(bat7Price);
      let bat7img = document.getElementById('product-image-battery');
      bat7img.src = "battery7.png";
      bat7img.style.height = '300px';
      handleBattery7Total = handleBattery7Total - handle7Battery + bat7Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery7Total);
    }
    
    function handleinv8(){
      document.getElementById('config-9').innerHTML = inv8;
      document.getElementById('price-2').innerHTML = formatPrice(inv8Price);
      let inv8img = document.getElementById('product-image');
      inv8img.src= "inverter8.png";
      inv8img.style.height = '300px';
      handle8Total = handle8Total - handle8Inverter + inv8Price
      document.getElementById('price-13').innerHTML = formatPrice(handle8Total);
    }

    
    function handlebat8(){
      document.getElementById('config-11').innerHTML = bat8;
      document.getElementById('price-3').innerHTML = formatPrice(bat8Price);
      let bat8img = document.getElementById('product-image-battery');
      bat8img.src = "battery8.jpg";
      bat8img.style.height = '300px';
      handleBattery8Total = handleBattery8Total - handle8Battery + bat8Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery8Total);
    }
    
    function handleinv9(){
      document.getElementById('config-9').innerHTML = inv9;
      document.getElementById('price-2').innerHTML = formatPrice(inv9Price);
      let inv9img = document.getElementById('product-image');
      inv9img.src= "inverter9.png";
      inv9img.style.height = '300px';
      handle9Total = handle9Total - handle9Inverter + inv9Price
      document.getElementById('price-13').innerHTML = formatPrice(handle9Total);
    }

    
    function handlebat9(){
      document.getElementById('config-11').innerHTML = bat9;
      document.getElementById('price-3').innerHTML = formatPrice(bat9Price);
      let bat9img = document.getElementById('product-image-battery');
      bat9img.src = "battery9.jpg";
      bat9img.style.height = '300px';
      handleBattery9Total = handleBattery9Total - handle9Battery + bat9Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery9Total);
    }
    
    function handleinv10(){
      document.getElementById('config-9').innerHTML = inv10;
      document.getElementById('price-2').innerHTML = formatPrice(inv10Price);
      let inv10img = document.getElementById('product-image');
      inv10img.src= "inverter10.jpg";
      inv10img.style.height = '300px';
      handle10Total = handle10Total - handle10Inverter + inv10Price
      document.getElementById('price-13').innerHTML = formatPrice(handle10Total);
    }

    
    function handlebat10(){
      document.getElementById('config-11').innerHTML = bat10;
      document.getElementById('price-3').innerHTML = formatPrice(bat10Price);
      let bat10img = document.getElementById('product-image-battery');
      bat10img.src = "battery10.jpeg";
      bat10img.style.height = '300px';
      handleBattery10Total = handleBattery10Total - handle10Battery + bat10Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery10Total);
    }
    
    function handleinv11(){
      document.getElementById('config-9').innerHTML = inv11;
      document.getElementById('price-2').innerHTML = formatPrice(inv11Price);
      let inv11img = document.getElementById('product-image');
      inv11img.src= "inverter11.png";
      inv11img.style.height = '300px';
      handle11Total = handle11Total - handle11Inverter + inv11Price
      document.getElementById('price-13').innerHTML = formatPrice(handle11Total);
    }

    
    function handlebat11(){
      document.getElementById('config-11').innerHTML = bat11;
      document.getElementById('price-3').innerHTML = formatPrice(bat11Price);
      let bat11img = document.getElementById('product-image-battery');
      bat11img.src = "battery11.jpg";
      bat11img.style.height = '300px';
      handleBattery11Total = handleBattery11Total - handle11Battery + bat11Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery11Total);
    }
    
    function handleinv12(){
      document.getElementById('config-9').innerHTML = inv12;
      document.getElementById('price-2').innerHTML = formatPrice(inv12Price);
      let inv12img = document.getElementById('product-image');
      inv12img.src= "inverter12.jpg";
      inv12img.style.height = '300px';
      handle12Total = handle12Total - handle12Inverter + inv12Price
      document.getElementById('price-13').innerHTML = formatPrice(handle12Total);
    }
    
    function handlebat12(){
      document.getElementById('config-11').innerHTML = bat12;
      document.getElementById('price-3').innerHTML = formatPrice(bat12Price);
      let bat12img = document.getElementById('product-image-battery');
      bat12img.src = "battery12.jpg";
      bat12img.style.height = '300px';
      handleBattery2Total = handleBattery12Total - handle12Battery + bat12Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery12Total);
    }

    
    function handlebat13(){
      document.getElementById('config-11').innerHTML = bat13;
      document.getElementById('price-3').innerHTML = formatPrice(bat13Price);
      let bat13img = document.getElementById('product-image-battery');
      bat13img.src = "battery13.jpg";
      bat13img.style.height = '300px';
      handleBattery13Total = handleBattery13Total - handle13Battery + bat13Price
      document.getElementById('price-13').innerHTML = formatPrice(handleBattery13Total);
    }



function calculate() {
    var bill = parseFloat(document.getElementById('bill').value);
    if (!bill || isNaN(bill)) {
        alert('Please enter your electrcity bill');
        return;
    }
    var days = parseInt(document.getElementById('month').value);
    var backbattery = parseFloat(document.getElementById('back-battery').value);
    var offgrid = parseFloat(document.getElementById('offgrid').value);
    var essential = parseFloat(document.getElementById('essential').value);
    var btnValue = parseInt(document.getElementById('btn-value').value);





  
    // Add the rest of your input fetches in a similar way
  
    // Perform the calculations here
    var monthlyKWH = Math.ceil(bill / 2.2);
    var dailyAvgKW = Math.ceil(monthlyKWH / days);
    var kwUsageLoadShed = Math.ceil(monthlyKWH / 0.75);
    var dailyKWHusage =  Math.ceil(kwUsageLoadShed / days);
    var hourlyUsage = Math.ceil(dailyKWHusage/22);
    var numMaxPanels = Math.ceil((((dailyKWHusage * 1000) / 6.5) /0.65) / 550);
    var panels = Math.ceil(numMaxPanels * offgrid);
    var generation = Math.ceil((((panels * 550) * 0.65) *6.5/ 1000));
  
    var inverter = "none";
    if (panels >= 1 && panels <= 8){
      inverter = inv2;
  
    } else if (panels > 8 && panels <= 12){
      inverter = "5KW Deye";
    } else if (panels > 12 && panels <= 19){
      inverter = "8KW Deye";
    } else if (panels > 19 && panels <= 22.7){
      inverter = "2x 5KW Deye";
    } else if (panels > 22.7 && panels <= 36) {
      inverter = "16KW Deye";
    } else{
      inverter= "Consult us";
    }
  
    var batteryStorage = Math.ceil((hourlyUsage * essential) * backbattery);
  
  var batteryModules = "none";
  if (batteryStorage > 0.5 && batteryStorage <= 4.3){
    batteryModules = "5.1KW";
  } else if (batteryStorage > 4.3 && batteryStorage <= 8.6){
    batteryModules = "2X 5.1KW";
  } else if (batteryStorage > 8.6 && batteryStorage <= 13){
    batteryModules = "3X 5.1KW";
  } else {
    batteryModules = "Consult us";
  }
  
  var genTotal = Math.ceil(generation / dailyKWHusage);
    // Continue the calculations
  

    document.getElementById('config-1').innerHTML = monthlyKWH;
    document.getElementById('config-2').innerHTML = dailyAvgKW;
    document.getElementById('config-3').innerHTML = kwUsageLoadShed;
    document.getElementById('config-4').innerHTML = dailyKWHusage;
    document.getElementById('config-5').innerHTML = hourlyUsage;
    document.getElementById('config-6').innerHTML = numMaxPanels;
    document.getElementById('config-7').innerHTML = panels;
    document.getElementById('config-8').innerHTML = generation;
    document.getElementById('config-9').innerHTML = inverter;
    document.getElementById('config-10').innerHTML = batteryStorage;
    document.getElementById('config-11').innerHTML = batteryModules;
    document.getElementById('config-12').innerHTML = genTotal;



  
    // Add the rest of your result updates
  
    // Now, let's do the quotation
  
    var panelPrice = 3695;
    var panelQuantity = panels;
    panelTotal = Math.ceil( panelPrice * panelQuantity * 1.25); //Adds the 25% markup
  

    var inverterQuantity = 0;
    if (inverter == inv2){
      inverterPrice = inv2Price;
      inverterQuantity = 1;
    } else if(inverter == "5KW Deye"){
      inverterPrice = 25999;
      inverterQuantity = 1;
    } else if (inverter == "8KW Deye"){
      inverterPrice = 39999;
      inverterQuantity = 1;
    } else if(inverter == "2x 5KW Deye"){
      inverterPrice = 25999;
      inverterQuantity = 2;
    } else if (inverter =="16KW Deye"){
      inverterPrice = 69666;
      inverterQuantity = 1;
    } else{
      inverterPrice = 0;
      inverterQuantity = 0;
    }
    inverterTotal = Math.ceil( inverterPrice * inverterQuantity * 1.25);
  
    var batteryPrice = 0;
    var batteryQuantity = 0;
    if (batteryModules == "5.1KW"){
      batteryPrice = 25799;
      batteryQuantity = 1;
    } else if (batteryModules == "2X 5.1KW"){
      batteryPrice = 25799;
      batteryQuantity = 2;
    } else if (batteryModules == "3X 5.1KW"){
      batteryPrice = 25799;
      batteryQuantity = 3;
    } else if (batteryModules == "Consult us"){
      batteryPrice = 0
      batteryQuantity = 0
    }
    batteryTotal = Math.ceil(batteryPrice * batteryQuantity * 1.25);
  
    var dbPrice = 1259;
    var dbQuantity = 1;
    dbTotal = Math.ceil(dbPrice * dbQuantity * 1.25);
  
    var invPrice = 2817.96;
    var invQuantity = inverterQuantity;
    invTotal = Math.ceil(invPrice * invQuantity * 1.25);
  
    var batPrice = 797.60;
    var batQuantity = batteryQuantity;
    batTotal = Math.ceil(batPrice * batQuantity);
  
    var mountingPrice = 586.40;
    var mountingQuantity = panels;
    mountingTotal = Math.ceil(mountingPrice * mountingQuantity * 1.25);
  
    var conduitPrice = 2929;
    var conduitQuantity = 1;
    conduitTotal = Math.ceil(conduitPrice * conduitQuantity * 1.25);
  
    var invInstallationPrice = 2500;
    var invInstallationQuantity = inverterQuantity;
    invInstallationTotal = Math.ceil(invInstallationPrice * invInstallationQuantity * 1.25);
  
    var batInstallPrice = 1500;
    var batInstallQuantity = batteryQuantity;
    batInstallTotal = Math.ceil(batInstallPrice * batInstallQuantity * 1.25);
  
    var dbSeperate = 3000;
    var dbSeperateQuantity = dbQuantity;
    dbSeperateTotal = Math.ceil(dbSeperate * dbSeperateQuantity * 1.25);
  
    var COC = 1700;
    var cocQuantity =1;
    cocTotal = Math.ceil(COC * cocQuantity * 1.25);
    
    Total = panelTotal + inverterTotal + batteryTotal + dbTotal + invTotal + batTotal + mountingTotal + conduitTotal + invInstallationTotal + batInstallTotal + dbSeperateTotal + cocTotal;

    handle1Inverter = inverterTotal;
    handle1Total = Total;
    handleBattery1Total = Total;
    handle1Battery = batteryTotal;

    handle2Inverter = inverterTotal;
    handle2Total = Total;
    handleBattery2Total = Total;
    handle2Battery = batteryTotal;

    handle3Inverter = inverterTotal;
    handle3Total = Total;
    handleBattery3Total = Total;
    handle3Battery = batteryTotal;

    handle4Inverter = inverterTotal;
    handle4Total = Total;
    handleBattery4Total = Total;
    handle4Battery = batteryTotal;

    handle5Inverter = inverterTotal;
    handle5Total = Total;
    handleBattery5Total = Total;
    handle5Battery = batteryTotal;

    handle6Inverter = inverterTotal;
    handle6Total = Total;
    handleBattery6Total = Total;
    handle6Battery = batteryTotal;

    handle7Inverter = inverterTotal;
    handle7Total = Total;
    handleBattery7Total = Total;
    handle7Battery = batteryTotal;

    handle8Inverter = inverterTotal;
    handle8Total = Total;
    handleBattery8Total = Total;
    handle8Battery = batteryTotal;

    handle9Inverter = inverterTotal;
    handle9Total = Total;
    handleBattery8Total = Total;
    handle9Battery = batteryTotal;

    handle10Inverter = inverterTotal;
    handle10Total = Total;
    handleBattery10Total = Total;
    handle10Battery = batteryTotal;

    handle11Inverter = inverterTotal;
    handle11Total = Total;
    handleBattery11Total = Total;
    handle11Battery = batteryTotal;

    handle12Inverter = inverterTotal;
    handle12Total = Total;
    handleBattery12Total = Total;
    handle12Battery = batteryTotal;

    handleBattery13Total = Total;
    handle13Battery = batteryTotal;

  
    // Perform similar calculations for the rest of the quote elements
  
    // Now let's update the quote section

    //"<br><br> Total Cost: R" +Total;

    document.getElementById('price-1').innerHTML = formatPrice(panelTotal);
    document.getElementById('price-2').innerHTML = formatPrice(inverterTotal);
    document.getElementById('price-3').innerHTML = formatPrice(batteryTotal);
    document.getElementById('price-4').innerHTML = formatPrice(dbTotal);
    document.getElementById('price-5').innerHTML = formatPrice(invTotal);
    document.getElementById('price-6').innerHTML = formatPrice(batTotal);
    document.getElementById('price-7').innerHTML = formatPrice(mountingTotal);
    document.getElementById('price-8').innerHTML = formatPrice(conduitTotal);
    document.getElementById('price-9').innerHTML = formatPrice(invInstallationTotal);
    document.getElementById('price-10').innerHTML = formatPrice(batInstallTotal);
    document.getElementById('price-11').innerHTML = formatPrice(dbSeperateTotal);
    document.getElementById('price-12').innerHTML = formatPrice(cocTotal);
    document.getElementById('price-13').innerHTML = formatPrice(Total);

    document.getElementById('btn-value').value = panels;

    document.getElementById('solution-name').innerHTML ="Your " +inverter + " Solar Solution";
    // Add the rest of your quote updates
  }

  function generatePDF() {
    document.getElementById("downloadPdfBtn").addEventListener("click", () => {
      // Get the panel area and total cost from the existing calculations
      const panelArea = document.getElementById("panelArea").innerText;
      const totalCost = document.getElementById("totalCost").innerText;

      // Create a new jsPDF instance
      const doc = new jsPDF();

      // Add your branding to the PDF
      const logo = new Image();
      logo.src = "path_to_your_logo.png"; // Replace with the path to your logo image
      const companyName = "Your Company Name"; // Replace with your company name

      // Position and size of the logo and company name
      const logoX = 20;
      const logoY = 20;
      const logoWidth = 40; // Adjust as needed
      const logoHeight = 40; // Adjust as needed

      const companyNameX = 80;
      const companyNameY = 40;

      doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
      doc.text(companyName, companyNameX, companyNameY);

      // Add content to the PDF (quote format)
      const quoteText = `Quote for Solar Panel Installation

Thank you for considering our solar panel installation service. Based on our calculations, your property requires solar panels covering an area of ${panelArea} square meters. The total cost for the installation is $${totalCost}.`;

      // Position of the quote text
      const quoteX = 20;
      const quoteY = 80;

      doc.text(quoteText, quoteX, quoteY);

      // Save the PDF with a specific name (e.g., "solar_panel_quote.pdf")
      doc.save("solar_panel_quote.pdf");
    });
  }


  document.getElementById('inv1-button').addEventListener('click',handleinv1);
  document.getElementById('inv2-button').addEventListener('click',handleinv2);
  document.getElementById('inv3-button').addEventListener('click',handleinv3);
  document.getElementById('inv4-button').addEventListener('click',handleinv4);
  document.getElementById('inv5-button').addEventListener('click',handleinv5);
  document.getElementById('inv6-button').addEventListener('click',handleinv6);
  document.getElementById('inv7-button').addEventListener('click',handleinv7);
  document.getElementById('inv8-button').addEventListener('click',handleinv8);
  document.getElementById('inv9-button').addEventListener('click',handleinv9);
  document.getElementById('inv10-button').addEventListener('click',handleinv10);
  document.getElementById('inv11-button').addEventListener('click',handleinv11);
  document.getElementById('inv12-button').addEventListener('click',handleinv12); 

  document.getElementById('bat1-button').addEventListener('click',handlebat1);
  document.getElementById('bat2-button').addEventListener('click',handlebat2);
  document.getElementById('bat3-button').addEventListener('click',handlebat3);
  document.getElementById('bat4-button').addEventListener('click',handlebat4);
  document.getElementById('bat5-button').addEventListener('click',handlebat5);
  document.getElementById('bat6-button').addEventListener('click',handlebat6);
  document.getElementById('bat7-button').addEventListener('click',handlebat7);
  document.getElementById('bat8-button').addEventListener('click',handlebat8);
  document.getElementById('bat9-button').addEventListener('click',handlebat9);
  document.getElementById('bat10-button').addEventListener('click',handlebat10);
  document.getElementById('bat11-button').addEventListener('click',handlebat11);
  document.getElementById('bat12-button').addEventListener('click',handlebat12);
  document.getElementById('bat13-button').addEventListener('click',handlebat13);





});

