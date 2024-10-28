

function focused(inp){
     inp.style.backgroundColor = "black";
     inp.style.color = "white"

    }


function blured(inp){
    inp.style.borderColor = "green";
    if(inp.value.length<4){
       inp.style.borderColor = "red";
    }
}

function bluredPass(inp){
    inp.style.borderColor = "green";
    if(inp.value.length<6 ){
       inp.style.borderColor = "red";
    }
    
}

var ps = document.getElementById("ps");

function show(pic){
    pic.src = "./eyeOpen.png"
    var see = ps.value;
    ps.type="text"
    ps.value = see;
}

function disable(dis){
    dis.src = "./eyeClose.png"
    ps.type="password"
}