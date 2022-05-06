const audioC = new Audio();
audioC.src = "audio/Click.mp3"

const audioR = new Audio();
audioR.src = "audio/SFX.mp3"



function OFClick(){
    document.getElementById("TextoMio").innerHTML = "🤨📸";
    var img = document.getElementById("FotoMia");
    img.src="img/Roca.png";
}

function DiscClick(){
    document.getElementById("DiscText").innerHTML = "SEBAS ZM#4552";
    var SebasDisc = document.getElementById("DiscText");
    SebasDisc.style=("color: blue;")
}

function PClick(){
    document.getElementById("PText").innerHTML = "914 698 165";
    var SebasP = document.getElementById("PText");
    SebasP.style=("color: blue;")
}