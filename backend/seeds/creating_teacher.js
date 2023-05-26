/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('teachers').del()
  await knex('teachers').insert([
    {
      id: 1, 
      fullname: 'Professor Pardal',  
      email: 'pardal@gmail.com',
      password: 'pardal'
    }
  ]);
};
