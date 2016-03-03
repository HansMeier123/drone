function Editor(){

	var drag = false;
	var targetObject;
	var sel = false;
	var tool = 0;
	//tool 0 - verschieben von Objekten
	//tool 3 - bearbeiten von Objekten
	window.selection = [];
	window.game = false;
	var selx = [];
	var sely = [];
	var move = false;
	var lookx;
	var looky;
	var diffx;
	var diffy;
	this.input = new InputWindow();

  $("#map-wrapper").draggable({handle: ".handle"}).css({left: 500});
	$("#input-wrapper").draggable({handle: ".handle"}).css({left: canvas.width - 700});


	$("#move").click(function(){

		tool = 2;
		document.getElementById("canvas").style.cursor="move";
	});

	$("#select").click(function(){


		document.getElementById("canvas").style.cursor="default";
	});

  $("#save").click(function(){
		editor.serialize();
	});

	$("#add").click(function(){
		editor.input.show()
	});

	$("#edit").click(function(){
		tool = 3;
	});

	$(document).keydown(function(event){
		if (event.keyCode == 17)
		{
			tool = 1;
			document.getElementById("canvas").style.cursor="pointer";
		};
	});

	$(document).keyup(function(event){
		if (event.keyCode == 17)
		{
			tool = 0;

			if (selection[0] == null)
			{
				document.getElementById("canvas").style.cursor="default";
			}
			else
			{
				move = true;
			}
		}
	});

	$("#canvas").dblclick(function(click){

		tool = 3;
		var selection = editor.getBuildingAt(click.pageX, click.pageY);
		if (selection){
			editor.input.show(selection)
		} else {
			selection = editor.getForestAt(click.pageX, click.pageY);
			if (selection){
				editor.input.show(selection)
			}
		}
	});

	$("#canvas").mousedown(function(click){
		if (tool == 2)
		{
			baseViewport = {};
			baseViewport.x = viewport.x;
			baseViewport.y = viewport.y;
			lookx = click.pageX;
			looky = click.pageY;
			drag = true;
			return;
		} else if  (tool == 3){

			}




/* Verschieben von Segmenten noch in Bearbeitung
		for(var i = 0; i < obj.objects.segments.length; i++){
			var abstandx = click.pageX - (obj.objects.segments[i].x + viewport.x);
			var abstandy = click.pageY - (obj.objects.segments[i].y + viewport.y);

			if (abstandx <= obj.objects.segments[i].width && abstandy <= obj.objects.segments[i].height && abstandx >= 0 && abstandy >= 0)
				{
					if (tool == 0 && move == false)
					{
						targetObject = obj.objects.segments[i];
						diffx = targetObject.x - click.pageX + viewport.x;
						diffy = targetObject.y - click.pageY + viewport.y;
						console.log(targetObject);
						//document.getElementById("canvas").style.cursor="pointer";
						drag = true;
					}
				}
		}
*/

		for(var i = 0; i < obj.objects.forests.length; i++){
			var abstandx = click.pageX - (obj.objects.forests[i].x + viewport.x);
			var abstandy = click.pageY - (obj.objects.forests[i].y + viewport.y);

			if (abstandx <= obj.objects.forests[i].width && abstandy <= obj.objects.forests[i].height && abstandx >= 0 && abstandy >= 0)
			{
					if (tool == 1)
					{
						targetObject = obj.objects.forests[i];

						for(var h = 0; h < selection.length; h++){
								if (selection[h] == targetObject)
								{
									return;
								}
						}

						if (move == false)
						{
							selection.push(targetObject);
							return;
						}

					}

					if (tool == 0 && move == false)
					{
						targetObject = obj.objects.forests[i];
						diffx = targetObject.x - click.pageX + viewport.x;
						diffy = targetObject.y - click.pageY + viewport.y;
						//document.getElementById("canvas").style.cursor="pointer";
						drag = true;
					}
			}
		}



		for(var i = 0; i < obj.objects.buildings.length; i++){
			var abstandx = click.pageX - (obj.objects.buildings[i].x + viewport.x);
			var abstandy = click.pageY - (obj.objects.buildings[i].y + viewport.y);

			if (abstandx <= obj.objects.buildings[i].width && abstandy <= obj.objects.buildings[i].height && abstandx >= obj.objects.buildings[i].nx && abstandy >= obj.objects.buildings[i].ny)
				{
					if (tool == 1)
					{
						targetObject = obj.objects.buildings[i];

						for(var h = 0; h < selection.length; h++){
								if (selection[h] == targetObject)
								{
									return;
								}
						}

						if (move == false)
						{
							selection.push(targetObject);
							return;
						}

					}

					if (tool == 0 && move == false)
					{
						targetObject = obj.objects.buildings[i];

						//document.getElementById("canvas").style.cursor="pointer";
						diffx = targetObject.x - click.pageX + viewport.x;
						diffy = targetObject.y - click.pageY + viewport.y;
						drag = true;
					}
				}
		}
    });

	$("#canvas").mousemove(function(click){

		if (move)
		{
			if (selx[0] == null)
			{
					for(var j = 0; j < selection.length; j++){
						selx.push(click.pageX - (selection[j].x + viewport.x));
						sely.push(click.pageY - (selection[j].y + viewport.y));
					}
			}

			for(var i = 0; i < selection.length; i++){
				selection[i].x = click.pageX - selx[i] - viewport.x;
				selection[i].y = click.pageY - sely[i] - viewport.y;
			}

			return;
		}

		if(!drag && tool != 1){
			var selectionMove = editor.getBuildingAt(click.pageX, click.pageY);
			if (selectionMove){
				tool = 0;
				document.getElementById("canvas").style.cursor="default";
			} else {

				selectionMove = editor.getForestAt(click.pageX, click.pageY);

				if (selectionMove){
					tool = 0;
					document.getElementById("canvas").style.cursor="default";
				} else {
					tool = 2;
					document.getElementById("canvas").style.cursor="move";
				}
			}
		}

		if (drag)
		{
			if (tool == 2)
			{
				viewport.x = click.pageX - lookx + baseViewport.x;
				viewport.y = click.pageY - looky + baseViewport.y;
				return;
			}

			targetObject.x = click.pageX + diffx - viewport.x;
			targetObject.y = click.pageY + diffy - viewport.y;
		}
	});

	$("#canvas").mouseup(function(click){
		if (tool == 2)
		{
			drag = false;
		}

		if (move == true)
		{
				move = false;
				selection = [];
				selx = [];
				sely = [];
				document.getElementById("canvas").style.cursor="default";
		}

		if (drag == true)
		{
			targetObject.x = click.pageX + diffx - viewport.x;
			targetObject.y = click.pageY + diffy - viewport.y;
			//document.getElementById("canvas").style.cursor="crosshair";
			drag = false;
		}
	});

  $(window).bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        if (viewport.z < 2){
            viewport.z += 0.1;
        }
    }
    else {

      if (viewport.z > 0.2){
          viewport.z -= 0.1;
      }
    }
});

  this.drawMapElements = function(){

    parentUl = this.createSubelement("Map",$("#map-content"))

      segmentsLi = $(document.createElement('li'));
      parentUl.append(segmentsLi);
      segmentsUl = this.createSubelement("Segments",segmentsLi);
      segmentsUl.hide();

      for(var i = 0; i < globalMap.objects.segments.length; i++){
        var that = globalMap.objects.segments[i];

        segmentLi = $(document.createElement('li'));
        segmentsUl.append(segmentLi)
        segmentUl = this.createSubelement("Segment " + i,segmentLi);

        segmentUl.append($(document.createElement('li')).text("x: " + that.x));
        segmentUl.append($(document.createElement('li')).text("y: " + that.y));
        segmentUl.append(this.createColorElement(that.color));

          coordinatesLi = $(document.createElement('li'));
          segmentUl.append(coordinatesLi);
          coordinatesUl = this.createSubelement("Coordinates",coordinatesLi);

            for(var k = 0; k < that.coordinates.length; k++){
              coordinateLi = $(document.createElement('li'));
              coordinateLi.text(that.coordinates[k][0] + ", " + that.coordinates[k][1]);

              coordinatesUl.append(coordinateLi);
            }

          coordinatesUl.hide();

          if(that.bezierPoints)
          {
            bezierPointsLi = $(document.createElement('li'));
            segmentUl.append(bezierPointsLi);
            bezierPointsUl = this.createSubelement("BezierPoints",bezierPointsLi);

              for(var k = 0; k < that.coordinates.length; k++){
                bezierPointLi = $(document.createElement('li'));
                bezierPointLi.text("(" + that.bezierPoints[k*2][0] + ", " + that.bezierPoints[k*2][1] + ")  ("
                                   + that.bezierPoints[k*2 + 1][0] + ", " + that.bezierPoints[k*2 + 1][1] + ")");

                bezierPointsUl.append(bezierPointLi);
              }

            bezierPointsUl.hide();
          }
        segmentUl.hide();

      }

      buildingsLi = $(document.createElement('li'));
      parentUl.append(buildingsLi);
      buildingsUl = this.createSubelement("Buildings",buildingsLi);
      buildingsUl.hide();

      for(var i = 0; i < globalMap.objects.buildings.length; i++){
        var that = globalMap.objects.buildings[i];

        buildingLi = $(document.createElement('li'));
        buildingsUl.append(buildingLi);
        buildingUl = this.createSubelement("Building " + i,buildingLi);

        buildingUl.append($(document.createElement('li')).text("x: " + that.x));
        buildingUl.append($(document.createElement('li')).text("y: " + that.y));

				//console.log(that.components.length)
        if(that.components){
          componentsLi = $(document.createElement('li'));
          buildingUl.append(componentsLi);
          componentsUl = this.createSubelement("Components",buildingUl);

          for(var k = 0; k < that.components.length; k++){

            componentLi = $(document.createElement('li'));
            componentsUl.append(componentLi);
            componentUl = this.createSubelement("Component " + k,componentLi);


            componentUl.append($(document.createElement('li')).text("x: " + that.components[k].x));
            componentUl.append($(document.createElement('li')).text("y: " + that.components[k].y));
            componentUl.append($(document.createElement('li')).text("width: " + that.components[k].width));
            componentUl.append($(document.createElement('li')).text("height: " + that.components[k].height));
            componentUl.append($(document.createElement('li')).text("structure: " + that.components[k].structure));
            componentUl.append(this.createColorElement(that.components[k].color));

            componentUl.hide();
          }

          componentsUl.hide();
        }

				//Sublist für Wälder
        if (that.forests){
          forestsLi = $(document.createElement('li'));
          buildingUl.append(forestsLi);
          forestsUl = this.createSubelement("Forests",forestsLi);


          for(var k = 0; k < that.forests.length; k++){
            forestLi_1 = $(document.createElement('li')).text("x: " + that.forests[k].x + ", y: " + that.forests[k].y);
						forestLi_2 = $(document.createElement('li')).text("width: " + (that.forests[k].maxX - that.forests[k].x) + ", height: " + (that.forests[k].maxY - that.forests[k].y));
						forestLi_3 = $(document.createElement('li')).text("minSize: " + that.forests[k].minSize + ", maxSize: " + that.forests[k].maxSize);
						forestLi_4 = $(document.createElement('li')).text("number: " + that.forests[k].number);

						forestsUl.append(forestLi_1);
						forestsUl.append(forestLi_2);
						forestsUl.append(forestLi_3);
						forestsUl.append(forestLi_4);


          }
          forestsUl.hide()
        }

        //Sublist für Bäume
        if (that.trees){
          treesLi = $(document.createElement('li'));
          buildingUl.append(treesLi);
          treesUl = this.createSubelement("Trees",treesLi);

          for(var k = 0; k < that.trees.length; k++){
            treeLi = $(document.createElement('li')).text(that.trees[k].x + ", " + that.trees[k].y + ", " + that.trees[k].size);
            treesUl.append(treeLi);


          }
          treesUl.hide()
        }

        //Sublist für Zäune
        if(that.fence){
          fencesLi = $(document.createElement('li'));
          buildingUl.append(fencesLi);
          fencesUl = this.createSubelement("Fences",fencesLi);

          for(var k = 0; k < that.fence.length; k++){
            fenceLi = $(document.createElement('li')).text(that.fence[k][0] + ", " + that.fence[k][1]);
            fencesUl.append(fenceLi);

          }
          fencesUl.hide()
        }

        buildingUl.hide();
      }

      //Liste für Wälder
      forestsLi = $(document.createElement('li'));
      parentUl.append(forestsLi);
      forestsUl = this.createSubelement("Forests",forestsLi);

      for(var i = 0; i < globalMap.objects.forests.length; i++)
      {
        var that = globalMap.objects.forests[i];

        forestLi = $(document.createElement('li'));
        forestsUl.append(forestLi);
        forestUl = this.createSubelement("Forest " + i,forestLi);
        forestsUl.hide();
        forestUl.append($(document.createElement('li')).text("x: " + that.x));
        forestUl.append($(document.createElement('li')).text("y: " + that.y));
        forestUl.append($(document.createElement('li')).text("width: " + (that.maxX - that.x)));
        forestUl.append($(document.createElement('li')).text("height: " + (that.maxY - that.y)));
        forestUl.append($(document.createElement('li')).text("minSize: " + that.minSize));
        forestUl.append($(document.createElement('li')).text("maxSize: " + that.maxSize));
        forestUl.append($(document.createElement('li')).text("number: " + that.number));

        //Sublist für Bäume - nicht unbedingt nötig
        /*treesLi = $(document.createElement('li'));
        forestUl.append(treesLi);
        treesUl = this.createSubelement("Trees",treesLi);

        for(var k = 0; k < that.trees.length; k++)
        {
          treeLi = $(document.createElement('li')).text(that.trees[k].x + ", " + that.trees[k].y + ", " + that.trees[k].size);
          treesUl.append(treeLi);
        }

        treesUl.hide()*/
        forestUl.hide();
      }
  }

  this.createSubelement = function(text,parent){

    label = this.createLabel(text);
    ul = $(document.createElement('ul'));

    parent.append(label);
    parent.append(ul);

    return ul;
  };

  this.createLabel = function(text){
    label = $(document.createElement('div'));
    label.addClass("list-button-wrapper");
      button = $(document.createElement('div'));
      button.addClass("list-button");

      button.click(function(){
        $( this ).parent().next("ul").fadeToggle("fast");
      })

      labelText = $(document.createElement('div'));
      labelText.addClass("list-button-text");
      labelText.text(text);

    label.append(button);
    label.append(labelText);

    return label;
  }

  this.createColorElement = function(color){
    li = $(document.createElement('li'));

      label = $(document.createElement('div'));
      label.text("hsl("+color.h+","+color.s+"%,"+color.l+"%)");

      colorBox = $(document.createElement('div'));
      colorBox.addClass("list-color-box");
      colorBox.css("background-color", "hsl("+color.h+","+color.s+"%,"+color.l+"%)");

    li.append(label);
    li.append(colorBox);
    return li;
  }

}

