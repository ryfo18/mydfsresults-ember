import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  validations: {
    email: {
      format: { with: /^(\w+@\w+\.\w+)/, allowBlank: true, message: "Enter a valid e-mail address" }
    }
  }
});
