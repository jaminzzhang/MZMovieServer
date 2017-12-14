var Crawler = require('crawler')
var IMDBMovieDetailCrawler = require('./imdb_detail')

class IMDBTopMoviesCrawler {
  constructor () {
    this.topMoivesCrawler = new Crawler({
      maxConnection: 10,
      callback: (error, res, done) => {
        if (error) {
          console.log(error)
        } else {
          this.parseMovies(res)
        }
        done()
      }
    })

    this.detailCrawler = new IMDBMovieDetailCrawler((res) => {
      console.log('Get Movie')
      console.log(res)
    })
    console.log("Constructor Finished")
  }

  parseMovies (res) {
    var $ = res.$
    var list = $('#nowplaying .lists .list-item')
    list.each((index, element) => {
      var movieInfo = element.attribs
      this.detailCrawler.queue(movieDetailUrl)
    })
  }

  start () {
    this.topMoivesCrawler.queue('http://www.imdb.cn/IMDB250/')
  };
}

module.exports = IMDBTopMoviesCrawler
