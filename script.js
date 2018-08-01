//var a=document.querySelector("#main").innerHTML;
//console.log(a);

var varBold=document.querySelector("#boldButton");
var varItalic=document.querySelector("#italicButton");
var varlightweight=document.querySelector("#lightweightButton");
var varUpButton=document.querySelector("#upButton");
var varDownButton=document.querySelector("#downButton");

varBold.addEventListener("click",bold,false);
varItalic.addEventListener("click",italic,false);
varlightweight.addEventListener("click",lightweight,false);
varUpButton.addEventListener("click",big,false);
varDownButton.addEventListener("click",small,false);

function bold(){
    document.querySelector("#main").classList.toggle("font-weight-bold");
}

function italic(){
    document.querySelector("#main").classList.toggle("font-italic");
}

function lightweight(){
    document.querySelector("#main").classList.toggle("font-weight-light");
}

function big(){
    document.querySelector("#main").classList.add("display-4");
}

function small(){
    document.querySelector("#main").classList.remove("display-4");
}
