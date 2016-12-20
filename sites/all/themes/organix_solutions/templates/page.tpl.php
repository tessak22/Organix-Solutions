<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page">



  <header class="header" id="header" role="banner">
 

 
 <!-- ?php
    //print render(field_view_field('node', $node, 'field_page_type_', 'value', array('label'=>'hidden'))); 
  ? >   
   < ? php
    //print var_dump(field_view_field('node', $node, 'field_page_type_', array('label'=>'hidden'))); 
  ? -->

     

    <?php if ($site_name || $site_slogan): ?>
      <div class="header__name-and-slogan" id="name-and-slogan">
        <?php // if ($site_name): ?>
          <!-- h1 class="header__site-name" id="site-name">
            <a href="<?php //print $front_page; ?>" title="<?php //print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
          </h1 -->
        <?php  // endif; ?>

        <?php //if ($site_slogan): ?>
          <!-- div class="header__site-slogan" id="site-slogan"><?php //print $site_slogan; ?></div -->
        <?php //endif; ?>
      </div>
    <?php endif; ?>

    <?php //if ($secondary_menu): ?>
      <!-- nav class="header__secondary-menu" id="secondary-menu" role="navigation">
        <?php /* print theme('links__system_secondary_menu', array(
          'links' => $secondary_menu,
          'attributes' => array(
            'class' => array('links', 'inline', 'clearfix'),
          ),
          'heading' => array(
            'text' => $secondary_menu_heading,
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); */ ?>
      </nav -->
    <?php //endif; ?>

    <?php print render($page['header']); ?>
 



<div id="navigation">
<div id="our-partners">
  <img src="/<?php echo $directory; ?>/images/os-theme/our-partners.png">
  
        <?php  if ($page['our_partners']): ?>
          <div class="our-partners">
            <?php  print render($page['our_partners']); ?>
          </div> 
        <?php  endif; ?>
         
</div>
      <div class=" ">
        <?php if ($main_menu): ?>
          <nav id="main-menu" role="navigation" tabindex="-1">
            <?php
            // This code snippet is hard to modify. We recommend turning off the
            // "Main menu" on your sub-theme's settings form, deleting this PHP
            // code block, and, instead, using the "Menu block" module.
            // @see https://drupal.org/project/menu_block
            print theme('links__system_main_menu', array(
              'links' => $main_menu,
              'attributes' => array(
                'class' => array('links', 'inline', 'clearfix'),
              ),
              'heading' => array(
                'text' => t('Main menu'),
                'level' => 'h2',
                'class' => array('element-invisible'),
              ),
            )); ?>
          </nav>
        <?php endif; ?>


        <?php print render($page['navigation']); ?>
        
        <img src="/<?php echo $directory; ?>/images/os-theme/hamburger-nav.png" class="hamburger-nav">

        <div id="mobile-menu">
          <div class="close-menu">
            <span class="back">Back</span>
            <img src="/<?php echo $directory; ?>/images/os-theme/close-menu.png" class="close-x">
          </div>
          <div class="menu-slide "><?php print render($page['mobile_menu']); ?></div> 
        </div>

        <!-- Inserting logo after menu -->
        <?php if ($logo): ?>
          <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo">

            <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" />
            <img src="/<?php echo $directory; ?>/images/os-theme/scroll-down-logo.png" class="scroll-down-logo">
          </a>
        <?php endif; ?>

        <!-- Making Contact button Content Managable -->
        <!-- <?php // if ($page['contact']): ?>
          <div id="header-contact">
            <?php // print_r($page['contact']); ?>
          </div> 
        <?php // endif; ?>
         -->
<div id="header-contact">
  <a href="#" data-desktop-link="/contact" data-mobile-link="tel:+17639721101"><img src="/<?php echo $directory; ?>/images/os-theme/phone-icon.png" alt="" title=""><span class="contact-text">Contact</span></a>
</div>

    <!-- Search Box Goes here 
      xxxxx
    -->

       </div>

    <div class="header-search"><?php
          $block = module_invoke('search', 'block_view', 'search');
          print render($block);
    ?>
        <div class="search-button-custom"><i class="fa fa-search"></i></div>
    </div>
       
    </div>



  </header>

  <div id="main">

    <div id="content" class="column" role="main">
      <?php print render($page['highlighted']); ?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      
     
      <?php if ($title): ?>
       
 

<?php if (isset($node)):?>
<?php 
  $subtitle = field_get_items('node', $node, 'field_subtitle');//$node->field_subtitle['und'][0]['value'];
  if ($subtitle):?> 
    <h2 class="h2-subtitle"><?php print $node->field_subtitle['und'][0]['value']; ?></h2>
<?php endif;?>
<?php endif;?>

<?php if (isset($node)):?><?php if ($node->type == 'co_branded_page' ):?><h2 class="h2-subtitle">Partners</h2><?php endif ;?><?php endif ;?>



          
           <h1 class="page__title title <?php if (isset($node)):?><?php if ($subtitle || $node->type == 'co_branded_page' ):?>has-subtitle<?php endif;?><?php endif;?>" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
   



    </div>

    
     
  <div class="interior-bottom-thirds">
      <?php print render($page['interior_bottom']); ?>
    </div>


    <?php
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);
    ?>

    <?php if ($sidebar_first || $sidebar_second): ?>
      <aside class="sidebars">
        <?php print $sidebar_first; ?>
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>


  


</div>

  </div>



  <?php print render($page['proud_manufacturer']); ?>
  <div class="footer-menu-wrapper">
    <?php print render($page['footer_menus']); ?>
  </div>


  <div class="colophon">
    <?php print render($page['bottom']); ?>
  </div>
<div class="to-top">
  <img src="/<?php echo $directory; ?>/images/os-theme/to-top.png">
</div>
</div>


