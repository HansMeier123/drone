function Building(values){      //Gebäude
  this.x = values.x;      //x-Koordinate des Aufpunktes
  this.y = values.y;      //y-Koordinate des Aufpunktes
  this.height = 0;      //Höhe des Gebäudes (benötigt für die Verscheibung im Editor)
  this.width = 0;      //Breite des Gebäudes (benötigt für die Verscheibung im Editor)
  this.nx = 0;
  this.ny = 0;
  this.trees = [];      //Array für Bäume
  this.components = [];      //Array für Komponenten
  this.forests = [];      //Array für Wälder

  if(values.fence){     //Falls dem Gebäude Zaun-Kordinaten mitgegeben wurden,
    this.fence = values.fence;      //werden diese im "Zaun-Array" gespeichert.
  }

  if(values.trees){     //Falls dem Gebäude Baum-Elemente mitgegeben wurden,
    for(var i = 0; i < values.trees.length; i++){      //wird die Liste mit diesen Elementen einmal durchgegangen
      this.trees.push(new Tree(values.trees[i]));      //und jedes Element dem "Baum-Array" hinzugefügt.
    }
  }

  if(values.components){     //Falls dem Gebäude Komponenten-Elemente mitgegeben wurden,
    for(var i = 0; i < values.components.length; i++){      //wird die Liste mit diesen Elementen einmal durchgegangen
      this.components.push(new Component(values.components[i]));      //und jedes Element dem "Komponenten-Array" hinzugefügt.
    }
  }

  if(values.forests){     //Falls dem Gebäude Wald-Elemente mitgegeben wurden,
    for(var i = 0; i < values.forests.length; i++){      //wird die Liste mit diesen Elementen einmal durchgegangen
      this.forests.push(new Forest(values.forests[i]));      //und jedes Element dem "Wald-Array" hinzugefügt.
    }
  }

  for(var i = 0; i < this.components.length; i++){
  	if ((this.components[i].y + this.components[i].height) > this.height){
  		this.height = (this.components[i].y + this.components[i].height);
  	}

  	if (this.components[i].y < this.ny){
  		this.ny = this.components[i].y;
  	}

  	if ((this.components[i].x + this.components[i].width) > this.width){
  		this.width = (this.components[i].x + this.components[i].width);
  	}

  	if (this.components[i].x < this.nx){
  		this.nx = this.components[i].x;
  	}
  }

  for(var i = 0; i < this.fence.length; i++){
  	if (this.fence[i][1] > this.height){
  		this.height = this.fence[i][1];
  	}

  	if (this.fence[i][1] < this.ny){
  		this.ny = this.fence[i][1];
  	}

  	if (this.fence[i][0] > this.width){
  		this.width = this.fence[i][0];
  	}

    if (this.fence[i][0] < this.nx){
  		this.nx = this.fence[i][0];
  	}
  }
}

Building.prototype.render = function(elapsedTime){      //Zeichenfunktion des Gebäudes
  ctx.save();
  ctx.translate(this.x, this.y);      //verschiebt den Bezugspunkt auf den Aufpunkt

  if(this.fence){
    ctx.save();

    ctx.beginPath();      //beginnt neuen Zeichenweg
    ctx.moveTo(this.fence[0][0],this.fence[0][1]);      //fängt bei den Koordinaten des ersten Zaun-Punktes an

    for (var i = 1; i < this.fence.length; i++){      //für alle Zaun-Punkte
      ctx.lineTo(this.fence[i][0],this.fence[i][1]);      //wird jeweils bis zum nächten der Zeichenweg gespeichert
    }

    ctx.shadowColor = 'hsla(95,26%,15%,0.4)';     //Schattenfarbe wird festgelegt
    ctx.shadowBlur = 0;     //Verwischen-Effekt
    ctx.shadowOffsetX = 2;      //
    ctx.shadowOffsetY = 2;      //

    ctx.lineWidth = 4;      //Strichstärke ist 4 Pixel
    ctx.strokeStyle = "hsl(23,25%,72%)";      //Strichfarbe wird festgelegt
    ctx.stroke();     //der gespeicherte Zeichenweg wird gezeichnet

    ctx.restore();
  }

  if(this.components){
    for(var i = 0; i < this.components.length; i++){      //bei allen Komponenten-Elementen
      this.components[i].render(elapsedTime);     //wird die Zeichenfunktion aufgerufen
    }
  }

  if(this.forests){
    for(var i = 0; i < this.forests.length; i++){      //bei allen Wald-Elementen
      this.forests[i].render(elapsedTime);     //wird die Zeichenfunktion aufgerufen
    }
  }

  if(this.trees){
    for(var i = 0; i < this.trees.length; i++){      //bei allen Baum-Elementen
      this.trees[i].render(elapsedTime);     //wird die Zeichenfunktion aufgerufen
    }
  }

  ctx.restore();
}

Building.prototype.serialize = function(mode){      //Serialisierungsfunktion des Gebäudes
  var space;
  if(mode == "asci"){
    space = "\n";
  } else {
    space = "<br>";
  }

  var output = "{" + space;
  output += "x: " + this.x + "," + space;
  output += "y: " + this.y + "," + space;

  if(this.fence.length > 0){
    output += "fence:[";

    for (var i = 0; i < this.fence.length; i++){
      output += "[" + this.fence[i][0] + "," + this.fence[i][1] + "],";
    }
  }

  if(this.components.length > 0){
    output += "]," + space + "components:[";

    for(var i = 0; i < this.components.length; i++){
      output += this.components[i].serialize(mode);
    }
  }

  if(this.trees.length > 0){
    output += "]," + space + "trees:[";

    for(var i = 0; i < this.trees.length; i++){
      output += this.trees[i].serialize(mode);
    }
  }

  if(this.forests.length > 0){
    output += "]," + space + "forests:[";

    for(var i = 0; i < this.forests.length; i++){
      output += this.forests[i].serialize(mode);
    }
  }

  output += "]" + space + "}";
  return output;
}
