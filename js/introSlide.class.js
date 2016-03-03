function IntroSlide(init){
  this.id = init.id;
  this.text = init.text.split("\n");
  this.duration = init.duration;
  this.loaded = false;
  this.noImage = init.noImage;


  this.image = new Image();
  this.image.onload = function(){
    intro.alertLoad()
  }
  this.image.src = "media/pictures/intro"+(this.id+1)+".jpg";

}

IntroSlide.prototype.render = function(){
  //Hintergrund schwarz färben
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(this.image, canvas.width/2 - 480, 50, 960, 540);
  //text zeichnen
  ctx.font = "32px AchtBit";
	ctx.fillStyle = 'white';
	ctx.textAlign = 'center';
  for (var i = 0; i < this.text.length; i++){
    this.renderLine(i,this.text[i])
  }
}

IntroSlide.prototype.renderLine = function(line,text){
  ctx.fillText(text,0.5*canvas.width,canvas.height - 260+40*line);
};
