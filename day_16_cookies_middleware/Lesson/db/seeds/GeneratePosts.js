
const faker = require("faker");
const random = n => Math.ceil(Math.random() * n);

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then( () => {
      // Inserts seed entries
      const posts = Array.from({length: 100})
        .map(() => ({
          title: faker.company.catchPhrase(),
          content: faker.lorem.paragraph(),
          imageUrl: faker.image.imageUrl(),
          createdAt: new Date(2018, random(12), random(31)),
          viewCount: random(10000)
        }));
      return knex('posts').insert(posts);
    
    });
};
