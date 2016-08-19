<?php
class Membro{
	
	function __construct(){
		$this->arquivo = 'membros.txt';
	}
	
	function retornaMembros(){
		return file_get_contents( $this->arquivo );
	}
	
	function salvaMembros( $dados ){
		file_put_contents( $this->arquivo , $dados );
		return true;
	}
}

$membro = new Membro();

$reqType = $_SERVER['REQUEST_METHOD'];

if( $reqType == 'POST' ){
	$postdata = file_get_contents( "php://input" );
	$postdata = json_decode( $postdata );
	$novosMembros = $postdata->membros;
	if ( $membro->salvaMembros( $novosMembros ) ) {
		echo true;
	}
	else{
		echo false;
	}
}
else{
	echo $membro->retornaMembros();
}
?>