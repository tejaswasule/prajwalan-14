
			$(document).ready(function()
			{
				$("#bt1,#try").click(function()
					{
						$("#box1").addClass("box1");
						$("#box2").addClass("box2");
					});	
					
				$("#bt2").click(function()
					{
						$("#box2").addClass("box3");
						$("#box3").addClass("box4");
						$("#bbox3").load("pages/events/mudrace/index.html");
						
					});	
					
					
					
				$("#t1-home,.f2-gohome").click(function()
					{
						$("#box1").removeClass("box1");
						$("#box2").removeClass("box2");
					});	
				$("#t2-home").click(function()
					{
						$("#box2").removeClass("box3");
						$("#box2").addClass("box2");
						$("#box3").removeClass("box4");
					});	
				
				
				/*CODE FOR EVENTS STARTSSS*/
				
				$("#eventbutton").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/events/index.html");
					
				});
				
				$("#t1-even").click(function()
				{
					$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/events/index.html");
				});
				
				$("#t2-even").click(function()
				{
					
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");	
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox2").load("pages/events/index.html");
				});
				
				/*CODE FOR EVENTS ENDSS*/
				
				
				
				
				
				/*CODE FOR WORKSHOPS STARTSSS*/
				
				
				$("#workshopbutton").click(function()
					{
						$("#box1").addClass("box1");
						$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox2").load("pages/workshops/index.html");
					
					});	
				
				$("#t1-work").click(function()
				{
					$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/workshops/index.html");
				});
				
				$("#t2-work").click(function()
				{
					
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");	
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox2").load("pages/workshops/index.html");
				});
				
				/*CODE FOR WORKSHOPS ENDSS*/
				
				
				
				
				/*CODE FOR EXHIBITIONS STARTSSS*/
				
				$("#exhibitionbutton").click(function()
					{
						$("#box1").addClass("box1");
						$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox2").load("pages/exhibitions/index.html");
					
					});	
				
				
				$("#t1-exhi").click(function()
				{
					$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/exhibitions/index.html");
				});
				
				$("#t2-exhi").click(function()
				{
					
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');	
						$("#bbox2").load("pages/exhibitions/index.html");
				});
				
				/*CODE FOR EXHIBITIONS ENDSS*/
				
				
				/*CODE FOR social ini STARTSSS*/
				
				$("#inibutton").click(function()
					{
						$("#box1").addClass("box1");
						$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox2").load("pages/ini/index.html");
					
					});	
				
				
				$("#t1-ini").click(function()
				{
					$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/ini/index.html");
				});
				
				$("#t2-ini").click(function()
				{
					
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");	
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox2").load("pages/ini/index.html");
				});
				
				/*CODE FOR SOCIAL INI ENDSS*/
				
				
				
				
				
				
				
				
				
				
					
				/*CODE FOR FOOTER CONTENT STARTSS FROM HERE*/
				
				/*CODE FOR HOSPITALITY STARTSSS*/
				
				$("#f1-hosp").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');					
					$("#bbox2").load("pages/etc/hospitality.html");
					
				});
				
				$("#f2-hosp").click(function()
				{
					
					$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');					
					$("#bbox2").load("pages/etc/hospitality.html");
					
					
				});
				
				$("#f3-hosp").click(function()
				{
					
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");	
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/hospitality.html");
						
				});
				
				/*CODE FOR HOSPITALITY ENDSS*/
				
				/*CODE FOR SPONSERS STARTS*/
				
				
				$("#f1-spon").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/sponsers.html");
				});
				
				$("#f2-spon").click(function()
				{
					$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/sponsers.html");
				});
				
				$("#f3-spon").click(function()
				{
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/sponsers.html");
				});
				
				/*CODE FOR SPONSERS ENDS*/
				/*TOPNAVIGATION CODE STARTS*/
				
				/*MUD RACE*/
				$("#t1-mudrace").click(function()
				{
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/mudrace/index.html");
						
				});
				
				$("#t2-mudrace").click(function()
				{	
						
						$("#bbox3").load("pages/events/mudrace/index.html");
						
				});
				/*MUD RACE*/
				
				/*TICTOCTOE*/
				$("#t1-tictoctoe").click(function()
				{
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").load("pages/events/tictoctoe/index.html");
						
				});
				
				$("#t2-tictoctoe").click(function()
				{	
						
						$("#bbox3").load("pages/events/tictoctoe/index.html");
						
				});
				
				/*TICTOCTOE*/
				
				/*LINE FOLLOWER*/
				$("#t1-linefollower").click(function()
				{
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/linefollower/index.html");
						
				});
				
				$("#t2-linefollower").click(function()
				{	
					
						
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/linefollower/index.html");
						
				});
				
				/*LINE FOLLOWER*/
				
				/*CONTRAPTION*/
				$("#t1-contraption").click(function()
				{
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/contraption/index.html");
						
				});
				
				$("#t2-contraption").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/contraption/index.html");
						
				});
				
				/*CONTRAPTION*/
				
				
				/*JUNKYARDWAR*/
				$("#t1-junkyardwar").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/contraption/index.html");
						
				});
				
				$("#t2-junkyardwar").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/junkyardwar/index.html");
						
				});
				
				/*JUNKYARDWAR*/
				
				
				/*MODEL EXHIBITION*/
				$("#t1-modelexhibition").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/modelexhibition/index.html");
						
				});
				
				$("#t2-modelexhibition").click(function()
				{	
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/modelexhibition/index.html");
						
				});
				
				/*MODEL EXHIBITION*/
				
				/*GREEN BIULDING*/
				$("#t1-greenbuilding").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					
					$("#bbox3").load("pages/events/greenbuilding/index.html");
						
				});
				
				$("#t2-greenbuilding").click(function()
				{	
					
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/greenbuilding/index.html");
						
				});
				
				/*GREEN BIULDING*/
				
				
				/*ENCIPHER*/
				$("#t1-encipher").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/encipher/index.html");
						
				});
				
				$("#t2-encipher").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/encipher/index.html");
						
				});
				
				/*ENCIPHER*/
				
				/*CODEFRENZY*/
				$("#t1-codefrenzy").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/codefrenzy/index.html");
						
				});
				
				$("#t2-codefrenzy").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/codefrenzy/index.html");
						
				});
				
				/*codefrenzy*/
				
				
				/*CADSTRIFE*/
				$("#t1-cadstrife").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/cadstrife/index.html");
						
				});
				
				$("#t2-cadstrife").click(function()
				{	
					
						$("#bbox3").load("pages/events/cadstrife/index.html");
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					
				});
				
				/*CADSTRIFE*/
				
				
				/*CIRCUIT DESIGNING*/
				$("#t1-circuitdesigning").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/circuitdesigning/index.html");
						
				});
				
				$("#t2-circuitdesigning").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/circuitdesigning/index.html");
						
				});
				
				/*CIRCUIT DESIGNING*/
				
				
				/*TRUSS A MAZE*/
				$("#t1-trussamaze").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/truss/index.html");
						
				});
				
				$("#t2-trussamaze").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/truss/index.html");
						
				});
				
				/*TRUSS A MAZE*/
				
				/*ANGRY BIRDS*/
				$("#t1-angrybird").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/angrybirds/index.html");
						
				});
				
				$("#t2-angrybird").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/angrybirds/index.html");
						
				});
				
				/*ANGRY BIRD*/
				
				
				
				/*GOOGLER*/
				$("#t1-googler").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/googler/index.html");
						
				});
				
				$("#t2-googler").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/googler/index.html");
						
				});
				
				/*GOOGLER*/
				
				
				/*LAN GAMING*/
				$("#t1-langaming").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/langaming/index.html");
						
				});
				
				$("#t2-langaming").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/langaming/index.html");
						
				});
				
				/*LAN GAMING*/
				
				
				/*PAIN BALL*/
				$("#t1-paintball").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/paintball/index.html");
						
				});
				
				$("#t2-paintball").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/paintball/index.html");
						
				});
				
				/*PAINT BALL*/
				
				
				
				/*JUNK ART*/
				$("#t1-junkart").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/junkart/index.html");
						
				});
				
				$("#t2-junkart").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/junkart/index.html");
						
				});
				
				/*JUNK ART*/
				
				
			
				
				
				
				/*CIPHER*/
				$("#t1-cipher").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/cipher/index.html");
						
				});
				
				$("#t2-cipher").click(function()
				{	
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/cipher/index.html");
						
				});
				
				/*CIPHER*/
				
				
				
				/*GUESS ME FACE ME*/
				$("#t1-guessmefaceme").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/guessmefaceme/index.html");
						
				});
				
				$("#t2-guessmefaceme").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/guessmefaceme/index.html");
						
				});
				
				/*GUESS ME FACE ME*/
				
				
				/*RUBIKS CUBE*/
				
				$("#t1-rubikscube").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/rubikscube/index.html");
						
				});
				
				$("#t2-rubikscube").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/rubikscube/index.html");
						
				});
				
				/*RUBIKS CUBE*/
				
				
				
				/*pixel*/
				
				$("#t1-themicpixel").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/themicpixel/index.html");
						
				});
				
				$("#t2-themicpixel").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/themicpixel/index.html");
						
				});
				
				/*pixel*/
				
				
				
				
				/*PPT*/
				
				$("#t1-ppt").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/ppt/index.html");
						
				});
				
				$("#t2-ppt").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/ppt/index.html");
						
				});
				
				/*PPT*/
				
				
				
				/*B_PLAN*/
				
				$("#t1-b-plan").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/bplan/index.html");
						
				});
				
				$("#t2-b-plan").click(function()
				{	
					
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/bplan/index.html");
						
				});
				
				/*B-PLAN*/
				
				/*VIRTUAL STOCK*/
				
				$("#t1-virtual-stock").click(function()
				{
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/virtualstock/index.html");
						
				});
				
				$("#t2-virtual-stock").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/virtualstock/index.html");
						
				});
				
				/*VIRTUAL STOCK*/
				
				/*VIRTUAL PC*/
				
				$("#t1-virtualpc").click(function()
				{
				
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/virtualpc/index.html");
						
				});
				
				$("#t2-virtualpc").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/virtualpc/index.html");
						
				});
				
				/*VIRTUAL PC*/
				
				
				/*CLASH OF ROBOTRONS*/
				
				$("#t1-clashofrobo").click(function()
				{
				
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/clashofrobo/index.html");
						
				});
				
				$("#t2-clashofrobo").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/clashofrobo/index.html");
						
				});
				
				/*CLASH OF ROBOTRONS*/
				
				
				/*PRAJWALAN TIMES*/
				
				$("#t1-prjtimes").click(function()
				{
				
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/prajwalantimes/index.html");
						
				});
				
				$("#t2-prjtimes").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/prajwalantimes/index.html");
						
				});
				
				/*PRAJWALAN TIMES*/
				
				/*MADLABZZ*/
				
				$("#t1-madlabz").click(function()
				{
				
				
					$("#box2").addClass("box3");
					$("#box3").addClass("box4");
					$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox3").load("pages/events/madlabz/index.html");
						
				});
				
				$("#t2-madlabz").click(function()
				{	
					
						$("#bbox3").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox3").load("pages/events/madlabz/index.html");
						
				});
				
				/*MADLABZZ*/
				
				
				/*TOPNAVIGATION CODE STARTS*/
				
				
				/*CODE FOR G2LC STARTSS*/
				
					$("#f1-g2lc").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/g2lc.html");
				});
				
				$("#f2-g2lc").click(function()
				{
						$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/g2lc.html");
				});
				
				$("#f3-g2lc").click(function()
				{
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");	
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/g2lc.html");
				});
				
				/*CODE FOR G2LC ENDS*/
				
					
					
					
				/*CODE FOR WINNERS STARTSS*/
				
					$("#f1-winn").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/winners.html");
				});
				
				$("#f2-winn").click(function()
				{
						$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/winners.html");
				});
				
				$("#f3-winn").click(function()
				{
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");	
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
						$("#bbox2").load("pages/etc/winners.html");
				});
				
				/*CODE FOR winners ENDS*/	
					
					
					
					
					
				/*CODE FOR SCHEDULE STARTSS*/
				
					$("#f1-sche").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/schedule.html");
				});
				
				$("#f2-sche").click(function()
				{
					$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/schedule.html");
				});
				
				$("#f3-sche").click(function()
				{
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");	
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/schedule.html");
				});
				
				/*CODE FOR SCHEDULE ENDS*/		
					
					
					
					
					
				/*CODE FOR REGISTRATION STARTSS*/
				
					$("#f1-regi").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/registration.html");
				});
				
				$("#f2-regi").click(function()
				{
					$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/registration.html");
				});
				
				$("#f3-regi").click(function()
				{
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");	
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/registration.html");
				});
				
				/*CODE FOR REGISTRATION ENDS*/		
					
					
					
					
					
					
					
					
					
					
					
				/*CODE FOR GALLARY STARTSS*/
				
					$("#f1-gall").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/gallary.html");
				});
				
				$("#f2-gall").click(function()
				{
					$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/gallary.html");
				});
				
				$("#f3-gall").click(function()
				{
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");	
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/gallary.html");
				});
				
				/*CODE FOR GALLARY ENDS*/
				
				/*THEME BUTTON CODE*/	
				$("#themebutton").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/theme.html");
				});
					
				/*THEME BUTTON CODE*/	
					
					
					
					
					
				
				/*CODE FOR CONTACTUS STARTSS*/
				
					$("#f1-cont").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/contact_us.html");
				});
				
				$("#f2-cont").click(function()
				{
					$("#bbox2").fadeOut('1000');
					$("#bbox2").toggle('1500');
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/contact_us.html");
				});
				
				$("#f3-cont").click(function()
				{
					$("#box2").removeClass("box3");
					$("#box3").removeClass("box4");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/contact_us.html");
				});
				
				/*CODE FOR G2LC ENDS*/
				/*TOTAL HOME CODE*/
				  $(".totalhome").click(function()
					{
					
					$("#box2").removeClass("box3");
						$("#box2").addClass("box2");
						$("#box3").removeClass("box4");	
						$("#box2").removeClass("box2");
						$("#box1").removeClass("box1");
						
					});
				/*CODE FOR FOOTER CONTENT ENDSSS FROM HERE*/
				
				
				/*CODE FOR XHAUST*/
				$("#xhaust").click(function()
				{
					$("#box1").addClass("box1");
					$("#box2").addClass("box2");
					$("#bbox2").html('<div id="loader"><div><img src="img/loader.gif" height="80px" width="80px"></div>LOADING...</div>');
					$("#bbox2").load("pages/etc/xhaust.html");
				});
				/*CODE FOR FOOTER CONTENT ENDSSS FROM HERE*/
				
