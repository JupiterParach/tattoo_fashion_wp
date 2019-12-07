<?php
function initTheme() {

  add_theme_support( 'custom-background' );
  add_theme_support( 'custom-header' );
  add_theme_support( 'custom-logo' );
  add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );

  // register_sidebars()

}
initTheme();

function register_my_menus() {
  register_nav_menus(
    array(
      'header-dropdown-menu' => __( 'Header Dropdown Menu' )
     )
   );
 }
 add_action( 'after_setup_theme', 'register_my_menus' );

function enqueueStylesAndScripts() {
  wp_enqueue_style( 'fontawesome.min.css', get_template_directory_uri() . '/assets/fontawesome-free-5.11.2-web/fontawesome-free-5.11.2-web/css/fontawesome.min.css');
  wp_enqueue_style( 'solid.css', get_template_directory_uri() . '/assets/fontawesome-free-5.11.2-web/fontawesome-free-5.11.2-web/css/solid.css');
  wp_enqueue_style( 'bootstrap.min.css', get_template_directory_uri() . '/assets/bootstrap-4.4.1-dist/bootstrap-4.4.1-dist/css/bootstrap.css');
  wp_enqueue_style( 'style.css', get_stylesheet_uri() );
  wp_enqueue_style( 'header.css', get_template_directory_uri() . '/assets/css/header.css');

  wp_enqueue_script( 'dropdownMenuManager.js', get_template_directory_uri() . '/assets/js/dropdownMenuManager.js' );
}
add_action( 'wp_enqueue_scripts', 'enqueueStylesAndScripts' );

function themename_custom_logo_setup() {
 $defaults = array(
 'height'      => 0,
 'width'       => 0,
 'flex-height' => true,
 'flex-width'  => true,
 'header-text' => array( 'site-title', 'site-description' ),
 );
 add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'themename_custom_logo_setup' );

?>
