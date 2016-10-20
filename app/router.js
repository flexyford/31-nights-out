import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('nights', function(){
    this.route('camp', {path: ':night_id'});
  });
});

export default Router;
