import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    console.log('HERE');
    this.store.query("user", {auth_path: params.auth_path}).then(function(response) {
      console.log("response");
      console.log(response);
    }, function(error) {
      console.log("error");
      console.log(error);
    });
  }
});
