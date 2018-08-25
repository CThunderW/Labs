
exports.up = function(knex, Promise) {
  return knex.schema.createTable("populations", t => {
    t.increments("id");
    t.integer("year");
    t.integer("quantity");
    t.integer('country_id').references('id').inTable('countries')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("populations");
};
