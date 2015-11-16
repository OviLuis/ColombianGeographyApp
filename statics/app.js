var app = angular.module('appGeography', ["ngRoute"]);

app.config(function($routeProvider){
        $routeProvider
            
            .when("/geologia", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "geologia.html"
            })

            .when("/geogPolitica", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "geogPolitica.html"
            })

            .when("/regNaturales", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "regNaturales.html"
            })

            .when("/clima", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "clima.html"
            })

            .when("/fisografia", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "fisografia.html"
            })

            .when("/hidrografia", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "hidrografia.html"
            })

            .when("/parqNaturales", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "parqNaturales.html"
            })

            .when("/fenomeNaturales", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "fenomeNaturales.html"
            })

            .when("/apuntes", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "apuntes.html"
            })

            .when("/glosario", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "glosario.html"
            })

            .when("/geogPolitica", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                templateUrl: "geogPolitica.html"
            })

            
    });

