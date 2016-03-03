function Game(values){
  this.leftLook = false;          //Kamera nach links
  this.rightLook = false;         //Kamera nach rechts
  this.leftMove = false;          //Drohne nach links
  this.rightMove = false;         //Drohne nach rechts
  this.zoomIn = false;            //Hineinzoomen
  this.zoomOut = false;           //Hinauszoomen
  this.zoomInterval = 0.5;        //Zoomintervall
  this.direction = 0.5*Math.PI;   //Winkel der Bewegungsrichtung
  this.returnLook = false;        //automatisches Zurückbewegen
  this.returnLookTime = 0;        //Zähler fürs autom. Zurückbewegen
  this.returnLookAmount = 0;      //Betrag der Zurückbewegung
  //Geschwindigkeiten
  this.moveSpeed = 4;             //Bewegung
  this.turnSpeed = 0.02;         //Änderung der Bewegungsrichtung
  this.rotationSpeed = 0.04;      //Änderung der Kamerarichtung
  this.zoomSpeed = 0.009;         //Zoom

  var sounds = [];
  this.erdoganSound = new Audio('media/music/erdogan.mp3');
  this.bombSound= new Audio('media/music/bomb.mp3');
  this.crashSound = new Audio('media/music/gameover1.mp3');
      //Audiodateien werden in Variablen zum Abspielen gespeichert

  window.drop = false;
  window.game = true;
  window.call = 0;
  window.phase = 0;
  window.alarm = false;

  //Aktionen beim Drücken einer Taste
  $(document).keydown(function(event){
    //console.log(event.keyCode);
    if(event.keyCode == 37){    // Pfeiltaste_links
      game.leftLook = true;
      game.returnLook = false;
      game.returnLookTime = 0;
    }
    if(event.keyCode == 39){    // Pfeiltaste_rechts
      game.rightLook = true;
      game.returnLook = false;
      game.returnLookTime = 0;
    }
    if(event.keyCode == 65){    // A
      game.leftMove = true;
    }
    if(event.keyCode == 68){    // D
      game.rightMove = true;
    }
    if(event.keyCode == 38){    // Pfeiltaste_oben
      game.zoomIn = true;
    }
    if(event.keyCode == 40){    // Pfeiltaste_unten
      game.zoomOut = true;
    }

  	if(event.keyCode == 32){    //Leertaste
    	var bombx = viewport.x;
    	var bomby = viewport.y;

    	window.drop = true;

    	setTimeout(function(){
    		window.drop = false;
    	},250);

    	setTimeout(function(){
    		var clonedBomb = game.bombSound.cloneNode();
			game.bombSound.play();
    		clonedBomb.play();
    		obj.objects.explosions.push(new Explosion(canvas.width/2 - bombx, canvas.height/2 - bomby, 100, false));
    		obj.objects.explosions.push(new Explosion(canvas.width/2 - bombx, canvas.height/2 - bomby, 100, true));
            //erstellt Explosionen
    	},3000);
  	}
  });

  //Aktionen beim Loslassen einer Taste
  $(document).keyup(function(event){
    if(event.keyCode == 37){    // Pfeiltaste_links
      game.leftLook = false;
      game.returnLook = true;
      this.returnLookTime = 0;
    }
    if(event.keyCode == 39){    // Pfeiltaste_rechts
      game.rightLook = false;
      game.returnLook = true;
      this.returnLookTime = 0;
    }
    if(event.keyCode == 65){    // A
      game.leftMove = false;
    }
    if(event.keyCode == 68){    // D
      game.rightMove = false;
    }
    if(event.keyCode == 38){    // Pfeiltaste_oben
      game.zoomIn = false;
    }
    if(event.keyCode == 40){    // Pfeiltaste_unten
      game.zoomOut = false;
    }
  });
}

