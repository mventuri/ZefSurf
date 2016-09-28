app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = ' Our Creations'; 
  $scope.promo = ' Browse our product and Get Your Favorite One!';
  $scope.products = [
  	{ 
    	name: 'Product One', 
    	price: 250, 
    	pubdate: new Date('2016', '03', '08'), 
    	cover: 'img/product1.svg',
    	likes: 10,
    	dislikes: 0
  	}, 
  	{ 
    	name: 'Product Two', 
    	price: 175, 
    	pubdate: new Date('2015', '08', '01'), 
    	cover: 'img/product1.svg',
    	likes: 16,
    	dislikes: 1
  	}, 
  	{ 
    	name: 'Product 3', 
    	price: 110.99, 
    	pubdate: new Date('2012', '07', '08'), 
    	cover: 'img/product1.svg',
    	likes: 20,
    	dislikes: 0 
  	}, 
  	{ 
    	name: 'Product 4', 
    	price: 75.99, 
    	pubdate: new Date('2013', '08', '16'), 
    	cover: 'img/product1.svg',
    	likes: 18,
    	dislikes: 0 
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
}]);
