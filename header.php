<!DOCTYPE html>
<html <?php language_attributes() ?> dir="ltr">
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php bloginfo( 'name' ) ?></title>
    <?php wp_head() ?>
  </head>
  <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <?php
    if ( function_exists( 'the_custom_logo' ) ) {
      echo get_custom_logo();
    }
    ?>

    <?php if ( has_nav_menu( 'header-dropdown-menu' ) ): ?>
        <?php wp_nav_menu( array( 'theme_location' => 'header-dropdown-menu' ) ); ?>
    <?php endif; ?>
