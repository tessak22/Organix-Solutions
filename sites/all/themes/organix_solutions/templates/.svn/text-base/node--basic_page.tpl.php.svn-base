<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>



<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>


  <?php 
  $headerImage = field_get_items('node', $node, 'field_background_image');//$node->field_subtitle['und'][0]['value'];
  if ($headerImage):?> 

<?php print render($content['field_background_image']); ?>          

<?php endif;?>


  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>

        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

     



     

    </header>
  <?php endif; ?>


  <div class="featured-image"><?php print render($content['field_featured_image']); ?></div>
  
  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['links']);
    print render($content['body']);

  ?>
  <div class="clear"></div>
  <?php print render($content['field_show_faqs']); ?>

  <?php print render($content['links']); ?>

   <div class="link-containers"><?php print render($content['field_tags']); ?></div>


</article>
<div class="clear"></div>