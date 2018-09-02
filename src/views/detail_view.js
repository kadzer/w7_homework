const PubSub = require('../helpers/pub_sub');


const DetailView = function(container){
  this.container = container;
};

DetailView.prototype.bindEvents = function(){
  PubSub.subscribe("Beers:beer-ready", (event) => {
    const beer = event.detail;
    this.render(beer);
  });
};

DetailView.prototype.render = function (beer) {
  //clears out content of the container before displaying
  this.container.innerHTML = "";
  const details = this.createDetails(beer);
  this.container.appendChild(details);

  // const image = this.createImage(beer);
  // this.container.appendChild(image);
};

DetailView.prototype.createDetails = function (beer) {
  const detailDiv = document.createElement('section');
  const description = document.createElement('p');
  description.textContent = "Description: " + beer.description;
  detailDiv.appendChild(description);
  return detailDiv;
};

// DetailView.prototype.createImage = function (beer) {
//   const img = document.createElement('img');
//   img.src = beer.image_url;
//   img.classList.add("image");
//   return img;
// };
module.exports = DetailView;
