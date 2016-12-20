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



<div id="tier-1" class="section">
<div class="tier-1-container">

	<?php print render($content['group_tier_1_print']); ?>
	<div class="flex-control-custom">
		<div class="flex-prev-custom"></div>
		<div class="flex-next-custom"></div>
	</div>


	<div class="hidden-blurb"> 
	<?php print $node->field_tier_1_blurb_mobile['und'][0]['value'];?>
	</div>

	<div class="hidden-slide-url">
		<?php print render($content['field_tier_1_mobile_background_i']); ?>
	</div>


	<div class="select-container"><span class="select-title">How can we partner with you?</span>


		<?php
		    print theme('links', array('links' => menu_navigation_links('menu-home-page---how-can-we-part'), 'attributes' => array('class'=> array('links', 'main-menu')) ));
		?>


		<!-- select class="select-tier-1">
		  <option value="none"></option>
		  <option value="http://www.google.com/1">I am a community/municipality</option>
		  <option value="http://www.google.com/2">I am a waste hauler</option>
		  <option value="http://www.google.com/3">I am a school/universtiy</option>
		  <option value="http://www.google.com/4">I am a Hospital</option>
	  	  <option value="http://www.google.com/5">I am a policy maker</option>
	  	  <option value="http://www.google.com/6">I am a farmer/producer</option>
	  	  <option value="http://www.google.com/7">I am a industrial compost facility</option>
		</select -->
	
		<div class="select-button">
			<img src="/<?php echo $directory; ?>/images/os-theme/right-arrow-select.png">
		</div>
		
	</div>

	<div class="learn-more">
		<a href="#tier-2">Learn More<img src="/<?php echo $directory; ?>/images/os-theme/learn-more-arrow.png"></a>
	</div>
</div>




</div>

<div id="tier-2" class="section">
	<div class="tier-2-container">

		<div class="fact">
			<table>
				<tr>
					<td>
						<img src="/<?php echo $directory; ?>/images/os-theme/fact.png" class="fact-icon">
					</td>
					<td>
						<div class="fact-source-wrapper">
							<?php print render($content['field_tier_2_fact']); ?>
							<div class="source">(Source)
								<div class="tooltip">
									<img src="/<?php echo $directory; ?>/images/os-theme/tooltip_triangle.png" class="tooltip-triangle">
									<?php print render($content['field_tier_2_source_tooltip_1']); ?>
								</div>
							</div>
						</div> <!-- end fact source container -->
					</td>
				</tr>
			</table>
		</div><!-- End Fact -->

		<div class="video-section">
			<?php print render($content['group_tier_2_print']); ?>			
		</div><!--end video and blurb -->

	</div><!-- end tier 2 container -->

	<div class="learn-more">
		<a href="#tier-3">Complete Solutions<img src="/<?php echo $directory; ?>/images/os-theme/learn-more-arrow.png"></a>
	</div>

</div><!-- end tier 2 -->


<div id="tier-3" class="section">
		<div class="tier-3-container">
			<?php print render($content['group_tier_3_print']); ?>	






 

				<div class="tier-3-icon">
					<img src="<?php
						$url = file_create_url($node->field_tier_3_diagram_desktop['und']['0']['uri']);
						$url = parse_url($url);
						$path = $url['path'];
						echo $path;
					?>" alt="Our sustainable layered approach" class="tier-3-diagram">
					<img src="<?php
						$urlMobile = file_create_url($node->field_tier_3_diagram_mobile['und']['0']['uri']);
						$urlMobile = parse_url($urlMobile);
						$pathMobile = $urlMobile['path'];
						echo $pathMobile;
					?>" alt="Our sustainable layered approach" class="tier-3-diagram-mobile">
	
					<ul class="diagram-links">
						<li><a href="<?php print $node->field_tier_3_diagram_link_1['und'][0]['value'];?>"></a></li>
						<li><a href="<?php print $node->field_tier_3_diagram_link_1['und'][1]['value'];?>"></a></li>
						<li><a href="<?php print $node->field_tier_3_diagram_link_1['und'][2]['value'];?>"></a></li>												
					</ul>

				</div>


		</div><!-- end tier 3 container -->

	<div class="learn-more">
		<a href="#tier-4">Leadership<img src="/<?php echo $directory; ?>/images/os-theme/learn-more-arrow.png"></a>
	</div>

</div><!-- end tier 3-->

<div id="tier-4" class="section">
	<div class="tier-4-container">

		<?php print render($content['group_tier_4_print']); ?>

		<?php //print render($content['field_tier_4_slideshow_view']); ?>


		<div class="tier-4-view-slider">
			<ul class="slides">
				<li>
					<div class="center-content">
						<?php
						$viewName = 'tier_4_homepage_view_new';
						$viewSub = 'block';
						print views_embed_view($viewName, $viewSub);
						?>
					</div>
				</li>
				<li>
					<div class="center-content">
						<?php
						//$viewName1 = 'tier_4_homepage_view';
						$viewSub1 = 'block_1';
						print views_embed_view($viewName, $viewSub1);
						?>

					</div>
				</li>
				<li>
					<div class="center-content">
						<?php
						//$viewName2 = 'tier_4_homepage_view';
						$viewSub2 = 'block_2';
						print views_embed_view($viewName, $viewSub2);
						?>
					</div>
				</li>
				<li>
					<div class="center-content">
						<?php
						//$viewName3 = 'tier_4_homepage_view';
						$viewSub3 = 'block_3';
						print views_embed_view($viewName, $viewSub3);
						?>
					</div>
				</li>




			 
			</ul>
		</div>



	</div> <!-- end tier 4 container -->

	<div class="learn-more">
		<a href="#tier-5">Contact Us<img src="/<?php echo $directory; ?>/images/os-theme/learn-more-arrow.png"></a>
	</div>

</div><!-- end tier 4-->

<div id="tier-5" class="section">
	<div class="tier-5-container">
		
	<?php print render($content['group_tier_5_print']); ?>

		  <?php  if ($homepage_webform): ?>
          <div class="homepage-webform">
            <?php  print render($homepage_webform); ?>
          </div> 
        <?php  endif; ?>


	</div><!-- end tier 5 container -->


</div><!-- end tier 5 -->

<div class="background-cck-upload tier-2-background-upload"><?php print render($content['field_tier_2_background_image']); ?></div>
<div class="background-cck-upload tier-4-background-upload"><?php print render($content['field_tier_4_background_image']); ?></div>
</article>
 

 