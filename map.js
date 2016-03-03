var getMap = function(){
return{
width: 10000,
height: 10000,
objects:{
segments:[{
x: 0,
y: 0,
color: {h: 38, s: 20, l: 60},
coordinates: [[0,0],[10000,0],[10000,10000],[0,10000],]
},{
x: 100,
y: 100,
color: {h: 38, s: 20, l: 65},
coordinates: [[0,50],[50,0],[875,0],[875,50],],
bezierPoints:[[0,20],[20,0],[50,0],[875,0],[875,0],[875,50],[875,50],[0,50],]
},{
x: 100,
y: 100,
color: {h: 38, s: 20, l: 65},
coordinates: [[875,50],[875,1150],[825,1150],[825,50],]
},{
x: 100,
y: 100,
color: {h: 38, s: 20, l: 65},
coordinates: [[825,1150],[0,1150],[0,1100],[825,1100],]
},{
x: 100,
y: 100,
color: {h: 38, s: 20, l: 65},
coordinates: [[50,1100],[0,1100],[0,50],[50,50],]
},{
x: 100,
y: 100,
color: {h: 38, s: 20, l: 63},
coordinates: [[50,275],[825,275],[825,300],[300,300],[300,525],[825,525],[825,550],[600,550],[600,1100],[575,1100],[575,550],[300,550],[300,1100],[275,1100],[275,300],[50,300],]
},{
x: 100,
y: 100,
color: {h: 38, s: 20, l: 65},
coordinates: [[875,1100],[2500,1100],[2500,1150],[875,1150],]
},{
x: 100,
y: 100,
color: {h: 38, s: 20, l: 63},
coordinates: [[875,0],[1750,100],[1750,400],[1650,400],[1650,375],[1725,375],[1725,125],[900,30],[875,45],]
},{
x: 1000,
y: 400,
color: {h: 78, s: 12, l: 43},
coordinates: [[0,0],[400,0],[400,300],[0,300],]
},{
x: 0,
y: 6000,
color: {h: 240, s: 20, l: 40},
coordinates: [[0,0],[100,0],[200,-50],[300,-500],[350,-550],[1000,-800],[2000,-1000],[2500,-2000],[2700,-2200],[4200,-2100],[5100,-2800],[5250,-2900],[5500,-3000],[6000,-3000],[7000,-2700],[8000,-2700],[9000,-3100],[10000,-3300],[10000,-3250],[9000,-3050],[8000,-2650],[7000,-2650],[6000,-2950],[5500,-2950],[5170,-2800],[4200,-2030],[2750,-2140],[2570,-1970],[2050,-930],[1000,-730],[370,-480],[250,0],[100,70],[0,70],]
},{
x: 4600,
y: 3700,
color: {h: 38, s: 20, l: 63},
coordinates: [[0,0],[500,0],[800,-200],[800,-500],[825,-500],[825,115],[600,190],[600,500],[575,500],[575,175],[800,100],[800,-175],[500,25],[0,25],]
},{
x: 4750,
y: 4200,
color: {h: 38, s: 20, l: 63},
coordinates: [[0,0],[0,-350],[25,-350],[25,0],]
},{
x: 4935,
y: 3470,
color: {h: 38, s: 20, l: 63},
coordinates: [[0,0],[0,110],[70,110],[70,135],[-25,135],[-25,0],]
},{
x: 4060,
y: 3900,
color: {h: 38, s: 20, l: 63},
coordinates: [[100,300],[325,300],[325,0],[100,215],]
},{
x: 0,
y: 3700,
color: {h: 38, s: 20, l: 65},
coordinates: [[0,0],[2000,0],[4000,500],[10000,500],[10000,550],[4000,550],[2000,50],[0,50],]
},{
x: 4000,
y: 4200,
color: {h: 38, s: 20, l: 65},
coordinates: [[0,0],[1200,-1000],[2000,-1000],[3500,-1600],[6000,-4200],[6000,-4150],[3500,-1550],[2000,-950],[1200,-950],[0,50],]
},{
	x:4500,
	y:5000,
	color: {h: 38,s: 20,l:63},
	coordinates:[
	[0,0],
	[0,1500],
	[100,1500],
	[100,1250],
	[300,950],
	[300,900],
	[100,1200],
	[100,950],
	[300,950],
	[300,900],
	[100,900],

	[100,600],
	[300,600],
	[300,550],
	[100,550],
	[100,300],
	[300,600],

	[300,1250],
	[100,1450],
	[100,1500],
	[350,1250],
	[350,250],
	[100,0],
	[100,50],
	[300,250],

	[300,550],
	[100,250],
	[100,0]
	]
},

{
	x:5175,
	y:4250,
	color:{h:38,s:20,l:63},
	coordinates:[
	[0,0],
	[0,1000],
	[-200,1300],
	[-325,1300],
	[-325,1325],
	[-200,1325],
	[25,1000],
	[25,0],
	]
},

],
buildings:[
{
x: 4500,
y: 5000,
fence:[[0,0],],
components:[
{x: 200, y: 800, width: 100, height: 100, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 350, y: 250, width: 100, height: 250, structure: 1, color: {h: 21, s: 38, l: 70}},
{x: 350, y: 600, width: 100, height: 250, structure: 1, color: {h: 21, s: 38, l: 70}},]
},{
x: 5625,
y: 3910,
fence:[[0,0],[0,110],[80,110],[80,0],],
components:[
{x: 0, y: 0, width: 40, height: 40, structure: 1, color: {h: 21, s: 30, l: 70}},
{x: 40, y: 0, width: 40, height: 30, structure: 1, color: {h: 21, s: 30, l: 65}},],
trees:[
{x: 20, y: 90, size: 15},
{x: 8, y: 102, size: 7},]
},{
x: 800,
y: 800,
fence:[[0,0],[300,0],[300,300],[0,300],[0,0],],
components:[
{x: 40, y: 40, width: 70, height: 70, structure: 1, color: {h: 25, s: 27, l: 55}},
{x: 190, y: 40, width: 70, height: 70, structure: 1, color: {h: 25, s: 27, l: 55}},
{x: 40, y: 190, width: 70, height: 70, structure: 1, color: {h: 25, s: 27, l: 55}},
{x: 190, y: 190, width: 70, height: 70, structure: 1, color: {h: 25, s: 27, l: 55}},],
trees:[
{x: 25, y: 25, size: 10},
{x: 25, y: 50, size: 10},
{x: 25, y: 75, size: 10},
{x: 25, y: 100, size: 10},
{x: 25, y: 125, size: 10},
{x: 25, y: 175, size: 10},
{x: 25, y: 200, size: 10},
{x: 25, y: 225, size: 10},
{x: 25, y: 250, size: 10},
{x: 25, y: 275, size: 10},
{x: 50, y: 25, size: 10},
{x: 75, y: 25, size: 10},
{x: 100, y: 25, size: 10},
{x: 125, y: 25, size: 10},
{x: 175, y: 25, size: 10},
{x: 200, y: 25, size: 10},
{x: 225, y: 25, size: 10},
{x: 250, y: 25, size: 10},
{x: 275, y: 25, size: 10},
{x: 275, y: 50, size: 10},
{x: 275, y: 75, size: 10},
{x: 275, y: 100, size: 10},
{x: 275, y: 125, size: 10},
{x: 275, y: 175, size: 10},
{x: 275, y: 200, size: 10},
{x: 275, y: 225, size: 10},
{x: 275, y: 250, size: 10},
{x: 275, y: 275, size: 10},
{x: 50, y: 275, size: 10},
{x: 75, y: 275, size: 10},
{x: 100, y: 275, size: 10},
{x: 125, y: 275, size: 10},
{x: 175, y: 275, size: 10},
{x: 200, y: 275, size: 10},
{x: 225, y: 275, size: 10},
{x: 250, y: 275, size: 10},
{x: 275, y: 275, size: 10},
{x: 125, y: 50, size: 10},
{x: 125, y: 75, size: 10},
{x: 125, y: 100, size: 10},
{x: 125, y: 125, size: 10},
{x: 100, y: 125, size: 10},
{x: 75, y: 125, size: 10},
{x: 50, y: 125, size: 10},
{x: 175, y: 50, size: 10},
{x: 175, y: 75, size: 10},
{x: 175, y: 100, size: 10},
{x: 175, y: 125, size: 10},
{x: 200, y: 125, size: 10},
{x: 225, y: 125, size: 10},
{x: 250, y: 125, size: 10},
{x: 50, y: 175, size: 10},
{x: 75, y: 175, size: 10},
{x: 100, y: 175, size: 10},
{x: 125, y: 175, size: 10},
{x: 125, y: 200, size: 10},
{x: 125, y: 225, size: 10},
{x: 125, y: 250, size: 10},
{x: 175, y: 250, size: 10},
{x: 175, y: 225, size: 10},
{x: 175, y: 200, size: 10},
{x: 175, y: 175, size: 10},
{x: 200, y: 175, size: 10},
{x: 225, y: 175, size: 10},
{x: 250, y: 175, size: 10},]
},{
x: 900,
y: 900,
fence:[[60,300],[0,300],[0,0],[150,0],[150,300],[90,300],],
components:[
{x: 20, y: 135, width: 30, height: 50, structure: 1, color: {h: 32, s: 50, l: 65}},
{x: 100, y: 135, width: 30, height: 70, structure: 1, color: {h: 32, s: 50, l: 65}},
{x: 20, y: 75, width: 110, height: 60, structure: 1, color: {h: 32, s: 50, l: 65}},
{x: 100, y: 20, width: 20, height: 10, structure: 1, color: {h: 33, s: 100, l: 90}},],
trees:[
{x: 55, y: 290, size: 5},
{x: 55, y: 275, size: 5},
{x: 55, y: 260, size: 5},
{x: 55, y: 245, size: 5},
{x: 55, y: 230, size: 5},
{x: 55, y: 215, size: 5},
{x: 95, y: 290, size: 5},
{x: 95, y: 275, size: 5},
{x: 95, y: 260, size: 5},
{x: 95, y: 245, size: 5},
{x: 95, y: 230, size: 5},
{x: 95, y: 215, size: 5},
{x: 80, y: 60, size: 7},
{x: 90, y: 70, size: 3},
{x: 125, y: 19, size: 3},
{x: 129, y: 29, size: 3},
{x: 135, y: 25, size: 8},],
forests:[
{x: 5, y: 5, width: 20, height: 40, minSize: 3, maxSize: 10, number: 10}]
},{
x: 400,
y: 1500,
fence:[[0,0],[540,0],[540,750],[0,750],[0,0],],
components:[
{x: 20, y: 20, width: 500, height: 500, structure: 1, color: {h: 29, s: 28, l: 76}},
{x: 20, y: 20, width: 499, height: 499, structure: 1, color: {h: 29, s: 28, l: 76}},
{x: 20, y: 20, width: 498, height: 498, structure: 1, color: {h: 29, s: 28, l: 76}},
{x: 20, y: 20, width: 497, height: 497, structure: 1, color: {h: 29, s: 28, l: 76}},
{x: 170, y: 170, width: 200, height: 200, structure: 1, color: {h: 29, s: 33, l: 76}},
{x: 45, y: 45, width: 125, height: 125, structure: 1, color: {h: 29, s: 33, l: 76}},
{x: 370, y: 45, width: 125, height: 125, structure: 1, color: {h: 29, s: 33, l: 76}},
{x: 45, y: 370, width: 125, height: 125, structure: 1, color: {h: 29, s: 33, l: 76}},
{x: 370, y: 370, width: 125, height: 125, structure: 1, color: {h: 29, s: 33, l: 76}},
{x: 182.5, y: 182.5, width: 175, height: 175, structure: 1, color: {h: 29, s: 38, l: 76}},
{x: 57.5, y: 57.5, width: 100, height: 100, structure: 1, color: {h: 29, s: 38, l: 76}},
{x: 382.5, y: 57.5, width: 100, height: 100, structure: 1, color: {h: 29, s: 38, l: 76}},
{x: 57.5, y: 382.5, width: 100, height: 100, structure: 1, color: {h: 29, s: 38, l: 76}},
{x: 382.5, y: 382.5, width: 100, height: 100, structure: 1, color: {h: 29, s: 38, l: 76}},
{x: 195, y: 195, width: 150, height: 150, structure: 1, color: {h: 29, s: 43, l: 76}},
{x: 70, y: 70, width: 75, height: 75, structure: 1, color: {h: 29, s: 43, l: 76}},
{x: 395, y: 70, width: 75, height: 75, structure: 1, color: {h: 29, s: 43, l: 76}},
{x: 70, y: 395, width: 75, height: 75, structure: 1, color: {h: 29, s: 43, l: 76}},
{x: 395, y: 395, width: 75, height: 75, structure: 1, color: {h: 29, s: 43, l: 76}},
{x: 207.5, y: 207.5, width: 125, height: 125, structure: 1, color: {h: 29, s: 48, l: 76}},
{x: 82.5, y: 82.5, width: 50, height: 50, structure: 1, color: {h: 29, s: 48, l: 76}},
{x: 407.5, y: 82.5, width: 50, height: 50, structure: 1, color: {h: 29, s: 48, l: 76}},
{x: 82.5, y: 407.5, width: 50, height: 50, structure: 1, color: {h: 29, s: 48, l: 76}},
{x: 407.5, y: 407.5, width: 50, height: 50, structure: 1, color: {h: 29, s: 48, l: 76}},
{x: 220, y: 220, width: 100, height: 100, structure: 1, color: {h: 29, s: 53, l: 76}},
{x: 95, y: 95, width: 25, height: 25, structure: 1, color: {h: 29, s: 53, l: 76}},
{x: 420, y: 95, width: 25, height: 25, structure: 1, color: {h: 29, s: 53, l: 76}},
{x: 95, y: 420, width: 25, height: 25, structure: 1, color: {h: 29, s: 53, l: 76}},
{x: 420, y: 420, width: 25, height: 25, structure: 1, color: {h: 29, s: 53, l: 76}},
{x: 232.5, y: 232.5, width: 75, height: 75, structure: 1, color: {h: 29, s: 58, l: 76}},
{x: 245, y: 245, width: 50, height: 50, structure: 1, color: {h: 29, s: 63, l: 76}},
{x: 257.5, y: 257.5, width: 25, height: 25, structure: 1, color: {h: 29, s: 68, l: 76}},],
trees:[
{x: 65, y: 640, size: 5},
{x: 70, y: 630, size: 5},
{x: 75, y: 620, size: 5},
{x: 80, y: 610, size: 5},
{x: 85, y: 600, size: 5},
{x: 95, y: 600, size: 5},
{x: 105, y: 600, size: 5},
{x: 115, y: 600, size: 5},
{x: 90, y: 590, size: 5},
{x: 95, y: 580, size: 5},
{x: 100, y: 570, size: 5},
{x: 105, y: 560, size: 5},
{x: 110, y: 550, size: 5},
{x: 125, y: 600, size: 5},
{x: 155, y: 640, size: 5},
{x: 150, y: 630, size: 5},
{x: 145, y: 620, size: 5},
{x: 140, y: 610, size: 5},
{x: 135, y: 600, size: 5},
{x: 130, y: 590, size: 5},
{x: 125, y: 580, size: 5},
{x: 120, y: 570, size: 5},
{x: 115, y: 560, size: 5},
{x: 175, y: 640, size: 5},
{x: 185, y: 640, size: 5},
{x: 195, y: 640, size: 5},
{x: 205, y: 640, size: 5},
{x: 215, y: 640, size: 5},
{x: 225, y: 640, size: 5},
{x: 175, y: 630, size: 5},
{x: 175, y: 620, size: 5},
{x: 175, y: 610, size: 5},
{x: 175, y: 600, size: 5},
{x: 175, y: 590, size: 5},
{x: 175, y: 580, size: 5},
{x: 175, y: 570, size: 5},
{x: 175, y: 560, size: 5},
{x: 175, y: 550, size: 5},
{x: 245, y: 640, size: 5},
{x: 255, y: 640, size: 5},
{x: 265, y: 640, size: 5},
{x: 275, y: 640, size: 5},
{x: 285, y: 640, size: 5},
{x: 295, y: 640, size: 5},
{x: 245, y: 630, size: 5},
{x: 245, y: 620, size: 5},
{x: 245, y: 610, size: 5},
{x: 245, y: 600, size: 5},
{x: 245, y: 590, size: 5},
{x: 245, y: 580, size: 5},
{x: 245, y: 570, size: 5},
{x: 245, y: 560, size: 5},
{x: 245, y: 550, size: 5},
{x: 315, y: 640, size: 5},
{x: 320, y: 630, size: 5},
{x: 325, y: 620, size: 5},
{x: 330, y: 610, size: 5},
{x: 335, y: 600, size: 5},
{x: 345, y: 600, size: 5},
{x: 355, y: 600, size: 5},
{x: 365, y: 600, size: 5},
{x: 375, y: 600, size: 5},
{x: 340, y: 590, size: 5},
{x: 345, y: 580, size: 5},
{x: 350, y: 570, size: 5},
{x: 355, y: 560, size: 5},
{x: 360, y: 550, size: 5},
{x: 405, y: 640, size: 5},
{x: 400, y: 630, size: 5},
{x: 395, y: 620, size: 5},
{x: 390, y: 610, size: 5},
{x: 385, y: 600, size: 5},
{x: 380, y: 590, size: 5},
{x: 375, y: 580, size: 5},
{x: 370, y: 570, size: 5},
{x: 365, y: 560, size: 5},
{x: 425, y: 640, size: 5},
{x: 425, y: 630, size: 5},
{x: 425, y: 620, size: 5},
{x: 425, y: 610, size: 5},
{x: 425, y: 600, size: 5},
{x: 425, y: 590, size: 5},
{x: 425, y: 580, size: 5},
{x: 425, y: 570, size: 5},
{x: 425, y: 560, size: 5},
{x: 425, y: 550, size: 5},
{x: 435, y: 600, size: 5},
{x: 445, y: 600, size: 5},
{x: 455, y: 600, size: 5},
{x: 465, y: 600, size: 5},
{x: 475, y: 640, size: 5},
{x: 475, y: 630, size: 5},
{x: 475, y: 620, size: 5},
{x: 475, y: 610, size: 5},
{x: 475, y: 600, size: 5},
{x: 475, y: 590, size: 5},
{x: 475, y: 580, size: 5},
{x: 475, y: 570, size: 5},
{x: 475, y: 560, size: 5},
{x: 475, y: 550, size: 5},
{x: 75, y: 670, size: 5},
{x: 75, y: 680, size: 5},
{x: 75, y: 690, size: 5},
{x: 75, y: 700, size: 5},
{x: 75, y: 710, size: 5},
{x: 75, y: 720, size: 5},
{x: 75, y: 730, size: 5},
{x: 95, y: 680, size: 5},
{x: 95, y: 690, size: 5},
{x: 105, y: 700, size: 5},
{x: 115, y: 700, size: 5},
{x: 125, y: 700, size: 5},
{x: 135, y: 710, size: 5},
{x: 135, y: 720, size: 5},
{x: 105, y: 670, size: 5},
{x: 115, y: 670, size: 5},
{x: 125, y: 670, size: 5},
{x: 105, y: 730, size: 5},
{x: 115, y: 730, size: 5},
{x: 125, y: 730, size: 5},
{x: 175, y: 680, size: 5},
{x: 175, y: 690, size: 5},
{x: 175, y: 700, size: 5},
{x: 175, y: 710, size: 5},
{x: 175, y: 720, size: 5},
{x: 185, y: 670, size: 5},
{x: 195, y: 670, size: 5},
{x: 205, y: 670, size: 5},
{x: 215, y: 670, size: 5},
{x: 185, y: 730, size: 5},
{x: 195, y: 730, size: 5},
{x: 205, y: 730, size: 5},
{x: 215, y: 730, size: 5},
{x: 215, y: 700, size: 5},
{x: 215, y: 710, size: 5},
{x: 215, y: 720, size: 5},
{x: 205, y: 700, size: 5},
{x: 235, y: 670, size: 5},
{x: 235, y: 680, size: 5},
{x: 235, y: 690, size: 5},
{x: 235, y: 700, size: 5},
{x: 235, y: 710, size: 5},
{x: 235, y: 720, size: 5},
{x: 235, y: 730, size: 5},
{x: 245, y: 670, size: 5},
{x: 255, y: 670, size: 5},
{x: 265, y: 670, size: 5},
{x: 275, y: 680, size: 5},
{x: 275, y: 690, size: 5},
{x: 245, y: 700, size: 5},
{x: 255, y: 700, size: 5},
{x: 265, y: 700, size: 5},
{x: 255, y: 710, size: 5},
{x: 265, y: 720, size: 5},
{x: 275, y: 730, size: 5},
{x: 295, y: 670, size: 5},
{x: 295, y: 680, size: 5},
{x: 295, y: 690, size: 5},
{x: 295, y: 700, size: 5},
{x: 295, y: 710, size: 5},
{x: 295, y: 720, size: 5},
{x: 295, y: 730, size: 5},
{x: 305, y: 670, size: 5},
{x: 315, y: 670, size: 5},
{x: 325, y: 670, size: 5},
{x: 305, y: 700, size: 5},
{x: 315, y: 700, size: 5},
{x: 325, y: 700, size: 5},
{x: 305, y: 730, size: 5},
{x: 315, y: 730, size: 5},
{x: 325, y: 730, size: 5},
{x: 345, y: 730, size: 5},
{x: 350, y: 720, size: 5},
{x: 355, y: 710, size: 5},
{x: 360, y: 700, size: 5},
{x: 365, y: 690, size: 5},
{x: 370, y: 680, size: 5},
{x: 375, y: 670, size: 5},
{x: 380, y: 680, size: 5},
{x: 385, y: 690, size: 5},
{x: 390, y: 700, size: 5},
{x: 395, y: 710, size: 5},
{x: 400, y: 720, size: 5},
{x: 405, y: 730, size: 5},
{x: 365, y: 710, size: 5},
{x: 375, y: 710, size: 5},
{x: 385, y: 710, size: 5},
{x: 425, y: 670, size: 5},
{x: 435, y: 670, size: 5},
{x: 445, y: 670, size: 5},
{x: 455, y: 670, size: 5},
{x: 465, y: 670, size: 5},
{x: 445, y: 730, size: 5},
{x: 445, y: 720, size: 5},
{x: 445, y: 710, size: 5},
{x: 445, y: 700, size: 5},
{x: 445, y: 690, size: 5},
{x: 445, y: 680, size: 5},]
},{
x: 5205,
y: 4085,
fence:[[0,0],[0,110],[80,110],[80,0],],
components:[
{x: 0, y: 0, width: 40, height: 40, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 40, y: 0, width: 40, height: 30, structure: 1, color: {h: 21, s: 38, l: 78}},],
trees:[
{x: 20, y: 90, size: 15},
{x: 8, y: 102, size: 7},
{x: 12, y: 12, size: 10},]
},{
x: 5455,
y: 3912,
fence:[[0,0],[0,80],[160,80],[160,0],[0,0],],
components:[
{x: 0, y: 0, width: 40, height: 40, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 40, y: 0, width: 60, height: 20, structure: 1, color: {h: 21, s: 38, l: 78}},],
trees:[
{x: 140, y: 20, size: 10},
{x: 145, y: 30, size: 7},
{x: 135, y: 60, size: 10},
{x: 145, y: 65, size: 15},
{x: 65, y: 63, size: 5},
{x: 75, y: 58, size: 10},]
},{
x: 6678,
y: 3894,
fence:[[0,0],[0,110],[80,90],[80,0],[60,0],[0,0],],
components:[
{x: 40, y: 0, width: 20, height: 30, structure: 1, color: {h: 21, s: 38, l: 72}},
{x: 0, y: 0, width: 40, height: 60, structure: 1, color: {h: 21, s: 38, l: 75}},],
trees:[
{x: 65, y: 80, size: 11},
{x: 31, y: 84, size: 7},
{x: 21, y: 80, size: 9},]
},{
x: 5552,
y: 3516,
fence:[[0,0],[0,120],[60,120],[60,0],[0,0],],
components:[
{x: 0, y: 0, width: 60, height: 30, structure: 1, color: {h: 21, s: 38, l: 71}},
{x: 0, y: 105, width: 60, height: 15, structure: 1, color: {h: 21, s: 38, l: 71}},
{x: 0, y: 30, width: 30, height: 40, structure: 1, color: {h: 16, s: 50, l: 73}},],
trees:[
{x: 24, y: 88, size: 13},
{x: 47, y: 80, size: 25},]
},{
x: 6000,
y: 4097,
fence:[[0,0],[0,100],[120,100],[120,0],[0,0],],
components:[
{x: 0, y: 0, width: 30, height: 80, structure: 1, color: {h: 21, s: 38, l: 75}},
{x: 30, y: 50, width: 30, height: 40, structure: 1, color: {h: 21, s: 38, l: 77}},
{x: 60, y: 35, width: 30, height: 45, structure: 1, color: {h: 21, s: 60, l: 77}},
{x: 70, y: 0, width: 50, height: 20, structure: 1, color: {h: 21, s: 38, l: 78}},],
trees:[
{x: 47, y: 22, size: 25},
{x: 10, y: 87, size: 10},
{x: 85, y: 87, size: 13},]
},{
x: 5596,
y: 3694,
fence:[[0,0],[0,100],[100,100],[100,0],[0,0],],
components:[
{x: 0, y: 0, width: 40, height: 25, structure: 1, color: {h: 21, s: 38, l: 79}},
{x: 60, y: 40, width: 40, height: 20, structure: 1, color: {h: 12, s: 30, l: 79}},
{x: 0, y: 25, width: 25, height: 50, structure: 1, color: {h: 21, s: 66, l: 79}},],
trees:[
{x: 80, y: 80, size: 16},]
},{
x: 5427,
y: 3511,
fence:[[0,0],[0,100],[120,100],[120,0],[0,0],],
components:[
{x: 0, y: 0, width: 30, height: 80, structure: 1, color: {h: 21, s: 38, l: 75}},
{x: 30, y: 50, width: 30, height: 40, structure: 1, color: {h: 21, s: 38, l: 77}},
{x: 70, y: 100, width: 50, height: 20, structure: 1, color: {h: 21, s: 38, l: 78}},],
trees:[
{x: 90, y: 20, size: 16},
{x: 76, y: 28, size: 12},
{x: 16, y: 84, size: 9},]
},{
x: 5296,
y: 4094,
fence:[[0,0],[0,100],[120,100],[120,0],[0,0],],
components:[
{x: 0, y: 0, width: 30, height: 80, structure: 1, color: {h: 21, s: 38, l: 75}},
{x: 30, y: 50, width: 30, height: 40, structure: 1, color: {h: 21, s: 38, l: 77}},
{x: 0, y: 80, width: 120, height: 20, structure: 1, color: {h: 30, s: 50, l: 78}},],
trees:[
{x: 90, y: 20, size: 16},
{x: 76, y: 28, size: 12},
{x: 105, y: 66, size: 9},]
},{
x: 5424,
y: 3998,
fence:[[0,0],[0,200],[100,200],[100,0],[0,0],],
components:[
{x: 0, y: 0, width: 30, height: 80, structure: 1, color: {h: 21, s: 38, l: 75}},
{x: 30, y: 0, width: 30, height: 40, structure: 1, color: {h: 21, s: 38, l: 77}},
{x: 0, y: 180, width: 100, height: 20, structure: 1, color: {h: 30, s: 50, l: 78}},],
trees:[
{x: 90, y: 20, size: 9},
{x: 76, y: 28, size: 12},
{x: 15, y: 28, size: 9},
{x: 50, y: 66, size: 9},]
},{
x: 5912,
y: 4078,
fence:[[0,0],[80,0],[80,120],[0,120],[0,0],],
components:[
{x: 0, y: 0, width: 40, height: 40, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 40, y: 0, width: 40, height: 30, structure: 1, color: {h: 21, s: 38, l: 78}},
{x: 40, y: 30, width: 40, height: 50, structure: 1, color: {h: 21, s: 38, l: 70}},],
trees:[
{x: 20, y: 90, size: 15},
{x: 8, y: 102, size: 7},]
},{
x: 6545,
y: 3755,
fence:[[0,0],[50,0],[50,-30],[210,-30],[210,100],[0,100],[0,0],],
components:[
{x: 52, y: -30, width: 80, height: 30, structure: 1, color: {h: 21, s: 38, l: 75}},
{x: 130, y: -30, width: 30, height: 25, structure: 1, color: {h: 31, s: 30, l: 65}},
{x: 0, y: 0, width: 75, height: 20, structure: 1, color: {h: 30, s: 50, l: 78}},],
trees:[
{x: 177, y: 3, size: 9},
{x: 187, y: -5, size: 14},
{x: 15, y: 48, size: 9},
{x: 130, y: 38, size: 20},
{x: 160, y: 60, size: 30},
{x: 50, y: 66, size: 9},]
},{
x: 5531,
y: 4076,
fence:[[0,0],[80,0],[80,120],[0,120],[0,0],],
components:[
{x: 0, y: 80, width: 40, height: 40, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 40, y: 40, width: 40, height: 30, structure: 1, color: {h: 21, s: 38, l: 78}},
{x: 40, y: 70, width: 40, height: 50, structure: 1, color: {h: 21, s: 38, l: 70}},],
trees:[
{x: 30, y: 22, size: 15},
{x: 22, y: 55, size: 12},
{x: 18, y: 28, size: 7},]
},{
x: 5430,
y: 3704,
fence:[[0,0],[160,0],[160,90],[0,90],[0,0],],
components:[
{x: 80, y: 50, width: 40, height: 40, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 120, y: 60, width: 40, height: 30, structure: 1, color: {h: 21, s: 38, l: 78}},
{x: 40, y: 40, width: 40, height: 50, structure: 1, color: {h: 21, s: 38, l: 70}},],
trees:[
{x: 30, y: 22, size: 15},
{x: 22, y: 55, size: 12},
{x: 60, y: 25, size: 12},
{x: 95, y: 30, size: 28},
{x: 140, y: 40, size: 12},
{x: 18, y: 28, size: 7},]
},{
x: 6280,
y: 4077,
fence:[[0,0],[80,0],[80,120],[0,120],[0,0],],
components:[
{x: 0, y: 0, width: 40, height: 40, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 40, y: 70, width: 40, height: 50, structure: 1, color: {h: 21, s: 38, l: 70}},],
trees:[
{x: 65, y: 22, size: 15},
{x: 28, y: 55, size: 12},
{x: 16, y: 65, size: 12},
{x: 28, y: 75, size: 12},
{x: 16, y: 85, size: 12},
{x: 28, y: 95, size: 12},
{x: 16, y: 105, size: 12},
{x: 60, y: 52, size: 12},
{x: 72, y: 58, size: 9},
{x: 53, y: 28, size: 9},]
},{
x: 6762,
y: 3723,
fence:[[0,0],[0,110],[80,110],[80,0],],
components:[
{x: 0, y: 0, width: 40, height: 50, structure: 1, color: {h: 21, s: 30, l: 70}},
{x: 40, y: 0, width: 40, height: 30, structure: 1, color: {h: 21, s: 30, l: 65}},],
trees:[
{x: 20, y: 90, size: 15},
{x: 8, y: 102, size: 7},]
},{
x: 4761,
y: 3545,
fence:[[0,75],[0,150],[140,150],[140,0],[90,0],[0,75],],
components:[
{x: 90, y: 0, width: 50, height: 75, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 0, y: 90, width: 40, height: 60, structure: 1, color: {h: 21, s: 38, l: 67}},
{x: 40, y: 130, width: 40, height: 20, structure: 1, color: {h: 21, s: 38, l: 72}},],
trees:[
{x: 25, y: 75, size: 7},
{x: 50, y: 50, size: 6},
{x: 65, y: 90, size: 7},],
forests:[
{x: 90, y: 75, width: 50, height: 75, minSize: 3, maxSize: 7, number: 10}]
},{
x: 4919,
y: 3615,
fence:[[0,0],[0,80],[160,80],[160,0],[0,0],],
components:[
{x: 0, y: 0, width: 40, height: 40, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 40, y: 0, width: 60, height: 20, structure: 1, color: {h: 21, s: 38, l: 78}},],
trees:[
{x: 140, y: 20, size: 10},
{x: 145, y: 30, size: 7},
{x: 135, y: 60, size: 10},
{x: 145, y: 65, size: 15},
{x: 65, y: 63, size: 5},
{x: 75, y: 58, size: 10},]
},{
x: 4642,
y: 3855,
fence:[[0,0],[0,100],[100,100],[100,0],[0,0],],
components:[
{x: 0, y: 0, width: 40, height: 25, structure: 1, color: {h: 21, s: 38, l: 79}},
{x: 60, y: 40, width: 40, height: 20, structure: 1, color: {h: 12, s: 30, l: 79}},
{x: 0, y: 25, width: 25, height: 50, structure: 1, color: {h: 21, s: 66, l: 79}},],
trees:[
{x: 80, y: 80, size: 16},]
},{
x: 5168,
y: 3291,
fence:[[0,0],[50,0],[50,-30],[210,-30],[210,100],[0,100],[0,0],],
components:[
{x: 52, y: -30, width: 80, height: 30, structure: 1, color: {h: 21, s: 38, l: 75}},
{x: 130, y: -30, width: 30, height: 25, structure: 1, color: {h: 31, s: 30, l: 65}},
{x: 0, y: 0, width: 75, height: 20, structure: 1, color: {h: 30, s: 50, l: 78}},],
trees:[
{x: 177, y: 3, size: 9},
{x: 187, y: -5, size: 14},
{x: 15, y: 48, size: 9},
{x: 130, y: 38, size: 20},
{x: 160, y: 60, size: 30},
{x: 50, y: 66, size: 9},]
},{
x: 5314,
y: 3714,
fence:[[0,0],[0,110],[80,90],[80,0],[60,0],[0,0],],
components:[
{x: 40, y: 0, width: 20, height: 30, structure: 1, color: {h: 21, s: 38, l: 72}},
{x: 0, y: 0, width: 40, height: 60, structure: 1, color: {h: 21, s: 38, l: 75}},],
trees:[
{x: 65, y: 80, size: 11},
{x: 31, y: 84, size: 7},
{x: 21, y: 80, size: 9},]
},{
x: 4636,
y: 3731,
fence:[[0,0],[0,100],[120,100],[120,0],[0,0],],
components:[
{x: 0, y: 0, width: 30, height: 80, structure: 1, color: {h: 21, s: 38, l: 75}},
{x: 30, y: 50, width: 30, height: 40, structure: 1, color: {h: 21, s: 38, l: 77}},
{x: 0, y: 80, width: 120, height: 20, structure: 1, color: {h: 30, s: 50, l: 78}},],
trees:[
{x: 90, y: 20, size: 16},
{x: 76, y: 28, size: 12},
{x: 105, y: 66, size: 9},]
},{
x: 4780,
y: 3850,
fence:[[0,0],[0,110],[80,110],[80,0],],
components:[
{x: 0, y: 0, width: 40, height: 40, structure: 1, color: {h: 21, s: 30, l: 70}},
{x: 40, y: 0, width: 40, height: 30, structure: 1, color: {h: 21, s: 30, l: 65}},],
trees:[
{x: 20, y: 90, size: 15},
{x: 8, y: 102, size: 7},]
},{
x: 4786,
y: 3994,
fence:[[0,0],[80,0],[80,120],[0,120],[0,0],],
components:[
{x: 0, y: 0, width: 40, height: 40, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 40, y: 70, width: 40, height: 50, structure: 1, color: {h: 21, s: 38, l: 70}},],
trees:[
{x: 65, y: 22, size: 15},
{x: 28, y: 55, size: 12},
{x: 16, y: 65, size: 12},
{x: 28, y: 75, size: 12},
{x: 16, y: 85, size: 12},
{x: 28, y: 95, size: 12},
{x: 16, y: 105, size: 12},
{x: 60, y: 52, size: 12},
{x: 72, y: 58, size: 9},
{x: 53, y: 28, size: 9},]
},{
x: 4676,
y: 4015,
fence:[[0,0],[0,120],[60,120],[60,0],[0,0],],
components:[
{x: 0, y: 0, width: 60, height: 30, structure: 1, color: {h: 21, s: 38, l: 71}},
{x: 0, y: 105, width: 60, height: 15, structure: 1, color: {h: 21, s: 38, l: 71}},
{x: 0, y: 30, width: 30, height: 40, structure: 1, color: {h: 16, s: 50, l: 73}},],
trees:[
{x: 24, y: 88, size: 13},
{x: 47, y: 80, size: 25},]
},{
x: 4831,
y: 3729,
fence:[[0,0],[0,100],[120,100],[120,0],[0,0],],
components:[
{x: 0, y: 0, width: 30, height: 80, structure: 1, color: {h: 21, s: 38, l: 75}},
{x: 30, y: 50, width: 30, height: 40, structure: 1, color: {h: 21, s: 38, l: 77}},
{x: 60, y: 35, width: 30, height: 45, structure: 1, color: {h: 21, s: 60, l: 77}},
{x: 70, y: 0, width: 50, height: 20, structure: 1, color: {h: 21, s: 38, l: 78}},],
trees:[
{x: 47, y: 22, size: 25},
{x: 10, y: 87, size: 10},
{x: 85, y: 87, size: 13},]
},{
x: 4934,
y: 3480,
fence:[[0,0],[0,100],[120,100],[120,0],[0,0],],
components:[
{x: 0, y: 0, width: 30, height: 80, structure: 1, color: {h: 21, s: 38, l: 75}},
{x: 30, y: 50, width: 30, height: 40, structure: 1, color: {h: 21, s: 38, l: 77}},
{x: 70, y: 100, width: 50, height: 20, structure: 1, color: {h: 21, s: 38, l: 78}},],
trees:[
{x: 90, y: 20, size: 16},
{x: 76, y: 28, size: 12},
{x: 16, y: 84, size: 9},]
},{
x: 4060,
y: 3900,
fence:[[0,300],[100,300],[100,215],[0,300],],
components:[
{x: 20, y: 290, width: 20, height: 5, structure: 1, color: {h: 21, s: 38, l: 78}},
{x: 90, y: 230, width: 5, height: 20, structure: 1, color: {h: 21, s: 38, l: 78}},
{x: 150, y: 190, width: 50, height: 100, structure: 1, color: {h: 21, s: 38, l: 70}},
{x: 200, y: 190, width: 25, height: 50, structure: 1, color: {h: 21, s: 38, l: 76}},
{x: 225, y: 130, width: 50, height: 160, structure: 1, color: {h: 21, s: 38, l: 70}},
{x: 275, y: 130, width: 50, height: 100, structure: 1, color: {h: 21, s: 38, l: 76}},],
trees:[
{x: 50, y: 280, size: 5},
{x: 75, y: 270, size: 10},
{x: 85, y: 280, size: 7},],
forests:[
{x: 330, y: 25, width: 10, height: 275, minSize: 3, maxSize: 7, number: 30}]
},{
x: 5083,
y: 3448,
fence:[[0,25],[0,125],[25,150],[125,150],[150,125],[150,25],[125,0],[25,0],[0,25],],
components:[
{x: 25, y: 25, width: 100, height: 100, structure: 1, color: {h: 21, s: 38, l: 74}},
{x: 30, y: 30, width: 15, height: 15, structure: 1, color: {h: 21, s: 38, l: 70}},
{x: 30, y: 105, width: 15, height: 15, structure: 1, color: {h: 21, s: 38, l: 70}},
{x: 105, y: 105, width: 15, height: 15, structure: 1, color: {h: 21, s: 38, l: 70}},
{x: 105, y: 30, width: 15, height: 15, structure: 1, color: {h: 21, s: 38, l: 70}},
{x: 50, y: 50, width: 50, height: 50, structure: 1, color: {h: 21, s: 38, l: 70}},],
trees:[
{x: 14, y: 35, size: 7},
{x: 14, y: 55, size: 7},
{x: 14, y: 75, size: 7},
{x: 14, y: 95, size: 7},
{x: 14, y: 115, size: 7},
{x: 35, y: 14, size: 7},
{x: 55, y: 14, size: 7},
{x: 75, y: 14, size: 7},
{x: 95, y: 14, size: 7},
{x: 115, y: 14, size: 7},
{x: 138, y: 35, size: 7},
{x: 138, y: 55, size: 7},
{x: 138, y: 75, size: 7},
{x: 138, y: 95, size: 7},
{x: 138, y: 115, size: 7},
{x: 35, y: 138, size: 7},
{x: 55, y: 138, size: 7},
{x: 75, y: 138, size: 7},
{x: 95, y: 138, size: 7},
{x: 115, y: 138, size: 7},]
},{
x: 5203,
y: 3891,
fence:[[0,0],[0,150],[100,150],[100,0],[0,0],],
components:[
{x: 0, y: 0, width: 30, height: 80, structure: 1, color: {h: 21, s: 38, l: 75}},
{x: 30, y: 0, width: 30, height: 40, structure: 1, color: {h: 21, s: 38, l: 77}},
{x: 0, y: 130, width: 100, height: 20, structure: 1, color: {h: 30, s: 50, l: 78}},],
trees:[
{x: 90, y: 20, size: 9},
{x: 76, y: 28, size: 12},
{x: 15, y: 28, size: 9},
{x: 50, y: 66, size: 9},]
},{
x: 6369,
y: 3891,
fence:[[255,0],[300,0],[300,300],[0,300],[0,0],[220,0],],
components:[
{x: 195, y: 0, width: 25, height: 25, structure: 1, color: {h: 21, s: 30, l: 65}},
{x: 255, y: 0, width: 25, height: 25, structure: 1, color: {h: 21, s: 30, l: 65}},
{x: 20, y: 160, width: 60, height: 90, structure: 1, color: {h: 21, s: 30, l: 75}},
{x: 80, y: 130, width: 60, height: 120, structure: 1, color: {h: 20, s: 30, l: 70}},
{x: 140, y: 170, width: 60, height: 40, structure: 1, color: {h: 20, s: 30, l: 66}},],
trees:[
{x: 215, y: 43, size: 7},
{x: 215, y: 64, size: 7},
{x: 215, y: 84, size: 7},
{x: 215, y: 103, size: 7},
{x: 215, y: 124, size: 7},
{x: 215, y: 144, size: 8},
{x: 214, y: 164, size: 6},
{x: 215, y: 183, size: 7},
{x: 215, y: 204, size: 7},
{x: 260, y: 44, size: 8},
{x: 257, y: 64, size: 7},
{x: 259, y: 84, size: 7},
{x: 260, y: 104, size: 7},
{x: 260, y: 124, size: 7},
{x: 260, y: 145, size: 7},
{x: 260, y: 164, size: 7},
{x: 258, y: 184, size: 7},
{x: 260, y: 204, size: 6},],
forests:[
{x: 20, y: 10, width: 100, height: 100, minSize: 5, maxSize: 10, number: 15}]
},],
forests:[
]}}}
