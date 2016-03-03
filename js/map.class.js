function Map(coordinates){      //Karte
  window.obj = this;
  this.width = coordinates.width;     //Karten-Breite
  this.height = coordinates.height;     //Karten-Höhe
  this.content = {};      //Karten-Inhalt
  this.objects = {};        //Karten-Objekte
  this.phoneShake = 0;      //zählt die Bewegungen des Handys
  this.ctx2 = canvas.getContext('2d');      //zweiter Context für den Anruf und zugehörende Animationen
  this.base_image = new Image();    //Handybild
  this.base_image.src = 'media/pictures/erdogan.png';
  this.baseImageHeight = canvas.height/2.1;   //Berechnung der Handyhöhe in Verhältnis zur Bildschirmhöhe
  this.baseImageWidth = 200*this.baseImageHeight/391;   //Berechnung der Handybreite, damit Bildverhältnis stimmt

  this.objects.segments = [];
  for(var i = 0; i < coordinates.objects.segments.length; i++){
    this.objects.segments.push(new Segment(coordinates.objects.segments[i]));
  }     //Segmente werden Array hinzugefügt

  this.objects.buildings = [];
  for(var i = 0; i < coordinates.objects.buildings.length; i++){
    this.objects.buildings.push(new Building(coordinates.objects.buildings[i]));
  }     //Gebäude werden Array hinzugefügt

  this.objects.forests = [];
  for(var i = 0; i < coordinates.objects.forests.length; i++){
    this.objects.forests.push(new Forest(coordinates.objects.forests[i]));
  }     //Wälder werden Array hinzugefügt

  this.objects.explosions = [];   //Array für die Explosionen und Explosionskrater
}

Map.prototype.render = function(elapsedTime){   //Zeichenfunktion der Karte
  if (gameStatus == 2){
    ctx.fillStyle = "rgb(0,255,0)";   //für Editor
  } else {    //Festlegung der Füllfarbe in Abhängigkeit vom Status
    ctx.fillStyle = "hsl(38, 20%, 60%)";    //für Game
  }

  ctx.fillRect(0,0,window.innerWidth,window.innerHeight);     //füllen des Hintergrundes

  ctx.save();

  //Zoom
  ctx.translate(canvas.width/2,canvas.height/2);
  ctx.scale(viewport.z,viewport.z);
  ctx.translate(-canvas.width/2,-canvas.height/2);

  //x- und y-Bewegung
  ctx.translate(viewport.x,viewport.y);

  //Rotation
  ctx.translate(canvas.width/2-viewport.x,canvas.height/2-viewport.y);
  ctx.rotate(viewport.r);
  ctx.translate(-canvas.width/2+viewport.x,-canvas.height/2+viewport.y);

  ctx.fillStyle = "rgb(255,0,0)"
  ctx.fillRect(0,0,this.width,this.height);

  //this.renderNoise();
  for(var i = 0; i < this.objects.segments.length; i++){
    this.objects.segments[i].render(elapsedTime);
  }   //Segmente werden gezeichnet, wenn welche vorhanden sind

  for(var i = 0; i < this.objects.buildings.length; i++){
    this.objects.buildings[i].render(elapsedTime);
  }   //Gebäude werden gezeichnet, wenn welche vorhanden sind

  for(var i = 0; i < this.objects.forests.length; i++){
    this.objects.forests[i].render(elapsedTime);
  }   //Wälder werden gezeichnet, wenn welche vorhanden sind

  for(var i = 0; i < this.objects.explosions.length; i++){
    this.objects.explosions[i].render(elapsedTime);
  }   //Explosionen werden gezeichnet, wenn welche vorhanden sind

  if(editor){
    for(var i = 0; i < window.selection.length; i++){
      ctx.save();
      ctx.beginPath();
      ctx.rect(window.selection[i].x + window.selection[i].nx,window.selection[i].y + window.selection[i].ny,window.selection[i].width - window.selection[i].nx,window.selection[i].height - window.selection[i].ny);
      ctx.fillStyle = "rgba(0, 0, 204, 0.5)";
      ctx.fill();
      ctx.restore();
    }
  }

  ctx.restore();
  ctx.save();
  this.drawOverlay();
  ctx.restore();
  window.obj = this;

  if(gameStatus == 1){
    if(alarm){    //Animation beim Überqueren der Kartengrenzen
      this.crossBorder();
    }
  }
}

Map.prototype.renderNoise = function(){
  mapDimension = this.width+24;

  for(var x = 0; x < mapDimension+1; x++){
    for(var y = 0; y < mapDimension+1; y++){
        map[x] = [];
    }
  }

  startDisplacement();

  for(var x = 0; x < mapDimension; x++){
    for(var y = 0; y < mapDimension; y++){
  // All noise functions return values in the range of -1 to 1.

      var val = Math.floor(map[x][y] * 256);

      ctx.save();
      ctx.beginPath();

      ctx.fillStyle = "rgb("+val+","+val+","+val+")";
      ctx.rect( x, y, 1, 1 );
      ctx.fill();
      ctx.restore();
    }
  }
}

