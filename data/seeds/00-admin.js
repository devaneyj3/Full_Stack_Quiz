
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {id: 1, username: 'devaneyj3', password: '123admin'},
      ]);
    });
};
