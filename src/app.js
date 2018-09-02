const Beers = require('./models/beers.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#beers-dropdown')
  const selectView = new SelectView(select);
  selectView.bindEvents();

  const beers = new Beers;
  beers.getData();
})