Map.prototype.crossBorder = function(){   //Funktion für die Animation beim Überqueren der Kartengrenzen
  if(call == 1){    //Zeichnen des vibrierenden Handys
    if(this.phoneShake <= 2){
      this.ctx2.drawImage(this.base_image, canvas.width - this.baseImageWidth - 15 - 2, canvas.height - this.baseImageHeight - 15, this.baseImageWidth, this.baseImageHeight);
      this.phoneShake++;
    } else {
      this.ctx2.drawImage(this.base_image, canvas.width - this.baseImageWidth - 15, canvas.height - this.baseImageHeight - 15, this.baseImageWidth, this.baseImageHeight);
      this.phoneShake++;

      if(this.phoneShake >= 5){
        this.phoneShake = 0;
      }
    }
  }

  if(call == 2){    //zeichnen des ruhenden Handys während des Anrufs
    this.ctx2.drawImage(this.base_image, canvas.width - this.baseImageWidth - 15, canvas.height - this.baseImageHeight - 15, this.baseImageWidth, this.baseImageHeight);
  }
      //Auflistung der Phasen mit den zugehörigen TExtanzeigen
  if(phase == 4){
    ctx.font = "24px consolas";
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText("Sie sind gerade dabei, die tuerkisch-syrische Grenze zu ueberqueren!",0.5*$(document).width(),$(document).height() - 38);
  }

  if(phase == 5){
    ctx.font = "24px consolas";
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText("Verlassen Sie umgehend den tuerkischen Luftraum!",0.5*$(document).width(),$(document).height() - 38);
  }

  if(phase == 6){
    ctx.font = "24px consolas";
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText("Ansonsten sind wir gezwungen, dies",0.5*$(document).width(),$(document).height() - 46);
    ctx.fillText("als Versuch eines terroristischen Angriffaktes zu sehen!",0.5*$(document).width(),$(document).height() - 20);
  }

  if(phase == 11){
    ctx.font = "24px consolas";
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText("Wir haben Sie gewarnt! Wer nicht hoeren will, der muss halt fuehlen!",0.5*$(document).width(),$(document).height() - 38);
  }

  if(phase >= 8){
    ctx.font = "32px consolas";
    ctx.textAlign = 'center';
    ctx.fillStyle = 'red';
    ctx.fillText("WARNING! DRONE IS BEING LOCKED ON!",0.5*$(document).width(),50);
  }

  if(phase == 15){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,$(document).width(),$(document).height());
  }

  if(phase == 16){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,$(document).width(),$(document).height());
    ctx.font = "72px consolas";
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText("GAME OVER",0.5*$(document).width(),0.5*$(document).height());
  }
}

Map.prototype.drawOverlay = function(){   //zeichnet Tag- und Nachtzyklus in Form eine in der Transparenz veränderbaren Zeichnung
  if(daytime <= 5){   //Bedingungen für die Uhrzeiten
    ctx.globalCompositeOperation = "hard-light";

    var colorNight = "hsla(228,40%,30%,1)";   //legt Füllfarbe fest (bzw. Transparenz, die Farbwerte bleiben immer gleich)

    ctx.fillStyle = colorNight;
    ctx.rect(0,0,canvas.width, canvas.height);    //zeichnet (halb)transparentes Rechteck
    ctx.fill();
  }

  if(daytime > 5 && daytime <= 7){
    diff = (daytime - 5);
    ctx.save()
    ctx.globalCompositeOperation = "hard-light";

    var colorNight = "hsla(228,40%,30%,"+(1-diff)+")";      //legt Transparenz fest

    ctx.fillStyle = colorNight;
    ctx.rect(0,0,canvas.width, canvas.height);    //zeichnet (halb)transparentes Rechteck
    ctx.fill();   //füllt die gezeichnete Fläche

    ctx.globalCompositeOperation = "soft-light";

    var colorMorning = "hsla(11,100%,51%,"+diff+")";      //legt Transparenz fest

    ctx.fillStyle = colorMorning;
    ctx.fillRect(0,0,canvas.width, canvas.height);    //zeichnet und füllt (halb)transparentes Rechteck
  } else if (daytime > 7 && daytime <= 9){
    diff = 1-(daytime - 7)*0.5;

    ctx.globalCompositeOperation = "soft-light";

    var colorMorningFade = "hsla(11,100%,51%,"+diff+")";      //legt Transparenz fest

    ctx.fillStyle = colorMorningFade;
    ctx.fillRect(0,0,canvas.width, canvas.height);    //zeichnet und füllt (halb)transparentes Rechteck
  } else if (daytime > 18 ){
    diff = (daytime - 18)*0.5;

    ctx.globalCompositeOperation = "hard-light";

    var colorNight = "hsla(228,40%,30%,"+(diff)+")";      //legt Transparenz fest

    ctx.fillStyle = colorNight;
    ctx.fillRect(0,0,canvas.width, canvas.height);    //zeichnet und füllt (halb)transparentes Rechteck
  }
}

Map.prototype.serialize = function(mode){
  var space;
  if(mode == "asci"){
    space = "\n";
  } else {
    space = "<br>";
  }

  var output = "width: " + this.width + "," + space;
  output += "height: " + this.height + "," + space;
  output += "objects:{" + space;
  output += "segments:[";

  for(var i = 0; i < this.objects.segments.length; i++){
    output +=  this.objects.segments[i].serialize();
    output += ",";
  }

  output += "]," + space + "buildings:[";

  for(var i = 0; i < this.objects.buildings.length; i++){
    output += this.objects.buildings[i].serialize();
    output += ",";
  }

  output += "]," + space + "forests:[";

  for(var i = 0; i < this.objects.forests.length; i++){
    output += this.objects.forests[i].serialize();
    output += ",";
  }

  output += space + "]}}";
  return output;
}
