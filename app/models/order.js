import DS from "ember-data";

var Order = DS.Model.extend({
  email: DS.attr('string'),
  paymentMethod_id: DS.attr('number'),
  shippingAddress_id: DS.attr('number'),
  shippingSpeed_id: DS.attr('number')
});

Order.reopenClass({
  FIXTURES: []
});

export default Order;
