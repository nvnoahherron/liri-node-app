var twitter = require('twitter');
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');

var twitterKeys = {
  consumer_key: 'dQbdsLyz1DCEj3ryCLC0M6gzZ',
  consumer_secret: '6wgnIk9qKj422CE3Yxj65wKVSaDZp1TmkZS3JJTBJPAsuQGSvs',
  access_token_key: '931318482888790016-Jtk5pywDsengHP4JM6I8NT7pbivcewg',
  access_token_secret: 'WIhgbGb0DYIYbDLRj7CzIFAA1pHHiOyrd266bNX9SC0Qf',
};
var spotify = new Spotify({
  id: 'e6899ff195754ee3b9fa430b9d4642e3',
  secret: 'c265101461214b87b474704e30d06c9f'
});

module.exports = {
	twitterKeys: twitterKeys,
	spotify: spotify
};
