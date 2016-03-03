function IntroSlideController(init){
  this.finishFunction = init.finishFunction;//funktion wird ausgeführt wenn das Intro fertig ist
  this.finished = false; //wurde das Intro fertig abgespielt
  this.loadCount = 0;//wieviele Bilder wurden schon geladen
  this.counter = 0;// zeit in Millisekunden wie lange die Folie schon angezeigt wird
  this.currentSlideId = 0;//ID der aktuellen Folie
  this.slides = this.generateSlides();
  this.audios = this.generateAudio();

  this.titleImage = new Image();
  this.titleImage.src = "media/pictures/menu.png"

  this.WebFontConfig = {
custom: { families: ['AchtBit'],
urls: [ 'media/font/DTMMonoWeb.css']},
active: function() {}};
(function() {
    var wf = document.createElement('script');
	wf.src = 'js/webfontloader.js'
    //wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        //'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

  $(document).keydown(function(event){
		if(event.keyCode == 32){
      if (intro.currentSlideId<intro.slides.length){
        intro.currentSlideId++;
      }

    }
  });
}

IntroSlideController.prototype.render = function(elapsed){
  if(this.loadCount>=this.slides.length){

    //prüfen ob es für die aktuelle Slide ein Song gibt
    for (var i = 0; i < this.audios.length; i++){
      if(this.audios[i].id==this.currentSlideId){

        if(this.audios[i].audio.paused){

          if(i>0){
            this.audios[i-1].audio.pause()
          }
          this.audios[i].audio.play();
        }

      }
    }
    //die aktuelle Folie wird gerendert

    if(this.currentSlideId < this.slides.length-1){
    this.slides[this.currentSlideId].render();
    //die Zeit wie lange die Folie angezeigt wird, wird erhöht
    this.counter += elapsed;
    //falls die Folie schon lange genug angezeigt wird...
    if (this.counter >= this.slides[this.currentSlideId].duration){
      //wird die Zeit zurückgesetzt
      this.counter = 0;
      //wenn es noch Folien gibt, die noch nicht gezeigt wurden..-
      if(this.currentSlideId < this.slides.length-1){
        //wird der zähler für die nächste FOlie erhöht
        this.currentSlideId++;
      }else {
        //ansonsten wird der Status auf beendet gesetzt und die finale Funktion wird ausgeführt


      }
    }
  }else if(this.currentSlideId == this.slides.length-1){
    console.log("beendet")
    this.audios[3].audio.loop = true;

    this.blinken(elapsed);

  } else {
    this.audios[3].audio.pause()
    this.finishFunction();
    this.finished = true;
  }
  }
}

IntroSlideController.prototype.alertLoad = function(){
  this.loadCount++;
}


IntroSlideController.prototype.blinken = function(elapsed){ //lässt den Text unten blinken
  this.counter += elapsed;
	this.audiios[3].play();
	ctx.drawImage(this.titleImage, 0, 0, $(document).width(), $(document).height());
	ctx.font = "72px AchtBit";
  	ctx.textAlign = 'center';
  	ctx.fillStyle = 'brown';
  	ctx.fillText("Droned: Die Befreiung der Unterdr\u00fcckten",0.5*$(document).width(),100);

	if (this.counter < 500){

		ctx.font = "30px AchtBit";
		ctx.fillStyle = 'brown';
		ctx.fillText("Leertaste dr\u00fccken zum Starten",0.5*$(document).width(),$(document).height() - 50);
	} else if (this.counter > 1000){
    this.counter = 0;  
  }

}

IntroSlideController.prototype.generateAudio = function(){
  array = [];
  array.push({id:0,audio:new Audio("media/music/intro1.mp3")})
  array.push({id:12,audio:new Audio("media/music/intro2.mp3")})
  array.push({id:29,audio:new Audio("media/music/intro3.mp3")})
  array.push({id:40,audio:new Audio("media/music/menu.mp3")})
  return array;
}

IntroSlideController.prototype.generateSlides = function(){
  array = [];
  array.push(new IntroSlide({id: array.length, duration: 3500, text: "Vor langer Zeit, entschied einst ein weiser Mann,\nin Afghanisten und den Irak einzumaschieren."}))
  array.push(new IntroSlide({id: array.length, duration: 3200, text: "Diktatoren wurden gestuerzt..."}))
  array.push(new IntroSlide({id: array.length, duration: 3000, text: "Terroristische Organisationen zerschlagen..."}))
  array.push(new IntroSlide({id: array.length, duration: 4500, text: "Der gesamte Nahe Osten wurde erstmals\nzu einem Ort voller Freude und Hoffnung."}))
  array.push(new IntroSlide({id: array.length, duration: 2000, text: "Wem wir das zu verdanken haben?"}))
  array.push(new IntroSlide({id: array.length, duration: 5000, text: "Niemand Geringerem als Georg W. Bush,\n43. Praesident der Vereinigten Staaten."}))
  array.push(new IntroSlide({id: array.length, duration: 6000, text: "Seinem Land treu ergeben, tat er stets das Richtige\nund brachte die Vereinigten Staaten von Amerika zu neuem Glanz."}))
  array.push(new IntroSlide({id: array.length, duration: 8000, text: "Denn ihm lag allein das Wohl aller, von klein bis gross,\nvon schwarz bis weiss, von Amerikaner bis Mexikaner, am Herzen.\nNoch heute blickt man nostalgisch auf diese 8 Jahre zurueck."}))
  array.push(new IntroSlide({id: array.length, duration: 6000, text: "Seine Verabschiedung galt als eines der bewegendsten Momente jeden Amerikaners.\nEine glorreiche Aera war so eben zu Ende gegangen."}))
  array.push(new IntroSlide({id: array.length, duration: 6000, text: "Wer wuerde in derart riesige Fussstapfen treten?\nWuerde es ueberhaupt jemand geben, der es koennte?"}))
  array.push(new IntroSlide({id: array.length, duration: 8000, text: "Tatsaechlich gab es einen Kandidaten, der der Aufgabe gewachsen schien:\nSenator John McCain.\nDie Chance einer weiteren golden Aera schien zum Greifen nahe."}))
  array.push(new IntroSlide({id: array.length, duration: 3000, text: "Doch dann kam alles ganz anders..."}))
  array.push(new IntroSlide({id: array.length, duration: 3000, text: "...als Barack Obama Praesident wurde."}))
  array.push(new IntroSlide({id: array.length, duration: 7000, text: "Ohne mit der Wimper zu zucken, zerstoerte Obama alles,\nwas Bush aufgebaut hatte. Seine kommunistische Politik riss\ndas Fundament der amerikanischen Werte ein."}))
  array.push(new IntroSlide({id: array.length, duration: 5000, text: "Militarismus, Patriotismus und allen voran die Demokratie\ngehoerten der Vergangenheit an."}))
  array.push(new IntroSlide({id: array.length, duration: 6000, text: "Durch Obamas teuflichen Akt des Truppenabzugs\nuebernahm die Diktatur wieder die Oberhand ueber den Nahen Osten..."}))
  array.push(new IntroSlide({id: array.length, duration: 4000, text: "Und mit dem Wiederaufstieg der Diktatur kam das Chaos zurueck..."}))
  array.push(new IntroSlide({id: array.length, duration: 4000, text: "Und mit dem Chaos der Terrorismus..."}))
  array.push(new IntroSlide({id: array.length, duration: 6000, text: "Abu Bakr al-Baghdadi nutze die Gelegenheit\nund fuellte das durch das Chaos entstandene Machtvakuum\nmit seiner neu gegruendeten Terror Organisation:"}))
  array.push(new IntroSlide({id: array.length, duration: 4000, text: "...dem Islamischen Staat."}))
  array.push(new IntroSlide({id: array.length, duration: 6000, text: "Wie ein Parasit fing der IS an,\nmehr und mehr Gebiete in Syrien und dem Irak zu erobern."}))
  array.push(new IntroSlide({id: array.length, duration: 6000, text: "Unaufhaltsam und entschlossen, strebte der IS die Eroberung\nder arabischen und schlussendlich der gesamten Welt an."}))
  array.push(new IntroSlide({id: array.length, duration: 6000, text: "Um dies zu erreichen, zeigte der IS keine Gnade.\nDer internationale Terrorismus war auf einem neuen Hoehepunkt.\nUeberall auf der Welt kam es zu Terroranschlaegen."}))
  array.push(new IntroSlide({id: array.length, duration: 3000, text: "Obama hatte die Welt in ein dunkles Zeitalter gestuerzt."}))
  array.push(new IntroSlide({id: array.length, duration: 4000, text: " "}))
  array.push(new IntroSlide({id: array.length, duration: 7000, text: "Obama erkannte seinen Fehler und erklaerte dem IS den Krieg.\nJedoch weigerte er sich, Bodentruppen einzusetzen.\nEinzig und allein mit Dronen sollte der IS besiegt werden."}))
  array.push(new IntroSlide({id: array.length, duration: 7000, text: "Doch natuerlich konnte man so allein den Terror nicht bekaempfen.\nObama verschlimmerte die Situation nur noch, als weitere Diktatoren\nentschieden, sich an dem Krieg im Nahen Osten zu beteiligen."}))
  array.push(new IntroSlide({id: array.length, duration: 5000, text: "Nach 8 Jahren war der Spuk vorbei.\nObama liess nach seiner Verabschiedung ein Truemmerfeld zurueck."}))
  array.push(new IntroSlide({id: array.length, duration: 6000, text: "Die Welt brauchte eine neue Hoffnung,\neinen zweiten Georg W. Bush.\nZum Glueck wurden die Gebete des amerikanischen Volkes diesmal erhoert..."}))
  array.push(new IntroSlide({id: array.length, duration: 5000, text: "...als Donald Trump zum 45. Praesident der USA wurde."}))
  array.push(new IntroSlide({id: array.length, duration: 7000, text: "Trump wusste, was Obama falsch gemacht hatte.\nUnd er wusste, was er tun musste, um Amerika wieder gross und glorreich zu machen."}))
  array.push(new IntroSlide({id: array.length, duration: 7000, text: "Die amerikanischen Werte wurden wiederhergestellt.\nDer amerikanische Stolz kehrte zurueck.\n Die amerikanische Staerke war so gross wie nie zuvor."}))
  array.push(new IntroSlide({id: array.length, duration: 5000, text: "Das amerikanische Volk hatte wieder Hoffnungen und Traeume."}))
  array.push(new IntroSlide({id: array.length, duration: 7000, text: "Bushs Werk wurde fortgefuehrt.\nDie kommunistischen Krater der demokratischen Partei endgueltig gefuellt."}))
  array.push(new IntroSlide({id: array.length, duration: 7000, text: "Doch der groesste Scherbenhaufen lag nicht im Inland.\nDer Nahe Osten musste gerettet werden.\nDer Islamische Staat musste besiegt werden."}))
  array.push(new IntroSlide({id: array.length, duration: 6000, text: "Mithilfe seines grossen militaerischen Geschickes,\nordnete Trump eine Grossoffensive gegen den IS an."}))
  array.push(new IntroSlide({id: array.length, duration: 5000, text: "Und nun kommst du ins Spiel..."}))
  array.push(new IntroSlide({id: array.length, duration: 7000, text: "Auch wenn mit dem Einsatz von Bodentruppen bisher viel erreicht wurde,\nsind Sie als Dronenpilot nach wie vor unentbehrlich fuer den Kampf gegen den Terror."}))
  array.push(new IntroSlide({id: array.length, duration: 8000, text: "Ihr Praesident moechte von Ihnen vor allen Dingen eins:\nDass Sie keine Gnade walten lassen.\nJedes Haus ist ein potentielles Versteck fuer Terroristen."}))
  array.push(new IntroSlide({id: array.length, duration: 10000, text: "Demokratie gibt es nur durch Frieden.\nFrieden nur durch den Sieg des Krieges.\nUnd den Sieg nur durch gnadenloses Zerbomben.\nMit jeder Ihrer Bomben verbreiten Sie also mehr und mehr Demokratie im Nahen Osten."}))

  return array;
}
