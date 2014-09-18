import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  season: DS.attr(),
  year: DS.attr(),
  github_username: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
