var micro = document.getElementById("microo");
var button = document.getElementById("aparecer");
var tatto = document.getElementById("tatuagem-area");
var button2 = document.getElementById("aparecer2")

button.addEventListener("click",function () {
    if (micro.style.display == "block") {
        micro.style.display = "none";
        button.textContent = "Saiba mais";
    } else {
        micro.style.display = "block";
        button.textContent = "Saiba menos";
    }

});
button2.addEventListener("click", function () {
    if (tatto.style.display == "block") {
        tatto.style.display = "none";
        button2.textContent = "Saiba mais";
    } else {
        tatto.style.display = "block";
        button2.textContent = "Saiba menos";
    }

});