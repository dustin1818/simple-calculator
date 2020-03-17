function dis(val) {
    document.getElementById('resultInput').value += val;
    document.getElementById('resultInput').focus();
}

function eq(val) {
    let i = document.getElementById('resultInput').value;
    let r = eval(i);
    document.getElementById('resultInput').value = `${r}`;
}

function clearField() {
    document.getElementById('resultInput').value = "";
}

var keypress = document.getElementById('resultInput');
keypress.addEventListener('input', restrictToNumbers);
function restrictToNumbers () {
var newValue = this.value.replace(new RegExp(/[^\d\+\-\/\*\%\=]/), "");
this.value = newValue;
}
