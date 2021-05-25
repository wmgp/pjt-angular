angular.module('app').controller('menuController',menuController)
menuController.$inject = ['$location']

function menuController ($location){
    vm = this

/*************Ação na troca do menu bar*******************/
    vm.itensMenu = [
        {titulo: 'Home', class: 'nav-link active'},
        {titulo: 'Cadastro', class:' nav-link'}
    ]

    vm.navegar = (rota, array) =>{
        angular.forEach(array, (item) => {
        item.titulo == rota ? item.class = 'nav-link active' : item.class ='nav-link'
            
        })

        $location.path(rota)
    }
}