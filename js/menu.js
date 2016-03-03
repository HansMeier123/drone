var intro = 1; //Zählervariable für die einzelnen Intro Schritte
var blink = 0; //Zählervariable für die Blink Funktion
var px; //festgelegte X-Koordinate für die Bilder im Intro
var py; //festgelegte Y-Koordinate für die Bilder im Intro
var pheight; //festgelegte Höhe für die Bilder im Intro
var pwidth; //festgelegte Breite für die Bilder im Intro
var tx; //festgelegte X-Koordinate für die Texte im Intro
var ty; //festgelegte Y-Koordinate für die Texte im Intro
var texte = []; //Array für die Texte im Intro
var lines = []; //Array für die Angabe, wie viele Zeilen der Text im jeweiligen Intro Schritt umfasst
var lintro = 1; //Zählervariable um zu berücksichtigen, dass pro Intro Schritt durch mehrzeiligen Text der Text weiter hinten aus dem texte Array gelesen werden soll
var bilder = []; //Array für die Bilder im Intro
var keinbild = 0; //Zählervariable beim Erstellen des bilder Arrays, um Stellen ohne Bilder im Array leer zu lassen
var delay = []; //Array für die Zeit der Verzögerungen zwischen den einzelnen Intro Schritten
var timeoutes = []; //Array für die Timeout Verzögerungen zwischen den einzelnen Intro Schritten
var music = []; //Array für die Musik Dateien im Intro und Titelbildschirm

var img1 = new Image; //erstes Bild für Intro muss vor FillArray() schon deklariert und definiert sein, um angezeigt zu werden
img1.src = 'media/pictures/intro1.jpg';

