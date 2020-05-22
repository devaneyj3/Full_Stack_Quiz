
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teachers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {id: 1, name: 'Joe Smo', username: 'Joe Smo', email: 'Joe@email.com', password: 'password', class: 'Intro to Javascript'},
        { id: 2, name: 'Carol', username: 'Carol123', email: 'Carol@email.com', password: 'sports', class: 'Intro to Node' },
        {id: 3, name: 'Bill', username: 'Bil483', email: 'Bill@email.com', password: 'rock', class: 'Intro to React'},
      ]);
    });
};
