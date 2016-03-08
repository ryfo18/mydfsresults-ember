import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  validations: {
    email: {
      // this regex comes from http://emailregex.com/
      format: { with: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, allowBlank: false, message: "Enter a valid e-mail address" }
    },
    password: {
      confirmation: true,
        presence: {
          message: ' password required'
        }
    },
    passwordConfirmation: {
      presence: {
        message: ' please confirm password'
      }
    }
  },
  actions: {
    createUser: function() {
      this.set("server_errors", null);
      var ctx = this;
      var data = this.store.createRecord('user', {
        email: this.get('email'),
        password: this.get('password')
      });
      data.save().then(function(response) {
        console.log(response);
      }, function() {
        ctx.set('server_errors', data.get('errors'));
        console.log(data.get('server_errors.email'));
      });
    }
  }
});
