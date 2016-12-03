/*
// Add player 1
$('#L1').click(function(){
	$("#players").empty();
	$("#players").append("<div class='row'><div class='col-md-4'><img class='img-responsive' src='img/gabbe.png' width='300' height='300' alt=''></div><div class='col-md-4'><h3>Gabriel <i>gebs</i> Gabelon</h3><p>Is the main clutcher in the team.</p><h3>Attributes</h3><ul><li>M4A4 Specialist</li><li>Pistol master</li><li>Never drop</li><li>Nice knife</li><li>Cant handle the awp</li><li>Probably an Alien</li></ul><h4>Favourite gun: P2000</h4></div><div class='col-md-4'><h3>Personal info</h3><ul><li>Age: 19 years</li><li>From: Märsta, Sweden</li><li>Current rank: Supreme</li><li>Highest rank: Global</li></ul></div></div>");
});

// Add player 2
$('#L2').click(function(){
	$("#players").empty();
	$("#players").append("<div class='row'><div class='col-md-4'><img class='img-responsive' src='img/Gurra.png' width='300' height='300' alt=''></div><div class='col-md-4'><h3>Gustav <i>Lögnbert</i> Ask</h3><p>Is the main failer of the team.</p><h3>Attributes</h3><ul><li>0/17 - NFAR</li><li>M4A4 Sprayer</li><li>Like the revolvo</li><li>Has a bad knife</li><li>Entryfragger or entrydier</li></ul><h4>Favourite gun: Dual-Berettas</h4></div><div class='col-md-4'><h3>Personal info</h3><ul><li>Age: 21 years</li><li>From: Märsta, Sweden</li><li>Current rank: LEM</li><li>Highest rank: Supreme</li></ul></div></div>");
});

// Add player 3
$('#L3').click(function(){
	$("#players").empty();
	$("#players").append("<div class='row'><div class='col-md-4'><img class='img-responsive' src='img/dennis.png' width='300' height='300' alt=''></div><div class='col-md-4'><h3>Dennis <i>Slagis</i> Fredriksson</h3><p>Is the main rifler of the team.</p><h3>Attributes</h3><ul><li>Still looking for a knife</li><li>M4A4 or M4A1-S he doesn't know....</li><li>Has a bad knife</li><li>Can play AWP - but rarely does</li></ul><h4>Favourite gun: Famas</h4></div><div class='col-md-4'><h3>Personal info</h3><ul><li>Age: 20 years</li><li>From: Märsta, Sweden</li><li>Current rank: Supreme</li><li>Highest rank: Global</li></ul></div></div>");
});

// Add player 4
$('#L4').click(function(){
	$("#players").empty();
	$("#players").append("<div class='row'><div class='col-md-4'><img class='img-responsive' src='img/joel.png' width='300' height='300' alt=''></div><div class='col-md-4'><h3>Joel <i>Järnlevern</i> Liåker</h3><p>Is the main AWPer of the team.</p><h3>Attributes</h3><ul><li>AWP Pro</li><li>IGL</li><li>Has a nice knife</li><li>Nice fire serpent :D</li><li>Drunk as fuck</li></ul><h4>Favourite gun: AWP or Knife</h4></div><div class='col-md-4'><h3>Personal info</h3><ul><li>Age: 27+ years</li><li>From: Märsta, Sweden</li><li>Current rank: LEM</li><li>Highest rank: Supreme</li></ul></div></div>");
});

// Add player 5
$('#L5').click(function(){
	$("#players").empty();
	$("#players").append("<div class='row'><div class='col-md-4'><img class='img-responsive' src='img/simpe.png' width='300' height='300' alt=''></div><div class='col-md-4'><h3>Simon <i>Simpe</i> Pettersson</h3><p>Is the main complainer of the team.</p><h3>Attributes</h3><ul><li>AWP and Rifle it does not matter</li><li>Always yelling</li><li>Complains a.. lot</li><li>Has some nice skins</li><li>Always complain when he dies</li><li>Always plays better than bad</li></ul></div><div class='col-md-4'><h3>Personal info</h3><ul><li>Age: 22 years</li><li>From: Linköping, Sweden</li><li>Current rank: Supreme</li><li>Highest rank: Supreme</li></ul><h3>Mouse settings</h3><ul><li>Sensitivity 2.2</li><li>400 DPI</li><li>1000 Hz</li><li>Raw input 0</li></ul></div></div>");
});

// Add player 6
$('#L7').click(function(){
	$("#players").empty();
	$("#players").append("<div class='row'><div class='col-md-4'><br/><img class='img-responsive' src='img/niki.png' width='300' height='300' alt=''></div><div class='col-md-4'><h3>Niki <i>Substitute Cookie</i> Ask</h3><p>Is the main cookie clicker of the team.</p><h3>Attributes</h3><ul><li>Bro with Axel...</li></ul><h4>Favourite gun: Deagle / Scout</h4></div></div>");
});

// Add player 7
$('#L6').click(function(){
	$("#players").empty();
	$("#players").append("<div class='row'><div class='col-md-4'><br/><img class='img-responsive' src='img/fille.png' width='300' height='300' alt=''></div><div class='col-md-4'><h3>Felipe <i>SpaceGoat</i> Guerrero</h3><p>Is the main chilli spice of the team.</p><h3>Attributes</h3><ul><li>Has a nice knife</li><li>Lucky as fuck on cases</li></ul><h4>Favourite gun: Nova</h4></div></div>");
});*/

