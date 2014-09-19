import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  student: DS.belongsTo('student', {async: true})
});
