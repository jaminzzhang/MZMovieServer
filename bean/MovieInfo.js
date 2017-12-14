class MovieInfo {
  constructor () {
    this.cnName = ''
    this.aliasName = ''
    this.enName = ''
    this.director = ''
    this.actors = []
    this.duration = ''
    this.region = ''
    this.type = ''
    this.releaseTime = ''
    this.rate = 0
    this.brefDesc = ''
    this.dbID = ''
    this.dbRate = 0
    this.dbVoteCount = 0
  }

  get dbUrl () {
    if (!this.dbID) {
      return undefined
    }

    return 'https://movie.douban.com/subject/' + this.dbID + '/?from=playing_poster'
  }
}

module.exports = MovieInfo
