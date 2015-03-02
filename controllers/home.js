HustledBustle.HomeController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showPicture: function() {
      this.set('isPictureShowing', true);
    }
    // hidePicture: function() {
    //   this.set('isPictureShowing', false);
    // }
  }
});
