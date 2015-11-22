var app = angular.module('thisApp', []);

app.controller('thisController', [
    '$scope', '$http','$anchorScroll','$location',
    function($scope, $http, $anchorScroll, $location) {

        $scope.show = true;
        $scope.loads = false;
        $scope.generate = false;
        $scope.vote=true;
        $scope.chat=false;

        $scope.submit = "Check my Outfit!";

        $scope.sendPost = function(email) {
            $http.post("http://api.webhookinbox.com/i/3flaK49c/in/", email).success(function(data, status) {
            })
        };

        $scope.loadNow = function(){
            $scope.loads = true;
            setTimeout(function ()
            {
                $scope.$apply(function()
                {
                    $scope.loads = false;
                    $scope.generate = true;
                    $location.hash('generate');
                    $anchorScroll();
                });
            }, 1000);
            $location.hash('consult');
            setTimeout(function ()
            {
                $scope.$apply(function()
                {
                    $scope.chat=true;
                });
            }, 2500);
        };



        $scope.recommendations = [{
            "Outfit1":{

                "0":{
                    brand: "UNIQLO",
                    name: "Easy Care Check Long Sleeve",
                    price: 29.90,
                    photo: "http://d2h2vnfmmg5sct.cloudfront.net/catalog/product/large_image/06_133497.jpg",
                    link: "http://www.uniqlo.com/au/store/men-easy-care-check-long-sleeve-shirt-1334970006.html"
                },
                "1":{
                    brand: "UNIQLO",
                    name: "Stretch Slim Fit Tapered Blue",
                    price: 29.90,
                    photo: "http://d2h2vnfmmg5sct.cloudfront.net/catalog/product/large_image/66_143983.jpg",
                    link: "http://www.uniqlo.com/au/store/men-stretch-slim-fit-tapered-jeans-1439830032.html"
                }
            },
            "Outfit2":{
                "0":{
                    brand: "UNIQLR",
                    name: "Easy Care Check Long Sleeve",
                    price: 29.90,
                    photo: "http://d2h2vnfmmg5sct.cloudfront.net/catalog/product/large_image/06_133497.jpg",
                    link: "http://www.uniqlo.com/au/store/men-easy-care-check-long-sleeve-shirt-1334970006.html"
                },
                "1":{
                    brand: "UNIQLR",
                    name: "Stretch Slim Fit Tapered Blue",
                    price: 29.90,
                    photo: "http://d2h2vnfmmg5sct.cloudfront.net/catalog/product/large_image/66_143983.jpg",
                    link: "http://www.uniqlo.com/au/store/men-stretch-slim-fit-tapered-jeans-1439830032.html"
                }
            }

        }];

}]);