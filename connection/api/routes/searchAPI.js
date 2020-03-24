var unirest = require("unirest");

var req = unirest("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/AutoComplete");

req.query({
	"text": "do"
});

req.headers({
	"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
	"x-rapidapi-key": "3d76b62e4cmshce2e010c31dca44p1896b1jsn202fc39ee017"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

module.exports = router ;