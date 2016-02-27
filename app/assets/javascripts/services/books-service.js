angular.module('booksApp').factory('Book', function($resource) {
    return  $resource("/api/books/:id", {id: "@id"}, {});
})
