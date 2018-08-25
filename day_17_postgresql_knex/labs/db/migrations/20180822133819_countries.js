
exports.up = function(knex, Promise) {
  return knex.schema.createTable("countries", t => {
      t.increments("id");
      t.string("countryName");
      t.string("countryCode");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("countries");
};



