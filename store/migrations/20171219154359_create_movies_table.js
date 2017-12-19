
//
// this.cnName = ''
// this.aliasName = ''
// this.enName = ''
// this.director = ''
// this.actors = []
// this.duration = ''
// this.region = ''
// this.type = ''
// this.releaseTime = ''
// this.rate = 0
// this.brefDesc = ''
// this.dbID = ''
// this.dbRate = 0
// this.dbVoteCount = 0


exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(t) {
    t.increments('id').primary();
    t.string('cnName').notNullable();
    t.string('enName').notNullable();
    t.string('aliasName');
    t.string('director');
    t.string('actors');
    t.string('duration');
    t.string('region');
    t.string('type');
    t.string('releaseTime');
    t.string('brefDesc');
    t.string('dbID');
    t.string('dbRate');
    t.string('dbVoteCount');
    t.string('imdbID');
    t.string('imdbRate');
    t.string('imdbVoteCount');
    t.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies');
};
