<?php get_header() ?>

  <h1><?php wp_title(); ?></h1>

  <?php while (have_posts()) :
    the_post();
  ?>
  <h1><?php the_title(); ?></h1>
  <div class="content-flexbox-container">
    <div class="content-container">
      <?php
      the_content();
      ?>
    </div>
  </div>
  <?php endwhile; ?>

<?php get_footer(); ?>
