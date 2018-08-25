const knex = require("./db/client");

knex
    .insert([
        {title: "Top 5 Programming Languages", content: "PHP, python, javascript, ruby, express"},
        {title: "Top 10 Hikes", content: "Grouse Grind, The Chief, Coquitlam Crunch"},
        {title: "You Won't Believe", content: "What Happens Next"}
    ])
    .into("posts")
    .returning("*")
    .then(data => {
        console.log(data);
        knex.destroy();
    });

    knex("posts")
    .select("*")
    .where("createdAt", ">", "now()", "-", `interval '2 months'`)
    .orderBy("createdAt", "desc");
  // .then(console.log);
  
  // 2. Find posts whose titles end with the letter "e"
  
  knex("posts")
    .where("title", "ilike", "%e")
    .then(console.log);