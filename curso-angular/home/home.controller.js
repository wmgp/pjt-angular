angular.module('app').controller('homeController',homeController)
/***************Na home controller p primeiro parametro é a responsável pela navegação, o seungo pelo service***************/
homeController.$inject = ['$location', 'serviceDB']

function homeController($location,serviceDB){
    vm = this
    vm.teste = 'home'
    vm.alunos = ''

    vm.init = ()=>{
        vm.listarAlunos()
    }

    /********Função chamando a tela cadastro*******/
    vm.navegar = function (rota){
        $location.path(rota)
    }

    vm.listarAlunos = function(){
    /***********Método Obter************** */
    serviceDB.exec_GET().then( resposta => {
        resposta
        return vm.alunos = resposta
    })
    }
}