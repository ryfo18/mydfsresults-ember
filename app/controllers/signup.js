import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  validations: {
    email: {
      format: { with: /^(\w+@\w+\.\w+)/, allowBlank: false, message: "Enter a valid e-mail address" }
    }
  },
  actions: {
    createUser: function() {
      var data = this.getProperties('email')
      $.post('http://127.0.0.1:8000/api/signups/', data, null, 'json').then(
        function(response) {
          this.reset();
        }
      )
    }
  }
});
