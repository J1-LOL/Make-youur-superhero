var canvas = new fabric.Canvas('myCanvas');
canvas.getContext("2d");

player_x = 10;
player_y = 10;
b_i_w = 30;
b_i_h = 30;
b_i_o = "";
var po = "";

function player_update(){
    
fabric.Image.fromURL("player.png", function(Img){
po= Img;

po.scaleToWidth(150);
po.scaleToHeight(140);
po.set({
    top:player_y,
    lef:player_x
});

canvas.add(po);

});

}

function new_image(get_image){
    
    fabric.Image.fromURL("player.png", function(Img){
    b_i_o= Img;

    b_i_o.scaleToWidth(150);
    b_i_o.scaleToHeight(140);
    b_i_o.set({
        top:player_y,
        lef:player_x
    });
    
    canvas.add(b_i_o);
    
    });

}

if (keyPressed == '70'){

    new_image('ironman_face.png');
    console.log("f");

}

if (keyPressed == '66'){

    new_image('spiderman_body.png');
    console.log("b");
    
}

if (keyPressed == '76'){

    new_image('hulk_legs.png');
    console.log("l");
    
}

if (keyPressed == '82'){

    new_image('thor_right_hand.png');
    console.log("r");
    
}

if (keyPressed == '72'){

    new_image('claws.png');
    console.log("h");
    
}

if (keyPressed == '38'){
        
    up();
    console.log("up");
}

if (keyPressed == '40'){
    
    down();
    console.log("down");
}

if (keyPressed == '39'){
    
    right();
    console.log("right");
}

if (keyPressed == '37'){
    
    left();
    console.log("left");
}

function up(){

    if (player_y >=0){

        player_y = player_y - b_i_h;
        console.log("Block Image Height = " + b_i_h);
        console.log("When up arrow is pressed, X =" + player_x + ", Y = " + player_y);
        canvas.remove(po);
        player_update();
    }

}

function down(){

    if (player_y <=500){

        player_y = player_y + b_i_h;
        console.log("Block Image Height = " + b_i_h);
        console.log("When down arrow is pressed, X =" + player_x + ", Y = " + player_y);
        canvas.remove(po);
        player_update();
    }

}

function left(){

    if (player_x >0){

        player_x = player_x - b_i_h;
        console.log("Block Image Width = " + b_i_w);
        console.log("When left arrow is pressed, X =" + player_x + ", Y = " + player_y);
        canvas.remove(po);
        player_update();
    }

}

function right(){

    if (player_x <=850){

        player_x = player_x + b_i_h;
        console.log("Block Image Width = " + b_i_w);
        console.log("When right arrow is pressed, X =" + player_x + ", Y = " + player_y);
        canvas.remove(po);
        player_update();
    }

}