function Tree(values){    //Bäume
  this.x = values.x;      //x-Koordinate des Aufpunktes
  this.y = values.y;      //y-Koordinate des Aufpunktes
  this.size = values.size;      //Größe (Radius) des Baumes
}

Tree.prototype.render = function(elapsedTime){      //Zeichenfunktion des Baumes
  ctx.save();

  ctx.beginPath();      //beginnt neuen Zeichenweg
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);      //Zeichenweg eines kompletten Kreises mit seinem Aufpunkt
                                                          //und seinem Radius  wird gespeichert und automatisch gezeichnet
  ctx.fillStyle = 'hsla(120,15%,30%,0.90)';      //Füllfarbe wird festgelegt
  ctx.fill();     //die gezeichnete Fläche wird gefüllt

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
