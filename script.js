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

}


}


getMarketData();

setInterval(getMarketData,60000);
