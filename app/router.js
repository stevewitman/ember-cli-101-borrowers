import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('friends', function() { // see page 23
    this.route('new');
  });
});

export default Router;
