const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Beers = function(){
  this.beers = [];
}

Beers.prototype.bindEvents = function () {
  PubSub.subscribe("SelectView:name-selected", (event) => {
    console.log(event.details);
  })
};
// CountryList.prototype.bindEvents = function(){
//   PubSub.subscribe("SelectView:name-selected", (event) => {
//     const country = this.countries[event.detail];
//     PubSub.publish("CountryList:country-ready", country)
//   })
// }
Beers.prototype.getData = function () {
  const request = new Request("https://api.punkapi.com/v2/beers");
  request.get((data) => {
    this.beers = data;
    const names = this.beers.map((beer) => {
      return beer.name;
    })
    PubSub.publish("Beers:names-ready", names)
    console.log(names);
  })
};


module.exports = Beers;
