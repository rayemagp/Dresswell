var app = angular.module('thisApp', []);

app.controller('thisController', [
    '$scope', '$http',
    function($scope, $http) {

        $scope.show = true;
        $scope.generate = false;


        $scope.btnhighlight = function(target){
            $scope.show = true;
            $scope.generate = false;
            target.parent.style.backgroundColor="#323232";
            target.style.backgroundColor = "#e51c23";
        }

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