import Ember from 'ember';

export default Ember.ArrayController.extend({
  // sortProperties: ['date', 'time'],
  actions: {
    sortByName: function() {
      this.set('sortProperties', ['name']);
    }
  }
});
