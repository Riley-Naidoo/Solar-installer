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
let inv1Price = 12499.00;
let inv1Max = 10;

let inv2 = "5 Kw Growatt 48V Hybrid Inverter";
let inv2Price = 13749.00;
let inv2Max = 10;

let inv3 = "5.5 Kw Luxpower Hybrid Inverter";
let inv3Price = 14374.00;
let inv3Max = 10;

let inv4 = "5 Kw Deye Hybrid Inverter";
let inv4Price = 24438.00;
let inv4Max = 14;


let inv5 = "5 Kw Sunsynk Hybrid Inverter";
let inv5Price = 30749.00;
let inv5Max = 14;

let inv6 = "8 Kw Deye Hybrid Inverter";
let inv6Price = 43689.00;
let inv6Max = 14;

let inv7 = "8 Kw Sunsynk Hybrid Inverter";
let inv7Price = 48249.00;
let inv7Max = 18;

let inv8 = "12 Kw Luxpower Hybrid Inverter";
let inv8Price = 58625.00;
let inv8Max = 21;

let inv9 = "12 Kw 3 Phase Deye Hybrid Inverter";
let inv9Price = 62375.00;
let inv9Max = 28;

let inv10 = "12 Kw 3 Phase Sunsynk Hybrid Inverter";
let inv10Price = 82499.00;
let inv10Max = 27;

let inv11 = "16 Kw Deye Hybrid Inverter";
let inv11Price = 87499.00;
let inv11Max = 37;

let inv12 = "16 Kw Sunsynk Hybrid Inverter"
let inv12Price = 87499.00;
let inv12Max = 32;

let inverterPrice = 0;

//Battery Pricing
let bat1 = "3.6 Kwh Dyness Li-Ion";
let bat1Price = 24999;

let bat2 = "5 Kwh Felicity Li-Ion";
let bat2Price = 27499.00;

let bat3 = "5.12 Kwh Dyness Li-Ion";
let bat3Price = 29374.00;

let bat4 = "4.96 Kwh Greenrich Li-Ion";
let bat4Price = 33750.00;

let bat5 = "5.12 Kwh Hubble AM-5 Li-Ion";
let bat5Price = 37375.00;

let bat6 = "5/4 Kwh Freedom One";
let bat6Price = 43749.00;

let bat7 = "8.7 Kwh Felicity Li-Ion";
let bat7Price = 48749.00;

let bat8 = "12.5 Kwh Felicity Li-Ion";
let bat8Price = 57499.00;

let bat9 = "10.24 Kwh Dyness Li-Ion";
let bat9Price = 63749.00;

let bat10 = "10 Kwh Hubble AM-5 Li-Ion";
let bat10Price = 92499.00;

let bat11 = "10/8 Kwh Freedom One";
let bat11Price = 74875.00;

let bat12 = "15/12 Kwh Freedom One";
let bat12Price = 111250.00;

let bat13 = "20/16 Kwh Freedom One";
let bat13Price = 146250.00;

let currentBatPrice = 0;
let currentBatName = "No Battery Selected"

let panelInstall = 500;
let totalPanelInstall = 0;

let mountingTotal = 0;
let panelChangePrice = 0;
let NewtotalPanelInstall = 0;
let newMountingTotal = 0;

let NewcurrentBatPrice = 0;

var batPrice = 797.60;
var batInstallPrice = 1500;

let rentalTotal = 0;

let currentInverterPrice = 0;
let currentInverterName = "No Inverter Selected";
let newCurrentInverterPrice = 0;






//function start

//function end


function increaseValue() {
  let maxPanels = parseInt(document.getElementById('num-panels').innerHTML); // Ensure maxPanels is an integer
  var input = document.getElementById('btn-value');
  var currentValue = parseInt(input.value);
  input.value = currentValue + 1;
  if (currentValue + 1 > maxPanels){
    input.style.backgroundColor = 'red';
  } else{
    input.style.backgroundColor = 'white';
  }

  document.getElementById('config-7').innerHTML = currentValue + 1; // Update config-7 with the new value


  let panelPrice = 4619;
  let panelNum = document.getElementById('config-7').innerHTML;
   panelChangePrice = panelPrice * panelNum;
   NewtotalPanelInstall = Math.ceil(panelNum * panelInstall * 1.25);
   newMountingTotal = panelNum * 733;
  Total = Total +5977;
  rentalTotal = Total * 0.0275;
  formattedRentalTotal = "R " + rentalTotal.toFixed(2);
  document.getElementById('rental-price').innerHTML = formattedRentalTotal;

  document.getElementById('price-1').innerHTML = formatPrice(panelChangePrice);
  document.getElementById('price-13').innerHTML = formatPrice(Total);
  document.getElementById('panel-cost').innerHTML = formatPrice(panelChangePrice)
  document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
  document.getElementById('price-14').innerHTML = formatPrice(NewtotalPanelInstall);
  document.getElementById('price-7').innerHTML = formatPrice(newMountingTotal);
}


