const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  Recipe.create({
    "title": "Avocado Toast",
    "level": "Easy Peasy",
    "ingredients": [
      "bread",
      "eggs",
      "avocado",
      "hemp seeds",
      "olive oil",
      "seasonings"
    ],
    "cuisine": "Maia",
    "dishType": "breakfast",
    "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
    "duration": 20,
    "creator": "Maia Duek"
  })
  .then(response => console.log("response was", response))
  .catch(err => console.log("there was an error", err))
  .finally(() => mongoose.connection.close())


  Recipe.create(data)
  .then(response => console.log("response was", response))
  .catch(err => console.log("there was an error", err))
  // .finally(() => mongoose.connection.close())

  Recipe.findByIdAndUpdate("61fafef6c9c40dddcbf822ce", {
    duration: 100
  })
   .then(response => console.log("response was", response))
  .catch(err => console.log("there was an error", err))
  // .finally(() => mongoose.connection.close())

  Recipe.findByIdAndDelete("61fafef6c9c40dddcbf822cd")
  .then(res => console.log("Carrot cake deleted!")
  .catch(err => console.log("error deleting carrot cake"))
  .finally(()=> mongoose.connection.close()))