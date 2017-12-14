
var DoubanMoviesCrawler = require('./douban/db_hot_moives')
var IMDBMovieDetailCrawler = require('./imdb/imdb_top')

var currCrawler =  new DoubanMoviesCrawler()
currCrawler.start()
