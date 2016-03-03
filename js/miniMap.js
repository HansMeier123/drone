function MiniMap(values){     //Mini-Map
  this.size = Math.floor(canvas.height/2.7);      //die Breite bzw. Höhe der quadratischen Fläche der Mini-Map wird berechnet
  this.startX = 30;      //x-Koordinate des Aufpunktes
  this.startY = 30;      //y-Koordinate des Aufpunktes
  this.scaleZoom = this.size/globalMap.width;      //der Zoomfaktor der Mini-Map wird berechnet
  this.imageData;       //Spechertort für das Abbild der Mini-Map, damit nicht alles bei jedem
                        //Frame neu berechnet und gezeichnet werden muss

  this.temp_canvas = document.createElement("canvas");
  this.temp_canvas.width = this.size;
  this.temp_canvas.height = this.size;
  this.temp_ctx = this.temp_canvas.getContext('2d');      //temporärer Context wird geladen
                                //die Mini-Map wird auf einem temporären Context gezeichnet

  this.drawMiniMap();     //die Mini-Map wird gezeichnet
}

MiniMap.prototype.refreshImage = function(){    //Zeichenfunktion der Mini-Map
  if (phase >= 15)
  {       //wenn das Spiel aus ist, dann wird die Funktion nicht ausgeführt
	  return;
  }

  ctx.putImageData(this.imageData,this.startX,this.startY);     //gespeichertes Abbild der Mini-Map wird gezeichnet
}

MiniMap.prototype.drawMiniMap = function(){
  this.temp_ctx.save();

//der Hintergrund wird gezeichnet
  this.temp_ctx.beginPath();      //beginnt neuen Zeichenweg
  this.temp_ctx.rect(0,0,this.size,this.size);     //Zeichenweg eines Rechtecks mit dem Aufpunkt und den Maßen
                                                  //der Mini-Map wird gespeichert und automatisch gezeichnet
  this.temp_ctx.fillStyle = "hsla(0,0%,0%,0.75)";     //die Füllfarbe wird festgelegt
  this.temp_ctx.fill();       //die gezeichente Fläche wird gefüllt

  this.drawMiniMapElements();     //die Mini-Map-Elemente werden gezeichnet

  this.temp_ctx.restore();

  this.imageData = this.temp_ctx.getImageData(0,0,this.size,this.size);
          //das Gezeichnete wird als Bild gespeichert
}

MiniMap.prototype.drawMiniMapElements = function(){
  this.temp_ctx.save();

  this.drawSegments();     //die Segmente werden gezeichnet
  this.drawBuildings();     //die Gebäude werden gezeichnet
  this.drawForests();     //die Wälder werden gezeichnet

  this.temp_ctx.restore();
}

MiniMap.prototype.drawSegments = function(){    //Segmentzeichnung
  for(var i = 1; i < globalMap.objects.segments.length; i++){
    var thatSegm = globalMap.objects.segments[i];

    this.temp_ctx.save();
    this.temp_ctx.translate(thatSegm.x*this.scaleZoom,thatSegm.y*this.scaleZoom);      //verschiebt den Bezugspunkt auf den skalierten Aufpunkt

    this.temp_ctx.beginPath();
    this.temp_ctx.moveTo(thatSegm.coordinates[0][0]*this.scaleZoom,thatSegm.coordinates[0][1]*this.scaleZoom);
    for(var k = 1; k < thatSegm.coordinates.length; k++){
      this.temp_ctx.bezierCurveTo(thatSegm.bezierPoints[k*2 - 2][0]*this.scaleZoom,thatSegm.bezierPoints[k*2 - 2][1]*this.scaleZoom,
                                  thatSegm.bezierPoints[k*2 - 1][0]*this.scaleZoom,thatSegm.bezierPoints[k*2 - 1][1]*this.scaleZoom,
                                  thatSegm.coordinates[k][0]*this.scaleZoom,thatSegm.coordinates[k][1]*this.scaleZoom);
    }                //zeichnet Segmente mithilfe von Bezierkurven
    this.temp_ctx.bezierCurveTo(thatSegm.bezierPoints[thatSegm.bezierPoints.length - 2][0]*this.scaleZoom,thatSegm.bezierPoints[thatSegm.bezierPoints.length - 2][1]*this.scaleZoom,
                                thatSegm.bezierPoints[thatSegm.bezierPoints.length - 1][0]*this.scaleZoom,thatSegm.bezierPoints[thatSegm.bezierPoints.length - 1][1]*this.scaleZoom,
                                thatSegm.coordinates[0][0]*this.scaleZoom,thatSegm.coordinates[0][1]*this.scaleZoom);

    this.temp_ctx.fillStyle = "hsla("+thatSegm.color.h+","+thatSegm.color.s+"%,"+thatSegm.color.l+"%,"+0.9+")";   //die Füllfarbe wird festgelegt
    this.temp_ctx.fill();   //füllt gezeichnete Fläche

    this.temp_ctx.restore();
  }
}

