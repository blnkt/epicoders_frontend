import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['profile'],
  actions: {
    save: function() {
      var comment = this.store.createRecord('comment', {
        text: this.get('text')
      });
      comment.save();

      var profile = this.get('controllers.profile.model');
      profile.get('comments').pushObject(comment);
      profile.save();

      this.transitionToRoute('profile', profile.id);
    }
  }
});
