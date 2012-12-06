<?php
class controller {
	public static function View( $view ) {
		require( "views/header.php" );
		require( "views/$view.php" );
		require( "views/footer.php" );
	}
}
?>