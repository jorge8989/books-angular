booksApp.controller('booksController', function($scope, Book) {
  $scope.books = Book.query();
  $scope.get = function(book) {
     Book.get({id: book.id}, function(data) {
     $scope.selectedBook = data;
    });
  }
})
