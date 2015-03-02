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



//Ember version (not yet functioning)
// HustledBustle.viewArray = Ember.A(["aTemplate", "bTemplate", "cTemplate"]);

// currentIndex: 0,
//   selectedView: function() {
//     currentIndex = this.get('currentIndex');
//     template = HustledBustle.viewArray.get(currentIndex);
//       return Ember.View.create({
//           templateName: template,
//           classNames: ["carousel-element"],
//           didInsertElement: function() {
//               $(this.$()[0]).animate({
//                   opacity: 1,
//                   marginLeft: '+=100'
//               }, 500);
//           }
//       });
//   }.property('currentIndex'),
//   previous: function() {
//       if (this.get('currentIndex') !== 0) {
//           currentIndex = this.get('currentIndex');
//           this.set('currentIndex', currentIndex - 1);
//       }
//   },
//   next: function() {
//       if (this.get('currentIndex') !== (HustledBustle.viewArray.length - 1)) {
//           currentIndex = this.get('currentIndex');
//           this.set('currentIndex', currentIndex + 1);
//       }
