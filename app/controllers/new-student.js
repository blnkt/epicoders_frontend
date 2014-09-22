import Ember from 'ember';

export default Ember.Controller.extend({
  seasons: ['Spring', 'Summer', 'Fall', 'Winter'],
  years: [2012, 2013, 2014, 2015],
  actions: {
    save: function() {
      var newStudent = this.store.createRecord('student', {
        name: this.get('name'),
        year: this.get('year'),
        season: this.get('season'),
        github_username: this.get('github_username'),
        linked_in_url: this.get('linked_in_url')
      });
      newStudent.save();
      this.transitionToRoute('students');
    }
  }
});
