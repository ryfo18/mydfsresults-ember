import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  validations: {
    email: {
      format: { with: /^(\w+@\w+\.\w+)/, allowBlank: false, message: "Enter a valid e-mail address" }
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
      }, function(error) {
        ctx.set('server_errors', data.get('errors'));
        console.log(data.get('server_errors.email'));
      });
    }
  }
//  actions: {
//    createUser: function () {
//      var data = this.store.createRecord('signup', {
//        email: this.get('email')
//      });
//      data.save().then(function(response) {
//        console.log(response);
//      }, function(error) {
//        console.log(error.errors.email);
//      });
//    }
//  }
});
