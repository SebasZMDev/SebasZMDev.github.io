// ----------   SKILLSET ----------  // 

function skillHoverAnim() {
    
}


// ----------   PROYECTOS ----------  // 

let Nproy = 1
let chevronRight = () => {
    ++Nproy
    if (Nproy === 1) {
        document.getElementById("Proyecto1").style="visibility: visible;"
        document.getElementById("Proyecto2").style="visibility: hidden;"
        document.getElementById("Proyecto3").style="visibility: hidden;"
    }
    
    if (Nproy === 2) {
        document.getElementById("Proyecto1").style="visibility: hidden;"
        document.getElementById("Proyecto2").style="visibility: visible;"
        document.getElementById("Proyecto3").style="visibility: hidden;"
    }
    
    if (Nproy === 3) {
        document.getElementById("Proyecto1").style="visibility: hidden;"
        document.getElementById("Proyecto2").style="visibility: hidden;"
        document.getElementById("Proyecto3").style="visibility: visible;"
    }
    if (Nproy === 3) {
        Nproy = 0
    }
}
let chevronLeft = () => {
    --Nproy
    if (Nproy < 0) {
        Nproy = 2
    }
    if (Nproy === 3 || Nproy === 0) {
        document.getElementById("Proyecto1").style="visibility: hidden;"
        document.getElementById("Proyecto2").style="visibility: hidden;"
        document.getElementById("Proyecto3").style="visibility: visible;"
    }
    if (Nproy === 2) {
        document.getElementById("Proyecto1").style="visibility: hidden;"
        document.getElementById("Proyecto2").style="visibility: visible;"
        document.getElementById("Proyecto3").style="visibility: hidden;"
    }
    if (Nproy === 1) {
        document.getElementById("Proyecto1").style="visibility: visible;"
        document.getElementById("Proyecto2").style="visibility: hidden;"
        document.getElementById("Proyecto3").style="visibility: hidden;"
    }
}

function showInput() {
    var element = document.getElementById("hiddenInput");
    element.classList.remove("hidden")
}

function sendInput() {
    const valor = document.getElementById("hiddenInput").value
    console.log(valor)
    if (valor == "xd"){
        var element = document.getElementById("hiddenLinks");
        element.classList.remove("hidden")
    }
}
