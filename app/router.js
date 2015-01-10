import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('checkout');
  this.route('orders');
  this.route('confirm');
});

export default Router;
