
exports.up = function(knex, Promise) {
  return knex.schema.table("posts", t => {
    t.string("imageUrl");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("posts", t => {
      t.dropColumn("imageUrl");
  });
};
