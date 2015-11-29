var app = angular.module('appGeography', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/bienvenido");

    $stateProvider
        .state('presentacion', {
          url: "/bienvenido",
          templateUrl: "bienvenidos.html"
        })

        .state('app', {
          url: "/index",
          templateUrl: "template_base.html"
        })
        .state('app.inicio', {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/inicio',
                templateUrl: "inicio.html"
            })
        .state("app.geologia", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/geologia',
                templateUrl: "geologia.html"
            })

         .state("app.geogPolitica", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/geogPolitica',
                templateUrl: "geogPolitica.html"
            })

            .state("app.regNaturales", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/regNaturales',
                templateUrl: "regNaturales.html"
            })

            .state("app.clima", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/clima',
                templateUrl: "clima.html"
            })

            .state("app.fisografia", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/fisografia',
                templateUrl: "fisografia.html"
            })

            .state("app.hidrografia", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/hidrografia',
                templateUrl: "hidrografia.html"
            })

            .state("app.parqNaturales", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/parqNaturales',
                templateUrl: "parqNaturales.html"
            })

            .state("app.fenomeNaturales", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/fenomeNaturales',
                templateUrl: "fenomeNaturales.html"
            })

            .state("app.apuntes", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/apuntes',
                templateUrl: "apuntes.html"
            })

            .state("app.glosario", {
                //controller: "appCtrl",
                //controllerAs: "vm",
                url:'/glosario',
                templateUrl: "glosario.html"
            })

            

            
    });