Editor.prototype.serialize = function(mode){
	var space;
  if(mode == "asci"){
    space = "\n";
  } else {
    space = "<br>";
  }

  var output = "var getMap = function(){" + space;
	output += "return{" + space;
  output += globalMap.serialize();
  output += "}"
  //console.log(output);

	var newWin = window.open("application/json");
	newWin.document.write(output);

}

Editor.prototype.getBuildingAt = function(x,y){

	for(var i = 0; i < globalMap.objects.buildings.length; i++){
		var abstandx = x - (globalMap.objects.buildings[i].x + viewport.x);
		var abstandy = y - (globalMap.objects.buildings[i].y + viewport.y);

		if (abstandx <= globalMap.objects.buildings[i].width && abstandy <= globalMap.objects.buildings[i].height && abstandx >= globalMap.objects.buildings[i].nx && abstandy >= globalMap.objects.buildings[i].ny)
		{
		  return globalMap.objects.buildings[i];

		}

	}
	return false;
}

Editor.prototype.getForestAt = function (x,y){
	for(var i = 0; i < globalMap.objects.forests.length; i++){
		var abstandx = x - (globalMap.objects.forests[i].x + viewport.x);
		var abstandy = y - (globalMap.objects.forests[i].y + viewport.y);

		if (abstandx <= globalMap.objects.forests[i].width && abstandy <= globalMap.objects.forests[i].height && abstandx >= 0 && abstandy >= 0)
		{
					return globalMap.objects.forests[i];
		}
	}
	return false;
}
