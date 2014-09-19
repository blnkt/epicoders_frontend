import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newStudent = this.store.createRecord('student', {
        name: this.get('name'),
        year: this.get('year'),
        season: this.get('season'),
        github_username: this.get('github_username')
      });
      newStudent.save();
      this.transitionToRoute('students');
    }
  }
});