$(window).resize(function() {
	var s = $(window).width();
	if(s < 992){
		document.getElementById('VL1').setAttribute("style", "border-right: 0px"); 
		document.getElementById('VL2').setAttribute("style", "border-right: 0px"); 
	} else {
		document.getElementById('VL1').setAttribute("style", "border-right: 1px solid #eeeeee");
		document.getElementById('VL2').setAttribute("style", "border-right: 1px solid #eeeeee"); 
	}
});

// Tab menu handler p1
$('#li11').click(function(){
	$("#li11").attr('class', 'active');
	$("#li21").attr('class', 'nonactive');
	$("#li31").attr('class', 'nonactive');
});

$('#li21').click(function(){
	$("#li11").attr('class', 'nonactive');
	$("#li21").attr('class', 'active');
	$("#li31").attr('class', 'nonactive');
});

$('#li31').click(function(){
	$("#li11").attr('class', 'nonactive');
	$("#li21").attr('class', 'nonactive');
	$("#li31").attr('class', 'active');
});

// Tab menu handler p2
$('#li12').click(function(){
	$("#li12").attr('class', 'active');
	$("#li22").attr('class', 'nonactive');
	$("#li32").attr('class', 'nonactive');
});

$('#li22').click(function(){
	$("#li12").attr('class', 'nonactive');
	$("#li22").attr('class', 'active');
	$("#li32").attr('class', 'nonactive');
});

$('#li32').click(function(){
	$("#li12").attr('class', 'nonactive');
	$("#li22").attr('class', 'nonactive');
	$("#li32").attr('class', 'active');
});

// Tab menu handler p3
$('#li13').click(function(){
	$("#li13").attr('class', 'active');
	$("#li23").attr('class', 'nonactive');
	$("#li33").attr('class', 'nonactive');
});

$('#li23').click(function(){
	$("#li13").attr('class', 'nonactive');
	$("#li23").attr('class', 'active');
	$("#li33").attr('class', 'nonactive');
});

$('#li33').click(function(){
	$("#li13").attr('class', 'nonactive');
	$("#li23").attr('class', 'nonactive');
	$("#li33").attr('class', 'active');
});

// Tab menu handler p4
$('#li14').click(function(){
	$("#li14").attr('class', 'active');
	$("#li24").attr('class', 'nonactive');
	$("#li34").attr('class', 'nonactive');
});

$('#li24').click(function(){
	$("#li14").attr('class', 'nonactive');
	$("#li24").attr('class', 'active');
	$("#li34").attr('class', 'nonactive');
});

$('#li34').click(function(){
	$("#li14").attr('class', 'nonactive');
	$("#li24").attr('class', 'nonactive');
	$("#li34").attr('class', 'active');
});

// Tab menu handler p5
$('#li15').click(function(){
	$("#li15").attr('class', 'active');
	$("#li25").attr('class', 'nonactive');
	$("#li35").attr('class', 'nonactive');
});

$('#li25').click(function(){
	$("#li15").attr('class', 'nonactive');
	$("#li25").attr('class', 'active');
	$("#li35").attr('class', 'nonactive');
});

$('#li35').click(function(){
	$("#li15").attr('class', 'nonactive');
	$("#li25").attr('class', 'nonactive');
	$("#li35").attr('class', 'active');
});