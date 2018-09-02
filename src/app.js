const Beers = require('./models/beers.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const beers = new Beers;
  beers.getData();
})
