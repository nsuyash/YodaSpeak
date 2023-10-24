var btnTranslate = document.querySelector("#btn-click");
var txtInput = document.querySelector("#txt-Input");
var txtOutput = document.querySelector("#txt-Output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getRequestURL(text){
    return serverURL + "?text=" + text;
}

function clickEventListener(){
    var intputTxt = txtInput.value;

    fetch(getRequestURL(intputTxt))
        .then(response => response.json())
        .then(json => {
            txtOutput.innerText = json.contents.translated;
        })
        .catch(error => alert("Server is down, Try after some time..."))
}

btnTranslate.addEventListener("click", clickEventListener)