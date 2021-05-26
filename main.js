var canvas = new fabric.Canvas('myCanvas')
var player_X = 10
var player_Y = 10
var block_img_width = 30
var block_img_height = 30
var block_object =""
var player_object = ""

function player_update(){
    fabric.Image.fromURL('player.png',function(Img){
        player_object = Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_Y,
            left:player_X
        })
        canvas.add(player_object);
    })
}
function new_img(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_object = Img
        block_object.scaleToWidth(block_img_width)
        block_object.scaleToHeight(block_img_height)
        block_object.set({
            top:player_Y,
            left:player_X
        })
        canvas.add(block_object);
    })
}
window.addEventListener('keydown',my_Keydown)
function my_Keydown(e){
    keypressed = e.keyCode
    if (e.shiftKey == true && keypressed == '80'){
        console.log('shift and p pressed')
        block_img_height = block_img_height +10
        block_img_width = block_img_width +10
        document.getElementById('canvas_width').innerHTML = block_img_width;
        document.getElementById('canvas_height').innerHTML = block_img_height
    }
    if (e.shiftKey == true && keypressed == '77'){
        console.log('shift and m pressed')
        block_img_height = block_img_height -10
        block_img_width = block_img_width -10
        document.getElementById('canvas_width').innerHTML = block_img_width;
        document.getElementById('canvas_height').innerHTML = block_img_height
    }

    if(keypressed == '38'){
        up()
        console.log("up arrow")
    }

    if(keypressed == '40'){
      down()
        console.log("down arrow")
    }
    if(keypressed == '37'){
        left()
          console.log("left arrow")
      }
      if(keypressed == '39'){
        right()
          console.log("right arrow")
      }
      if(keypressed == '67'){
        new_img("cloud.jpg")
          console.log("cloud")
      }
      if(keypressed == '68'){
        new_img("dark_green.png")
          console.log("d")
      }
      if(keypressed == '71'){
        new_img("ground.png")
          console.log("g")
      }
      if(keypressed == '76'){
        new_img("light_green.png")
          console.log("l")
      }
      if(keypressed == '82'){
        new_img("roof.jpg")
          console.log("r")
      }
      if(keypressed == '84'){
        new_img("trunk.jpg                       ")
          console.log("t")
      }
      if(keypressed == '85'){
        new_img("unique.png")
          console.log("u")
      }
      if(keypressed == '87'){
        new_img("wall.jpg")
          console.log("w")
      }
      if(keypressed == '89'){
        new_img("yellow_wall.png")
          console.log("y")
      }

}
function up(){
  if (player_Y>0){
    player_Y = player_Y-block_img_height
    canvas.remove(player_object)
    player_update()
  }
}
function down(){
  if (player_Y<500){
player_Y = player_Y + block_img_height
canvas.remove(player_object)
player_update()
  }
}
function right(){
  if (player_X<850){
    player_X = player_X + block_img_width
    canvas.remove(player_object)
    player_update()

  }
}
function left(){
  if (player_X>0){
    player_X = player_X - block_img_width
    canvas.remove(player_object)
    player_update()
  }
}

