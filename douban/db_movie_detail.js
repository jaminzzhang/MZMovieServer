var Crawler = require('crawler')
var MovieInfo = require('../bean/MovieInfo')

class DoubanMovieDetailCrawler {
  constructor (detailCallback) {
    this.crawler = new Crawler({
      maxConnection: 100,
      callback: (error, res, done) => {
        if (error) {
          console.error(error)
          return
        }

        var movie = this.parseMovie(res)
        detailCallback(movie)
        done()
      }
    })
  }

  parseMovie (res) {
    var resultMovie = new MovieInfo()
    var $ = res.$
    console.log($('title').text())
    return resultMovie
  }

  queue (url) {
    this.crawler.queue(url)
  }
}

module.exports = DoubanMovieDetailCrawler
