function Segment(values){     //Segmente
  this.x = values.x;      //x-Koordinate des Aufpunktes
  this.y = values.y;      //y-Koordinate des Aufpunktes
  this.color = values.color;      //Farbe des Segments
  this.coordinates = values.coordinates;      //Koordinaten der Segments
  this.bezierPoints = [];         //Array für Bezier-Punkte
  this.bezierPointsControl = false;       //speichert, ob dem Segment Bezier-Punkte mitgegebn wurden

  if(values.bezierPoints){      //Falls dem Segment Bezier-Punkte mitgegeben wurden,
    for(var i = 0; i < values.bezierPoints.length; i++){
      this.bezierPoints.push([values.bezierPoints[i][0], values.bezierPoints[i][1]]);
    }     //werden diese ins "Bezier-Punkte"-Array hinzugefügt

    this.bezierPointsControl = true;      //und die Kontrollvariable auf 'true' gesetzt
  } else {      //Falls nicht
    this.bezierPoints.push([values.coordinates[0][0], values.coordinates[0][1]]);
    //wird zuerst die erste Koordinate des Segments dem "Bezier-Punkte"-Array hinzugefügt,
    for(var i = 1; i < values.coordinates.length; i++){
      this.bezierPoints.push([values.coordinates[i][0], values.coordinates[i][1]]);
      this.bezierPoints.push([values.coordinates[i][0], values.coordinates[i][1]]);
    } //danach werden die anderen Koordinaten jeweils zweimal hinzugefügt

    this.bezierPoints.push([values.coordinates[0][0], values.coordinates[0][1]]);
    //und zum Schluss wird noch einmal die erste Koordinate hinzugefügt.
  }
}

Segment.prototype.render = function(elapsedTime){     //Zeichenfunktion des Segments
  ctx.save();
  ctx.translate(this.x, this.y);      //verschiebt den Bezugspunkt auf den Aufpunkt

  ctx.beginPath();      //beginnt neuen Zeichenweg
  ctx.moveTo(this.coordinates[0][0],this.coordinates[0][1]);      //fängt bei den ersten Koordinaten an

  for (var i = 1; i < this.coordinates.length; i++){
    ctx.bezierCurveTo(this.bezierPoints[i*2 - 2][0], this.bezierPoints[i*2 - 2][1],
                      this.bezierPoints[i*2 - 1][0], this.bezierPoints[i*2 - 1][1],
                      this.coordinates[i][0], this.coordinates[i][1]);
  }
  /*Dann wird jeweils zu den nächsten Koordinaten der Zeichenweg in Form einer Bezier-Kurve gespeichert und
  automatisch gezeichent. Diese benötigt zwei Bezugspunkte (hier die Bezier-Punkte) und einen Endpunkt
  (hier die nächste Koordinate). Die Bezier-Punkte können zwei unterschiedliche Punkte sein, sie können beide
  gleich sein und sie können auch den Wert der Anfangs- und Endkoordinaten (entweder beide den gleichen,
  oder der erste den Anfangs- und der zweite den Endpunkt – hier wurde für den Fall, dass keine Bezier-Punkte
  mitgegeben werden letzteres programmiert) annehmen, bei letzterem wird eine gerader Zeichenweg von den
  Anfangskoordinaten zu den Endkoordinaten gespeichert*/

  ctx.bezierCurveTo(this.bezierPoints[this.bezierPoints.length - 2][0],this.bezierPoints[this.bezierPoints.length - 2][1],
                    this.bezierPoints[this.bezierPoints.length - 1][0],this.bezierPoints[this.bezierPoints.length - 1][1],
                    this.coordinates[0][0],this.coordinates[0][1]);
        //Als letztes wird noch ein Zeichenweg in Form einer Bezier-Kurve zur den ersten Koordinaten gespeichert

  ctx.fillStyle = "hsl("+this.color.h+","+this.color.s+"%,"+this.color.l+"%)";      //die Füllfarbe wird festgelegt
  ctx.fill();     //die gezeichente Fläche wird gefüllt

  ctx.restore();
}

Segment.prototype.serialize = function(mode){
  var space;
  if(mode == "asci"){
    space = "\n";
  } else {
    space = "<br>";
  }

  var output = "{" + space;
  output += "x: " + this.x + "," + space;
  output += "y: " + this.y + "," + space;
  output += "color: {h: " + this.color.h + ", s: " + this.color.s + ", l: " + this.color.l + "}," + space;
  output += "coordinates: [";

  for (var i = 0; i < this.coordinates.length; i++){
    output += "[" + this.coordinates[i][0] + "," + this.coordinates[i][1] + "],";
  }

  if(this.bezierPointsControl){
    output += "]," + space + "bezierPoints:[";

    for (var i = 0; i < this.bezierPoints.length; i++){
      output += "[" + this.bezierPoints[i][0] + "," + this.bezierPoints[i][1] + "],";
    }
  }

  output += "]" + space + "}";
  return output;
}
