import DS from "ember-data";

var ShippingSpeed = DS.Model.extend({
  name: DS.attr('string'),
  deliverySpeed: DS.attr('string'),
  price: DS.attr('number'),

  displayedName: function() {
    return this.get('name') + ' (' + this.get('deliverySpeed') + ')';
  }.property()
});

ShippingSpeed.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Fast', deliverySpeed: '1-2 days', price: 32},
    {id: 2, name: 'Medium', deliverySpeed: '3-7 days', price: 15},
    {id: 3, name: 'Slow', deliverySpeed: '1 month', price: 7}
  ]
});
export default ShippingSpeed;
