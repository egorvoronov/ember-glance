import Ember from "ember";

export default Ember.Route.extend({
  model: function () {
    var self = this;

    return {
      newOrder: this.store.createRecord('order'),
      paymentMethods: this.store.find('paymentMethod'),
      shippingAddresses: this.store.find('shippingAddress'),
      shippingSpeeds: this.store.find('shippingSpeed')
    };
  }
});
