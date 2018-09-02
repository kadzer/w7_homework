const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(select){
  this.select = select;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe("Beers:names-ready", (event) => {
    this.populateList(event.detail);
  });

  this.select.addEventListener('change', (event) => {
    PubSub.publish("SelectView:name-selected", event.target.value);
  });
};

SelectView.prototype.populateList = function(names){
  names.forEach((name, index) => {
    const option = document.createElement('option');
    option.textContent = name;
    option.value = index;
    this.select.appendChild(option);
  });
};

module.exports = SelectView;
