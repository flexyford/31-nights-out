import DS from 'ember-data';

export default DS.Model.extend({
  campName: DS.attr('string'),
  location: DS.attr('string'),
  hadFun: DS.attr('boolean'),

  user: DS.belongsTo('user'),
});
