var Twitter = require('twitter');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var inquirer = require('inquirer');
var request = require('request');
var client = new Twitter(keys.twitterKeys);
var fs = require("fs");

var input = process.argv;
var command = input[2];
var arg = "";
for (var i = 3; i < input.length; i++) {
	var arg = input[i];
	console.log(arg);
}

	switch(command) {
		case "my-tweets":
		grabTweets();
		break;
		case "spotify-this-song":
		if (arg.length === 0) {
			arg = "The Sign Ace of Base"
		}
		spotifyOK(arg);
		break;
		case "movie-this":
		if (arg.length === 0) {
			arg = "Mr. Nobody"
		}
		searchMovie(arg);
		break;
		case "do-what-it-says":
		readWords();
		break;
	}

function grabTweets(){

	var params = {screen_name: '@DukeAlias19932'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i = 0; i < tweets.length; i++) {
    	console.log("-----------------");
    	console.log("Created at: " + tweets[i].created_at);
    	console.log("Content: " + tweets[i].text);
    }
  }
});
}
function spotifyOK(song) {

		keys.spotify.search({ type: 'track', query: song}, function(err, data) {
			console.log("Artist Name: " + data.tracks.items[i].artists[0].name);
			console.log("Song Name: " + data.tracks.items[i].name);
			console.log("Preview Here: " + data.tracks.items[i].album.artists[0].external_urls.spotify);
			console.log("Album: " + data.tracks.items[i].album.name);
			console.log("-------------------------");
		});
//console.log(JSON.stringify(data, null, 2));
}

function searchMovie(movie) {

	var movieTitle;

		if (movie === '') {
			movieTitle = 'Mr. Nobody'

		} else {
			movieTitle = movie;
		}

		var omdbUrl = 'http://www.omdbapi.com/?t=' + movieTitle + '&plot=short&apikey=trilogy';

		request(omdbUrl, function(error, response, body){
			console.log(JSON.stringify(body[i].Title));
		})
	}

function readWords() {
		fs.readFile("random.txt", "utf8", function(error, data){
		if (error) {
			return console.log(error);
		}
		spotifyOK(data);
		})
}