function decreaseValue() {
  if (document.getElementById('btn-value').value > 0){
    let maxPanels = document.getElementById('num-panels').innerHTML;
    var input = document.getElementById('btn-value');
    var currentValue = parseInt(input.value);
    if (currentValue > 0) {
      input.value = currentValue - 1;
      if (currentValue-1 > maxPanels){
        input.style.backgroundColor = 'red';
      } else{
        input.style.backgroundColor = 'white';
      }
    }
    document.getElementById('config-7').innerHTML = currentValue - 1; // Update config-7 with the new value
  
    let panelPrice = 4619;
    let panelNum = document.getElementById('config-7').innerHTML;
    panelChangePrice = panelPrice * panelNum;
    NewtotalPanelInstall = Math.ceil(panelNum * panelInstall * 1.25);
    newMountingTotal = panelNum * 733;
    Total = Total - 5977;
    rentalTotal = Total * 0.0275;
    formattedRentalTotal = "R " + rentalTotal.toFixed(2);
    document.getElementById('rental-price').innerHTML = formattedRentalTotal;
    document.getElementById('price-1').innerHTML = formatPrice(panelChangePrice);
    document.getElementById('price-13').innerHTML = formatPrice(Total);
    document.getElementById('panel-cost').innerHTML = formatPrice(panelChangePrice)
    document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
    document.getElementById('price-14').innerHTML = formatPrice(NewtotalPanelInstall);
    document.getElementById('price-7').innerHTML = formatPrice(newMountingTotal);

  }else if (document.getElementById('btn-value').value < 0){
    alert("Please choose a value greater than 0");


  }

}

function increaseBatteryValue() {

  var input = document.getElementById('btn-value-battery');
  var currentValue = parseInt(input.value);
  input.value = currentValue + 1;
  NewcurrentBatPrice = currentBatPrice * document.getElementById('btn-value-battery').value
  document.getElementById('battery-price').innerHTML = formatPrice(NewcurrentBatPrice);
  document.getElementById('config-11').innerHTML = document.getElementById('btn-value-battery').value + "x" + " " + currentBatName; // Update config-7 with the new value
  document.getElementById('price-3').innerHTML = formatPrice(NewcurrentBatPrice);

  Total = Total + currentBatPrice;
  rentalTotal = Total * 0.0275;

  formattedRentalTotal = "R " + rentalTotal.toFixed(2);
  document.getElementById('rental-price').innerHTML = formattedRentalTotal;

  document.getElementById('price-13').innerHTML = formatPrice(Total);
  document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
}


function decreaseBatteryValue() {
  
  if (document.getElementById('btn-value-battery').value > 0){
    var input = document.getElementById('btn-value-battery');
    var currentValue = parseInt(input.value);
    input.value = currentValue - 1;
    NewcurrentBatPrice = currentBatPrice * document.getElementById('btn-value-battery').value;
    document.getElementById('battery-price').innerHTML = formatPrice(NewcurrentBatPrice);
    document.getElementById('config-11').innerHTML = document.getElementById('btn-value-battery').value + "x" + " " + currentBatName; // Update config-7 with the new value
    document.getElementById('price-3').innerHTML = formatPrice(NewcurrentBatPrice);
  
    Total = Total - batteryTotal;
    rentalTotal = Total * 0.0275;

    formattedRentalTotal = "R " + rentalTotal.toFixed(2);
    document.getElementById('rental-price').innerHTML = formattedRentalTotal;
  
    document.getElementById('price-13').innerHTML = formatPrice(Total);
    document.getElementById('bottombar-price').innerHTML = formatPrice(Total);

  } 
  else if (document.getElementById('btn-value-battery').value < 0){
    alert("Please choose a value greater than 0");

  }
}

function increaseInverterValue() {

  var input = document.getElementById('btn-value-inverter');
  var currentValue = parseInt(input.value);
  input.value = currentValue + 1;
  newCurrentInverterPrice = currentInverterPrice * document.getElementById('btn-value-inverter').value
  document.getElementById('inverter-price').innerHTML = formatPrice(newCurrentInverterPrice);
  document.getElementById('config-9').innerHTML = document.getElementById('btn-value-inverter').value + "x" + " " + currentInverterName; // Update config-7 with the new value
  document.getElementById('price-2').innerHTML = formatPrice(newCurrentInverterPrice);

  Total = Total + inverterTotal;
  rentalTotal = Total * 0.0275;

  formattedRentalTotal = "R " + rentalTotal.toFixed(2);
  document.getElementById('rental-price').innerHTML = formattedRentalTotal;

  document.getElementById('price-13').innerHTML = formatPrice(Total);
  document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
}


