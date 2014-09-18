import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  profile: DS.belongsTo('profile', {async: true})
});
