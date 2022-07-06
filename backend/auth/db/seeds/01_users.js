
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    { id: 1, name: 'rowValue1', email: 'r1tests@mail.com', password: 'qwe123' }
    // {id: 2, name: 'rowValue2', email: 'r2@mail.com', password: 'qwe123'},
    // {id: 3, name: 'rowValue3', email: 'r3@mail.com', password: 'qwe123'}
  ]);
};
