// Constructor
// A house 'class'

function House(sf, style, bedrooms, bathrooms, lotSize) {
  this.sf = sf;
  this.style = style;
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.lotSize = lotSize;
}

House.prototype = {
  keys: function() {
    return Object.keys(this);
  },

  to_s: function() {
    var k = this.keys();
    var string = ("");
    for (var i = 0; i < k.length; i++) {
      string += this[k[i]] + ', ' };
      return string;
  }
}

daHouse = new House(350, 'slanty-shanty', 1, 0, '500 sf');
console.log(daHouse.keys());
console.log(daHouse.to_s());
