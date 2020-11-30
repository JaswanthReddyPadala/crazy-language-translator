var inputWrap = document.querySelector("#english_input");

var main = document.querySelector('.main');

var trans = document.querySelector('.translator_wrap');

var mini = document.querySelector(".mini");
var pirate = document.querySelector(".pirate");

var translateminion = document.querySelector("#translateminion");

var translatemandalorian = document.querySelector("#translatemandalorian")

var translatepirate = document.querySelector("#translatepirate")
var clearbtn = document.querySelector("#clearbtn");

var backdrop = document.querySelector(".backdrop");
var output = document.querySelector(".output");

translateminion.addEventListener("click", function handleEvent(){
    fetch("	https://api.funtranslations.com/translate/minion.json?text="+inputWrap.value)

    .then(res => res.json())
    .then(translatedText => output.textContent = translatedText["contents"]["translated"]);
    backdrop.style.background = "url('./images/mini.png')";
    backdrop.style.backgroundSize = "contain";
    backdrop.style.backgroundPosition = "center";
    backdrop.style.backgroundRepeat = "no-repeat";
    main.style.background = "rgb(255, 255, 30)"
    main.style.color = "rgb(84, 96, 158)";
    main.style.fontFamily = "cursive";
    trans.style.fontFamily = "cursive";
    mini.style.display = "block";
    pirate.style.display = "none";
    document.querySelector(".main h1").style.fontSize = "2.2rem";
    document.querySelector(".input_wrap h1").style.fontSize = "1.6rem";
    document.querySelector(".input_wrap h1").style.letterSpacing = "2px";
});

translatemandalorian.addEventListener("click", function handleEvent(){
    fetch("	https://api.funtranslations.com/translate/mandalorian.json?text="+inputWrap.value)

    .then(res => res.json())
    .then(translatedText => output.textContent = translatedText["contents"]["translated"]);
    backdrop.style.background = "url('./images/mandalorian.png')";
    backdrop.style.backgroundSize = "cover";
    backdrop.style.backgroundRepeat = "no-repeat";
    backdrop.style.backgroundPosition = "center";
    backdrop.style.color = "white";
    main.style.background = "rgb(84, 96, 158)"
    main.style.color = "white";
    main.style.fontFamily = "'Texturina', serif";
    trans.style.fontFamily = "'Texturina', serif";
    mini.style.display = "none";
    pirate.style.display = "none";
    document.querySelector(".main h1").style.fontSize = "2.2rem";
    document.querySelector(".input_wrap h1").style.fontSize = "1.6rem";
});

translatepirate.addEventListener("click", function handleEvent(){
    fetch("	https://api.funtranslations.com/translate/pirate.json?text="+inputWrap.value)

    .then(res => res.json())
    .then(translatedText => output.textContent = translatedText["contents"]["translated"]);

    backdrop.style.background = "url('./images/pirates.png')";
    backdrop.style.backgroundSize = "cover";
    backdrop.style.backgroundRepeat = "no-repeat";
    backdrop.style.backgroundPosition = "center";
    main.style.background = "rgb(15, 15, 15)"
    main.style.color = "white";
    main.style.fontFamily = "'Major Mono Display', monospace";
    trans.style.fontFamily = "'Major Mono Display', monospace";
    document.querySelector(".main h1").style.fontSize = "2.2rem";
    document.querySelector(".input_wrap h1").style.fontSize = "1.5rem";
    mini.style.display = "none";
    pirate.style.display = "block";

});

clearbtn.addEventListener("click", function handleEvent(){
    output.textContent = "";
    inputWrap.value="";
    main.style.background = "rgb(15, 15, 15)"
    main.style.color = "white";
    main.style.fontFamily = "sans-serif";
    trans.style.fontFamily = "sans-serif";
    backdrop.style.background = "none";
    mini.style.display = "none";

});