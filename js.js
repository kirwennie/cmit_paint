var colorCircles = []
colorCircles[0] = document.getElementById("red")
colorCircles[1] = document.getElementById("blue")
colorCircles[2] = document.getElementById("green")
colorCircles[3] = document.getElementById("yellow")
colorCircles[4] = document.getElementById("cyan")
colorCircles[5] = document.getElementById("magenta")
colorCircles[6] = document.getElementById("black")
colorCircles[7] = document.getElementById("white")
colorCircles[8] = document.getElementById("purple")
colorCircles[9] = document.getElementById("grey")

var targetColor="#ff0000"
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";

var list=document.getElementById("list");
list.addEventListener("click", pickcolor);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawCanvas);

function pickcolor(e){
    console.log(e.target.tagName);
    if (e.target.tagName=="LI"){  
        if (e.target.id=="red"){
            targetColor="#ff0000"
        }

        else if (e.target.id=="blue"){
            targetColor="#0000ff"
        }

        else if (e.target.id=="green"){
            targetColor="#008000"
        }

        else if (e.target.id=="yellow"){
            targetColor="#ffff00"
        }

        else if (e.target.id=="cyan"){
            targetColor="#00ffff"
        }

        else if (e.target.id=="magenta"){
            targetColor="#ff00ff"
        }

        else if (e.target.id=="magenta"){
            targetColor="#ff00ff"
        }

        else if (e.target.id=="black"){
            targetColor="#000000"
        }

        else if (e.target.id=="white"){
            targetColor="#ffffff"
        }

        else if (e.target.id=="purple"){
            targetColor="#800080"
        }

        else if (e.target.id=="grey"){
            targetColor="#808080"
        }

        for (var i =0; i<=9; i++) {
            colorCircles[i].style.height="50px";
            colorCircles[i].style.width="50px";
        }
        e.target.style.height = "80px";
        e.target.style.width = "80px";
    }
}

function drawCanvas(e){
    if (e.which==1){
        canvasContext.beginPath();
        canvasContext.rect(e.offsetX, e.offsetY, 20, 20);
        canvasContext.strokeStyle=targetColor;
        canvasContext.stroke();
        canvasContext.lineWidth = 2;
    }
}





