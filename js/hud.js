function Hud(values){   //Head-up-Display
  this.crossairX = Math.floor(canvas.width/2)-60;
  this.crossairY = Math.floor(canvas.height/2)-40;
  this.dataX = canvas.width - 200;
  this.dataY = 50;
        //(Berechnung) der statischen Aufpunkte in Bezug auf den Bildschirm
}

Hud.prototype.render = function(elapsed){   //Zeichenfunktion des Head-up-Displays
  if (phase >= 15)
  {
	  return;
  }

  this.drawCrossair();    //Fadenkreuz
  this.drawXLine();
  this.drawData(elapsed);     //Datenanzeige
  this.drawView();        //Positionsanzeige der Mini-Map
  //this.drawYLine();
}

Hud.prototype.drawCrossair = function(){    //zeichnet Fadenkreuz
  ctx.save();
  ctx.translate(this.crossairX, this.crossairY)
  ctx.beginPath();
  //left
  ctx.moveTo(0, 30)
  ctx.lineTo(0, 50)

  ctx.moveTo(0, 40)
  ctx.lineTo(20, 40)

  //right
  ctx.moveTo(120, 30)
  ctx.lineTo(120, 50)

  ctx.moveTo(100, 40)
  ctx.lineTo(120, 40)

  //top
  ctx.moveTo(50, 0)
  ctx.lineTo(70, 0)

  ctx.moveTo(60, 0)
  ctx.lineTo(60, 20)

  //bottom
  ctx.moveTo(50, 80)
  ctx.lineTo(70, 80)

  ctx.moveTo(60, 60)
  ctx.lineTo(60, 80)

  //speichert jeweils immer den Zeichenweg von einem Punkt zum andern eine Linie und springt denn zum nächsten Anfangspunkt

  ctx.lineWidth = 2;    //legt Linienbreite auf 2 Pixel fest

  if (!drop){
	   ctx.strokeStyle = 'white';
  } else {
	   ctx.strokeStyle = 'red';
  }

  ctx.stroke();   //zeichnet die gespeicherten Zeichenwege
  ctx.restore();
}

Hud.prototype.drawXLine = function(){
  var startX = canvas.width/2-40*10;
  var startY = canvas.height-132;
  ctx.save();
  ctx.translate(startX,startY)
  ctx.beginPath();
  for(var i = 1; i < 20; i++){
    if((i)%5 == 0){
      ctx.moveTo(i*40, 20 )
      ctx.lineTo(i*40, 50)
    } else {
      ctx.moveTo(i*40, 20 )
      ctx.lineTo(i*40, 40)
    }

  }

  ctx.lineWidth = 4;
  ctx.strokeStyle = 'white';

  ctx.stroke();

  var pos = 1-(viewport.r/Math.PI/2+0.5);
  ctx.beginPath();
  ctx.moveTo(18*40*(pos) +40 ,0 )
  ctx.lineTo(18*40*(pos) +40, 20)

  ctx.lineWidth = 6;
  ctx.strokeStyle = 'white';

  ctx.stroke();
  ctx.restore();
}

Hud.prototype.drawData = function(elapsed){
  ctx.textAlign = 'left';     //legt Textausrichtung fest
  ctx.font = "18px consolas";   //legt Schriftart fest
  ctx.fillStyle = 'white';      //legt Schriftfarbe fest

  ctx.fillText(this.convertTime(daytime), this.dataX, this.dataY);
  ctx.fillText(Math.round(1000/elapsed) + " FPS", this.dataX + 90 , this.dataY);
  //berechnet Positionen für Zeit- und Framerateanzeige und zeigt diese dann an

  ctx.fillText("COORDINATES", this.dataX, this.dataY + 40);
  ctx.fillText("X: " + Math.floor(Math.abs(viewport.x)), this.dataX, this.dataY + 60);
  ctx.fillText("Y: " + Math.floor(Math.abs(viewport.y)), this.dataX, this.dataY + 80);
  //berechnet Positionen für Koorinatenangabe und zeigt diese dann an

  ctx.fillText("LENS", this.dataX, this.dataY + 115);
  ctx.fillText(Math.floor(Math.abs(viewport.z*10))/10 + "x", this.dataX, this.dataY + 135);
  //berechnet Positionen für Zoomanzeige und zeigt diese dann an

  ctx.beginPath();
  ctx.moveTo(this.dataX, this.dataY + 14);
  ctx.lineTo(this.dataX + 150, this.dataY + 14);
  //zeichnet Trennlinie

  ctx.lineWidth = 2;
  ctx.strokeStyle = 'white';

  ctx.stroke();
}

Hud.prototype.convertTime = function(time){   //berechnet aus 'daytime'-Variable
  var time = Math.floor(daytime) + ":";       //die Stunden- und Minutenanzeige
  var minutes = Math.floor((daytime%1)*60);
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  return time + minutes;
}

Hud.prototype.drawView = function(){
  var viewX = miniMap.startX + (canvas.width/2 - viewport.x)*miniMap.scaleZoom;
  var viewY = miniMap.startY + (canvas.height/2 - viewport.y)*miniMap.scaleZoom;
  var viewWidth = canvas.width*miniMap.scaleZoom*(2 - viewport.z);
  var viewHeight = canvas.height*miniMap.scaleZoom*(2 - viewport.z);
  //berechnet skalierte Positionskoordinaten für die Mini-Map

  ctx.save();
  ctx.translate(viewX, viewY);    //verschiebt Bezugspunkt

  ctx.rotate(-viewport.r);

  ctx.beginPath();
  ctx.rect(-viewWidth/2, -viewHeight/2, viewWidth, viewHeight);
    //zeichnet Ansicht

  ctx.lineWidth = 0.75;
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.restore();

//------------------------------

  ctx.save();
  ctx.translate(viewX, viewY);    //zeichnet Bezugspunkt

  ctx.rotate(game.direction + 1.5*Math.PI);

  ctx.beginPath();
  ctx.moveTo(0, -viewHeight/2 + 1.5);
  ctx.lineTo(0, viewHeight/2 - 1.5);
  ctx.moveTo(-viewHeight/2 + 2, -0.5);
  ctx.lineTo(0, -viewHeight/2 + 1.5);
  ctx.lineTo(viewHeight/2 - 2, -0.5);
    //zeichnet Pfeil für Bewegungsrichtungsanzeige

  ctx.lineWidth = 1.25;
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ctx.restore();
}
