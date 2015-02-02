import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    function() {
      return !Ember.isEmpty(this.get('model.email')) &&
             !Ember.isEmpty(this.get('model.firstName')) &&
             !Ember.isEmpty(this.get('model.lastName')) &&
             !Ember.isEmpty(this.get('model.twitter'));
    }
  ),
  actions: {
    save: function() {
      console.log('+- save action in friends new controller');
      return true;
    },
    cancel: function() {
      console.log('+- cancel action in friends new controller');
      return true;
    }
  }
});
