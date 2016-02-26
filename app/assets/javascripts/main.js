var booksApp = angular.module('booksApp', ['ngRoute', 'ngResource']);
$(document).on('ready page:load', function() {
  angular.bootstrap(document.body, ['booksApp'])
});

booksApp.config(function($httpProvider) {
  authToken = $("meta[name=\"csrf-token\"]").attr("content")
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken
})


booksApp.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: '/templates/books.html', controller: 'booksController'} )
})
