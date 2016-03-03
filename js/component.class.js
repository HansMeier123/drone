function Component(values){     //Komponenten
  this.x = values.x;      //x-Koordinate des Aufpunktes
  this.y = values.y;      //y-Koordinate des Aufpunktes
  this.width = values.width;      //Breite des Komonenten
  this.height = values.height;      //Höhe des Komonenten
  this.structure = values.structure;      //Struktur des Komponenten
  this.color = values.color;      //Farbe des Komponenten
}

Component.prototype.render = function(elapsedTime){     //Zeichenfunktion des Komponenten
  ctx.save();

  ctx.beginPath();      //beginnt neuen Zeichenweg
  ctx.rect(this.x, this.y, this.width, this.height);      //Zeichenweg eines Rechtecks mit dem Aufpunkt und den Maßen
                                                          //des Komponenten wird gespeichert und automatisch gezeichnet
  ctx.shadowColor = 'hsla(95,26%,15%,0.5)';     //Schattenfarbe wird festgelegt
  ctx.shadowBlur = 0;     //Verwischen-Effekt
  ctx.shadowOffsetX = 3;      //
  ctx.shadowOffsetY = 3;      //

  ctx.fillStyle = this.getColorFromStructure();     //dFüllfarbe wird extern in Funktion berechnet
  ctx.fill();     //die gezeichnete Fläche wird gefüllt

  ctx.restore();
}

Component.prototype.getColorFromStructure = function(){     //Berechnugsfuntion der Füllfarbe
  h = this.color.h;
  s = this.color.s*this.structure;
  l = this.color.l*this.structure;
  return "hsl(" + h + "," + s + "%," + l + "%)";      //Farbe wird ausgegeben
}

Component.prototype.serialize = function(mode){
  var space;
  if(mode == "asci"){
    space = "\n";
  } else {
    space = "<br>";
  }

  var output = space + "{";
  output += "x: " + this.x + ", ";
  output += "y: " + this.y + ", ";
  output += "width: " + this.width + ", ";
  output += "height: " + this.height + ", ";
  output += "structure: " + this.structure + ", ";
  output += "color: {h: " + this.color.h + ", s: " + this.color.s + ", l: " + this.color.l + "}";
  output += "},";
  return output;
}
