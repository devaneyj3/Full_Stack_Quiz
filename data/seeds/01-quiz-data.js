
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quizes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quizes').insert([
        {id: 1, name: 'Biology', teacher_id: 2},
      ]);
    });
};
