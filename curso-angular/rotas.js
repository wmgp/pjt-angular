/*********************Criando Rotas*************************/

angular.module('app').config(function($routeProvider){
    $routeProvider
    /**************Determina o caminho e a controller*********************/
 
    /**Determina o caminho da rota**/
    .when('/Cadastro',{
        /****caminho  do arquivo**/
        templateUrl:'cadastro/cadastro.html',
        controller: 'cadastroController as vm'
    })
    /******************Pagina defeault*******************/
    .otherwise({
        templateUrl:'home/home.html',
        controller:'homeController as vm'
    })
})