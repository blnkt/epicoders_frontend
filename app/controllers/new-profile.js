import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newProfile = this.store.createRecord('profile', {
        title: this.get('title'),
        body: this.get('body')
      });
      newProfile.save();
      this.transitionToRoute('profiles');
    }
  }
});
