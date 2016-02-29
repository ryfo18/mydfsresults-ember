import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  validations: {
    email: {
      format: { with: /^(\w+@\w+\.\w+)/, allowBlank: false, message: "Enter a valid e-mail address" }
    }
  },
  actions: {
    createUser: function () {
      var data = this.store.createRecord('signup', {
        email: this.get('email')
      });
      data.save().then(function(data) {
      }).catch(function(reason) {
        Ember.logger.log('Reason: ', reason);
      });
    }
  }
});
