const Beers = require('./models/beers.js');
const SelectView = require('./views/select_view.js');
const DetailView = require('./views/detail_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#beers-dropdown')
  const selectView = new SelectView(select);
  selectView.bindEvents();

  const beerDetail = document.querySelector('#beer-details');
  const beerView = new DetailView(beerDetail);
  beerView.bindEvents();

  const beers = new Beers;
  beers.getData();
  beers.bindEvents();
})
