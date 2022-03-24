canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x = 40;
player_y = 40;
player_object="";
block_image_object="";

//this functions is used to add image as a object to the canvas
function playerupdate() {
fabric.Image.fromURL("player.png",function(img){
    player_object=img;
player_object.scaleToWidth(100);
player_object.scaleToHeight(100);
player_object.set({
    top:player_y,left:player_x
});
canvas.add(player_object);
});

}

function imageupdate(get_image) {
    fabric.Image.fromURL(get_image,function(img){
        block_image_object=img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,left:player_x
    });
    canvas.add(block_image_object);
    });
    
    }
    console.log("***")
    window.addEventListener("keydown", my_keydown);
    function my_keydown(e)
    {
        console.log("keydown starts")
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(e.shiftKey == true && keyPressed == '80')
        {
            console.log("p and shift pressed together");
            block_image_width = block_image_width + 10;
            block_image_height = block_image_height + 10;
            document.getElementById("current_width").innerHTML = block_image_width;
            document.getElementById("current_height").innerHTML = block_image_height;
        }
        if(e.shiftKey == true && keyPressed == '77')
        {
            console.log("m and shift pressed together");
            block_image_width = block_image_width - 10;
            block_image_height = block_image_height - 10;
            document.getElementById("current_width").innerHTML = block_image_width;
            document.getElementById("current_height").innerHTML = block_image_height;
        }
         if(keyPressed == '38')
         {
             up();
             console.log("up");
         }
         if(keyPressed == '40')
         {
             down();
             console.log("down");
         }
         if(keyPressed == '37')
         {
             left();
             console.log("left");
         }
         if(keyPressed == '39')
         {
             right();
             console.log("right");
         }
         if(keyPressed == '87')
         {
            imageupdate('wall.jpg')
             console.log("w");
         }
         if(keyPressed == '71')
         {
            imageupdate('ground.png')
             console.log("g");
         }
         if(keyPressed == '76')
         {
            imageupdate('light_green.png')
             console.log("l");
         }
         if(keyPressed == '84')
         {
            imageupdate('trunk.jpg')
             console.log("t");
         }
         if(keyPressed == '82')
         {
            imageupdate('roof.jpg')
             console.log("r");
         }
         if(keyPressed == '89')
         {
            imageupdate('yellow_wall.png')
             console.log("y");
         }
         if(keyPressed == '68')
         {
            imageupdate('dark_green.png')
             console.log("d");
         }
         if(keyPressed == '85')
         {
            imageupdate('unique.png')
             console.log("u");
         }
         if(keyPressed == '67')
         {
            imageupdate('cloud.jpg')
             console.log("c");
         }
    }

    function up() {
    if(player_y > 0)
    {
        player_y = player_y - block_image_height;
        console.log("when up arrow is pressed x =" + player_x + " ,y =" + player_y );
        canvas.remove(player_object);
        playerupdate();
    }
    }

    function down() {
        if(player_y < 400)
        {
            player_y = player_y + block_image_height;
            console.log("when down arrow is pressed x =" + player_x + " ,y =" + player_y );
            canvas.remove(player_object);
            playerupdate();
        }
        }

        function left() {
            if(player_x > 0)
            {
                player_x = player_x - block_image_height;
                console.log("when left arrow is pressed x =" + player_x + " ,y =" + player_y );
                canvas.remove(player_object);
                playerupdate();
            }
            }

            function right() {
                if(player_x < 900)
                {
                    player_x = player_x + block_image_height;
                    console.log("when right arrow is pressed x =" + player_x + " ,y =" + player_y );
                    canvas.remove(player_object);
                    playerupdate();
                }
                }