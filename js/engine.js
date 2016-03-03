var canvas;     //HTML-Element 'Canvas'
var ctx;      //Verweis auf 'Canvas'
var previousTime;
var viewport = {r:0*Math.PI, x:0, y:0, z:1};      //Rotation, x-Verschiebung, y-Verschiebung, Zoomfaktor der Karte
var daytime = 14.0;     //Tageszeit
var globalMap;      //Verweis auf die Map
var mapDimension = 256, roughness = 30, unitSize = 1;
var coordList = "";
var editor;      //Verweis auf die Map
var intro;      //Verweis auf das Menu
var game;      //Verweis auf die Spiel-Steuerung
var hud;      //Verweis auf das Head-up-Display
var miniMap;      //Verweis auf die Mini-Map
var newObj = {};
var gameStatus;     //Status: 0 = Intor; 1 = Spiel; 2 = Editor


  $( "canvas" ).click(function(e) {
    coord = realToCanvas(e.pageX,e.pageY);
  });

  //Canvas initialisieren und Context global laden
  canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");


  globalMap = new Map(getMap());      //eine Karte mit der "map.js" als Quelle wird erstellt

  if(editMode){     //Falls die Engine in der Editor.html aufgerufen wird
    gameStatus = 2;     //wird der Status auf 2 (= Editor) gesetzt,

    editor = new Editor();      //wird der Editor erstellt und
    editor.drawMapElements();     //die Map-Objekte werden in eine Liste gezeichent.
  }else{      //Falls die Engine in der Index.html aufgerufen wird
    gameStatus = 0;     //wird der Status auf 0 (= Intro) gesetzt

    viewport.x = -1*Math.round(5000 - window.innerWidth/2);
    viewport.y = -1*Math.round(5000 - window.innerHeight/2);
      //wird die Position der Kartenansicht berechnet

    intro = new IntroSlideController({finishFunction:function(){    //wird das Intro erstellt
      game = new Game();
      hud = new Hud();
      miniMap = new MiniMap();
      gameStatus = 1;
    }});
  }

  renderer();     //die Zeichenfunktion der Engine wird aufgerufen


function renderer(timestamp){     //Zeichenfunktion der Engine
  requestAnimationFrame(renderer);      //fragt die Framerate ab

  //berechnet die Zeit, die seit dem letzten Frame vergangen ist
  if (!timestamp){
    timestamp = 0;
  }

  var elapsed = timestamp - previousTime;

	if (!isNaN(elapsed)){

	}



globalMap.render(elapsed);


  if(gameStatus != 2){      //Falls der Status nicht 2 (= Editor) ist...
    if(intro.finished){       //Falls das Intro beendet wurde...
      globalMap.render(elapsed);    //wird die Karte erstellt
      game.calculate(elapsed);      //wird die Spiel-Steuerung berechnet
      miniMap.refreshImage();     //wird die Mini.Map gezeichnet
      hud.render(elapsed);      //wird das Head-up-Display wird gezeichnet
    } else {    //Ansonsten
      intro.render(elapsed)     //wird das Intro gezeichnet
    }
  } else {      //Ansonsten
    globalMap.render(elapsed);    //wird die Karte erstellt
  }

  previousTime = timestamp;
}

function realToCanvas(x,y){
  var w = window.innerWidth;
  var h = window.innerHeight;
  obj = {}
  obj.x = Math.round(x/w*canvas.width);
  obj.y = Math.round(y/h*canvas.height);
  return obj;
}
