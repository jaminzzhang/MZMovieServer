
// var Crawler = require('crawler')
var HotMoviesCrawler = require('./douban/db_hot_moives')
var IMDBMovieDetailCrawler = require('./imdb/imdb_top')

var currCrawler =  new HotMoviesCrawler()
currCrawler.start()
