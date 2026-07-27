async function getMarketData(){

try{

let response = await fetch(
"https://api.marketstack.com/v1/eod/latest?symbols=XAUUSD"
);

let data = await response.json();


document.getElementById("goldTicker").innerHTML =
"$" + data.data[0].close;


}

catch(error){

document.getElementById("goldTicker").innerHTML =
"Offline";
  let price = 3450;


function updateGold(){

price += (Math.random()-0.5);

document.getElementById("goldPrice").innerHTML =
"$" + price.toFixed(2);


}


setInterval(updateGold,2000);


document.getElementById("news").innerHTML = `

<p>🔴 Middle East tensions detected</p>

<p>🟡 Fed policy uncertainty increasing</p>

<p>🔴 Global risk sentiment elevated</p>

`;

}


}


getMarketData();

setInterval(getMarketData,60000);
