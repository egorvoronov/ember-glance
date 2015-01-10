import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    placeOrder: function() {
      var controller = this;
      var newOrder = this.get('model.newOrder');

      newOrder.set('paymentMethod_id', this.get('model.newOrder.paymentMethod_id.id'));
      newOrder.set('shippingAddress_id', this.get('model.newOrder.shippingAddress_id.id'));
      newOrder.set('shippingSpeed_id', this.get('model.newOrder.shippingSpeed_id.id'));

      console.log(newOrder);

      newOrder.save().then(function(bla){
        controller.transitionToRoute('confirm');
      });
    }
  }

});
