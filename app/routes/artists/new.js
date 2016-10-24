import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
     // modelFor() will return the model for parent routes, in this case the `artists` route.
     // the model of the `artists.new` route will be the same as the `artists` route
     // this will be the model on the `artists.new` controller
     return this.modelFor('artists');
  }
});
