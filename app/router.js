import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("users", function(){
    this.route('register');
    this.route('validate', {path:"/validate/:auth_path"});
  });
});

export default Router;
