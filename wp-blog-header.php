<?php

/**
 * WordPress 환경와 템플릿을 로드한다.
 *
 * @package WordPress
 */

if ( ! isset( $wp_did_header ) ) {

	$wp_did_header = true;

	// 워드프레스 라이브러리를 로드한다.[Korean] 
	require_once( dirname( __FILE__ ) . '/wp-load.php' );

	// 워드프레스 쿼리를 설정한다.[Korean] 
	wp();
	
	// 테마 템플릿을 로드한다.[]
	require_once( ABSPATH . WPINC . '/template-loader.php' );

}
