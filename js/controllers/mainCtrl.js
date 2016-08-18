// instancia
angular.module( 'membros' , [] );
// referencia
angular.module( 'membros' ).controller( 'homeCtrl' , function( $http , $scope , APImembros ){	
    
    $scope.prepararMembros = function( membros ){
        var string = '[';
        for( obj in membros ){
            string += ( ' { "nome" : "'+ membros[obj].nome +'" , "idade" : "'+membros[obj].idade + '"} ');
            string += ( ( obj < ( membros.length - 1 ) ) ? ',' : '' );
        }
        string += ']';
        return string
    }

	$scope.carregarMembros = function(){
		APImembros.retornaMembros().then( function( dados ){
			$scope.membros = dados.data;
		});
	}
	
	$scope.salvarMembros = function( novoMembro ){
		$scope.membros.push( novoMembro );
		APImembros.salvaMembros( $scope.prepararMembros( $scope.membros ) ).then( function( dados ){
			$scope.carregarMembros();
		});
    	$scope.novoMembro = {
    	     nome : '' ,
    	     idade : ''
    	}
		$scope.formMembros.$setPristine();
	}
	
	$scope.carregarMembros();	
});