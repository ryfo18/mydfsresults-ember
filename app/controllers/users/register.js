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
    errors: "",
    createUser: function() {
      var data = this.store.createRecord('user', {
        email: this.get('email'),
        password: this.get('password')
      });
      data.save().then(function(response) {
        console.log(response);
      }, function(error) {
        this.set('errors', data.get('errors'));
        console.log(data.get('errors'));
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
