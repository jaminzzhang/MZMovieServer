
var Crawler = require('crawler')
var DoubanMovieDetailCrawler = require('./db_movie_detail')
var MovieInfo = require('../bean/movie_info')

class DoubanMoviesCrawler {
  constructor () {
    this.hotMoivesCrawler = new Crawler({
      rateLimit: 1000,
      callback: (error, res, done) => {
        if (error) {
          console.log(error)
        } else {
          this.parseMovies(res)
        }
        done()
      }
    })

    this.detailCrawler = new DoubanMovieDetailCrawler((res) => {
      console.log('Get Movie')
      console.log(res)
    })
    console.log("Constructor Finished")
  }

  parseMovies (res) {
    var $ = res.$
    var list = $('#nowplaying .lists .list-item')
    // console.log(list[0].attribs["data-title"]);
    var movieList = []
    list.each((index, element) => {
      var movieJson = element.attribs
      var movieInfo = this.parseDBMovieInfo(movieJson)
      if (movieInfo) {
        movieList.push(movieInfo)
      }
    })

    console.log(movieList)
    this.detailCrawler.queue(movieList[0].url)
  };

  // { id: '26950070',
  // class: 'list-item hidden',
  // 'data-title': '垫底联盟',
  // 'data-score': '0',
  // 'data-star': '00',
  // 'data-release': '2017',
  // 'data-duration': '97分钟',
  // 'data-region': '中国大陆',
  // 'data-director': '王文',
  // 'data-actors': '余玥 / 季肖冰 / 卢蒽洁',
  // 'data-category': 'nowplaying',
  // 'data-enough': 'False',
  // 'data-showed': 'True',
  // 'data-votecount': '349',
  // 'data-subject': '26950070' },
  parseDBMovieInfo (movieJson) {
    if (!movieJson || !movieJson['data-title']) {
      return undefined
    }
    var movieInfo = new MovieInfo()
    movieInfo.dbID = movieJson['id']
    movieInfo.cnName = movieJson['data-title']
    movieInfo.director = movieJson['data-director']
    movieInfo.dbRate = movieJson['data-score']
    movieInfo.actors = movieJson['data-actors'].split('/')
    movieInfo.region = movieJson['data-region']
    movieInfo.duration = movieInfo['data-duration']
    movieInfo.releaseTime = movieJson['data-release']
    movieInfo.dbVoteCount = movieJson['data-votecount']
    return movieInfo
  }

  start () {
    this.hotMoivesCrawler.queue('https://movie.douban.com/cinema/nowplaying/shenzhen/')
  };
}

module.exports = DoubanMoviesCrawler
