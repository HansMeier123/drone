function Tree(values){
  this.x = values.x;
  this.y = values.y;
  this.size = values.size;
}

Tree.prototype.render = function(elapsedTime){
  ctx.save();

  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);

  ctx.fillStyle = 'hsla(120,15%,30%,0.90)';
  ctx.fill();

  ctx.restore();
}

Tree.prototype.serialize = function(mode){
  var space;
  if(mode == "asci"){
    space = "\n";
  } else {
    space = "<br>";
  }

  var output = space + "{";
  output += "x: " + this.x + ", ";
  output += "y: " + this.y + ", ";
  output += "size: " + this.size;
  output += "},";
  return output;
}
