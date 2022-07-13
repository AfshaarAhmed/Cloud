
exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
