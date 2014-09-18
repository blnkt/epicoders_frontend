import Ember from 'ember';

export default Ember.ArrayController.extend({
  // sortProperties: ['date', 'time'],
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['title']);
    }
  }
});
