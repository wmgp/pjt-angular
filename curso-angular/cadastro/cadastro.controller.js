/******************************Estrutura de uma controller*************************************/
angular.module('app').controller('cadastroController', cadastroController)
/****['$location'] -> responsvel pela navegação da tela****************/
cadastroController.$inject = ['$location','serviceDB']

/**********Parametro que representa a location*********/
function cadastroController ($location,serviceDB){
    vm = this    
    vm.teste = 'cadastro'
    vm.aluno = {}

    vm.navegar = function(){
        /********path('/') -> caminho defualt**********/
        $location.path('/')
    }

    vm.matricularAl = function () {
        serviceDB.exec_POST(vm.aluno).then(resposta =>{
            resposta
            vm.aluno = resposta
        }),
        vm.navegar('/')
    }
    
}