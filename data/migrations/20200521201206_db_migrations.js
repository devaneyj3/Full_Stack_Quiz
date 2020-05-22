
exports.up = function(knex) {
    return knex.schema.createTable('teachers', tbl => {
        tbl.increments();
        //create a column 'name' that is required and unique
        tbl.text('name').unique().notNullable();
        //create a column 'username' that is required and unique
        tbl.text('username').unique().notNullable();
        //create a column 'email' that is required and unique
        tbl.text('email').unique().notNullable();
        //create a column 'password' that is required and unique
        tbl.text('password').unique().notNullable();
        //create a column 'name' that is required and unique
        tbl.text('class').unique().notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('teachers');
};
