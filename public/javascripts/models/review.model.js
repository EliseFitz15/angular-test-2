(function(root) {

  var app = root.app || (root.app = {});
  app.models || (app.models = {})

  app.models.Review = Review;

  function Review(score, description) {
    this.score = title;
    this.description = description;
  }
})(window);
