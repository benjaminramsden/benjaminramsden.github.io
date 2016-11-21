app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: "Spag Bol",
      description: "Mince in a tomato sauce with spaghetti.",
      price: 13.95
    },
    {
      name: "Beef Wellington",
      description: "Beef stuffed inside a wellington boot.",
      price: 12.95
    },
    {
      name: "Macaroni Cheese",
      description: "Cheese on macaroni.",
      price: 10.95
    }
  ];
  
  $scope.extras = [
    {
      name: "Chips",
      description: "Potato wedges seasoned with salt",
      price: 3.95
    },
    {
      name: "Salad",
      description: "Food for rabbits.",
      price: 2.45
    },
    {
      name: "Bread and Olives",
      price: 3.45
    }
  ];

}]);