import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['student'],
  actions: {
    save: function() {
      var comment = this.store.createRecord('comment', {
        text: this.get('text')
      });
      comment.save();

      var student = this.get('controllers.student.model');
      student.get('comments').pushObject(comment);
      student.save();

      this.transitionToRoute('student', student.id);
    }
  }
});
