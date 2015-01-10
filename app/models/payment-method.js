import DS from "ember-data";

var PaymentMethod = DS.Model.extend({
  creditCardNumber: DS.attr('number'),
  month: DS.attr('number'),
  year: DS.attr('number'),
  monthAndYear: function() {
    return this.month + '/' + this.year;
  }.property(),
  cvv: DS.attr('string')
});

PaymentMethod.reopenClass({
  FIXTURES: [
    {id: 1, creditCardNumber: '38751039485712039', month: 3, year: 2017, cvv: '358'},
    {id: 1, creditCardNumber: '23436436234754345', month: 7, year: 2015, cvv: '345'},
  ]
});
export default PaymentMethod;
