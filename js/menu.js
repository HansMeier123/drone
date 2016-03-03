function Menu(){
	this.images = [];
		for(var i = 0; i < 36; i++){
			this.images.push(new Image());
			this.images[i].src = 'media/pictures/intro' + (i + 1) + '.jpg';
		}
		this.images.push(new Image());
		this.images[36].src = 'media/pictures/menu.png';

	this.music = [];
		for(var i = 0; i < 3; i++){
			this.music[i] = new Audio('media/music/intro' + (i + 1) + '.mp3');
		}
		this.music[3] = new Audio('media/music/menu.mp3');

	this.started = false;
	this.intro = 0;
	this.blink = 0;


	$(document).keydown(function(event){
		if(event.keyCode == 32 && !menu.started){
			if (menu.intro == 44){
				menu.music[3].pause();
				menu.started = true;
				gameStatus = 1;

	      viewport.x = -1*Math.round(5000 - canvas.width/2);
	      viewport.y = -1*Math.round(5000 - canvas.height/2);

	      globalMap = new Map(getMap());
	      game = new Game();
	      miniMap = new MiniMap();
	      hud = new Hud();
			} else {
				switch(menu.intro){
					case 1: {clearTimeout(timeout1); break;}
					case 2: {clearTimeout(timeout2); break;}
					case 3: {clearTimeout(timeout3); break;}
					case 4: {clearTimeout(timeout4); break;}
					case 5: {clearTimeout(timeout5); break;}
					case 6: {clearTimeout(timeout6); break;}
					case 7: {clearTimeout(timeout7); break;}
					case 8: {clearTimeout(timeout8); break;}
					case 9: {clearTimeout(timeout9); break;}
					case 10: {clearTimeout(timeout10); break;}
					case 11: {clearTimeout(timeout11); break;}
					case 12: {clearTimeout(timeout12); break;}
					case 13: {clearTimeout(timeout13); break;}
					case 14: {clearTimeout(timeout14); break;}
					case 15: {clearTimeout(timeout15); break;}
					case 16: {clearTimeout(timeout16); break;}
					case 17: {clearTimeout(timeout17); break;}
					case 18: {clearTimeout(timeout18); break;}
					case 19: {clearTimeout(timeout19); break;}
					case 20: {clearTimeout(timeout20); break;}
					case 21: {clearTimeout(timeout21); break;}
					case 22: {clearTimeout(timeout22); break;}
					case 23: {clearTimeout(timeout23); break;}
					case 24: {clearTimeout(timeout24); break;}
					case 25: {clearTimeout(timeout25); break;}
					case 26: {clearTimeout(timeout26); break;}
					case 27: {clearTimeout(timeout27); break;}
					case 28: {clearTimeout(timeout28); break;}
					case 29: {clearTimeout(timeout29); break;}
					case 30: {clearTimeout(timeout30); break;}
					case 31: {clearTimeout(timeout31); break;}
					case 32: {clearTimeout(timeout32); break;}
					case 33: {clearTimeout(timeout33); break;}
					case 34: {clearTimeout(timeout34); break;}
					case 35: {clearTimeout(timeout35); break;}
					case 36: {clearTimeout(timeout36); break;}
					case 37: {clearTimeout(timeout37); break;}
					case 38: {clearTimeout(timeout38); break;}
					case 39: {clearTimeout(timeout39); break;}
					case 40: {clearTimeout(timeout40); break;}
					case 41: {clearTimeout(timeout41); break;}
					case 42: {clearTimeout(timeout42); break;}
					case 43: {clearTimeout(timeout42); break;}
				}

				menu.intro = 44;
				menu.titelbildschirm();
			}
		}
	});
}

