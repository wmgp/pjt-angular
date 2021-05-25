angular.module('app').factory('serviceDB', serviceDB)
serviceDB.$inject = ['$http']

function serviceDB ($http){
    /******Inicio dos métodos para um CRUD**************/
    let service = {
        exec_GET: function (){
            return $http.get('http://localhost:3000/alunos').then(trtResp, trtError)

        },
        
        /***************Metodo cadastrar, passar o objeto como parametro****************/
        exec_POST: function(aluno){
            return $http.post('http://localhost:3000/alunos', aluno).then(trtResp, trtError)
        },


    }


    function trtResp(response){
        return response.data
    }

    function trtError (error){
        return error.data 
    }
    return service
}