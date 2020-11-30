var inputWrap = document.querySelector("#english_input");

var translateminion = document.querySelector("#translateminion");

var translatemandalorian = document.querySelector("#translatemandalorian")

var translatepirate = document.querySelector("#translatepirate")
var clearbtn = document.querySelector("#clearbtn");

var backdrop = document.querySelector(".backdrop");
var output = document.querySelector(".output");

translateminion.addEventListener("click", function handleEvent(){
    // fetch("	https://api.funtranslations.com/translate/minion.json?text="+inputWrap.value)

    // .then(res => res.json())
    // .then(translatedText => output.textContent = translatedText["contents"]["translated"]);
    backdrop.style.background = "url('./images/mini.png')";
    backdrop.style.backgroundSize = "contain";
    backdrop.style.backgroundRepeat = "no-repeat";
});

translatemandalorian.addEventListener("click", function handleEvent(){
    // fetch("	https://api.funtranslations.com/translate/mandalorian.json?text="+inputWrap.value)

    // .then(res => res.json())
    // .then(translatedText => output.textContent = translatedText["contents"]["translated"]);
    backdrop.style.background = "url('./images/mandalorian.png')";
    backdrop.style.backgroundSize = "cover";
    backdrop.style.backgroundRepeat = "no-repeat";
    backdrop.style.backgroundPosition = "center";
    backdrop.style.color = "white";
    output.style.color = "black";
});

translatepirate.addEventListener("click", function handleEvent(){
    fetch("	https://api.funtranslations.com/translate/pirate.json?text="+inputWrap.value)

    .then(res => res.json())
    .then(translatedText => output.textContent = translatedText["contents"]["translated"]);

    backdrop.style.background = "url('./images/pirates.png')";
    backdrop.style.backgroundSize = "cover";
    backdrop.style.backgroundRepeat = "no-repeat";
    backdrop.style.backgroundPosition = "center";

});

clearbtn.addEventListener("click", function handleEvent(){
    output.textContent = "";
});