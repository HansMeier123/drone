function InputWindow(){
  this.objectToEdit;
  this.default = '{x: '+(Math.abs(viewport.x)+canvas.width/2)+', y: ';
  this.default += (Math.abs(viewport.y)+canvas.height/2);+', rotation: 0,\n  components:[\n    {x: 0, y: 0, width: 50, height: 50, structure: 1,';
  this.default += 'color: {h: 21, s: 38, l: 74}},\n  ],trees:[\n    {x: 15,y: 15,size: 10},\n  ],fence:[\n    [0,0],[0,100],[100,100],[100,0],[0,0]\n  ]'
  this.default += ',forests:[\n    {x: 50,y: 0,width: 50,height: 100,minSize: 5,maxSize: 10,number:15}]}'

  this.mode;
  this.editType;

  $("#close-button").click(function(){
    editor.input.hide();
  })

  $("#add-button").click(function(){
    editor.input.add()
  })

  this.hide()
}

InputWindow.prototype.show = function(obj){
  if(obj){
    this.editType = "edit"
    this.objectToEdit = obj;
    $("#input-textarea").val(obj.serialize("asci"));
    this.mode = obj.constructor.name;
  } else {
    this.editType = "add"
    this.mode ="Building";
    $("#input-textarea").val(this.getDefault());
  }

  $("#input-wrapper").show();
}

InputWindow.prototype.hide = function(){
  $("#input-wrapper").hide();
}

InputWindow.prototype.add = function(){
  var text = $("#input-textarea").val();
  var error = false;

  if (this.objectToEdit && this.editType == "edit"){
    if (this.mode == "Building"){
      var index = globalMap.objects.buildings.indexOf(this.objectToEdit);
      globalMap.objects.buildings.splice(index, 1);
    }else if(this.mode == "Forest"){
      var index = globalMap.objects.forests.indexOf(this.objectToEdit);
      globalMap.objects.forests.splice(index, 1);
    }
  }

  text = text.replace(/(\r\n|\n|\r)/gm,"");

  try {
    eval("newObj = " + text + ";");
  } catch (e) {
    if (e instanceof SyntaxError) {
      error = true;
      $("#input-error").text(e);
    }
  }

  if(!error){
    $("#input-error").text("");
    if (this.mode == "Building"){
      globalMap.objects.buildings.push(new Building(newObj));
    }else if(this.mode == "Forest"){
      globalMap.objects.forests.push(new Forest(newObj));
    }

    if (this.editType == "add"){
        this.objectToEdit = false;
    }
  }
}

InputWindow.prototype.getDefault = function(){
  return '{x: '+(Math.abs(viewport.x)+canvas.width/2)+', y: '+(Math.abs(viewport.y)+canvas.height/2)+', rotation: 0,\n  components:[\n    {x: 0, y: 0, width: 50, height: 50, structure: 1, color: {h: 21, s: 38, l: 74}},\n  ],trees:[\n    {x: 15,y: 15,size: 10},\n  ],fence:[\n    [0,0],[0,100],[100,100],[100,0],[0,0]\n  ],forests:[\n    {x: 50,y: 0,width: 50,height: 100,minSize: 5,maxSize: 10,number:15}]}'
}
