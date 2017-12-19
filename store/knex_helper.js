var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'sqlpass',
    database : 'wosofa'
  }
});


class KnexHelper {
  setup () {
    knex.schema.createTable('movies', function(table) {
      table.increments('id')
    })
  }
}
