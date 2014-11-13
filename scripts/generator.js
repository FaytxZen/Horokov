/**
	Bleck, globals
*/
var terminals = {};
var startWords = [];
var wordStats = {};


//HOROSCOPE GENERATION STUFF

/** 
	Generates the associative collections and 1D arrays for use in
	the generate_horoscope function
 */
for(var i = 0; i < source.length; i++){
	var words = source[i].trim().split(/\s/);
	terminals[words[words.length-1]] = true;
	startWords.push(words[0]);
	for(var j = 0; j < words.length - 1; j++){
		if(wordStats.hasOwnProperty(words[j])){
			wordStats[words[j]].push(words[j+1]);
		}
		else {
			wordStats[words[j]] = [words[j+1]];
		}
	}
}

/**
	Randomly select an item from the array passed
 */
var lottery = function(array){
	var i = Math.floor(array.length * Math.random());
	if (i < array.length) return array[i];
	return array[i - 1];
}

/**
	Generates a horoscope using the parsed word bank with at least the min_limit
 */
var generate_horoscope = function(min_limit){
	word = lottery(startWords); //make global
	var horoscope = [word];

	while(wordStats.hasOwnProperty(word)){
		//get a list of words that common follows word
		var nextWords = wordStats[word];

		//randomly select a random next word
		word = lottery(nextWords);

		//add it to the horoscope
		horoscope.push(word);

		if(horoscope.length > min_limit && terminals.hasOwnProperty(word)) break;
	}

	if(horoscope.length < min_limit) return generate_horoscope(min_limit);
	return horoscope.join(' ');
};


//BIO GENERATION STUFF

var bioterminals = {};
var biostartWords = [];
var biowordStats = {};

for(var i = 0; i < bioSource.length; i++){
	var words = bioSource[i].trim().split(/[()\s]/);
	bioterminals[words[words.length-1]] = true;
	biostartWords.push(words[0]);
	for(var j = 0; j < words.length - 1; j++){
		if(biowordStats.hasOwnProperty(words[j])){
			biowordStats[words[j]].push(words[j+1]);
		}
		else {
			biowordStats[words[j]] = [words[j+1]];
		}
	}
}

var generate_bio = function(min_limit){
	word = lottery(biostartWords); //make global
	var bio = [word];

	while(biowordStats.hasOwnProperty(word)){
		//get a list of words that common follows word
		var nextWords = biowordStats[word];

		//randomly select a random next word
		word = lottery(nextWords);

		//add it to the horoscope
		bio.push(word);

		if(bio.length > min_limit && bioterminals.hasOwnProperty(word)) break;
	}

	if(bio.length < min_limit) return generate_bio(min_limit);
	return bio.join(' ');
};