Game.prototype.calculate = function(){
  if(alarm){
  	if(phase == 3 || phase == 10){
  		call = 2;
  	}

  	if(phase == 2 || phase == 9){
  		call = 1;
  	}

  	if(phase == 7 || phase == 12){
  		call = 0;
  	}

  	if(phase == 0){
  		this.erdoganSound.play();
  		this.erdoganSound.currentTime = 0;
  		phase = 1;
  		window.p2 = setTimeout(function(){phase = 2},3000);
  		window.p3 = setTimeout(function(){phase = 3},7500);
  		window.p4 = setTimeout(function(){phase = 4},8000);
  		window.p5 = setTimeout(function(){phase = 5},11500);
  		window.p6 = setTimeout(function(){phase = 6},14200);
  		window.p7 = setTimeout(function(){phase = 7},18000);
  		window.p8 = setTimeout(function(){phase = 8},25000);
  		window.p9 = setTimeout(function(){phase = 9},30000);
  		window.p10 = setTimeout(function(){phase = 10},31750);
  		window.p11 = setTimeout(function(){phase = 11},32250);
  		window.p12 = setTimeout(function(){phase = 12},36900);
  		window.p13 = setTimeout(function(){phase = 13},40000);
  	}

  	if(phase == 13){
  		this.crashSound.play();
  		phase = 14;
  		setTimeout(function(){phase = 15}, 2500);
  		setTimeout(function(){phase = 16}, 5500);
  	}
  }

  if(viewport.x >= canvas.width/2 || viewport.y >= canvas.height/2 || viewport.x <= -10000 +canvas.width/2 || viewport.y <= -10000 + canvas.height/2){
	   alarm = true;
  } else {
    if (alarm){
  		this.erdoganSound.pause();
  		alarm = false;
  		phase = 0;
  		call = 0;
  		clearTimeout(p2);
  		clearTimeout(p3);
  		clearTimeout(p4);
  		clearTimeout(p5);
  		clearTimeout(p6);
  		clearTimeout(p7);
  		clearTimeout(p8);
  		clearTimeout(p9);
  		clearTimeout(p10);
  		clearTimeout(p11);
  		clearTimeout(p12);
  		clearTimeout(p13);
    }
  }

  viewport.r += 0;
  viewport.x += this.moveSpeed*Math.cos(this.direction);    //Durch den Sinus und den Cosinus bleibt der Betrag des daraus folgenden
  viewport.y += this.moveSpeed*Math.sin(this.direction);    //Bewegungsvektors unabhängig von der Richtung gleich. (siehe Einheitskreis)
  viewport.z += 0;
  this.direction += 0;

  daytime += 0.0005;
  if (daytime >= 24){
    daytime = 0
  }   //zählt Uhrzeit

//Bewegung der "Kamera"
  //Bewegung nach links
  if(this.leftLook && (this.returnLookAmount < 0.5*Math.PI)){
    viewport.r += this.rotationSpeed;
    if(viewport.r > 2*Math.PI){       //Der Winkel bleibt immer zwischen 0 und 2π
      viewport.r = viewport.r - 2*Math.PI;
    }
    this.returnLookAmount += this.rotationSpeed;
  }
  //Bewegung nach rechts
  if(this.rightLook && (this.returnLookAmount > -0.5*Math.PI)){
    viewport.r -= this.rotationSpeed;
    if(viewport.r <= 0){              //Der Winkel bleibt immer zwischen 0 und 2π
      viewport.r = 2*Math.PI + viewport.r;
    }
    this.returnLookAmount -= this.rotationSpeed;
  }
  //automatisches Zurückbewegen
  if(this.returnLook && (this.returnLookTime < 50)){      //Wenn das Zurückbewegen aktiviert werden soll, wird eine festgelegte Zeitspanne gewartet
    this.returnLookTime += 1;
  }
  if(this.returnLook && (this.returnLookTime == 50)){     //Nach dieser Zeitspanne wird...
    if(this.returnLookAmount >= this.rotationSpeed){      //...im Falle der positiven Betragsveränderung des "Kamera-Winkels"
      viewport.r -= this.rotationSpeed;                   //die Rotation verändert (verringert) und
      this.returnLookAmount -= this.rotationSpeed;        //der Betrag der Kameraveränderung um den gleichen Wert
    }
    if(this.returnLookAmount <= -this.rotationSpeed){     //...im Falle der negativen Betragsveränderung des "Kamera-Winkels"
      viewport.r += this.rotationSpeed;                   //die Rotation verändert (erhöht) und
      this.returnLookAmount += this.rotationSpeed;        //der Betrag der Kameraveränderung um den gleichen Wert
    }
    if((this.returnLookAmount > -this.rotationSpeed) && (this.returnLookAmount < this.rotationSpeed)){ //...im Falle keiner Betragsveränderung des "Kamera-Winkels"
      viewport.r -= this.returnLookAmount;
      this.returnLookAmount = 0;                          //der Betrag für die Betratungswinkeländerung zurückgesetzt,
      this.returnLook = false;                            //das Zurückbewegen deaktiviert und
      this.returnLookTime = 0;                            //der Zähler für die Zeitspanne zurückgesetzt
    }
  }
  //Hineinzoomen der Karte
  if(this.zoomIn && (viewport.z <= (1 + this.zoomInterval/2))){
    viewport.z += this.zoomSpeed;
  }
  //Hinauszoomen der Karte
  if(this.zoomOut && (viewport.z >= (1 - this.zoomInterval/2))){
    viewport.z -= this.zoomSpeed;
  }

//Bewegung der "Drohne"
  //Bewegung nach links
  if(this.leftMove){
    this.direction -= this.turnSpeed;
    if(this.direction <= 0){          //Der Winkel bleibt immer zwischen 0 und 2π
      this.direction = 2*Math.PI + this.direction;
    }
    viewport.r += this.turnSpeed;
    if(viewport.r > 2*Math.PI){       //Der Winkel bleibt immer zwischen 0 und 2π
      viewport.r = viewport.r - 2*Math.PI;
    }
  }
  //Bewegung nach rechts
  if(this.rightMove){
    this.direction += this.turnSpeed;
    if(this.direction > 2*Math.PI){   //Der Winkel bleibt immer zwischen 0 und 2π
      this.direction = this.direction - 2*Math.PI;
    }
    viewport.r -= this.turnSpeed;
    if(viewport.r <= 0){              //Der Winkel bleibt immer zwischen 0 und 2π
      viewport.r = 2*Math.PI + viewport.r;
    }
  }
}
