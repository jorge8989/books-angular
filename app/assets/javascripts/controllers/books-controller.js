booksApp.controller('booksController', function($scope, $resource) {
  var Book = $resource("/api/books/:id", {id: "@id"}, {})
  $scope.books = Book.query(); 
})
