let cvs = document.getElementById("canvas");
let ctx = cvs.getContext('2d');
let bird = new Image();
let PipeNorth = new Image();
let PipeSouth = new Image();
let background = new Image();
let fg = new Image();
let fail = new Audio();
let redbird = new Image();
background.src = "pic/background.png";
bird.src = "pic/bird.png";
redbird.src= "pic/bluebirdmy.png";
PipeNorth.src = "pic/Pipenorth.png";
PipeSouth.src = "pic/Pipesouth.png";
fg.src = "pic/fg.png";
fail.src = "Audio/fail.xspf"
let fgy = cvs.height-fg.height;
let gap = 125;
let constant = PipeNorth.height+gap;
let by = 150;
let bx = 10;
let score = 0;
gravity = 1.5;
    let pipe =[];
pipe[0] = {
    x: cvs.clientWidth,
    y:Math.floor(Math.random()*PipeNorth.height) - PipeNorth.height,
}

document.addEventListener("keydown",keydown,false);
function keydown() {
    by -= 45;
}
// the game die will show //



function draw() {
    ctx.drawImage(background,0,0,288,512);
    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(PipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(PipeSouth,pipe[i].x,pipe[i].y+constant);
        pipe[i].x--;
        if(pipe[i].x == 125) {
            pipe.push({
                x:cvs.clientWidth, 
                y:Math.floor(Math.random()*PipeNorth.height) - PipeNorth.height,
            })
        }
        if (by+bird.height >= fgy || (bx+bird.width >= pipe[i].x && bx+bird.width <= pipe[i].x + PipeNorth.width) && (by <= PipeNorth.height+pipe[i].y || by+bird.height >= pipe[i].y+constant)) {
           fail.play();
           location.reload();
           
          
        }
        if (bx+bird.width>=pipe[i].x + PipeNorth.width) {
            score = i+1;
        }
        if (score < 25) {
             ctx.drawImage(bird,bx,by);
        }
        else { bird=redbird}
        
        
    }
    ctx.drawImage(fg,0,fgy);
   
    by += gravity;
    ctx.fillText("SCORE : "+score,10,cvs.height-30);
// die //

    
    
    requestAnimationFrame(draw);
}
draw();
console.log(pipe[i].x);



  