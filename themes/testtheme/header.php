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
      <div id="header-dropdown-menu">
        <span id="header-dropdown-icon">
          <span id="bar-1" class="menuWhiteBar"></span>
          <span id="bar-2" class="menuWhiteBar"></span>
          <span id="bar-3" class="menuWhiteBar"></span>
        </span>
        <?php wp_nav_menu( array( 'theme_location' => 'header-dropdown-menu' ) ); ?>
      </div>
    <?php endif; ?>
