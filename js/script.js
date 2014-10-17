var c, ctx, bollX = 100, bollY = 100, bollVX = 1, bollVY = 2;
var leftPlY = 100, rightPlY = 200, leftPlVY = 0, rightPlVY = 0;
var leftPlScore = 0, rightPlScore = 0;
var bgSound = new Howl({
    urls: ['sounds/sandstorm.mp3']
}).play();

function init() {
    c = document.getElementById("duk");
    ctx = c.getContext("2d");
    
    window.setInterval(update, 20)
}

function update() {
    //Sudda
    ctx.clearRect(0,0, c.width, c.height);
    
    //Måla boll
    ctx.beginPath();
    ctx.arc(bollX, bollY, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    
    //Måla paddlar
     ctx.fillRect(10, leftPlY, 10, 50)
     ctx.fillRect(380, rightPlY, 10, 50)
    
    //Flytta bollen
    bollX = bollX + bollVX;
    bollY = bollY + bollVY;
    
    //Flytta spelarna
    leftPlY = leftPlY + leftPlVY;
    rightPlY = rightPlY + rightPlVY;
    
    //Accellerera spelare
    leftPlVY = leftPlVY * 1;
    rightPlVY = rightPlVY * 1;
    
    //Studs
    if(bollY > 300){
        bollVY = -bollVY;
        bollY = 300;
    }if(bollY < 0){
        bollVY = -bollVY;
        bollY = 0;
    };
    
    if(bollX < 390 && bollX > 380 && bollY > rightPlY && bollY < rightPlY + 50){
        bollVX = -bollVX;
        bollX = 380;
    };
    
    if(bollX > 10 && bollX < 20 && bollY > leftPlY && bollY < leftPlY + 50){
        bollVX = -bollVX;
        bollX = 20;
    };
    
    //Stoppa paddlar i skärmkant    
    if(leftPlY > 250){
        leftPlVY = 0;
        leftPlY = 250;
    }else if(leftPlY < 0){
        leftPlVY = 0;
        leftPlY = 0;
    };
    
    if(rightPlY > 250){
        rightPlVY = 0;
        rightPlY = 250;
    }else if(rightPlY < 0){
        rightPlVY = 0;
        rightPlY = 0;
    };
    
    //Poäng
    if(bollX < 0){
        rightPlScore = rightPlScore + 1;
        document.getElementById("right").innerHTML = rightPlScore;
        bollX = 200;
    }
    
    if(bollX > 400){
        leftPlScore = leftPlScore + 1;
        document.getElementById("left").innerHTML = leftPlScore;
        bollX = 200;
    }
    
    
    
    
}

function keyDown(e){
    if(e.keyCode == 38){
        rightPlVY = -3;
    }else if(e.keyCode == 40){
        rightPlVY = 3;
    };
    
    if(e.keyCode == 87){
        leftPlVY = -3;
    }else if(e.keyCode == 83){
        leftPlVY = 3;
    };
}