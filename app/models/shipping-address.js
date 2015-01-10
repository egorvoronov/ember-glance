import DS from "ember-data";

var ShippingAddress = DS.Model.extend({
  country: DS.attr('string'),
  state: DS.attr('string'),
  city: DS.attr('string'),
  address: DS.attr('string'),

  fullAddress: function(){
    var state = this.get('state') ? this.get('state') + ', ' : '';

    return this.get('country') + ': ' + state + this.get('city') + ', ' + this.get('address');
  }.property()
});

ShippingAddress.reopenClass({
  FIXTURES: [
    {id: 1, country: 'RU', state: null, city: 'Saint Petersburg', address: 'Nevskiy, 1'},
    {id: 2, country: 'US', state: 'Nebraska', city: 'Omaha', address: 'Linkoln street, 15'}
  ]
});
export default ShippingAddress;