<!--JQUERY PRELOADER STARTS-->				
				var timer;	
	//timer for splash screen
			
		
	//calling jPreLoader
	$('body').jpreLoader(
		{
			splashID: "#jSplash",
			loaderVPos: '85%',//LOCATION OF LOADING BAR
			splashVPos: '20%',//LOCATION OF LOADING IMGS
			autoClose: true,
			closeBtnText: "CLICK TO ENTER",
			onetimeLoad: true,
			splashFunction: function() 
				{  
					//passing Splash Screen script to jPreLoader
					$('#jSplash').children('section').not('.selected').hide();
					$('#jSplash').hide().fadeIn(800);
			
					timer = setInterval(function() 
						{
						splashRotator();
						}, 4000);
				}
		}, 
			function() 
				{	
					//callback function
					clearInterval(timer);
					
				});
	
	
		//create splash screen animation
			function splashRotator()
			{
				var cur = $('#jSplash').children('.selected');
				var next = $(cur).next();
		
				if($(next).length != 0) 
				{
					$(next).addClass('selected');
				} 
				else 
				{
					$('#jSplash').children('section:first-child').addClass('selected');
					next = $('#jSplash').children('section:first-child');
				}
			
				$(cur).removeClass('selected').fadeOut(800, function() 
					{
					$(next).fadeIn(800);
					});
			}
			
				$('#carousel').carouFredSel({
					width: 900,
					items: 8,
					scroll: 1,
					auto: {
						duration: 800,
						timeoutDuration:800
					},
					prev: '#prev',
					next: '#next'
				});
	
			$("#countdown").countdown({
				date: "25 february 2014 10:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});
			
			});
		