Menu.prototype.introRender = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font = "32px consolas";
	ctx.fillStyle = 'white';
	ctx.textAlign = 'center';

	this.intro++;

	switch(this.intro){

		case 1:{
    	menu.music[0].play();
			ctx.drawImage(this.images[0], canvas.width/2 - 480, 50, 960, 540);
			ctx.fillText("Vor langer Zeit, entschied einst ein weiser Mann,",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("in Afghanisten und den Irak einzumaschieren.",0.5*canvas.width,canvas.height - 260);
			timeout1 = setTimeout(function(){menu.introRender();},3500);
			break;
		}

		case 2:{
			ctx.drawImage(this.images[1],  canvas.width/2 - 480, 50, 960, 540);
			ctx.fillText("Diktatoren wurden gestuerzt...",0.5*canvas.width,canvas.height - 300);
			timeout2 = setTimeout(function(){menu.introRender();},3200);
			break;
		}

		case 3:{
			ctx.drawImage(this.images[2], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Terroristische Organisationen zerschlagen...",0.5*canvas.width,canvas.height - 300);
			timeout3 = setTimeout(function(){menu.introRender();},3000);
			break;
		}

		case 4:{
			ctx.drawImage(this.images[3], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Der gesamte Nahe Osten wurde erstmals",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("zu einem Ort voller Freude und Hoffnung.",0.5*canvas.width,canvas.height - 260);
			timeout4 = setTimeout(function(){menu.introRender();},4500);
			break;
		}

		case 5:{
			ctx.fillText("Wem wir das zu verdanken haben?",0.5*canvas.width,canvas.height - 300);
			timeout5 = setTimeout(function(){menu.introRender();},2000);
			break;
		}

		case 6:{
			ctx.drawImage(this.images[4], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Niemand Geringerem als Georg W. Bush,",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("43. Praesident der Vereinigten Staaten.",0.5*canvas.width,canvas.height - 260);
			timeout6 = setTimeout(function(){menu.introRender();},5000);
			break;
		}

		case 7:{
			ctx.drawImage(this.images[5], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Seinem Land treu ergeben, tat er stets das Richtige",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("und brachte die Vereinigten Staaten von Amerika zu neuem Glanz.",0.5*canvas.width,canvas.height - 260);
			timeout7 = setTimeout(function(){menu.introRender();},6000);
			break;
		}

		case 8:{
			ctx.drawImage(this.images[6], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Denn ihm lag allein das Wohl aller, von klein bis gross,",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("von schwarz bis weiss, von Amerikaner bis Mexikaner, am Herzen.",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("Noch heute blickt man nostalgisch auf diese 8 Jahre zurueck.",0.5*canvas.width,canvas.height - 220);
			timeout8 = setTimeout(function(){menu.introRender();},8000);
			break;
		}

		case 9:{
			ctx.drawImage(this.images[7], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Seine Verabschiedung galt als eines der bewegendsten Momente jeden Amerikaners.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Eine glorreiche Aera war so eben zu Ende gegangen.",0.5*canvas.width,canvas.height - 260);
			timeout9 = setTimeout(function(){menu.introRender();},6000);
			break;
		}

		case 10:{
			ctx.fillText("Wer wuerde in derart riesige Fussstapfen treten?",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Wuerde es ueberhaupt jemand geben, der es koennte?",0.5*canvas.width,canvas.height - 260);
			timeout10 = setTimeout(function(){menu.introRender();},6000);
			break;
		}

		case 11:{
			ctx.drawImage(this.images[8], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Tatsaechlich gab es einen Kandidaten, der der Aufgabe gewachsen schien:",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Senator John McCain.",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("Die Chance einer weiteren golden Aera schien zum Greifen nahe.",0.5*canvas.width,canvas.height - 220);
			timeout11 = setTimeout(function(){menu.introRender();},8000);
			break;
		}

		case 12:{
			this.music[0].pause();
			this.music[0].currentTime = 0;
			ctx.fillText("Doch dann kam alles ganz anders...",0.5*canvas.width,canvas.height - 300);
			timeout12 = setTimeout(function(){menu.introRender();},3000);
			break;
		}

		case 13:{
			this.music[1].play();
			ctx.drawImage(this.images[9], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("...als Barack Obama Praesident wurde.",0.5*canvas.width,canvas.height - 300);
			timeout13 = setTimeout(function(){menu.introRender();},3000);
			break;
		}

		case 14:{
			ctx.drawImage(this.images[10], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Ohne mit der Wimper zu zucken, zerstoerte Obama alles,",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("was Bush aufgebaut hatte. Seine kommunistische Politik riss",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("das Fundament der amerikanischen Werte ein.",0.5*canvas.width,canvas.height - 220);
			timeout14 = setTimeout(function(){menu.introRender();},7000);
			break;
		}

		case 15:{
			ctx.drawImage(this.images[11], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Militarismus, Patriotismus und allen voran die Demokratie",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("gehoerten der Vergangenheit an.",0.5*canvas.width,canvas.height - 260);
			timeout15 = setTimeout(function(){menu.introRender();},5000);
			break;
		}

		case 16:{
			ctx.drawImage(this.images[12], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Durch Obamas teuflichen Akt des Truppenabzugs",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("uebernahm die Diktatur wieder die Oberhand ueber den Nahen Osten...",0.5*canvas.width,canvas.height - 260);
			timeout16 = setTimeout(function(){menu.introRender();},6000);
			break;
		}

		case 17:{
			ctx.drawImage(this.images[13], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Und mit dem Wiederaufstieg der Diktatur kam das Chaos zurueck...",0.5*canvas.width,canvas.height - 300);
			timeout17 = setTimeout(function(){menu.introRender();},4000);
			break;
		}

		case 18:{
			ctx.drawImage(this.images[14], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Und mit dem Chaos der Terrorismus...",0.5*canvas.width,canvas.height - 300);
			timeout18 = setTimeout(function(){menu.introRender();},4000);
			break;
		}

		case 19:{
			ctx.drawImage(this.images[15], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Abu Bakr al-Baghdadi nutze die Gelegenheit",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("und fuellte das durch das Chaos entstandene Machtvakuum",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("mit seiner neu gegruendeten Terror Organisation:",0.5*canvas.width,canvas.height - 220);
			timeout19 = setTimeout(function(){menu.introRender();},6000);
			break;
		}

		case 20:{
			ctx.drawImage(this.images[16], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("...dem Islamischen Staat.",0.5*canvas.width,canvas.height - 300);
			timeout20 = setTimeout(function(){menu.introRender();},4000);
			break;
		}

		case 21:{
			ctx.drawImage(this.images[17], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Wie ein Parasit fing der IS an,",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("mehr und mehr Gebiete in Syrien und dem Irak zu erobern.",0.5*canvas.width,canvas.height - 260);
			timeout21 = setTimeout(function(){menu.introRender();},6000);
			break;
		}

		case 22:{
			ctx.drawImage(this.images[18], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Unaufhaltsam und entschlossen, strebte der IS die Eroberung",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("der arabischen und schlussendlich der gesamten Welt an.",0.5*canvas.width,canvas.height - 260);
			timeout22 = setTimeout(function(){menu.introRender();},6000);
			break;
		}

		case 23:{
			ctx.drawImage(this.images[19], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Um dies zu erreichen, zeigte der IS keine Gnade.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Der internationale Terrorismus war auf einem neuen Hoehepunkt.",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("Ueberall auf der Welt kam es zu Terroranschlaegen.",0.5*canvas.width,canvas.height - 220);
			timeout23 = setTimeout(function(){menu.introRender();},6000);
			break;
		}

		case 24:{
			ctx.drawImage(this.images[20], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Obama hatte die Welt in ein dunkles Zeitalter gestuerzt.",0.5*canvas.width,canvas.height - 300);
			timeout24 = setTimeout(function(){menu.introRender();},3000);
			break;
		}

		case 25:{
			timeout25 = setTimeout(function(){menu.introRender();},4000);
			break;
		}

		case 26:{
			ctx.drawImage(this.images[21], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Obama erkannte seinen Fehler und erklaerte dem IS den Krieg.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Jedoch weigerte er sich, Bodentruppen einzusetzen.",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("Einzig und allein mit Dronen sollte der IS besiegt werden.",0.5*canvas.width,canvas.height - 220);
			timeout26 = setTimeout(function(){menu.introRender();},7000);
			break;
		}

		case 27:{
			ctx.drawImage(this.images[22], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Doch natuerlich konnte man so allein den Terror nicht bekaempfen.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Obama verschlimmerte die Situation nur noch, als weitere Diktatoren",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("entschieden, sich an dem Krieg im Nahen Osten zu beteiligen.",0.5*canvas.width,canvas.height - 220);
			timeout27 = setTimeout(function(){menu.introRender();},7000);
			break;
		}

		case 28:{
			ctx.drawImage(this.images[23], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Nach 8 Jahren war der Spuk vorbei.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Obama liess nach seiner Verabschiedung ein Truemmerfeld zurueck.",0.5*canvas.width,canvas.height - 260);
			timeout28 = setTimeout(function(){menu.introRender();},5000);
			break;
		}

		case 29:{
			this.music[0].pause();
			this.music[1].pause();
			this.music[1].currentTime = 0;
			ctx.fillText("Die Welt brauchte eine neue Hoffnung,",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("einen zweiten Georg W. Bush.",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("Zum Glueck wurden die Gebete des amerikanischen Volkes diesmal erhoert...",0.5*canvas.width,canvas.height - 220);
			timeout29 = setTimeout(function(){menu.introRender();},6000);
			break;
		}

		case 30:{
			this.music[2].play();
			ctx.drawImage(this.images[24], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("...als Donald Trump zum 45. Praesident der USA wurde.",0.5*canvas.width,canvas.height - 300);
			timeout30 = setTimeout(function(){menu.introRender();},5000);
			break;
		}

		case 31:{
			ctx.drawImage(this.images[25], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Trump wusste, was Obama falsch gemacht hatte.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Und er wusste, was er tun musste, um Amerika wieder gross und glorreich zu machen.",0.5*canvas.width,canvas.height - 260);
			timeout31 = setTimeout(function(){menu.introRender();},7000);
			break;
		}

		case 32:{
			ctx.drawImage(this.images[26], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Die amerikanischen Werte wurden wiederhergestellt.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Der amerikanische Stolz kehrte zurueck.",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("Die amerikanische Staerke war so gross wie nie zuvor.",0.5*canvas.width,canvas.height - 220);
			timeout32 = setTimeout(function(){menu.introRender();},7000);
			break;
		}

		case 33:{
			ctx.drawImage(this.images[27], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Das amerikanische Volk hatte wieder Hoffnungen und Traeume.",0.5*canvas.width,canvas.height - 300);
			timeout33 = setTimeout(function(){menu.introRender();},5000);
			break;
		}

		case 34:{
			ctx.drawImage(this.images[28], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Bushs Werk wurde fortgefuehrt.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Die kommunistischen Krater der demokratischen Partei endgueltig gefuellt.",0.5*canvas.width,canvas.height - 260);
			timeout34 = setTimeout(function(){menu.introRender();},7000);
			break;
		}

		case 35:{
			ctx.drawImage(this.images[29], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Doch der groesste Scherbenhaufen lag nicht im Inland.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Der Nahe Osten musste gerettet werden.",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("Der Islamische Staat musste besiegt werden.",0.5*canvas.width,canvas.height - 220);
			timeout35 = setTimeout(function(){menu.introRender();},7000);
			break;
		}

		case 36:{
			ctx.drawImage(this.images[30], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Mithilfe seines grossen militaerischen Geschickes,",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("ordnete Trump eine Grossoffensive gegen den IS an.",0.5*canvas.width,canvas.height - 260);
			timeout36 = setTimeout(function(){menu.introRender();},6000);
			break;
		}

		case 37:{
			ctx.fillText("Und da kommen Sie ins Spiel...",0.5*canvas.width,canvas.height - 300);
			timeout37 = setTimeout(function(){menu.introRender();},5000);
			break;
		}

		case 38:{
			ctx.drawImage(this.images[31], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Auch wenn mit dem Einsatz von Bodentruppen bisher viel erreicht wurde,",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("sind Sie als Dronenpilot nach wie vor unentbehrlich fuer den Kampf gegen den Terror.",0.5*canvas.width,canvas.height - 260);
			timeout38 = setTimeout(function(){menu.introRender();},7000);
			break;
		}

		case 39:{
			ctx.drawImage(this.images[32], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Ihr Praesident moechte von Ihnen vor allen Dingen eins:",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Dass Sie keine Gnade walten lassen.",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("Jedes Haus ist ein potentielles Versteck fuer Terroristen.",0.5*canvas.width,canvas.height - 220);
			timeout39 = setTimeout(function(){menu.introRender();},7000);
			break;
		}

		case 40:{
			ctx.drawImage(this.images[33], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Demokratie gibt es nur durch Frieden.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Frieden nur durch den Sieg des Krieges.",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("Und den Sieg nur durch gnadenloses Zerbomben.",0.5*canvas.width,canvas.height - 220);
			ctx.fillText("Mit jeder Ihrer Bomben verbreiten Sie also mehr und mehr Demokratie im Nahen Osten.",0.5*canvas.width,canvas.height - 180);
			timeout40 = setTimeout(function(){menu.introRender();},10000);
			break;
		}

		case 41:{
			ctx.drawImage(this.images[34], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Die Zeit ist gekommen.",0.5*canvas.width,canvas.height - 300);
			ctx.fillText("Machen Sie den Nahen Osten wieder zu einem friedlichen und demokratischen Ort!",0.5*canvas.width,canvas.height - 260);
			ctx.fillText("Machen Sie Ihren Praesidenten und das amerikanische Volk stolz!",0.5*canvas.width,canvas.height - 220);
			timeout41 = setTimeout(function(){menu.introRender();},9000);
			break;
		}

		case 42:{
			ctx.drawImage(this.images[35], 0.5*canvas.width - 480, 50, 960, 540);
			ctx.fillText("Machen Sie die Vereinigten Staaten von Amerika wieder gross und glorreich!",0.5*canvas.width,canvas.height - 300);
			timeout42 = setTimeout(function(){menu.introRender();},10000);
			break;
		}

		case 43:
		{
			timeout43 = setTimeout(function(){menu.introRender();},3000);
			break;
		}

		case 44:
		{
			menu.titelbildschirm();
			break;
		}
	}
}

Menu.prototype.titelbildschirm = function(){
	this.music[0].pause();
	this.music[1].pause();
	this.music[2].pause();
	this.music[0].currentTime = 0;
	this.music[1].currentTime = 0;
	this.music[2].currentTime = 0;
	this.music[3].play();
	this.music[3].loop = true;

	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(this.images[36], 0, 0, canvas.width, canvas.height);
	ctx.font = "84px consolas";
	ctx.textAlign = 'center';
	ctx.fillStyle = 'white';
	ctx.fillText("[Hier Name des Spiels einfuegen]",0.5*canvas.width,100);

	setTimeout(function(){
        timer = setInterval(function(){
            menu.blinken();
        },1000);
	},3000);
}

Menu.prototype.blinken = function(){
	if (this.started){
		return;
	}

	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(this.images[36], 0, 0, canvas.width, canvas.height);
	ctx.font = "84px consolas";
	ctx.textAlign = 'center';
	ctx.fillStyle = 'white';
	ctx.fillText("[Hier Name des Spiels einfuegen]",0.5*canvas.width, 100);

	if (this.blink == 1){
		this.blink = 0;
	} else {
		this.blink = 1;
		ctx.font = "30px consolas";
		ctx.fillStyle = 'white';
		ctx.fillText("Leertaste druecken zum Starten",0.5*canvas.width, canvas.height - 50);
	}
}