MiniMap.prototype.drawBuildings = function(){     //Gebäudezeichnung
  for(var i = 0; i < globalMap.objects.buildings.length; i++){
    var thatBuil = globalMap.objects.buildings[i];

    this.temp_ctx.save();
    this.temp_ctx.translate(thatBuil.x*this.scaleZoom,thatBuil.y*this.scaleZoom);      //verschiebt den Bezugspunkt auf den skalierten Aufpunkt

    if(thatBuil.components){
      for(var k = 0; k < thatBuil.components.length; k++){
        var thatComp = thatBuil.components[k];

        this.temp_ctx.beginPath();
        this.temp_ctx.moveTo(thatComp.x*this.scaleZoom,thatComp.y*this.scaleZoom);
        this.temp_ctx.lineTo(thatComp.x*this.scaleZoom,(thatComp.y + thatComp.height)*this.scaleZoom);
        this.temp_ctx.lineTo((thatComp.x + thatComp.width)*this.scaleZoom,(thatComp.y + thatComp.height)*this.scaleZoom);
        this.temp_ctx.lineTo((thatComp.x + thatComp.width)*this.scaleZoom,thatComp.y*this.scaleZoom);
        this.temp_ctx.lineTo(thatComp.x*this.scaleZoom,thatComp.y*this.scaleZoom);
              //zeichnet nacheinander den Zeichenweg der durch die Komponentenkoordinaten vorgegebne wird

        this.temp_ctx.fillStyle = "hsla("+thatComp.color.h+","+thatComp.color.s+"%,"+thatComp.color.l+"%,"+0.9+")";     //die Füllfarbe wird festgelegt
        this.temp_ctx.fill();     //füllt gezeichnete Fläche
      }
    }

    if(thatBuil.trees){
      for(var k = 0; k < thatBuil.trees.length; k++){
        var thatTree = thatBuil.trees[k];

        this.temp_ctx.beginPath();
        this.temp_ctx.arc(thatTree.x*this.scaleZoom, thatTree.y*this.scaleZoom, thatTree.size*this.scaleZoom, 0, 2*Math.PI, false);
              //zeichnet die Bäume mit skalierten Werten

        this.temp_ctx.fillStyle = "hsla(99,98%,46%,0.81)";      //die Füllfarbe wird festgelegt
        this.temp_ctx.fill();   //füllen der gezeichneten Flächen
      }
    }

    if(thatBuil.forests){
      for(var k = 0; k < thatBuil.forests.length; k++){
        var thatFore = thatBuil.forests[k];

        //für jeden Wald werden die Bäume gezeichnet (siehe oben)
        for(m = 0; m < thatFore.trees.length; m++){
          var thatTree = thatFore.trees[m];

          this.temp_ctx.beginPath();
          this.temp_ctx.arc(thatTree.x*this.scaleZoom, thatTree.y*this.scaleZoom, thatTree.size*this.scaleZoom, 0, 2*Math.PI, false);

          this.temp_ctx.fillStyle = "hsla(99,98%,46%,0.81)";    //Füllfarbe wird festgelegt
          this.temp_ctx.fill();   //füllen der gezeichneten Flächen
        }
      }
    }

    this.temp_ctx.restore();
  }
}

MiniMap.prototype.drawForests = function(){     //Waldzeichnung
  for(var i = 0; i < globalMap.objects.forests.length; i++){
    var thatFore = globalMap.objects.forests[i];

    this.temp_ctx.save();

    //für jeden Wald werden die Bäume gezeichnet (siehe oben)
    for(k = 0; k < thatFore.trees.length; k++){
      var thatTree = thatFore.trees[k];

      this.temp_ctx.beginPath();
      this.temp_ctx.arc(thatTree.x*this.scaleZoom, thatTree.y*this.scaleZoom, thatTree.size*this.scaleZoom, 0, 2*Math.PI, false);

      this.temp_ctx.fillStyle = "hsla(99,98%,46%,0.81)";   //Füllfarbe wird festgelegt
      this.temp_ctx.fill();   //füllen der gezeichneten Flächen
    }

    this.temp_ctx.restore();
  }
}
