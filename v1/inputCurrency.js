var iQ;
var i;
let currency;
let money;

window.onload = () => {
    iQ = document.querySelectorAll("input[type='currency']").length;
    if(iQ != 0) {
        i = document.querySelectorAll("input[type='currency']").item(0);
        i.placeholder += "Sağ taraftan bir birim seçiniz...";
    }
}

function controlCurrency() {
    currency = document.getElementById("currency").value;
    money = i.value.toString();
    
    if( !isNaN(parseFloat(money.substr(1))) ){
        i.value = "";
        i.value = money;
    } else {
        i.value = currency;
    }
}