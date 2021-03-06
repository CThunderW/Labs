
exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", t => {
      t.increments("id");
      t.text("content");
      t.integer("postId")
      t.timestamp("created_at").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("comments");
};
