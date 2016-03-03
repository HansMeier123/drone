function Forest(values){      //Wälder
  this.x = values.x;      //x-Koordinate des Aufpunktes
  this.y = values.y;      //y-Koordinate des Aufpunktes
  this.width = values.width;      //Breite des Waldes
  this.height = values.height;      //Höhe des Waldes
  this.minSize = values.minSize;      //Mindestgröße der Bäume
  this.maxSize = values.maxSize;      //Maximalgröße der Bäume
  this.number = values.number;      //Anzahl der Bäume
  this.gap = Math.round((this.maxSize + this.minSize) / 2);     //Mindestabstand der Bäume
  this.nx = 0;
  this.ny = 0;
  this.trees = [];      //Array für Bäume

  for(var i = 0; i < this.number; i++){
		this.createTree(i);     //Erstellen von 'this.number'-vielen Bäumen
	}
}

Forest.prototype.createTree = function(position){     //Baumerstellfunkton des Waldes
  //erstellen von Bäumen mit zufälligen Werten, die jedoch im Toleranzbereich liegen
	this.trees[position] = new Tree({x: Math.floor(Math.random() * this.width),
                                   y: Math.floor(Math.random() * this.height),
                                   size: Math.floor(Math.random() * (this.maxSize - this.minSize)) + this.minSize});

  for(var i = 0; i < position; i++){      //Der Abstand der Bäume beträgt mindestens den minimalen Radius der Bäume
		if((this.trees[i].x >= (this.trees[position].x - this.gap)) && (this.trees[i].x <= (this.trees[position].x + this.gap)) && (this.trees[i].y >= (this.trees[position].y - this.gap)) && (this.trees[i].y <= (this.trees[position].y + this.gap))){
			this.createTree(position);     //ansonsten wird im Array auf der gleiche Position ein neuer Baum erstellt
		}
	}
}

Forest.prototype.render = function(elapsedTime){      //Zeichenfunktion des Waldes
  ctx.save();
  ctx.translate(this.x, this.y);      //verschiebt den Bezugspunkt auf den Aufpunkt

  for(var i = 0; i < this.number; i++){     //für jeden Baum
		this.trees[i].render(elapsedTime);      //wird die Zeichenfunktion aufgerufen
	}

  ctx.restore();
}

Forest.prototype.serialize = function(mode){
  var space;
  if(mode == "asci"){
    space = "\n"
  } else {
    space = "<br>"
  }

  var output = space + "{";
  output += "x: " + this.x + ", ";
  output += "y: " + this.y + ", ";
  output += "width: " + this.width + ", ";
  output += "height: " + this.height + ", ";
  output += "minSize: " + this.minSize + ", ";
  output += "maxSize: " + this.maxSize + ", ";
  output += "number: " + this.number;
  output += "}";
  return output;
}
