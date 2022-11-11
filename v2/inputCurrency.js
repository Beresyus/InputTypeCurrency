var fInp = [];
var cSel = [];
let m = [];

window.onload = () => {
    cSel = Array.from(document.querySelectorAll("select[type='currency']"));
    fInp = Array.from(document.querySelectorAll("input[type='financial']"));

    fInp.forEach(function(fI) {
        fI.placeholder = "Sağ taraftan bir para birimi seçiniz...";
    });

    // add onchange handler every currency selector on web page.
    cSel.forEach(function(cS, cSi){
        cS.onchange = () => {
            if ( fInp[cSi].value != "" || fInp[cSi].value != undefined ) fInp[cSi].value = "";
            if ( m[cSi] == undefined ) m[cSi] = "0.00";
            fInp[cSi].value += cS.value + m[cSi];
            // add onchange handler every financial input tag on web page.
            fInp[cSi].onchange = () => {
                if (fInp[cSi].value == "" || fInp[cSi].value == undefined || isNaN(parseFloat(fInp[cSi].value.replace(/[^0-9.]/g, ''))) || !fInp[cSi].value.includes(cS.value) ) {
                    fInp[cSi].value = cS.value + m[cSi];
                } else {
                    m[cSi] = parseFloat(fInp[cSi].value.replace(/[^0-9.]/g, ''));
                }
            }
        }
    });
}