//lädt den Custom Font (AchtBit) mithilfe des Google Webfont Loaders
WebFontConfig = {
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

function Menu()
{
	this.started = false;
	pheight = 0.5*$(document).height(); //Bestimmung der Koordinaten und Größer der Texte und Bilder
	pwidth = Math.round(pheight*16/9);
	px = 0.5*$(document).width() - 0.5*pwidth;
	py = 50;
	tx = 0.5*$(document).width();
	ty = py + pheight + 50;
	FillArray(); //Array füllen
	setTimeout(function(){IntroRender();},3000); //IntroRender Funktion muss mit Verzögerung gestartet werden, damit der Custom Font vorher geladen wird
}


$(document).keydown(function(event)
{
	if(event.keyCode == 32 && !menu.started)
	{
		if (intro == 45) //startet das Spiel beim Drücken der Leertaste im Titelbildschirm
		{
			music[3].pause();
			music[3].currentTime = 0;
			menu.started = true;
			gameStatus = 1;

			viewport.x = -1*Math.round(5000 - canvas.width/2);
			viewport.y = -1*Math.round(5000 - canvas.height/2);
	
			globalMap = new Map(getMap());
			game = new Game();
			miniMap = new MiniMap();
			hud = new Hud();
		} 
		else //beendet das Intro und springt zum Titebildschirm beim Drücken der Leertaste im Intro
		{			
			clearTimeout(timeoutes[intro]);
			intro = 45;
			Menu.prototype.Titelbildschirm();
		}
	}
});

function FillArray()
{
	texte.push(""); //füllt das texte und lines Array
	lines.push(0);
	texte.push("Vor langer Zeit, entschied einst ein weiser Mann,");
	texte.push("in Afghanisten und den Irak einzumaschieren.");
	lines.push(2);
	texte.push("Diktatoren wurden gest\u00fcrzt...");
	lines.push(1);
	texte.push("Terroristische Organisationen zerschlagen...");
	lines.push(1);
	texte.push("Der gesamte Nahe Osten wurde erstmals");
	texte.push("zu einem Ort voller Freude und Hoffnung.");
	lines.push(2);
	texte.push("Wem wir das zu verdanken haben?");
	lines.push(1);
	texte.push("Niemand Geringerem als Georg W. Bush,");
	texte.push("43. Pr\u00e4sident der Vereinigten Staaten.");
	lines.push(2);
	texte.push("Seinem Land treu ergeben, tat er stets das Richtige");
	texte.push("und brachte die Vereinigten Staaten von Amerika zu neuem Glanz.");
	lines.push(2);
	texte.push("Denn ihm lag allein das Wohl aller, von klein bis gross,");
	texte.push("von schwarz bis wei\u00df, von Amerikaner bis Mexikaner, am Herzen.");
	texte.push("Noch heute blickt man nostalgisch auf diese 8 Jahre zur\u00fcck.");
	lines.push(3);
	texte.push("Seine Verabschiedung galt als eines der bewegendsten Momente jeden Amerikaners.");
	texte.push("Eine glorreiche \u00c4ra war so eben zu Ende gegangen.");
	lines.push(2);
	texte.push("Wer w\u00fcrde in derart riesige Fu\u00dfstapfen treten?");
	texte.push("W\u00fcrde es \u00fcberhaupt jemand geben, der es k\u00f6nnte?");
	lines.push(2);
	texte.push("Tats\u00e4chlich gab es einen Kandidaten, der der Aufgabe gewachsen schien:");
	texte.push("Senator John McCain.");
	texte.push("Die Chance einer weiteren golden \u00c4ra schien zum Greifen nahe.");
	lines.push(3);
	texte.push("Doch dann kam alles ganz anders...");
	lines.push(1);
	texte.push("...als Barack Obama Pr\u00e4sident wurde.");
	lines.push(1);
	texte.push("Ohne mit der Wimper zu zucken, zerst\u00f6rte Obama alles,");
	texte.push("was Bush aufgebaut hatte. Seine kommunistische Politik riss");
	texte.push("das Fundament der amerikanischen Werte ein.");
	lines.push(3);
	texte.push("Militarismus, Patriotismus und allen voran die Demokratie");
	texte.push("geh\u00f6rten der Vergangenheit an.");
	lines.push(2);
	texte.push("Durch Obamas teuflichen Akt des Truppenabzugs");
	texte.push("\u00fcbernahm die Diktatur wieder die Oberhand \u00fcber den Nahen Osten...");
	lines.push(2);
	texte.push("Und mit dem Wiederaufstieg der Diktatur kam das Chaos zur\u00fcck...");
	lines.push(1);
	texte.push("Und mit dem Chaos der Terrorismus...");
	lines.push(1);
	texte.push("Abu Bakr al-Baghdadi nutzte die Gelegenheit");
	texte.push("und f\u00fcllte das durch das Chaos entstandene Machtvakuum");
	texte.push("mit seiner neu gegr\u00fcndeten Terror Organisation:");
	lines.push(3);
	texte.push("...dem Islamischen Staat.");
	lines.push(1);
	texte.push("Wie ein Parasit fing der IS an,");
	texte.push("mehr und mehr Gebiete in Syrien und dem Irak zu erobern.");
	lines.push(2);
	texte.push("Unaufhaltsam und entschlossen, strebte der IS die Eroberung");
	texte.push("der arabischen und schlussendlich der gesamten Welt an.");
	lines.push(2);
	texte.push("Um dies zu erreichen, zeigte der IS keine Gnade.");
	texte.push("Der internationale Terrorismus war auf einem neuen H\u00f6hepunkt.");
	texte.push("\u00dcberall auf der Welt kam es zu Terroranschl\u00e4gen.");
	lines.push(3);
	texte.push("Obama hatte die Welt in ein dunkles Zeitalter gest\u00fcrzt.");
	lines.push(1);
	lines.push(0);
	texte.push("Obama erkannte seinen Fehler und erkl\u00e4rte dem IS den Krieg.");
	texte.push("Jedoch weigerte er sich, Bodentruppen einzusetzen.");
	texte.push("Einzig und allein mit Dronen sollte der IS besiegt werden.");
	lines.push(3);
	texte.push("Doch nat\u00fcrlich konnte man so allein den Terror nicht bek\u00e4mpfen.");
	texte.push("Obama verschlimmerte die Situation nur noch, als weitere Diktatoren");
	texte.push("entschieden, sich an dem Krieg im Nahen Osten zu beteiligen.");
	lines.push(3);
	texte.push("Nach 8 Jahren war der Spuk vorbei.");
	texte.push("Obama lie\u00df nach seiner Verabschiedung ein Tr\u00fcmmerfeld zur\u00fcck.");
	lines.push(2);
	texte.push("Die Welt brauchte eine neue Hoffnung,");
	texte.push("einen zweiten Georg W. Bush.");
	texte.push("Zum Gl\u00fcck wurden die Gebete des amerikanischen Volkes diesmal erh\u00f6rt...");
	lines.push(3);
	texte.push("...als Donald Trump zum 45. Pr\u00e4sident der USA wurde.");
	lines.push(1);
	texte.push("Trump wusste, was Obama falsch gemacht hatte.");
	texte.push("Und er wusste, was er tun musste, um Amerika wieder gro\u00df und glorreich zu machen.");
	lines.push(2);
	texte.push("Die amerikanischen Werte wurden wiederhergestellt.");
	texte.push("Der amerikanische Stolz kehrte zur\u00fcck.");
	texte.push("Die amerikanische St\u00e4rke war so gro\u00df wie nie zuvor.");
	lines.push(3);
	texte.push("Das amerikanische Volk hatte wieder Hoffnungen und Tr\u00e4ume.");
	lines.push(1);
	texte.push("Bushs Werk wurde fortgef\u00fchrt.");
	texte.push("Die kommunistischen Krater der demokratischen Partei endg\u00fcltig gef\u00fcllt.");
	lines.push(2);
	texte.push("Doch der gr\u00f6\u00dfte Scherbenhaufen lag nicht im Inland.");
	texte.push("Der Nahe Osten musste gerettet werden.");
	texte.push("Der Islamische Staat musste besiegt werden.");
	lines.push(3);
	texte.push("Mithilfe seines gro\u00dfen milit\u00e4rischen Geschickes,");
	texte.push("ordnete Trump eine Gro\u00dfoffensive gegen den IS an.");
	lines.push(2);
	texte.push("Und da kommen Sie ins Spiel...");
	lines.push(1);
	texte.push("Auch wenn mit dem Einsatz von Bodentruppen bisher viel erreicht wurde,");
	texte.push("sind Sie als Dronenpilot nach wie vor unentbehrlich f\u00fcr den Kampf gegen den Terror.");
	lines.push(2);
	texte.push("Ihr Pr\u00e4sident m\u00f6chte von Ihnen vor allen Dingen eins:");
	texte.push("Dass Sie keine Gnade walten lassen.");
	texte.push("Jedes Haus ist ein potentielles Versteck f\u00fcr Terroristen.");
	lines.push(3);
	texte.push("Demokratie gibt es nur durch Frieden.");
	texte.push("Frieden nur durch den Sieg des Krieges.");
	texte.push("Und den Sieg nur durch gnadenloses Zerbomben.");
	texte.push("Mit jeder Ihrer Bomben verbreiten Sie also mehr und mehr Demokratie im Nahen Osten.");
	lines.push(4);
	texte.push("Die Zeit ist gekommen.");
	texte.push("Machen Sie den Nahen Osten wieder zu einem friedlichen und demokratischen Ort!");
	texte.push("Machen Sie Ihren Pr\u00e4sidenten und das amerikanische Volk stolz!");
	lines.push(3);
	texte.push("Machen Sie die Vereinigten Staaten von Amerika wieder gro\u00df und glorreich!");
	lines.push(1);
	
	for(var i = 2; i < 43; i++) //füllt das bilder Array
	{
		if (i == 5 || i == 10 || i == 12 || i == 25 || i == 29 || i == 37)
		{
			keinbild++;
			continue;
		}
		
		bilder[i] = new Image();
		bilder[i].src = "media/pictures/intro" + (i - keinbild) + ".jpg";
	}
	
	imgmenu = new Image(); //legt das Bild für den Titelbildschirm fest
	imgmenu.src = 'media/pictures/menu.png';

	delay.push(0); //füllt das delay Array
	delay.push(3500);
	delay.push(3200);
	delay.push(3000);
	delay.push(4500);
	delay.push(2000);
	delay.push(5000);
	delay.push(6000);
	delay.push(8000);
	delay.push(6000);
	delay.push(6000);
	delay.push(8000);
	delay.push(3000);
	delay.push(3000);
	delay.push(7000);
	delay.push(5000);
	delay.push(6000);
	delay.push(4000);
	delay.push(4000);
	delay.push(6000);
	delay.push(4000);
	delay.push(6000);
	delay.push(6000);
	delay.push(6000);
	delay.push(3000);
	delay.push(4000);
	delay.push(7000);
	delay.push(7000);
	delay.push(5000);
	delay.push(6000);
	delay.push(5000);
	delay.push(7000);
	delay.push(7000);
	delay.push(5000);
	delay.push(7000);
	delay.push(7000);
	delay.push(6000);
	delay.push(5000);
	delay.push(7000);
	delay.push(7000);
	delay.push(10000);
	delay.push(9000);
	delay.push(10000);
	delay.push(3000);
	
	for(var i = 0; i < 3; i++) //füllt das music Array
	{
		music[i] = new Audio('media/music/intro' + (i + 1) + '.mp3');
	}
		music[3] = new Audio('media/music/menu.mp3');
}

function IntroRender()
{
	if (intro == 45)
	{
		return;
	}
	
	ctx.clearRect(0,0,canvas.width,canvas.height); //zeichnet den schwarzen Untergrund und legt die Eigenschaften des Textes fest
	ctx.fillStyle = 'black';
  	ctx.fillRect(0,0,$(document).width(),$(document).height());
	ctx.font = "28px AchtBit";
	ctx.fillStyle = 'white';
	ctx.textAlign = 'center';
	
	switch (intro) //für den Musikwechsel während des Intros zuständig
	{
		case 1:
		{
			music[0].play();
			break;
		}

		case 12:
		{
			music[0].pause();
			music[0].currentTime = 0;
			break;
		}

		case 13:
		{
			music[1].play();
			break;
		}

		case 29:
		{
			music[1].pause();
			music[1].currentTime = 0;
			break;
		}

		case 30:
		{
			music[2].play();
			break;
		}
		
		case 44:
		{
			Menu.prototype.Titelbildschirm();
			intro++;
			return;
		}
	}
	
	if (intro == 1) //für das Zeichnen des Bildes zuständig
	{
		ctx.drawImage(img1, px, py, pwidth, pheight);
	}
	else
	{
		if (bilder[intro] != null)
		{
			ctx.drawImage(bilder[intro], px, py, pwidth, pheight);
		}
	}
		
	if (lines[intro] >= 1) //für das Schreiben des Textes auf mehreren Zeilen zuständig
	{
		ctx.fillText(texte[lintro], tx, ty);
	}
	
	if (lines[intro] >= 2)
	{
		ctx.fillText(texte[lintro + 1], tx, ty + 40);
	}
	
	if (lines[intro] >= 3)
	{
		ctx.fillText(texte[lintro + 2], tx, ty + 80);
	}
	
	if (lines[intro] == 4)
	{
		ctx.fillText(texte[lintro + 3], tx, ty + 120);
	}
	
	lintro = lintro + lines[intro]; //addiert zu lintro die derzeitigen Anzahl der Zeilen, damit das Programm weiß, wo der nächste Text im Array anfängt
	timeoutes[intro] = setTimeout(function(){IntroRender();},delay[intro]); //erstellt die Verzögerung bis zum nächsten Intro Schritt
	intro++;
}

Menu.prototype.Titelbildschirm = function(){
	music[0].pause(); //pausiert alle anderen Songs, um den Titelsong zu spielen
	music[1].pause();
	music[2].pause();
	music[0].currentTime = 0;
	music[1].currentTime = 0;
	music[2].currentTime = 0;
	music[3].play();
	music[3].loop = true;

	ctx.clearRect(0,0,canvas.width,canvas.height); //zeichnet den Titelbildschirm
	ctx.drawImage(imgmenu, 0, 0, $(document).width(), $(document).height());
	ctx.font = "72px AchtBit";
  	ctx.textAlign = 'center';
  	ctx.fillStyle = 'brown';
  	ctx.fillText("Droned: Die Befreiung der Unterdr\u00fcckten",0.5*$(document).width(),100);
	setTimeout(function(){Menu.prototype.blinken();},3000); //sorgt dafür, dass der blinkende Text nach 3 Sekunden unten erscheint
}

Menu.prototype.blinken = function(){ //lässt den Text unten blinken
	if (this.started){
		return;
	}

	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(imgmenu, 0, 0, $(document).width(), $(document).height());
	ctx.font = "72px AchtBit";
  	ctx.textAlign = 'center';
  	ctx.fillStyle = 'brown';
  	ctx.fillText("Droned: Die Befreiung der Unterdr\u00fcckten",0.5*$(document).width(),100);

	if (blink == 1)
	{
		blink = 0;
		setTimeout(function(){Menu.prototype.blinken();},1000);
	}
	else
	{
		blink = 1;
		ctx.font = "30px AchtBit";
		ctx.fillStyle = 'brown';
		ctx.fillText("Leertaste dr\u00fccken zum Starten",0.5*$(document).width(),$(document).height() - 50);
		setTimeout(function(){Menu.prototype.blinken();},1000);
	}
}
