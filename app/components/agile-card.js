import Ember from 'ember';

export default Ember.Component.extend({
  colors: ['tomato', 'rebeccapurple', 'white'],
  isEditing: false,
  minValue: 0,
  maxValue: 21,
  value: 1,
  bgColor: 'tomato',
  textColor: 'white',

  actions: {
    increaseValue() {
      let currValue = this.get('value');

      if (currValue < this.get('maxValue')) {
        this.set('value', currValue + 1);
      }
    },

    decreaseValue() {
      let currValue = this.get('value');

      if (currValue > this.get('minValue')) {
        this.set('value', currValue - 1);
      }
    },

    toggleEdit() {
      this.set('isEditing', !this.get('isEditing'));

      if (this.get('isEditing')) {
        Ember.$('html, body').animate({ scrollTop: Ember.$(document).height() }, 'slow');
      } else {
        Ember.$('html, body').animate({ scrollTop: 0 }, 'slow');
      }
    },
  }
});
