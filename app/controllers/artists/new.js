import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArtist: function(e) {
      e.preventDefault();
      var artistName = this.get('artistName');
      var promise = $.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/artists',
        data: {
          name: artistName,
        }
      });

      promise.then((response) => {
        this.set('artistName', null);
        var artists = this.get('model.artists');
        console.log(response);
        var newArtist = artists.concat(response.artist);
        this.set('model.artists', newArtist);
        this.transitionToRoute('artists');
        console.log('success');
      }, function() {
        console.log('error');
        alert('Artist is already in the database');
      });
    }
  }
});

// Array.prototype.pushObject = function() {
//   // notify ember that data has changed so that it can rerender
//   array.push(value)
// }




// $('form').on('submit', function(e) {
//   e.preventDefault();
// })
