if(xplants === undefined) var xplants = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
xplants.name = 'Garden ExPlantion';
xplants.version = '1.0';
xplants.GameVersion = '2.031';

xplants.launch = function() {	
	xplants.init = function() {
		xplants.AddPlants();
		xplants.plantData = '';
		xplants.AddMutates();
		xplants.FixSave();
		xplants.isLoaded = 1;
	}
	
	xplants.save = function() {
		return JSON.stringify(xplants.plantData);
	}
	xplants.load = function(str) {
		xplants.AddPlants();
		var i=0;
		xplants.plantData = '';
		var M = Game.Objects['Farm'].minigame;
		var spl=str.split(' ');
		var seeds=spl[i++]||'';
		if (seeds) {
			var n=1;
			for (var ii in xplants.plants) {
				if (seeds.charAt(n)=='1') {
					 M.plants[ii].unlocked=1;
				}
				else {
					M.plants[ii].unlocked=0;
				}
				n++;
			}
		}

		M.buildPanel();
		M.getUnlockedN();
		var plot=spl[i++]||0;
		if (plot) {
			plot=plot.split(':');
			var n=0;
			for (var y=0;y<6;y++) {
				for (var x=0;x<6;x++) {
					if(M.plot[y][x][0]==0) {
						M.plot[y][x]=[parseInt(plot[n]),parseInt(plot[n+1])];
					}
					n+=2;
				}
			}
		}
		M.buildPlot();
		return true;
	}
	
	xplants.CheckData = function() {
		
	}
	xplants.AddPlants = function() {
		var M = Game.Objects['Farm'].minigame;
		var preEvalScript = "var M = Game.Objects['Farm'].minigame;";

		CCSE.ReplaceCodeIntoFunction('M.soilTooltip', `):('<div class="icon" style="background:url(img/gardenPlants.png?v='+Game.version+');float:left;margin-left:-8px;margin-top:-8px;background-position:'+(-me.icon*48)+'px '+(-34*48)+'px;"></div>'+`,
			`):('<div class="icon" style="background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);float:left;margin-left:-8px;margin-top:-8px;background-position:'+(-me.icon*48)+'px '+(-34*48)+'px;"></div>'+`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.seedTooltip', `'<div class="icon" style="background:url(img/gardenPlants.png?v='+Game.version+');float:left;margin-left:-24px;margin-top:-4px;background-position:'+(-0*48)+'px '+(-me.icon*48)+'px;"></div>'+`,
			`'<div class="icon" style="background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);float:left;margin-left:-24px;margin-top:-4px;background-position:'+(-0*48)+'px '+(-me.icon*48)+'px;"></div>'+`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.seedTooltip', `'<div class="icon" style="background:url(img/gardenPlants.png?v='+Game.version+');float:left;margin-left:-24px;margin-top:-28px;background-position:'+(-4*48)+'px '+(-me.icon*48)+'px;"></div>'+`,
			`'<div class="icon" style="background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);float:left;margin-left:-24px;margin-top:-28px;background-position:'+(-4*48)+'px '+(-me.icon*48)+'px;"></div>'+`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.toolTooltip',`'<div class="icon" style="background:url(img/gardenPlants.png?v='+Game.version+');float:left;margin-left:-8px;margin-top:-8px;background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px;"></div>'+`,
			`'<div class="icon" style="background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);float:left;margin-left:-8px;margin-top:-8px;background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px;"></div>'+`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.tileTooltip', `'<div class="icon" style="background:url(img/gardenPlants.png?v='+Game.version+');float:left;margin-left:-8px;margin-top:-8px;background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px;"></div>'+`,
			`'<div class="icon" style="background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);float:left;margin-left:-8px;margin-top:-8px;background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px;"></div>'+`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.tileTooltip', `<div style="background:url(img/gardenPlants.png?v='+Game.version+');background-position:'+(-1*48)+'px '+(-icon[1]*48)+'px;position:absolute;left:'+(0-24)+'px;top:-32px;transform:scale(0.5,0.5);width:48px;height:48px;"></div>'+`,
			`<div style="background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);background-position:'+(-1*48)+'px '+(-icon[1]*48)+'px;position:absolute;left:'+(0-24)+'px;top:-32px;transform:scale(0.5,0.5);width:48px;height:48px;"></div>'+`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.tileTooltip', `'<div style="background:url(img/gardenPlants.png?v='+Game.version+');background-position:'+(-2*48)+'px '+(-icon[1]*48)+'px;position:absolute;left:'+((((me.mature*0.333)/100)*256)-24)+'px;top:-32px;transform:scale(0.5,0.5);width:48px;height:48px;"></div>'+`,
			`'<div style="background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);background-position:'+(-2*48)+'px '+(-icon[1]*48)+'px;position:absolute;left:'+((((me.mature*0.333)/100)*256)-24)+'px;top:-32px;transform:scale(0.5,0.5);width:48px;height:48px;"></div>'+`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.tileTooltip', `'<div style="background:url(img/gardenPlants.png?v='+Game.version+');background-position:'+(-4*48)+'px '+(-icon[1]*48)+'px;position:absolute;left:'+((((me.mature)/100)*256)-24)+'px;top:-32px;transform:scale(0.5,0.5);width:48px;height:48px;"></div>'+`,
			`'<div style="background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);background-position:'+(-3*48)+'px '+(-icon[1]*48)+'px;position:absolute;left:'+((((me.mature*0.666)/100)*256)-24)+'px;top:-32px;transform:scale(0.5,0.5);width:48px;height:48px;"></div>'+`, 0, preEvalScript);
		xplants.FixHTML();
		M.buildPanel();
		M.buildPlot();
		xplants.plants={
			'peasantrye':{
				name:'Peasant rye',
				fungus:false,
				icon:36,
				cost:5,
				costM:100,
				ageTick:1,
				ageTickR:0.5,
				mature:18,
				children:['princeroot'],
				effsStr:'<div class="green">&bull; +0.1% CpS per 10 grandmas </div><div class="red">&bull; Pledge lasts for 2% less time</div>',
				q:'Having failed to been born into wealth, this plant works hard in hope it will one day climb the social pyramid...',
			},
			'princeroot':{
				name:'Princeroot',
				fungus:false,
				icon:37,
				cost:600,
				costM:1111111111,
				ageTick:1,
				ageTickR:5,
				mature:27,
				children:[],
				effsStr:'<div class="green">&bull; boosts surrounding whiskerblooms (3x3) by 100% </div><div class="red">&bull; surrounding plants (3x3) are 5 times as likely to be overtaken</div>',
				q:'As suggested by its extremely rich taste, this root is the definition of entitled. It seemingly loves milk but has a tendency to attract weeds and fungi.',
			},
		}
		xplants.plantsById=[];var n=0;
		for (var i in xplants.plants)
		{
			//if(xplants.unlocked!=1) xplants.plants[i].unlocked=0;
			xplants.plants[i].id=n;
			xplants.plants[i].key=i;
			xplants.plants[i].matureBase=xplants.plants[i].mature;
			xplants.plantsById[n]=xplants.plants[i];
			if (typeof xplants.plants[i].plantable==='undefined') {xplants.plants[i].plantable=true;}
			n++;
		}
		for (var i in xplants.plants) {
			CCSE.NewPlant(xplants.plants[i].key, xplants.plants[i]);
			//console.log(xplants.plants[i]);
		}
		
		M.toRebuild = true;
		M.buildPanel();
		M.plantsN=M.plantsById.length;
	}
	xplants.AddMutates = function() {
		var preEvalScript = "var M = Game.Objects['Farm'].minigame;";
		var M = Game.Objects['Farm'].minigame;

		M.plants['bakerWheat'].children.push('peasantrye');
		M.plants['cronerice'].children.push('peasantrye');
		M.plants['crumbspore'].children.push('peasantrye');

		M.plants['bakeberry'].children.push('princeroot');
		M.plants['whiteChocoroot'].children.push('princeroot');

		for (var i in M.plants)
		{
			//console.log(M.plants[i].key);
           		M.plants[i].immortal = 1;
        	}
		CCSE.ReplaceCodeIntoFunction('M.getMuts', "if (neighsM['elderwort']>=1 && neighsM['crumbspore']>=1) muts.push(['ichorpuff',0.002]);", `
			if (neighsM['elderwort']>=1 && neighsM['crumbspore']>=1) muts.push(['ichorpuff',0.002]);
			
			if (neighsM['bakerWheat']>=2 && neighsM['cronerice']>=1) muts.push(['peasantrye',0.005]);
			if (neighsM['crumbspore']>=1 && neighsM['cronerice']>=1) muts.push(['peasantrye',0.001]);
			
			if (neighsM['bakeberry']>=1 && neighsM['peasantrye']>=1 && neighsM['whiteChocoroot']>=1) muts.push(['princeroot',0.01]);

			`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.computeBoostPlot', "else if (name=='ichorpuff') {ageMult=0.5;powerMult=0.5;range=1;}",`
			else if (name=='ichorpuff') {ageMult=0.5;powerMult=0.5;range=1;}
			else if (name=='princeroot') {
				weedMult=5;
				range=1;
				var Y = y;
				var X = x;
				for (var yMilk=Math.max(0,Y-range);yMilk<Math.min(6,Y+range+1);yMilk++)
				{
					for (var xMilk=Math.max(0,X-range);xMilk<Math.min(6,X+range+1);xMilk++)
					{
						var neigh = M.getTile(xMilk, yMilk);
						if (X==xMilk && Y==yMilk) {}
						else
						{
							if(M.plantsById[neigh[0]-1] == M.plants['whiskerbloom']) {
								M.plotBoost[yMilk][xMilk][1]*=2;
							}
						}
					}
				}
			}`, 0, preEvalScript);
		xplants.effs = 1;
		CCSE.ReplaceCodeIntoFunction('M.computeEffs', `M.toCompute=false;`, `
			M.toCompute=false;
			var pledgeEffs = 1;`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.computeEffs', `else if (name=='shriekbulb') {effs.cps*=1-0.02*mult;}`, `
			else if (name=='shriekbulb') {effs.cps*=1-0.02*mult;}
			else if (name=='peasantrye') {effs.cps+=0.001*Math.floor(Game.Objects['Grandma'].amount/10)*mult;pledgeEffs*=0.98;}`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.computeEffs', `M.effs=effs;`,`
			M.effs=effs;
			xplants.effs = pledgeEffs;`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('Game.getPledgeDuration', `return Game.fps*60*(Game.Has('Sacrificial rolling pins')?60:30);`,`
			return xplants.effs*Game.fps*60*(Game.Has('Sacrificial rolling pins')?60:30);`, 0);
		
	}
	xplants.FixSave = function() {
		var M = Game.Objects['Farm'].minigame;
		var preEvalScript = "var M = Game.Objects['Farm'].minigame;";
		CCSE.ReplaceCodeIntoFunction('M.save', `//output cannot use ",", ";" or "|"`,`
			xplants.plantData='';`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.save', `str+=''+(M.plants[i].unlocked?'1':'0');`, `
			if(M.plants[i].id < M.plants['peasantrye'].id) {
				str+=''+(M.plants[i].unlocked?'1':'0');
			}
			else {
				xplants.plantData+=''+(M.plants[i].unlocked?'1':'0');
			}`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.save', `str+=' ';`, `
			str+=' ';
			xplants.plantData+=' ';`, 0, preEvalScript);
		CCSE.ReplaceCodeIntoFunction('M.save', `str+=parseInt(M.plot[y][x][0])+':'+parseInt(M.plot[y][x][1])+':';`, `
			if(M.getTile(x, y)[0]-1 < M.plants['peasantrye'].id) {
				str+=parseInt(M.plot[y][x][0])+':'+parseInt(M.plot[y][x][1])+':';
				xplants.plantData+=parseInt(M.plot[y][x][0])+':'+parseInt(M.plot[y][x][1])+':';
			}
			else {
				xplants.plantData+=parseInt(M.plot[y][x][0])+':'+parseInt(M.plot[y][x][1])+':';
				str+=parseInt(0)+':'+parseInt(0)+':';
						
			}`, 0, preEvalScript);
		M.buildPanel();
		M.buildPlot();
	}
	xplants.FixHTML = function() {
		var M={};
		M.parent=Game.Objects['Farm'];
		M = Game.Objects['Farm'].minigame;
		var str = '';
		str+='<style>'+
		'#gardenBG{background:url(img/shadedBorders.png),url(img/BGgarden.jpg);background-size:100% 100%,auto;position:absolute;left:0px;right:0px;top:0px;bottom:16px;}'+
		'#gardenContent{position:relative;box-sizing:border-box;padding:4px 24px;height:'+(6*M.tileSize+16+48+48)+'px;}'+
		'.gardenFrozen{box-shadow:0px 0px 16px rgba(255,255,255,1) inset,0px 0px 48px 24px rgba(200,255,225,0.5) inset;}'+
		'#gardenPanel{text-align:center;margin:0px;padding:0px;position:absolute;left:4px;top:4px;bottom:4px;right:65%;overflow-y:auto;overflow-x:hidden;box-shadow:8px 0px 8px rgba(0,0,0,0.5);}'+
		'#gardenSeeds{}'+
		'#gardenField{text-align:center;position:absolute;right:0px;top:0px;bottom:0px;overflow-x:auto;overflow:hidden;}'+//width:65%;
		'#gardenPlot{position:relative;margin:8px auto;}'+
		'.gardenTile{cursor:pointer;width:'+M.tileSize+'px;height:'+M.tileSize+'px;position:absolute;}'+
		//'.gardenTile:before{transform:translate(0,0);pointer-events:none;content:\'\';display:block;position:absolute;left:0px;top:0px;right:0px;bottom:0px;margin:6px;border-radius:12px;background:rgba(0,0,0,0.1);box-shadow:0px 0px 4px rgba(255,255,255,0.2),-4px 4px 4px 2px rgba(0,0,0,0.2) inset;}'+
		//'.gardenTile:hover:before{margin:2px;animation:wobble 0.5s;}'+
		'.gardenTile:before{transform:translate(0,0);opacity:0.65;transition:opacity 0.2s;pointer-events:none;content:\'\';display:block;position:absolute;left:0px;top:0px;right:0px;bottom:0px;margin:0px;background:url(img/gardenPlots.png);}'+
			'.gardenTile:nth-child(4n+1):before{background-position:40px 0px;}'+
			'.gardenTile:nth-child(4n+2):before{background-position:80px 0px;}'+
			'.gardenTile:nth-child(4n+3):before{background-position:120px 0px;}'+
			'.gardenTile:hover:before{opacity:1;animation:wobble 0.5s;}'+
			'.noFancy .gardenTile:hover:before{opacity:1;animation:none;}'+
		'.gardenTileIcon{transform:translate(0,0);pointer-events:none;transform-origin:50% 40px;width:48px;height:48px;position:absolute;left:-'+((48-M.tileSize)/2)+'px;top:-'+((48-M.tileSize)/2+8)+'px;background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);}'+
			'.gardenTile:hover .gardenTileIcon{animation:pucker 0.3s;}'+
			'.noFancy .gardenTile:hover .gardenTileIcon{animation:none;}'+
		'#gardenDrag{pointer-events:none;position:absolute;left:0px;top:0px;right:0px;bottom:0px;overflow:hidden;z-index:1000000001;}'+
		'#gardenCursor{transition:transform 0.1s;display:none;pointer-events:none;width:48px;height:48px;position:absolute;background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);}'+
		'.gardenSeed{cursor:pointer;display:inline-block;width:40px;height:40px;position:relative;}'+
		'.gardenSeed.locked{display:none;}'+
		'.gardenSeedIcon{pointer-events:none;transform:translate(0,0);display:inline-block;position:absolute;left:-4px;top:-4px;width:48px;height:48px;background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);}'+
			'.gardenSeed:hover .gardenSeedIcon{animation:bounce 0.8s;z-index:1000000001;}'+
			'.gardenSeed:active .gardenSeedIcon{animation:pucker 0.2s;}'+
			'.noFancy .gardenSeed:hover .gardenSeedIcon,.noFancy .gardenSeed:active .gardenSeedIcon{animation:none;}'+
		'.gardenPanelLabel{font-size:12px;width:100%;padding:2px;margin-top:4px;margin-bottom:-4px;}'+'.gardenSeedTiny{transform:scale(0.5,0.5);margin:-20px -16px;display:inline-block;width:48px;height:48px;background:url(https://spaceyyyboyo.github.io/CC-Explantion/gardenPlants.png);}'+
		'.gardenSeed.on:before{pointer-events:none;content:\'\';display:block;position:absolute;left:0px;top:0px;right:0px;bottom:0px;margin:-2px;border-radius:12px;transform:rotate(45deg);background:rgba(0,0,0,0.2);box-shadow:0px 0px 8px rgba(255,255,255,0.75);}'+
		
		'.gardenGrowthIndicator{background:#000;box-shadow:0px 0px 0px 1px #fff,0px 0px 0px 2px #000,2px 2px 2px 2px rgba(0,0,0,0.5);position:absolute;top:0px;width:1px;height:6px;z-index:100;}'+
		'.noFancy .gardenGrowthIndicator{background:#fff;border:1px solid #000;margin-top:-1px;margin-left:-1px;}'+
		
		'#gardenSoils{}'+
		'.gardenSoil.disabled{filter:brightness(10%);}'+
		'.noFilters .gardenSoil.disabled{opacity:0.2;}'+
		
		'#gardenInfo{position:relative;display:inline-block;margin:8px auto 0px auto;padding:8px 16px;padding-left:32px;text-align:left;font-size:11px;color:rgba(255,255,255,0.75);text-shadow:-1px 1px 0px #000;background:rgba(0,0,0,0.75);border-radius:16px;}'+
		
		'</style>';
		str+='<div id="gardenBG"></div>';
		str+='<div id="gardenContent">';
		str+='<div id="gardenDrag"><div id="gardenCursor" class="shadowFilter"></div></div>';
			
			str+='<div id="gardenPanel" class="framed">';
				str+='<div class="title gardenPanelLabel">Tools</div><div class="line"></div>';
				str+='<div id="gardenTools"></div>';
				str+='<div id="gardenSeedsUnlocked" class="title gardenPanelLabel">Seeds</div><div class="line"></div>';
				str+='<div id="gardenSeeds"></div>';
			str+='</div>';
			str+='<div id="gardenField">';
				str+='<div style="pointer-events:none;opacity:0.75;position:absolute;left:0px;right:0px;top:8px;" id="gardenPlotSize"></div>';
				str+='<div id="gardenPlot" class="shadowFilter" style="width:'+(6*M.tileSize)+'px;height:'+(6*M.tileSize)+'px;"></div>';
				str+='<div style="margin-top:0px;" id="gardenSoils"></div>';
				str+='<div id="gardenInfo">';
					str+='<div '+Game.getDynamicTooltip('Game.ObjectsById['+M.parent.id+'].minigame.refillTooltip','this')+' id="gardenLumpRefill" class="usesIcon shadowFilter lumpRefill" style="display:none;left:-8px;top:-6px;background-position:'+(-29*48)+'px '+(-14*48)+'px;"></div>';
					str+='<div id="gardenNextTick">Initializing...</div>';
					str+='<div id="gardenStats"></div>';
				str+='</div>';
			str+='</div>';
			
		str+='</div>';
		var div = l('rowSpecial'+(M.parent.id));
		div.innerHTML=str;
		M.buildPlot();
		M.buildPanel();
	}

	Game.registerMod(xplants.name, xplants);
}
/*
var M = Game.Objects['Farm'].minigame;
for (var i in M.plants)
		{
			//console.log(M.plants[i].key);
            M.plants[i].immortal = 1;
        }
*/
//salt plant, glasswort /'princeroot', 'witchhazel'
if(!xplants.isLoaded){
	if(CCSE && CCSE.isLoaded){
		xplants.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(xplants.launch);
	}
}



