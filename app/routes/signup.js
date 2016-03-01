import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createUser: function() {
      var that = this;

      var user = that.store.createRecord('signup', {
        email: that.get('controller.email')
      });
      data.save().then(function(response) {
        console.log(response);
      }, function(error) {
        console.log(error);
      });
    }
  }
})
