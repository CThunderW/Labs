exports.up = function(knex) {
    return knex.schema.createTable("notes", t => {
      // CREATE TABLE "posts" (
      t.increments("id"); // "id" SERIAL
      t.text("content"); // "content" TEXT
      t.timestamp("createdAt").defaultTo(knex.fn.now()); // "createdAt" ...
      // )
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("notes");
  };