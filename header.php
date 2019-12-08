<!DOCTYPE html>
<html <?php language_attributes() ?> dir="ltr">
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php bloginfo( 'name' ) ?></title>
    <?php wp_head() ?>
  </head>
  <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div class="container-fluid" style="padding-top: .8rem;">
      <div class="row">
        <div class="col">
          <?php
            if ( function_exists( 'the_custom_logo' ) ) {
              echo get_custom_logo();
            }
          ?>

        </div>
        <div class="col">
          <?php if ( has_nav_menu( 'header-dropdown-menu' ) ): ?>
          <?php /* dropdownMenu() looks for a sibling div with class menu to find menu the list to then restructure the elements into a toggleable dropdown menu */ ?>
          <i onclick='dropdownMenu(this, "fa fa-bars", "fa fa-times")' style='color: white; float: right; font-size: 3rem' class="fa fa-bars" aria-hidden="true"></i>
          <div class="container">

          </div>
            <?php wp_nav_menu( array( 'theme_location' => 'header-dropdown-menu' ) ); ?>
          <?php endif; ?>
        </div>
      </div>

    </div>
