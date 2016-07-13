var express = require("express");

var app = express();

app.get('/', function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
	res.end("<h1>Free Code Camp - Time Stamp Microservice </h1><h3>Project Details</h3><p>You can convert natual Date to unixTimestamp and  vise versa</p><h3>You can test the following URL</h3><code>https://powerful-earth-71310.herokuapp.com/Dec,%2020,%202016</code><br /><code>https://powerful-earth-71310.herokuapp.com/1482174000</code>");
	//<div>
		// <h1>Free Code Camp - Time Stamp Microservice </h1>
		// <h3>Project Details</h3>
		// <p>You can convert natual Date to unixTimestamp and  vise versa</p>
		// <br />
		// <br />
		// <br />
		// <h3>You can test the following URL</h3>
		// <code>http://localhost:8000/Dec,%2020,%202016</code>
		// <code>http://localhost:8000/1482174000</code>
		// <br />
		// <br />
	//</div>
	// ");

});

app.get('/:timestamp', function(req, res) {
    
    var reqURL =  req.originalUrl;
    var decodeurl = decodeURI(reqURL.slice(1));
   
    if(decodeurl.indexOf(' ') > -1){
        var unixTimestamp = new Date (decodeurl).getTime()/1000;
        res.send(`{"unix" : "${unixTimestamp}" , "natural" : "${decodeurl}" }`);
    }else{
        var fullDate = (new Date (decodeurl * 1000));
		var fullDateArray = fullDate.toString().split(' ');
		var filterArray = [];
		filterArray.push(fullDateArray[1]);
		filterArray.push(fullDateArray[2]);
		filterArray.push(fullDateArray[3]);
		var natural = filterArray.join(', ');
        res.send(`{"unix" : "${decodeurl}" , "natural" : "${natural}" }`);
    }
});
app.listen(process.env.PORT);
console.log(process.env.PORT);