var canvas, ctx;
var previousTime;
var viewport = {r:0*Math.PI, x:0, y:0, z:1};   //Rotation,x-Verschiebung,y-Verschiebung,Zoomfaktor
var daytime = 14.0;
var globalMap;
//var map = [],
var mapDimension = 256, roughness = 30, unitSize = 1;
var coordList = "";
var editor;
var menu;
var game;
var hud;
var miniMap;
var newObj = {};
var gameStatus; //0 = intro; 1 = game; 2 = editor

window.onload = function(){
  $( "canvas" ).click(function(e){
    coord = realToCanvas(e.pageX, e.pageY);
  });

  //Canvas initialisieren und Context global laden
  canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");

  //render loop starten

  if(editMode){
    gameStatus = 2;
    globalMap = new Map(getMap());
    editor = new Editor();
    editor.drawMapElements();
  }else{
    gameStatus = 0;
    menu = new Menu();
  }

  renderer();
}

globalMap.render(elapsed);

function renderer(timestamp) {
  requestAnimationFrame(renderer);

  //Calcuate the time that has elapsed since the last frame
  if (!timestamp){
    timestamp = 0;
  }
  var elapsed = timestamp - previousTime;
	if (!isNaN(elapsed)){

	}

	if(gameStatus != 0){
    globalMap.render(elapsed);
  }
  if(gameStatus == 1){
    game.calculate(elapsed);
    miniMap.refreshImage();
    hud.render(elapsed);
  }

  previousTime = timestamp;
}

function realToCanvas(x, y){
  var obj = {}
  obj.x = Math.round(x/canvas.width*canvas.width);
  obj.y = Math.round(y/canvas.height*canvas.height);
  return obj;
}
