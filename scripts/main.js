var sentenceSize = 10;
var numSentenceOffset = Math.floor(sentenceSize/3 + Math.pow(-1, 0.5 - Math.random()));
var numSentences = Math.floor(sentenceSize/2) + Math.floor(sentenceSize*Math.random());
	numSentences = numSentences < 3 ? numSentences : 3;

var SetHoroscope = function(sign){
	var horoscopeText = "";
	for(var i = 0; i < numSentences; i++){
		horoscopeText+=generate_horoscope(sentenceSize + Math.floor(sentenceSize * Math.random()))+". ";
	}
	$("#horoscope").find("#horoscope-text").html(horoscopeText);
	$("#horoscope").find("h1").first().html(sign);
	$("#horoscope-image").attr("src", "img/"+sign+".png");
};

$(document).ready(function(){
	//horoscope generation
	SetHoroscope("Aries");

	//bio generation
	sentenceSize = 7 + Math.floor(2 + Math.pow(-1, 0.5 - Math.random()));
	numSentences = Math.floor(3*Math.random());
	numSentences = numSentences < 1 ? 1 : numSentences;
	var bioText = "";
	for(var i = 0; i < numSentences; i++){
		bioText += generate_bio(sentenceSize)+". ";
	}
	$("#bio").html(bioText);
});