exports.up = function (knex) {
  return knex.schema
    .createTable('admin', (tbl) => {
      tbl.increments()
      tbl.text('username').unique().notNullable()
      tbl.text('password').notNullable()
    })
    .createTable("teachers", (tbl) => {
      tbl.increments();
      //create a column 'name' that is required and unique
      tbl.text("name").unique().notNullable();
      //create a column 'username' that is required and unique
      tbl.text("username").unique().notNullable();
      //create a column 'email' that is required and unique
      tbl.text("email").unique().notNullable();
      //create a column 'password' that is required and unique
      tbl.text("password").unique().notNullable();
      //create a column 'name' that is required and unique
      tbl.text("class").unique().notNullable()
    })
    .createTable('classes', (tbl) => {
      tbl.increments()
      tbl.text('name').unique().notNullable()
      tbl.integer('teacher_id').references('id').inTable('teachers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('students', (tbl) => {
      tbl.increments()
      tbl.text('name').unique().notNullable()
      tbl.text('email').unique().notNullable()
      tbl.text('username').unique().notNullable()
      tbl.text('password').notNullable()
    })
    .createTable('student_class', (tbl) => {
      tbl.integer('student_id').references('id').inTable('students').unsigned()
      tbl.integer('class_id').references('id').inTable('classes').unsigned()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.primary(['student_id', 'class_id'])


    })

    .createTable("quizes", (tbl) => {
      tbl.increments();
      //create a name 'name' that is required and unique
      tbl.text("name").unique().notNullable()
    })
    .createTable("classes_quizes", (tbl) => {
      tbl.integer('class_id').references('id').inTable('classes').unsigned();
      //create a name 'name' that is required and unique
      tbl.integer("quiz_id").references().inTable('quizes').unsigned()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      tbl.primary(['class_id', 'quiz_id'])
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("classes_quizes").dropTableIfExists("quizes")
    .dropTableIfExists("student_class")
    .dropTableIfExists("students")
    .dropTableIfExists("classes")
    .dropTableIfExists("teachers")
    .dropTableIfExists("admin")
};