function decreaseInverterValue() {
  
  if (document.getElementById('btn-value-inverter').value > 0){
    var input = document.getElementById('btn-value-inverter');
    var currentValue = parseInt(input.value);
    input.value = currentValue - 1;
    newCurrentInverterPrice = currentInverterPrice * document.getElementById('btn-value-inverter').value;
    document.getElementById('inverter-price').innerHTML = formatPrice(newCurrentInverterPrice);
    document.getElementById('config-9').innerHTML = document.getElementById('btn-value-inverter').value + "x" + " " + currentInverterName; // Update config-7 with the new value
    document.getElementById('price-2').innerHTML = formatPrice(newCurrentInverterPrice);
  
    Total = Total - inverterTotal;
    rentalTotal = Total * 0.0275;

    formattedRentalTotal = "R " + rentalTotal.toFixed(2);
    document.getElementById('rental-price').innerHTML = formattedRentalTotal;
  
    document.getElementById('price-13').innerHTML = formatPrice(Total);
    document.getElementById('bottombar-price').innerHTML = formatPrice(Total);

  } 
  else if (document.getElementById('btn-value-battery').value < 0){
    alert("Please choose a value greater than 0");

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
      inv1img.src = "inverter1.png";
      inv1img.style.height = '300px';
      Total = Total - inverterTotal + inv1Price;
      inverterTotal = inv1Price;
      rentalTotal = Total * 0.0275;

      currentInverterName = inv1;
      currentInverterPrice = inv1Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv1Price - inverterTotal;
      inverterTotal = inv1Price;
      rentalTotal = Total * 0.0275;

      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv1;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv1Price);
      document.getElementById('num-panels').innerHTML = inv1Max;

      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter1.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 3.5KW Growatt Solar Solution"
      let inverter1Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter1Pdf.length; i++) {
        inverter1Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-1.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }

    function handlebat1(){
      document.getElementById('config-11').innerHTML = bat1;
      document.getElementById('price-3').innerHTML = formatPrice(bat1Price);
      let bat1img = document.getElementById('product-image-battery');
      bat1img.src = "battery1.png";
      bat1img.style.height = '300px';

      currentBatName = bat1;
      currentBatPrice = bat1Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total + bat1Price - batteryTotal;
      batteryTotal = bat1Price;
      rentalTotal = Total * 0.0275;

      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat1;
      document.getElementById('battery-price').innerHTML = formatPrice(bat1Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery1.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery1Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery1Pdf.length; i++) {
        battery1Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-1.pdf';
          window.open(pdfUrl, '_blank');
        };
      }



      

    }
    
  
    function handleinv2(){
      document.getElementById('config-9').innerHTML = inv2;
      document.getElementById('price-2').innerHTML = formatPrice(inv2Price);
      let inv2img = document.getElementById('product-image');
      inv2img.src= "inverter2.png";
      inv2img.style.height = '300px';
      Total = Total - inverterTotal + inv2Price;
      inverterTotal = inv2Price;
      batteryTotal = bat2Price;
      rentalTotal = Total * 0.0275;

      currentInverterName = inv2;
      currentInverterPrice = inv2Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv2Price - inverterTotal;
      inverterTotal = inv2Price;
      rentalTotal = Total * 0.0275;


      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv2;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv2Price);
      document.getElementById('num-panels').innerHTML = inv2Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter2.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 5KW Growatt Solar Solution";
      let inverter2Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter2Pdf.length; i++) {
        inverter2Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-2.pdf';
          window.open(pdfUrl, '_blank');
        };
      }

    }

    function handlebat2(){
      document.getElementById('config-11').innerHTML = bat2;
      document.getElementById('price-3').innerHTML = formatPrice(bat2Price);
      let bat2img = document.getElementById('product-image-battery');
      bat2img.src = "battery2.png";
      bat2img.style.height = '300px';

      currentBatName = bat2;
      currentBatPrice = bat2Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total + bat2Price - batteryTotal;
      batteryTotal = bat2Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat2;
      document.getElementById('battery-price').innerHTML = formatPrice(bat2Price);
      var overviewImage3 = document.getElementById('overview-image2');
      overviewImage3.style.backgroundImage = "url('battery4.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery2Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery2Pdf.length; i++) {
        battery2Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-2.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }
    
    function handleinv3(){
      document.getElementById('config-9').innerHTML = inv3;
      document.getElementById('price-2').innerHTML = formatPrice(inv3Price);
      let inv3img = document.getElementById('product-image');
      inv3img.src= "inverter3.png";
      inv3img.style.height = '300px';

      currentInverterName = inv3;
      currentInverterPrice = inv3Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv3Price - inverterTotal;
      inverterTotal = inv3Price;
      rentalTotal = Total * 0.0275;

      Total = Total - inverterTotal + inv3Price;
      inverterTotal = inv3Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv3;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv3Price);
      document.getElementById('num-panels').innerHTML = inv3Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter3.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 5.5KW Luxpower Solar Solution";
      let inverter3Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter3Pdf.length; i++) {
        inverter3Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-3.pdf';
          window.open(pdfUrl, '_blank');
        };
      }
    }

    
    function handlebat3(){
      document.getElementById('config-11').innerHTML = bat3;
      document.getElementById('price-3').innerHTML = formatPrice(bat3Price);
      let bat3img = document.getElementById('product-image-battery');
      bat3img.src = "battery3.png";
      bat3img.style.height = '300px';

      currentBatName = bat3;
      currentBatPrice = bat3Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total + bat3Price - batteryTotal;
      batteryTotal = bat3Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat3;
      document.getElementById('battery-price').innerHTML = formatPrice(bat3Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery3.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery3Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery3Pdf.length; i++) {
        battery3Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-3.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }
    
    function handleinv4(){
      document.getElementById('config-9').innerHTML = inv4;
      document.getElementById('price-2').innerHTML = formatPrice(inv4Price);
      let inv4img = document.getElementById('product-image');
      inv4img.src= "inverter4.png";
      inv4img.style.height = '300px';

      currentInverterName = inv4;
      currentInverterPrice = inv4Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv4Price - inverterTotal;
      inverterTotal = inv4Price;
      rentalTotal = Total * 0.0275;

      Total = Total - inverterTotal + inv4Price;
      inverterTotal = inv4Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv4;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv4Price);
      document.getElementById('num-panels').innerHTML = inv4Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter4.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 5KW Deye Solar Solution";
      let inverter4Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter4Pdf.length; i++) {
        inverter4Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-4.pdf';
          window.open(pdfUrl, '_blank');
        };
      }

    }

    
    function handlebat4(){
      document.getElementById('config-11').innerHTML = bat4;
      document.getElementById('price-3').innerHTML = formatPrice(bat4Price);
      let bat4img = document.getElementById('product-image-battery');
      bat4img.src = "battery4.png";
      bat4img.style.height = '300px';

      currentBatName = bat4;
      currentBatPrice = bat4Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total - batteryTotal + bat4Price;
      batteryTotal = bat4Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat4;
      document.getElementById('battery-price').innerHTML = formatPrice(bat4Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery4.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery4Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery4Pdf.length; i++) {
        battery4Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-4.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }
    
    function handleinv5(){
      document.getElementById('config-9').innerHTML = inv5;
      document.getElementById('price-2').innerHTML = formatPrice(inv5Price);
      let inv5img = document.getElementById('product-image');
      inv5img.src= "inverter5.png";
      inv5img.style.height = '300px';

      currentInverterName = inv5;
      currentInverterPrice = inv5Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv5Price - inverterTotal;
      inverterTotal = inv5Price;
      rentalTotal = Total * 0.0275;

      Total = Total - inverterTotal + inv5Price;
      inverterTotal = inv5Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv5;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv5Price);
      document.getElementById('num-panels').innerHTML = inv5Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter5.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 5KW Sunsynk Solar Solution";
      let inverter5Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter5Pdf.length; i++) {
        inverter5Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-5.pdf';
          window.open(pdfUrl, '_blank');
        };
      }

    }

    
    function handlebat5(){
      document.getElementById('config-11').innerHTML = bat5;
      document.getElementById('price-3').innerHTML = formatPrice(bat5Price);
      let bat5img = document.getElementById('product-image-battery');
      bat5img.src = "battery5.png";
      bat5img.style.height = '300px';

      currentBatName = bat5;
      currentBatPrice = bat5Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total - batteryTotal + bat5Price;
      batteryTotal = bat5Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat5;
      document.getElementById('battery-price').innerHTML = formatPrice(bat5Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery5.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery5Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery5Pdf.length; i++) {
        battery5Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-5.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }
    
    function handleinv6(){
      document.getElementById('config-9').innerHTML = inv6;
      document.getElementById('price-2').innerHTML = formatPrice(inv6Price);
      let inv6img = document.getElementById('product-image');
      inv6img.src= "inverter6.png";
      inv6img.style.height = '300px';

      currentInverterName = inv6;
      currentInverterPrice = inv6Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv6Price - inverterTotal;
      inverterTotal = inv6Price;
      rentalTotal = Total * 0.0275;

      Total = Total - inverterTotal + inv6Price;
      inverterTotal = inv6Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv6;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv6Price);
      document.getElementById('num-panels').innerHTML = inv6Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter6.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 8KW Deye Solar Solution";
      let inverter6Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter6Pdf.length; i++) {
        inverter6Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-6.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }
    
    function handlebat6(){
      document.getElementById('config-11').innerHTML = bat6;
      document.getElementById('price-3').innerHTML = formatPrice(bat6Price);
      let bat6img = document.getElementById('product-image-battery');
      bat6img.src = "battery6.png";
      bat6img.style.height = '300px';

      currentBatName = bat6;
      currentBatPrice = bat6Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total - batteryTotal + bat6Price;
      batteryTotal = bat6Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat6;
      document.getElementById('battery-price').innerHTML = formatPrice(bat6Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery6.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery6Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery6Pdf.length; i++) {
        battery6Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-6.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }
    
    function handleinv7(){
      document.getElementById('config-9').innerHTML = inv7;
      document.getElementById('price-2').innerHTML = formatPrice(inv7Price);
      let inv7img = document.getElementById('product-image');
      inv7img.src= "inverter7.png";
      inv7img.style.height = '300px';

      currentInverterName = inv7;
      currentInverterPrice = inv7Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv7Price - inverterTotal;
      inverterTotal = inv7Price;
      rentalTotal = Total * 0.0275;

      Total = Total - inverterTotal + inv7Price;
      batteryTotal = bat7Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv7;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv7Price);
      document.getElementById('num-panels').innerHTML = inv7Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter7.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 8KW Sunsynk Solar Solution";
      let inverter7Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter7Pdf.length; i++) {
        inverter7Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-7.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }

    
    function handlebat7(){
      document.getElementById('config-11').innerHTML = bat7;
      document.getElementById('price-3').innerHTML = formatPrice(bat7Price);
      let bat7img = document.getElementById('product-image-battery');
      bat7img.src = "battery7.png";
      bat7img.style.height = '300px';


      currentBatName = bat7;
      currentBatPrice = bat7Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total - batteryTotal + bat7Price;
      batteryTotal = bat7Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat7;
      document.getElementById('battery-price').innerHTML = formatPrice(bat7Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery7.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery7Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery7Pdf.length; i++) {
        battery7Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-7.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }
    
    function handleinv8(){
      document.getElementById('config-9').innerHTML = inv8;
      document.getElementById('price-2').innerHTML = formatPrice(inv8Price);
      let inv8img = document.getElementById('product-image');
      inv8img.src= "inverter8.png";
      inv8img.style.height = '300px';

      currentInverterName = inv8;
      currentInverterPrice = inv8Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv8Price - inverterTotal;
      inverterTotal = inv8Price;
      rentalTotal = Total * 0.0275;

      Total = Total - inverterTotal + inv8Price;
      inverterTotal = inv8Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv8;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv8Price);
      document.getElementById('num-panels').innerHTML = inv8Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter8.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 12KW Luxpower Solar Solution";
      let inverter8Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter8Pdf.length; i++) {
        inverter8Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-8.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }

    
    function handlebat8(){
      document.getElementById('config-11').innerHTML = bat8;
      document.getElementById('price-3').innerHTML = formatPrice(bat8Price);
      let bat8img = document.getElementById('product-image-battery');
      bat8img.src = "battery8.png";
      bat8img.style.height = '300px';

      currentBatName = bat8;
      currentBatPrice = bat8Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total - batteryTotal + bat8Price;
      batteryTotal = bat8Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat8;
      document.getElementById('battery-price').innerHTML = formatPrice(bat8Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery8.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery8Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery8Pdf.length; i++) {
        battery8Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-8.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }
    
    function handleinv9(){
      document.getElementById('config-9').innerHTML = inv9;
      document.getElementById('price-2').innerHTML = formatPrice(inv9Price);
      let inv9img = document.getElementById('product-image');
      inv9img.src= "inverter9.png";
      inv9img.style.height = '300px';

      currentInverterName = inv9;
      currentInverterPrice = inv9Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv9Price - inverterTotal;
      inverterTotal = inv9Price;
      rentalTotal = Total * 0.0275;

      Total = Total - inverterTotal + inv9Price;
      inverterTotal = inv9Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv9;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv9Price);
      document.getElementById('num-panels').innerHTML = inv9Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter9.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 5KW Deye Solar Solution";
      let inverter9Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter9Pdf.length; i++) {
        inverter9Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-9.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }

    
    function handlebat9(){
      document.getElementById('config-11').innerHTML = bat9;
      document.getElementById('price-3').innerHTML = formatPrice(bat9Price);
      let bat9img = document.getElementById('product-image-battery');
      bat9img.src = "battery9.png";
      bat9img.style.height = '300px';

      currentBatName = bat9;
      currentBatPrice = bat9Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total - batteryTotal + bat9Price;
      batteryTotal = bat9Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat9;
      document.getElementById('battery-price').innerHTML = formatPrice(bat9Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery9.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery9Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery9Pdf.length; i++) {
        battery9Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-9.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }
    
    function handleinv10(){
      document.getElementById('config-9').innerHTML = inv10;
      document.getElementById('price-2').innerHTML = formatPrice(inv10Price);
      let inv10img = document.getElementById('product-image');
      inv10img.src= "inverter10.png";
      inv10img.style.height = '300px';

      currentInverterName = inv10;
      currentInverterPrice = inv10Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv10Price - inverterTotal;
      inverterTotal = inv10Price;
      rentalTotal = Total * 0.0275;

      Total = Total - inverterTotal + inv10Price;
      inverterTotal = inv10Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv10;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv10Price);
      document.getElementById('num-panels').innerHTML = inv10Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter10.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 12KW Sunsynk Solar Solution";
      let inverter10Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter10Pdf.length; i++) {
        inverter10Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-10.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }

    
    function handlebat10(){
      document.getElementById('config-11').innerHTML = bat10;
      document.getElementById('price-3').innerHTML = formatPrice(bat10Price);
      let bat10img = document.getElementById('product-image-battery');
      bat10img.src = "battery10.png";
      bat10img.style.height = '300px';

      currentBatName = bat10;
      currentBatPrice = bat10Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total - batteryTotal + bat10Price;
      batteryTotal = bat10Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat10;
      document.getElementById('battery-price').innerHTML = formatPrice(bat10Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery10.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery10Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery10Pdf.length; i++) {
        battery10Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-10.pdf';
          window.open(pdfUrl, '_blank');
        };
      }

    }
    
    function handleinv11(){
      document.getElementById('config-9').innerHTML = inv11;
      document.getElementById('price-2').innerHTML = formatPrice(inv11Price);
      let inv11img = document.getElementById('product-image');
      inv11img.src= "inverter11.png";
      inv11img.style.height = '300px';

      currentInverterName = inv11;
      currentInverterPrice = inv11Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv11Price - inverterTotal;
      inverterTotal = inv11Price;
      rentalTotal = Total * 0.0275;

      Total = Total - inverterTotal + inv11Price;
      inverterTotal = inv11Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv11;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv11Price);
      document.getElementById('num-panels').innerHTML = inv11Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter11.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 16KW Deye Solar Solution";
      let inverter11Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter11Pdf.length; i++) {
        inverter11Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-11.pdf';
          window.open(pdfUrl, '_blank');
        };
      }


    }

    
    function handlebat11(){
      document.getElementById('config-11').innerHTML = bat11;
      document.getElementById('price-3').innerHTML = formatPrice(bat11Price);
      let bat11img = document.getElementById('product-image-battery');
      bat11img.src = "battery11.png";
      bat11img.style.height = '300px';

      currentBatName = bat11;
      currentBatPrice = bat11Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total - batteryTotal + bat11Price;
      batteryTotal = bat11Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat11;
      document.getElementById('battery-price').innerHTML = formatPrice(bat11Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery11.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery11Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery11Pdf.length; i++) {
        battery11Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-11.pdf';
          window.open(pdfUrl, '_blank');
        };
      }

    }
    
    function handleinv12(){
      document.getElementById('config-9').innerHTML = inv12;
      document.getElementById('price-2').innerHTML = formatPrice(inv12Price);
      let inv12img = document.getElementById('product-image');
      inv12img.src= "inverter12.png";
      inv12img.style.height = '300px';

      currentInverterName = inv12;
      currentInverterPrice = inv12Price;
      document.getElementById('btn-value-inverter').value = 1;

      Total = Total + inv12Price - inverterTotal;
      inverterTotal = inv12Price;
      rentalTotal = Total * 0.0275;

      Total = Total - inverterTotal + inv12Price;
      inverterTotal = inv12Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-inverter').innerHTML = inv12;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv12Price);
      document.getElementById('num-panels').innerHTML = inv2Max;
      var overviewImage2 = document.getElementById('overview-image2');
      overviewImage2.style.backgroundImage = "url('inverter12.png')";
      overviewImage2.style.width = '300px';
      overviewImage2.style.height = '300px';
      overviewImage2.style.backgroundSize = 'contain';
      document.getElementById('solution-name').innerHTML = "Your 16KW Sunsynk Solar Solution";
      let inverter12Pdf = document.getElementsByClassName('inverter-pdf');

      for (let i = 0; i < inverter12Pdf.length; i++) {
        inverter12Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'inverter-12.pdf';
          window.open(pdfUrl, '_blank');
        };
      }

    }
    
    function handlebat12(){
      document.getElementById('config-11').innerHTML = bat12;
      document.getElementById('price-3').innerHTML = formatPrice(bat12Price);
      let bat12img = document.getElementById('product-image-battery');
      bat12img.src = "battery12.png";
      bat12img.style.height = '300px';

      currentBatName = bat12;
      currentBatPrice = bat12Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total - batteryTotal + bat12Price;
      batteryTotal = bat12Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat12;
      document.getElementById('battery-price').innerHTML = formatPrice(bat12Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery12.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery12Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery12Pdf.length; i++) {
        battery12Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-12.pdf';
          window.open(pdfUrl, '_blank');
        };
      }

    }

    
    function handlebat13(){
      document.getElementById('config-11').innerHTML = bat13;
      document.getElementById('price-3').innerHTML = formatPrice(bat13Price);
      let bat13img = document.getElementById('product-image-battery');
      bat13img.src = "battery13.png";
      bat13img.style.height = '300px';

      currentBatName = bat13;
      currentBatPrice = bat13Price;
      document.getElementById('btn-value-battery').value = 1;

      Total = Total - batteryTotal + bat13Price;
      batteryTotal = bat13Price;
      rentalTotal = Total * 0.0275;
      formattedRentalTotal = "R " + rentalTotal.toFixed(2);
      document.getElementById('rental-price').innerHTML = formattedRentalTotal;
      document.getElementById('price-13').innerHTML = formatPrice(Total);
      document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
      document.getElementById('selected-battery').innerHTML = bat13;
      document.getElementById('battery-price').innerHTML = formatPrice(bat13Price);
      var overviewImage3 = document.getElementById('overview-image3');
      overviewImage3.style.backgroundImage = "url('battery13.png')";
      overviewImage3.style.width = '300px';
      overviewImage3.style.height = '300px';
      overviewImage3.style.backgroundSize = 'contain';
      let battery13Pdf = document.getElementsByClassName('battery-pdf');

      for (let i = 0; i < battery13Pdf.length; i++) {
        battery13Pdf[i].onclick = function() {
          // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
          let pdfUrl = 'battery-13.pdf';
          window.open(pdfUrl, '_blank');
        };
      }

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
  
    var panelPrice = 4619;
    var panelQuantity = panels;
    panelTotal = Math.ceil( 4619 * panelQuantity ); //Adds the 25% markup
    totalPanelInstall = Math.ceil(panelQuantity * panelInstall * 1.25);
  

    var inverterQuantity = 0;
    if (inverter == inv2){
      document.getElementById('selected-inverter').innerHTML = inv2;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv2Price);
      document.getElementById('num-panels').innerHTML = inv2Max;

      var inverterImage = document.getElementById('product-image');
      inverterImage.src = "inverter2.png";
      inverterImage.style.width = '300px';
      inverterImage.style.height = '300px';
      inverterImage.style.backgroundSize = 'contain';


      inverterPrice = inv2Price;
      inverterQuantity = 1;
    } else if(inverter == "5KW Deye"){
      document.getElementById('selected-inverter').innerHTML = inv4;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv4Price);
      document.getElementById('num-panels').innerHTML = inv4Max;

      var inverterImage = document.getElementById('product-image');
      inverterImage.src = "inverter4.png";
      inverterImage.style.width = '300px';
      inverterImage.style.height = '300px';
      inverterImage.style.backgroundSize = 'contain';


      inverterPrice = inv4Price;
      inverterQuantity = 1;
    } else if (inverter == "8KW Deye"){
      document.getElementById('selected-inverter').innerHTML = inv6;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv6Price);
      document.getElementById('num-panels').innerHTML = inv6Max;

      var inverterImage = document.getElementById('product-image');
      inverterImage.src = "inverter6.png";
      inverterImage.style.width = '300px';
      inverterImage.style.height = '300px';
      inverterImage.style.backgroundSize = 'contain';


      inverterPrice = inv6Price;
      inverterQuantity = 1;
    } else if(inverter == "2x 5KW Deye"){
      document.getElementById('selected-inverter').innerHTML = inv4;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv4Price);
      document.getElementById('num-panels').innerHTML = inv4Max;

      var inverterImage = document.getElementById('product-image');
      inverterImage.src = "inverter4.png";
      inverterImage.style.width = '300px';
      inverterImage.style.height = '300px';
      inverterImage.style.backgroundSize = 'contain';

      inverterPrice = inv4Price;
      inverterQuantity = 2;
    } else if (inverter =="16KW Deye"){
      document.getElementById('selected-inverter').innerHTML = inv11;
      document.getElementById('inverter-price').innerHTML = formatPrice(inv11Price);
      document.getElementById('num-panels').innerHTML = inv11Max;

      var inverterImage = document.getElementById('product-image');
      inverterImage.src = "inverter11.png";
      inverterImage.style.width = '300px';
      inverterImage.style.height = '300px';
      inverterImage.style.backgroundSize = 'contain';


      inverterPrice = inv11Price;
      inverterQuantity = 1;
    } else{
      inverterPrice = 0;
      inverterQuantity = 0;
    }
    inverterTotal = Math.ceil( inverterPrice * inverterQuantity * 1.25);
  
    var batteryPrice = 0;
    var batteryQuantity = 0;
    if (batteryModules == "5.1KW"){
      document.getElementById('selected-battery').innerHTML = bat3; 
      var batteryImage = document.getElementById('product-image-battery');
      batteryImage.src = "battery3.png";
      batteryImage.style.width = '300px';
      batteryImage.style.height = '300px';
      batteryImage.style.backgroundSize = 'contain';

      currentBatPrice = bat3Price;

      batteryPrice = bat3Price;
      batteryQuantity = 1;
      document.getElementById('btn-value-battery').value = 1;
    } else if (batteryModules == "2X 5.1KW"){
      document.getElementById('selected-battery').innerHTML = bat3; 

      var batteryImage = document.getElementById('product-image-battery');
      batteryImage.src = "battery3.png";
      batteryImage.style.width = '300px';
      batteryImage.style.height = '300px';
      batteryImage.style.backgroundSize = 'contain';
      currentBatPrice = bat3Price;


      batteryPrice = bat3Price;
      batteryQuantity = 2;
      document.getElementById('btn-value-battery').value = 2;
    } else if (batteryModules == "3X 5.1KW"){
      document.getElementById('selected-battery').innerHTML = bat3; 

      var batteryImage = document.getElementById('product-image-battery');
      batteryImage.src = "battery3.png";
      batteryImage.style.width = '300px';
      batteryImage.style.height = '300px';
      batteryImage.style.backgroundSize = 'contain';
      currentBatPrice = bat3Price;


      batteryPrice = bat3Price;
      batteryQuantity = 3;
      document.getElementById('btn-value-battery').value = 3;
    } else if (batteryModules == "Consult us"){
      document.getElementById('selected-battery').innerHTML = "Consult Us"; 

      batteryPrice = 0
      batteryQuantity = 0
    }
    batteryTotal = Math.ceil(batteryPrice * batteryQuantity);
    document.getElementById('battery-price').innerHTML = formatPrice(batteryTotal);
  
    var dbPrice = 1259;
    var dbQuantity = 1;
    let dbTotal = Math.ceil(dbPrice * dbQuantity * 1.25);
  
    var invPrice = 2817.96;
    var invQuantity = inverterQuantity;
    invTotal = Math.ceil(invPrice * invQuantity * 1.25);
  
    batPrice = 797.60;
    var batQuantity = batteryQuantity;
    let batTotal = Math.ceil(batPrice * batQuantity * 1.25);
  
    var mountingPrice = 586.40;
    var mountingQuantity = panelQuantity;
    mountingTotal = Math.ceil(mountingPrice * panelQuantity * 1.25);
  
    var conduitPrice = 2929;
    var conduitQuantity = 1;
    conduitTotal = Math.ceil(conduitPrice * conduitQuantity * 1.25);
  
    var invInstallationPrice = 2500;
    var invInstallationQuantity = inverterQuantity;
    invInstallationTotal = Math.ceil(invInstallationPrice * invInstallationQuantity * 1.25);
  
    batInstallPrice = 1500;
    var batInstallQuantity = batteryQuantity;
    batInstallTotal = Math.ceil(batInstallPrice * batInstallQuantity * 1.25);
  
    var dbSeperate = 3000;
    var dbSeperateQuantity = dbQuantity;
    let dbSeperateTotal = Math.ceil(dbSeperate * dbSeperateQuantity * 1.25);
  
    var COC = 1700;
    var cocQuantity =1;
    cocTotal = Math.ceil(COC * cocQuantity * 1.25);
    
    Total = totalPanelInstall + panelTotal + inverterTotal + batteryTotal + dbTotal + invTotal + batTotal + mountingTotal + conduitTotal + invInstallationTotal + batInstallTotal + dbSeperateTotal + cocTotal;

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
    document.getElementById('price-14').innerHTML = formatPrice(totalPanelInstall);

    rentalTotal = Total * 0.0275;

    document.getElementById('bottombar-price').innerHTML = formatPrice(Total);
    formattedRentalTotal = "R " + rentalTotal.toFixed(2);
    document.getElementById('rental-price').innerHTML = formattedRentalTotal;


    document.getElementById('btn-value').value = panels;

    document.getElementById('solution-name').innerHTML ="Your " +inverter + " Solar Solution";
    document.getElementById('selected-inverter').innerHTML = inv3;
    document.getElementById('inverter-price').innerHTML = formatPrice(inv3Price);
    document.getElementById('num-panels').innerHTML = inv3Max;
    const productImageBattery = document.getElementById('product-image-battery');

    productImageBattery.setAttribute('src', 'battery3.png');
    productImageBattery.style.width = '300px';
    productImageBattery.style.height = '300px';

    var overviewImage3 = document.getElementById('overview-image3');
    overviewImage3.style.backgroundImage = "url('battery3.png')";
    overviewImage3.style.width = '300px';
    overviewImage3.style.height = '300px';
    overviewImage3.style.backgroundSize = 'contain';

    
    document.getElementById('selected-battery').innerHTML = bat3;
    currentBatName = bat3;
    currentBatPrice = bat3Price;
    let battery3Pdf = document.getElementsByClassName('battery-pdf');
    for (let i = 0; i < battery3Pdf.length; i++) {
      battery3Pdf[i].onclick = function() {
        // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
        let pdfUrl = 'battery-3.pdf';
        window.open(pdfUrl, '_blank');
      };
    }

    let inverter3Pdf = document.getElementsByClassName('inverter-pdf');
    for (let i = 0; i < inverter3Pdf.length; i++) {
      inverter3Pdf[i].onclick = function() {
        // You can replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
        let pdfUrl = 'inverter-3.pdf';
        window.open(pdfUrl, '_blank');
      };
    }

    document.getElementById('panel-cost').innerHTML = formatPrice(panelTotal);
    document.getElementById('bottombar-price').innerHTML = formatPrice(Total);


    // Add the rest of your quote updates
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

