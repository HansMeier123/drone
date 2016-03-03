function Explosion(x, y, size, bomb){
	this.x = x;
	this.y = y;
	this.size = size;
	this.bomb = bomb;
	this.startSize = size;
	var fade = false;

	setTimeout(function(){
		fade = true;
	},1000);

	if (this.bomb == true)
	{
		for(var i = 0; i < obj.objects.buildings.length; i++){
			var abstandx = this.x - obj.objects.buildings[i].x;
			var abstandy = this.y - obj.objects.buildings[i].y;

			if (abstandx <= obj.objects.buildings[i].width + this.size && abstandy <= obj.objects.buildings[i].height + this.size && abstandx >= -this.size && abstandy >= -this.size)
				{
					var targetObject = obj.objects.buildings[i];

					for (var h = 0; h < targetObject.components.length; h++)
					{
						abstandx = this.x - (targetObject.x + targetObject.components[h].x);
						abstandy = this.y - (targetObject.y + targetObject.components[h].y);

						if (abstandx <= targetObject.components[h].width + this.size && abstandy <= targetObject.components[h].height + this.size && abstandx >= -this.size && abstandy >= -this.size)
						{
							if (abstandx <= targetObject.components[h].width && abstandy <= targetObject.components[h].height && abstandx >= 0 && abstandy >= 0)
							{
								targetObject.components[h].structure = 0;
							}
							else
							{
								if (this.x < targetObject.x + targetObject.components[h].x || this.x > targetObject.x + targetObject.components[h].x + targetObject.components[h].width)
								{
									if (this.x < targetObject.x + targetObject.components[h].x)
									{
										abstandx = Math.abs(this.x - (targetObject.x + targetObject.components[h].x));
									}
									if (this.x > targetObject.x + targetObject.components[h].x + targetObject.components[h].width)
									{
										abstandx = Math.abs(this.x - (targetObject.x + targetObject.components[h].x + targetObject.components[h].width));
									}
								}
								else
								{
									abstandx = 0;
								}

								if (this.y < targetObject.y + targetObject.components[h].y || this.y > targetObject.y + targetObject.components[h].y + targetObject.components[h].height)
								{
									if(this.y < targetObject.y + targetObject.components[h].y)
									{
										abstandy = Math.abs(this.y - (targetObject.y + targetObject.components[h].y));
									}
									if(this.y > targetObject.y + targetObject.components[h].y + targetObject.components[h].height)
									{
										abstandy = Math.abs(this.y - (targetObject.y + targetObject.components[h].y + targetObject.components[h].height));
									}
								}
								else
								{
									abstandy = 0;
								}
								var abstand = Math.sqrt(Math.pow(abstandx, 2) + Math.pow(abstandy, 2));

								if (abstand <= this.size)
								{
									if (abstand >= 2/3*this.size)
									{
										targetObject.components[h].structure = targetObject.components[h].structure - 0.25*targetObject.components[h].structure;
									}
									else
									{
										if (abstand >= 1/3*this.size)
										{
											targetObject.components[h].structure = targetObject.components[h].structure - 0.5*targetObject.components[h].structure;
										}
										else
										{
											targetObject.components[h].structure = 0;
										}
									}
								}
							}
						}
					}
				}
		}
	}

	this.render = function(elapsedTime)
	{
		ctx.save();
		ctx.beginPath();

		var gradient = ctx.createRadialGradient(this.x,this.y,0.5*this.size,this.x,this.y,this.size);

		if (bomb == true){
			ctx.globalCompositeOperation = "hard-light";
			gradient.addColorStop(0,"hsla(11, 87%, 60%, 1)");
			gradient.addColorStop(0.3,"hsla(34, 92%, 60%, 1)");
			gradient.addColorStop(1,"hsla(34, 92%, 60%, 0.0)");
		}else{
			ctx.globalCompositeOperation = "overlay";
			gradient.addColorStop(0,"rgba(0,0,0,0.5)");
			gradient.addColorStop(1,"transparent");
		}
		ctx.fillStyle = gradient;

		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.restore();

		if(this.startSize-this.size < 10 && this.bomb == true){
			ctx.save();
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.globalCompositeOperation = "hard-light";
			ctx.fillStyle =  "hsla(34, 92%, 94%,"+(1-(this.startSize-this.size)*0.1)+")";
			ctx.rect(0,0,canvas.width, canvas.height);
			ctx.fill();
			ctx.restore();
		}

		if (fade == true && this.bomb == true && this.size > 0){
			this.size = this.size - 1;
		}
	}
}
