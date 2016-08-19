/* global angular */
angular.module( 'membros' ).factory( 'APImembros' , function( $http ){
	
	var getMembros = function(){
		return $http.get( 'membros.php' );
	}
	
	var postMembros = function( membros ){
		return $http.post( 'membros.php' , { membros : membros } );
	}
	
	return {
		retornaMembros : getMembros ,
		salvaMembros : postMembros
	}
});