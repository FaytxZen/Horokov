var source;
var bioSource;

var getText = function(file){
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
	    if(rawFile.readyState === 4)
	    {
	        if(rawFile.status === 200 || rawFile.status == 0)
	        {
	        	if(file.indexOf("horoscope") > -1) source = rawFile.responseText.split(/[.?!]/);
	            else if(file.indexOf("bio") > -1) bioSource = rawFile.responseText.split(/[.?!]/);
	        }
	    }
	}
	rawFile.send(null);
}

getText("words/horoscopes.txt");
getText("words/bio.txt");