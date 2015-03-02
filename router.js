HustledBustle.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('news', function() {
    this.resource('lebron');
  });
  this.resource('entertainment', function() {
    this.resource('gaga');
  });
  this.resource('fashion', function() {
    this.resource('banana');
  });
  this.resource('lifestyle', function() {
    this.resource('kitten');
  });
  this.resource('books');
});
