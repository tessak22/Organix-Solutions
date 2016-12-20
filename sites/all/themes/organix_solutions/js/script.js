/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {


if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };


// global variable - xx				
var fireOnceEver;

/*
if(!$.cookie('popup')){
    console.log('cookie!');
    $.cookie("popup", 1, {expires: 0.0006, path: '/'});
}
*/


// all inside pages - adding float class to images in order to pad them --x all inside pages -- articles
$('article.node .field-name-body img').addClass(
  function(){
        var floated = $(this).css('float');
        return floated ? 'img-float-' + floated : '';	
    }
);


// putting service links at the end of the article so they will display properly. --x inside all articles
$('#block-service-links-service-links').appendTo('.link-containers');


// some css for a link to be able to style it --x inside all pages -- articles 
$('.orange-video-link').parent('a').addClass('orange-video-parent');

// FAQ functionality --x faq page
$('#faq h3').each(function() {
	$(this).addClass('rocko');
	var tis = $(this), state = false, answer = tis.next('div').hide().css('height','auto').slideUp();
	tis.click(function() {
		state = !state;
		answer.slideToggle(state);
		tis.toggleClass('active',state);
	});
});


//adding page type from bean module to page element as a class in order to style the region highlighred menu - Interior Page with headers --x inside pages -- specific
if ($('.region-highlighted .field-type-taxonomy-term-reference a').html()) {
	var str = $('.region-highlighted .field-type-taxonomy-term-reference a').html();
	var classStr = str.replace(/\s+/g, '-').toLowerCase();
	$('#page').addClass(classStr);
}

// global -- adding selection box styling --x all pages -- forms
$('#edit-field-tags-tid').selectionBox();
$('#edit-field-successstory-categories-tid').selectionBox();
$('.form-select').selectionBox();


//adding lightbox functionalty to the success story images - Interior Page -- Success story -- lightbox - xx
/* success click */
var fireOnce;
$('.views-field-field-success-story-image img').click(function(){
	var placeholder = $(this).height();

	if (fireOnce!=1) { // so many more lightbox-bkrd elements don't get placed in the dom.
		$('body').prepend('<div class="lightbox-bkrd"><img src="'+$(this).attr('src')+'" class="lightbox-img"></div>');
		$('.lightbox-img').css('margin-left',-($('.lightbox-img').width() / 2)+'px');
		$('.lightbox-img').css('margin-top',-($('.lightbox-img').height() / 2)+'px');
		$('.lightbox-bkrd').animate({opacity:1},'fast');
	}
	fireOnce = 1;	
});
/* end success click */


/* close lightbox click */ // this function should be repeated by a function ? --x inside pages -- blog / success
$('.lightbox-bkrd').live("click",function(e){
	e.preventDefault();
	$('.lightbox-bkrd').animate({opacity:0},'fast',function(){
		$('.lightbox-bkrd').removeAttr('style').remove();
	})
	fireOnce = 0;
});
/* end close lightbox click */

/* close lightbox click -- touch event  */ // this function should be repeated by a function ? --x inside pages -- blog / success
$('.lightbox-bkrd').live("touchstart",function(e){
	e.preventDefault();
	$('.lightbox-bkrd').animate({opacity:0},'fast',function(){
		$('.lightbox-bkrd').removeAttr('style').remove();
	})
	fireOnce = 0;
});
/* end close lightbox click -- touch event */



// this is similar to the video -- lightbox for success story image --x success story page 
$('.success-story-lightbox img').click(function(){
	var placeholder = $(this).height();
	if (fireOnce!=1) { // so many more lightbox-bkrd elements don't get placed in the dom.
		$('body').prepend('<div class="lightbox-bkrd"><img src="'+$(this).attr('src')+'" class="lightbox-img"></div>');
		$('.lightbox-img').css('margin-left',-($('.lightbox-img').width() / 2)+'px');
		$('.lightbox-img').css('margin-top',-($('.lightbox-img').height() / 2)+'px');
		$('.lightbox-bkrd').animate({opacity:1},'fast');
	}
	fireOnce = 1;	
});
// SUCCESS STORIES VIDEO LIGHTBOX --x success story page



// menu clipping --x all pages -- menu

if (fireOnceEver != 5 && $(window).width() > 979 && !$('#block-system-main-menu').hasClass('wrapped')) { 
	console.log('fired once ever');
	fireOnceEver = 5;
	$('#block-system-main-menu').addClass('wrapped');
	$('#block-system-main-menu ul.menu li ul').each(function(){
		$(this).wrap('<div class="sub-menu-clip"></div>');
		var ulHeight = $(this).outerHeight(true);
		var ulWidth = $(this).outerWidth(true);
		$(this).parent('.sub-menu-clip').css({
			'height': ulHeight * 1.05 + 'px',
			'width' : ulWidth * 1.15 +  'px'
		}).wrap('<div class="clip-position"></div>');
	});
}



// touch event for mobile menu --x all pages -- menu
$('#block-system-main-menu ul.menu').first().children('li').children('a').bind(" touchstart",function(e){//.click(function(e){
	e.preventDefault();
	if ($(this).parent('li').hasClass('clickable')) {
		window.location = $(this).attr('href');
	}
	$(this).parent('li').siblings('li').removeClass('clickable');
	$(this).parent('li').addClass('clickable');
});



$('#block-system-main-menu ul.menu').first().children('li').children('a')

//$('.social-footer').on("click",function(e){e.preventDefault();alert('momentary alert')})



// --x Form Comments -- all comment sections
var $comments = $('#comments');

// if comments are there, add them after service links
if (jQuery.contains(document, $comments[0])) {
	$('#comments').insertAfter($('#block-service-links-service-links'));
}

// if page has both tags, add both-tags to body for extra css styling
var $fieldTags = $('.field-name-field-tags');
var $blogCategories = $('.field-name-field-blog-category');
if (jQuery.contains(document, $fieldTags[0]) && jQuery.contains(document, $blogCategories[0])) {
	$('#page').addClass('both-tags');
}




// Blog Image - Lightbox Popup --x blog page
// more caching of vars? Simplifying? 
$('.blog-image-field img').click(function(){	
	var placeholder = $(this).height();
	if (fireOnce!=1) { // so many more lightbox-bkrd elements don't get placed in the dom.
		$('body').prepend('<div class="lightbox-bkrd"><img src="'+$(this).attr('src')+'" class="lightbox-img"></div>');
		$('.lightbox-img').css('margin-left',-($('.lightbox-img').width() / 2)+'px');
		$('.lightbox-img').css('margin-top',-($('.lightbox-img').height() / 2)+'px');		
		/*alert('margin left: ' + $('.lightbox-img').css('margin-left',-($('.lightbox-img').width() / 2)+'px') + ' : ' +
		' Margin top: ' + $('.lightbox-img').css('margin-top',-($('.lightbox-img').height() / 2)+'px') + ' : : width ' + $('.lightbox-img').width()
		+ ' -- height: '+$('.lightbox-img').height());*/
		setTimeout(function(){
			$(window).resize(); // resize function makes sure that the image stays centered with mobile and smaller sizes
			$('.lightbox-bkrd').animate({opacity:1},'fast');
		}, 250);;
	}
	fireOnce = 1;	
});
	 





// blog - hide image if no source --x blog page
$('img[src=""]').hide();


// youtube popup --x blog page 
$('.youtube-image-field').click(function(){
	var videoClone = $(this).parent().parent().siblings('.views-field.views-field-field-featured-video').clone().addClass('cloned-youtube');
	var placeholder = $(this).height();
	if (fireOnce!=1) { // so many more lightbox-bkrd elements don't get placed in the dom.
		$('body').prepend('<div class="lightbox-bkrd"></div>');
		$('.lightbox-bkrd').append(videoClone).css('display','block');
		videoClone.css('margin-left',-(videoClone.width() / 2)+'px');
		videoClone.css('margin-top',-(videoClone.height() / 2)+'px');
		$('.lightbox-bkrd').animate({opacity:1},'fast');
		//resize for mobile
		$(window).resize();
	}
	fireOnce = 1;	
});

// blog and success story resize for sizing --x blog page -- success
$(window).resize(function(){
	var flexVideo = $('.cloned-youtube');
	$('.cloned-youtube iframe').css('max-width',$(window).width() * 0.9 +'px');
	flexVideo.css('margin-left',-(flexVideo.width() / 2)+'px');
	flexVideo.css('margin-top',-(flexVideo.height() / 2)+'px');
	$('.lightbox-img').css('max-width',$(window).width() * 0.9 +'px');
	$('.lightbox-img').css('margin-left',-($('.lightbox-img').width() / 2)+'px');
	$('.lightbox-img').css('margin-top',-($('.lightbox-img').height() / 2)+'px');
});


// masonry for success stories -- interior page --x success stories
var $container = $('.view-success-stories .view-content');
//masonry  // cache more?
$(window).load(function(){
	if ($(window).width() > 980) {	
		$container.masonry({
			itemSelector: '.views-row',
			"gutter": 20
		});
		$('.view-blog-stories .view-content').masonry({
			itemSelector: '.views-row',
			"gutter": 20
		});
		$('.view-id-taxonomy_term .view-content').masonry({
			itemSelector: '.views-row',
			"gutter": 20
		});
		var msnry = $container.data('masonry'); 
		$container.animate({opacity:1}, 'fast');
	}
});



// reloading masonry when success story is clicked --x success stories
$('.view-success-stories .pager-load-more a').click(function(){
	console.log('click');
	var intervaltoStop = setInterval(function(){ 
		$container.masonry({itemSelector: '.views-row' }).masonry('reloadItems'); console.log('interval') }, 300);
	setTimeout(function(){
		clearInterval(intervaltoStop)}, 4000);
});


// reloading masonry when blog more is pressed via ajax --x blog
$('.view-blog-stories .pager-load-more a').click(function(){
	console.log('click'); 
	var intervaltoStop = setInterval(function(){ 
		$('.view-blog-stories .view-content').masonry({itemSelector: '.views-row' }).masonry('reloadItems'); console.log('interval') }, 300);
	setTimeout(function(){
		clearInterval(intervaltoStop)}, 4000);	
});

// reload masonry when the filter button is pressed --x success stories
$('#edit-submit-success-stories').click(function(){
	console.log('click');
	var intervaltoStop = setInterval(function(){ 
		$('.view-content').masonry({
			itemSelector: '.views-row',
			"gutter": 20
		}); 
		console.log('interval')
	}, 300);
	setTimeout(function(){
		clearInterval(intervaltoStop)
	}, 4000);	
});






// front page -- 
// Place your code here.
// getting blurb value first
		var origBlurbContent = $('.field-name-field-tier-1-blurb1 p').html();


		// adding classes slide for flexslider functionality --x front page
		$('.tier-1-background-images .item-list').attr('id','tier-1-bkrd');
		$('.icon-flex-1 .item-list').attr('id','tier-1-icon');
		$('#tier-1-bkrd ul').addClass('slides');
		$('#tier-1-icon ul').addClass('slides');

		// tabbed page, prepending the image to the document page
		$('.field-name-field-background-image').insertBefore('#content');

		// making the background the same size as the background iamge 
		$(window).load(function(){
			var bkrdHeaderHeight = $('.field-name-field-background-image .field-item img').height(); 	
			$('body.not-front .region-highlighted .block-bean').css('height',bkrdHeaderHeight+'px');
			$('body.not-front .field-name-field-background-image').css('height',bkrdHeaderHeight+'px');
		});



		/**  Movint the background to the top per design. XX MUST REVERT XX
		*
		* LIGHT STRUCTURAL CHANGES FOUND WHILE DOING MOBILE TO DESKTOP JS
		**/
		$('#tier-1-bkrd').prependTo('.tier-1-container');
		$('.source').appendTo('.fact-source-wrapper .field-name-field-tier-2-fact .field-item');





		$('#block-views-success-stories-block-block-1 .views-row').eq(1).addClass('hide-view');

		// adding classes to interior page bottom blocks 
		var blockCount = 1;

		//creating object of class and url to push to array to search later from the block
		var iconObj = {};
		var iconList = [];
		$('.view-icon-list .views-row').each(function(){
			var findIcon = $(this).children('.views-field-field-icon-class').children('.field-content').html();
			var iconUrl = $(this).children('.views-field-field-icon').children('.field-content').children('img').attr('src');
			iconObj = {
				classRelay : findIcon,
				urlRelay : iconUrl
			}
			iconList.push(iconObj);
		});
		//console.log(iconList)


		//looping through interior bottom blocks
		$('.interior-bottom-thirds .block').each(function(){
			$(this).addClass('child-'+blockCount);
			blockCount +=1;
			var thisBlock = $(this);
			for (var i = 0; i< iconList.length; i++) {
				//console.log(iconList[i].classRelay);
				if (thisBlock.hasClass( iconList[i].classRelay )) {
					//alert('found one!');
					thisBlock.children('.block-title').css('background','url('+iconList[i].urlRelay+') no-repeat left');
				}
			}
	
		});

		// interior page icons to be content managed
		/*var bottomIcon1 = $('.field-name-field-icon-1 img').attr('src');
		var bottomIcon2 = $('.field-name-field-icon-2 img').attr('src');
		var bottomIcon3 = $('.field-name-field-icon-3 img').attr('src');

		$('.child-1 .block-title').css('background','url('+bottomIcon1+') no-repeat left');
		$('.child-2 .block-title').css('background','url('+bottomIcon2+') no-repeat left');
		$('.child-3 .block-title').css('background','url('+bottomIcon3+') no-repeat left');

*/



$('#tier-1-icon').flexslider({
			 animation: "slide",
             asNavFor: "#tier-1-bkrd",
             animationLoop: true,
             itemWidth: 1,
             itemMargin: 0,
             	pauseOnAction: false,
             	touch: false, 
             	after: function(slider){ 
				    slider.pause(); 
				    slider.play(); 
				}
             
		});


		$('#tier-1-bkrd').flexslider({
				animation: "fade",
				controlsContainer: ".flex-control-custom",
				startAt: 0,
				slideshow:true, //xyz
				sync: "#tier-1-icon",

             	//slideshowSpeed: 1000,
             	after: function(slider){ 
				    slider.pause(); 
				    slider.play(); 
				}
		});
		// placing controls in custom box for display purposes
		$('.flex-control-custom .flex-prev').appendTo('.flex-prev-custom').html(' ');
		$('.flex-control-custom .flex-next').appendTo('.flex-next-custom').html(' ');

		//$(window).load(function(){$('#edit-submit').css('display','none')});;//.attr('value','\\f000')});// .addClass('fa-search fa');});
		
		// activate the plugin to style the select box.
		$('.select-tier-1').selectionBox();
		$('.tier-5-container select').selectionBox();
		$('.page-node-41 select').selectionBox();

	      // send to url selected by list
			$('.select-button').click(function(){
  				//window.location = 'index.php';
  				//var thisVal = $('.select-tier-1').val();
				
			//	if (thisVal !== 'none'|| ) {
			//		window.location = thisVal;
			//	}

			//$(this).siblings().children('.options').toggle();
			});
		


			// fade search button in on click
			$('.search-button-custom').click(function(){
				$('.header-search input').not('#edit-submit').fadeToggle('fast');
			}); 
		

			// fade in our partners on click.
			$('#our-partners img').once().click(function(){
				//$('.our-partners').slideToggle().css('display','inline-block');
				//$('#our-partners .our-partners').toggleClass('partners-toggle');
				if (!$('#our-partners .our-partners').hasClass('partners-toggle')) {
					$('#our-partners .our-partners').addClass('partners-toggle').css('display','inline-block').animate({opacity:1});
					
				}
				else {
					$('#our-partners .our-partners').animate({opacity:0}, function(){
						$('#our-partners .our-partners').removeClass('partners-toggle').css('display','none');
					});	
				}
			});
//	});





			// when you click on any of the three images, the alt tag will act as its href
			// xyz
			

			$('#tier-1-icon .slides li img').click(function(){
				var newHref = $(this).attr('alt');
				window.location = newHref;
			});






			var sourceOpen = 0;





			// show source when hovered over (tooltip)
			$('.source').addClass('sourcehover');
			$('.source').bind(" touchstart",function(){
				$(this).removeClass('sourcehover');

				if (sourceOpen === 0 ){
					sourceOpen = 1;

					$('.tooltip').addClass('show-tooltip');
				} else if (sourceOpen === 1){
					sourceOpen = 0;
					$('.tooltip').removeClass('show-tooltip');
				}
			});

		
			$(document).bind("touchstart",function(e){		
					if(!$(e.target).is('.source')){
						sourceOpen = 0;
						$('.tooltip').removeClass('show-tooltip');
						//alert(sourceOpen);
					}

		 	});


			$('.sourcehover').hover(function(){
					$('.tooltip').addClass('show-tooltip');			
				},function(){
					$('.tooltip').removeClass('show-tooltip');		
			});
		
			

	



			//tier 4 view slider

			var removeThisDot;
			var removeThese = [];
			//removing un-used slides
			$('.tier-4-view-slider ul.slides li').each(function(){
				if ($(this).find('.field-content').text().length < 10) {
					//this index to remove cooresponding dot below
					removeThisDot = $(this).index();
					removeThese.push(removeThisDot);
					console.log(removeThisDot + ' remove this dot');
				}

			});


			$('body.front .tier-4-view-slider').flexslider({
				 animation: "slide",
				 touch: false
			});


			//$('body.front .tier-4-view-slider').data('flexslider').removeSlide(removeThisDot);
			console.log(removeThese.length + 'remove length');
			for (i=0;i<removeThese.length;i++) {
				console.log(removeThese[i] + ' - this i');
				console.log(removeThese + ' - this array');
				$('body.front .tier-4-view-slider').data('flexslider').removeSlide(removeThese[i]);
			}




			// Smooth scroll to spot
			var headerHeight = $('#navigation').height();
			  $('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top - headerHeight
			        }, 1000);
			        return false;
			      }
			    }
			  });
		 




			  //cache original URLs
			  var srcNum = 0;
			  $('#tier-1-bkrd li').each(function(){
			  	var thisSrc = $(this).children('img').attr('src');
			  	$(this).children('img').attr('data-desktop-url',thisSrc);
			  	var mobileSrc = $('.hidden-slide-url .field-item').eq(srcNum).html();
		  		$(this).children('img').attr('data-mobile-url',mobileSrc);
			  	srcNum +=1;
			  });





//////
////// FRONT PAGE 
//////



//////
////// Interior PAGE 
//////



	// turning tabbed menu into tiny nav menu --x all interior pages
	$('.region-highlighted .menu').tinyNav({
		active: 'selected', // String: Set the "active" class
	});
	$('.tinynav').val($('.tinynav option:first').val());
	



	// tinynav applied to the 'how can we partner with you page' --x interior page -- partner page
	$('.select-container .links.main-menu').tinyNav({
		active:'selected',
	});


	var linkIsActive = false;
	$('.tinynav').selectionBox();
	$('body.front #tinynav1').change(function(e){
//		alert('changed');
		 //window.stop();
		// window.frames[0].document.execCommand('Stop');
		 	if (navigator.appName == 'Microsoft Internet Explorer') {
			  document.execCommand('Stop');
			  
			} else {
				window.stop()	
			}

		 setTimeout(function(){
		 	
		 	
		 	if (navigator.appName == 'Microsoft Internet Explorer') {
			  document.execCommand('Stop');
			} else {
				window.stop()	
			}

window.execCommand('Stop');
		 }, 50);
		 linkIsActive = true;
	 });

	 $('.select-button').click(function(){
	 	if (linkIsActive === true) {
	 		window.location.href = $('#tinynav1 option:selected').val();
	 	}
	 });



//XXXX
//XXXX Interior PAGE 
//XXXX





//////
////// Mobile Nav 
//////




//XXXX
//XXXX Mobile Nav 
//XXXX


	// open and close of mobile nav --x Mobile Nav Construction
	$('.hamburger-nav').once().click(function(){
		$('#mobile-menu').slideToggle().toggleClass('reset-position');
		//$('html').css({'overflow':'hidden','position':'relative' });
		//$('body').css({'position':'fixed'});
		
		 //$(window).unbind('scroll');
		var stickyHeight =  $(window).scrollTop();
		
		//opening menu
		if ($('#mobile-menu').hasClass('reset-position')){$('#mobile-menu #block-menu-menu-mobile-menu').css('right','0');
			$('#mobile-menu .close-menu .back').removeClass('active-back').removeAttr('style');
			rightMultiplier = 0;
			$('body').css({'position':'fixed', 'top':-stickyHeight+'px'});
			console.log('opening');
			$('ul').removeClass('active-menu');
			$('#block-menu-menu-mobile-menu ul').first().addClass('active-ul');

			// check height to add overflow sub menu
			if ($('.active-ul').height() > window.innerHeight - 155) {//window.screen.availHeight - 135) {
				console.log('overflow-menu');
				$('.active-ul').addClass('overflow-sub-menu');

			} else {
				console.log(window.innerHeight  - 155 + 'avail height, ' + $('.active-ul').height() + 'this height')
			}

			// adding max height back in after checking for overflow.
			$('.active-ul').css('max-height',$(window).innerHeight() - 146 + 'px');

		} else {
			var scrollTo = parseInt($('body').css('top'), 10);
			
			$('body').css({'position':'inherit', 'top':'auto'});
			$(window).scrollTop(0 - scrollTo);
			//alert(0 - scrollTo);
		}



	});


	$('.close-x').once().click(function(){
		$('body').css({'position':'inherit'});
		$('#mobile-menu').slideUp(function(){
			$('#mobile-menu #block-menu-menu-mobile-menu').css('right','0');
			$('#mobile-menu').removeClass('reset-position');
			$('#mobile-menu .close-menu .back').removeClass('active-back').removeAttr('style');
			rightMultiplier = 0;
		});

		$(window).unbind('scroll');

	});










	// setting current value to the first menu item
	



		

			  var mobileRightIndex;
			  var rightMultiplier = 0;
			  var tier1Margin = parseInt($('.field-name-field-tier-1-blurb1').css('margin-top'), 10);
			  var state = 'desktop';
			  var iconsDesktop = [];
			  $(window).resize(function(){

		  		// tier 4 slider height 
				var tallestLi = 0;
		  		if ($(window).width() < 980) {
		  			$('.tier-4-view-slider .slides li').each(function(){
			  			if ($(this).children('.center-content').height() > tallestLi) {
			  				tallestLi = $(this).children('.center-content').height();
						}
						$('.tier-4-view-slider .slides li').css('height',tallestLi + 40 + 'px');
						// console.log(tallestLi);
			  		});
	  			} else if ($(window).width() >= 980) {
	  				$('.tier-4-view-slider .slides li').css('height','250px');
	  			}


			  	// setting max-height for the mobile menu to 
				var $mobileMenu = $('#mobile-menu #block-menu-menu-mobile-menu ul.menu li ul');
							  	// this needs to be fired on click to show menu.
 
				// xyz overflow issue xyz xyz thnx  first issue
				$mobileMenu.css('max-height',$(window).innerHeight() - 166 + 'px'); //thisSiblingUL.css('max-height',window.screen.availHeight - 134 + 'px');
				$mobileMenu.css('max-width',$(window).width() - 53 + 'px');
				//console.log($(window).height());
				//$('.back').html($mobileMenu.css('max-height') + ' --1,' + ($(window).height() - 166) + 'wh' + (window.screen.availHeight - 166) +'wav, ');// + document.documentElement.clientHeight + 'Client ');



			  	// making sure the right index of the mobile menu stays in teh correct place on resize
			  	
			  	if ($('#mobile-menu #block-menu-menu-mobile-menu').css('right') != '0px'){$('#mobile-menu #block-menu-menu-mobile-menu').css('right', mobileRightIndex + (( $(window).width() * rightMultiplier  )- mobileRightIndex) + 'px')}

				var greenHeight = $('.field-name-field-partner-blurb').outerHeight(true);
			  	$('.green_bkrd').css('height',greenHeight+'px');


				// fire once each

			  	if ($(window).width() < 980) {

			  	
					$('#tier-1-bkrd .slides li').each(function(){
			  			var mobileUrl = $(this).children('img').data('mobile-url');
			  			$(this).children('img').attr('src',mobileUrl);
			  		});
			  		
			  		var contactMobileLink = $('#header-contact a').data('mobile-link');
			  		$('#header-contact a').attr('href',contactMobileLink);
					


			  	}
			    if ($(window).width() >=980 ) {	
			    	var contactDesktopLink = $('#header-contact a').data('desktop-link');
			  		$('#header-contact a').attr('href',contactDesktopLink);




			    	$('.homepage-webform ul.options').css('width','inherit')

			  		$('#tier-1-bkrd .slides li').each(function(){
			  			var deskUrl = $(this).children('img').data('desktop-url');
			  			$(this).children('img').attr('src',deskUrl);
			  		});
			    
			    }

// fire once each

			  	// Need things to fire once, and things to fire all ways~!!!@#$!@LK#$J 
			  	// 
			  	//
			  	//
			  	// Important!!! Important!!!
			  	//

			// Page Background for the header, offsetting it by half so it stays in the middle
		 var headerBkrdWidth = ( $('.field-name-field-background-image img').width() )/ 2;
		 	$('.field-name-field-background-image img').css({'margin-left':-headerBkrdWidth+'px','left':'50%','opacity':'1'});
		 	




			  	var windowWidth = $(window).width();
			  	if (windowWidth <= 980 ){



			  		$('#tier-1-icon').flexslider({
			             itemWidth: 83
					});




			  		$('#tier-1-bkrd').css({'margin-left':'0'});
			  		// setting the value of the blurb based on size
			  		$('.field-name-field-tier-1-blurb1 p').html($('.hidden-blurb').html());


		  			var optionsWidth;
		  			$('.homepage-webform ul.options').each(function(){
		  				optionsWidth = $(this).parent().width();
		  				$(this).css('width',optionsWidth+1+'px');
		  			});

					// this varies per size of blurb so will fire constantly on resize
					var tier1blurb = $('#tier-1 .field-name-field-tier-1-blurb1 ');
					var tier1blurbHeight = tier1blurb.outerHeight();
					tier1blurb.css('margin-top',-tier1blurbHeight+'px');
	
					// Setting video height in tier 2 to keep the ratio
					var iframeWidth = $('.video-section iframe').width()
					//console.log(iframeWidth);
					var iframeHeight = iframeWidth * 0.74;
					$('.video-section iframe').css('height',iframeHeight + 'px');

					// resizing leadership view area 
			  		var leadershipWidth = $('.tier-4-container').width();
			  		$('.tier-4-view-slider, .tier-4-view-slider li').css('width',windowWidth + 'px');




					// fire once on state change events
					if (state === 'desktop') {
			  		state='mobile';	

			  			$('.view-success-stories .view-content').masonry('destroy');
						$('.view-blog-stories .view-content').masonry('destroy');
						$('.view-id-taxonomy_term .view-content').masonry('destroy');
							


			  		//console.log('changed to ' + state); - changed to mobile
			  		$('.section').removeAttr('style');


			  		// xy xy xyz
			  		// home page JS. making the file upload of the background images the cck image upload
					$('#tier-2').css({
						'background': 'url('+$(".tier-2-background-upload .field-item").html() + ') no-repeat top center',
						'background-size':'cover'
					 });

					$('#tier-4').css({
						'background': 'url('+$(".tier-4-background-upload .field-item").html() + ') no-repeat top center',
						'background-size':'cover'
					 });





			  	
					// This is to change the icons to their mobile forms in the top section. XX MUST REVERT XX
					var count = 0;
					
					var iconsMobile;

					$('#tier-1-icon .slides li').each(function(){
						
						iconsMobile = $('.views-field-field-tier-1-mobile-icons ul li').eq(count).html();
						iconsDesktop.push($(this).children().children('img').attr('src'));
						$(this).children().children('img').attr('src',iconsMobile);	
						//console.log(iconsMobile + ' : ' + count);
						count = count + 1;

					});
					//$('.views-field-field-tier-1-mobile-icons');
					
					} // End fire once event 'if desktop' change


			  	}


			  	//making sections 100% of window height;
				//$(window).resize(function(){


					/////////
					//				End Less Than 980px. Start of Greater Than.
					/////////
					


				else if (windowWidth >= 980) {


					// setting the value of the blurb based on size
			  		$('.field-name-field-tier-1-blurb1 p').html(origBlurbContent);


			  		$('#tier-1-icon').flexslider({
			             itemWidth: 189
					});


					// centering 
		 	//var vertCenter = ($('#tier-1-bkrd .first img').height() - $(window).height() - $('#navigation').height())/ 2;
		 	//var horizCenter = ($('#tier-1-bkrd .first img').width() - $(window).width()) / 2;
		 	//console.log(vertCenter);
		 	//$('#tier-1-bkrd').css({'margin-top':-vertCenter+'px','margin-left':-horizCenter+'px'});
		 	//$('#tier-1-bkrd').css({'margin-left':-horizCenter+'px'});

		 	var tier1Height = $('#tier-1').height();
		 	//console.log(tier1Height);
		 	var adjustedHeight = ( tier1Height - parseInt($('#tier-1').css('min-height'),10) ) / 4;
		 	//console.log(adjustedHeight + ' : ' + tier1Margin );
		 	//console.log();
			

		 	// load fix
			$('.field-name-field-tier-1-blurb1').css('margin-top',tier1Margin + adjustedHeight + 'px');






					var headerHeight = $('#navigation').height();
					var viewHeight = $(window).height() - headerHeight ;
					var windowHeight = $(window).height();
					$('.section').css('height',viewHeight+'px');
					//$('#tier-1.section').css('height',windowHeight+'px');


					if (state==='mobile'){
					state='desktop';


					// masonry resize, follow view-blog-stories
			  		$('.view-success-stories .view-content').masonry({
					  //columnWidth: 200,
					  itemSelector: '.views-row',
					  "gutter": 20
					});

			  		$('.view-blog-stories .view-content').masonry({
					  //columnWidth: 200,
					  itemSelector: '.views-row',
					  "gutter": 20
					});

					$('.view-id-taxonomy_term .view-content').masonry({
					  //columnWidth: 200,
					  itemSelector: '.views-row',
					  "gutter": 20
					});



							if (fireOnceEver != 5) { 
								console.log('fired once ever - x ');
								console.log('fired once ever - replicate');
								fireOnceEver = 5;
								$('#block-system-main-menu').addClass('wrapped');
								$('#block-system-main-menu ul.menu li ul').each(function(){
									$(this).wrap('<div class="sub-menu-clip"></div>');
									var ulHeight = $(this).outerHeight(true);
									var ulWidth = $(this).outerWidth(true);
									$(this).parent('.sub-menu-clip').css({
										'height': ulHeight * 1.05 + 'px',
										'width' : ulWidth * 1.15 +  'px'
									}).wrap('<div class="clip-position"></div>');
								});



							}


					
						console.log('changed to desktop');
						$('#tier-1 .field-name-field-tier-1-blurb1').removeAttr('style');


						count=0;
						$('#tier-1-icon .slides li').each(function(){
						
							iconsMobile = $('.views-field-field-tier-1-mobile-icons ul li').eq(count).html();
							$(this).children().children('img').attr('src',iconsDesktop[count]);	
							console.log(iconsDesktop[count] + ' : ' + count); // icons desktop
							count = count + 1;

						});

						$('.video-section iframe').removeAttr('style');


					}// end fire once for change to desktop



				}
				//});
			//	$(window).resize();
//




			  });

			  $(window).resize();



			  //scroll function
			  var logo = 'higherThan';
			$(window).scroll(function(){
		  		var docScrollTop = $(window).scrollTop();
			  //	console.log(docScrollTop);

			  	// detecting / changing the logo based on if it is higher or lower than the first tier.
			  	if (docScrollTop > $('#tier-1.section').height() - $('#navigation').height() && logo === 'higherThan' && $('body').hasClass('front')) {
			  		logo='lowerThan';
			  		$('.scroll-down-logo').fadeIn('slow', 'linear');
			  		$('.header-search .search-button-custom').addClass('search-lower');
			  		$('.to-top').fadeIn('slow');
			  	}
			  	else if (docScrollTop <= $('#tier-1.section').height()  - $('#navigation').height() && logo === 'lowerThan' && $('body').hasClass('front')){
			  		logo='higherThan';
			  		$('.scroll-down-logo').fadeOut('slow', 'linear');
			  		$('.header-search .search-button-custom').removeClass('search-lower');
			  		$('.to-top').fadeOut('slow');
			  	}


			  	if (docScrollTop > 400 && logo === 'higherThan' && $('body').hasClass('not-front')) {
			  		logo='lowerThan';
			  		$('.scroll-down-logo').fadeIn('slow', 'linear');
			  		$('.header-search .search-button-custom').addClass('search-lower');
			  		$('.to-top').fadeIn('slow');
			  	}
			  	else if (docScrollTop <= 400 && logo === 'lowerThan' && $('body').hasClass('not-front')){
			  		logo='higherThan';
			  		$('.scroll-down-logo').fadeOut('slow', 'linear');
			  		$('.header-search .search-button-custom').removeClass('search-lower');
			  		$('.to-top').fadeOut('slow');
			  	}


			});//end scroll function



			// when to top button is clicked, bring user to the top of the page.
			$('.to-top').click(function(){
				$('html,body').animate({scrollTop:0}, 1000);
			});
			var mobileMenu = $('#mobile-menu #block-menu-menu-mobile-menu');
			mobileMenu.css('right','0%');

//			var parentMenu;
			//mobile menu, on expanded click, move screen/menu to right
			//if($(window).width() < 980 ){
					
					//var wWidth = 
					//var menuPosition = 0;
				//console.log('prevent default');
				$('#mobile-menu .expanded a').once().click(function(e){
					e.preventDefault();
					//menuPosition = menuPosition + wWidth;	
					//console.log(menuPosition);
					//console.log($(this));

					
					// start if
					if ($(this).parent().hasClass('expanded')) {
						var thisSiblingUL = $(this).siblings('ul');
							//alert(thisSiblingUL.height());
						$('ul').removeClass('overflow-sub-menu active-ul');
						thisSiblingUL.addClass('active-ul');
						console.log('firing');
						$('#mobile-menu #block-menu-menu-mobile-menu').animate({right: '+=' + $(window).width() + 'px'},
							function(){
								mobileRightIndex = parseInt($('#mobile-menu #block-menu-menu-mobile-menu').css('right'), 10);
								console.log(mobileRightIndex + ' new HTML');
								rightMultiplier +=1;
								console.log(rightMultiplier);
								//$('.back').html(mobileRightIndex);
								// removing the max-height in order to check for the items actual height, then adding the max height in below the if statement
								thisSiblingUL.css('max-height','900px');
								// if menu height is larger than window, set max height and 
								//alert(thisSiblingUL.height());
								

								// check height to add overflow sub menu
								if (thisSiblingUL.height() > window.innerHeight - 155) {//window.screen.availHeight - 135) {
									console.log('overflow-menu');
									thisSiblingUL.addClass('overflow-sub-menu');//.on('scroll',function(){
										//$('.back').html(thisSiblingUL.css('max-height') + '--X-' + (window.screen.height - 166) + 'h,' + (window.screen.availHeight - 166)+'wav,'+ (window.innerHeight - 166)+'ih');
										//thisSiblingUL.css('max-height', $(window).innerHeight() - 166 + 'px');
									//});
									//alert('larger');
									//thisSiblingUL.css('max-height',$(window).height() - 166 + 'px');
								} else {
									console.log(window.innerHeight  - 155 + 'avail height, ' + thisSiblingUL.height() + 'this height')
								}
								// adding max height back in after checking for overflow.
								thisSiblingUL.css('max-height',$(window).innerHeight() - 146 + 'px');
								//$('.back').html(thisSiblingUL.css('max-height') + '--2-' + (window.screen.height - 166) + 'h,' + (window.screen.availHeight - 166)+'wav,'+ ($(window).innerHeight() - 166)+'ih');
							}
						);//+= w  +'px'});//'+=' + $(window).width() + 'px'});
						
						//$('#mobile-menu ul li ul').css('display','none');
						$(this).parents('li').siblings('.expanded').each(function(){
							$(this).children('ul').first().css('display','none');
						});
						$(this).siblings('ul').css('display','block');
						$('.back').addClass('active-back');
						if (parseInt(mobileMenu.css('right'), 10) === 0) {
							$('#mobile-menu .close-menu .back').animate({opacity:1});
						}

		//				if ($('.back').style('attr','data-menu' ) {alert('rocksone')}



						// end conditional if
					}

					else {
						window.location.href=$(this).attr('href');
					}

				});
				// adding baack button functionality
				//$('.back').click(function(){
				//	$(this).addClass('active-back');
				//});
				$('.active-back').live("click", function(){ 
					var backCheck = parseInt(mobileMenu.css('right'), 10) - $(window).width();
					console.log(backCheck);
							
						//alert(thisSiblingUL.height());
						$('.active-ul').parent('li').parent('ul').addClass('new-active-menu');
						$('ul').removeClass('active-ul');
						$('.new-active-menu').addClass('active-ul').removeClass('new-active-menu');
					//alert('skurry!')console.log(parseInt(mobileMenu.css('right'), 10));
					if (backCheck === 0) {
						$('#mobile-menu .close-menu .back').removeClass('active-back').animate({opacity:0});
						//alert('scors');
					}
					
					$('#mobile-menu #block-menu-menu-mobile-menu').animate({right: '-=' + $(window).width() + 'px'},
						function(){
							mobileRightIndex = parseInt($('#mobile-menu #block-menu-menu-mobile-menu').css('right'), 10);
							console.log(mobileRightIndex);
							rightMultiplier -=1;
							console.log(rightMultiplier + 'html');
							
						});

						
						// check height to add overflow sub menu
						if ($('.active-ul').height() > window.innerHeight - 155) {//window.screen.availHeight - 135) {
							console.log('overflow-menu');
							$('.active-ul').addClass('overflow-sub-menu');

						} else {
							console.log(window.innerHeight  - 155 + 'avail height, ' + $('.active-ul').height() + 'this height')
						}

						// adding max height back in after checking for overflow.
						$('.active-ul').css('max-height',$(window).innerHeight() - 146 + 'px');

				}); // end click active back



$(window).resize(function(){	//expand header size if bean header is larger.
	if ($(window).width() < 980) {
	
		if (parseInt($('.field-name-field-background-image').css('min-height'), 10) < $('.bean-page-header').height() ){
			$('.field-name-field-background-image').css('min-height', $('.bean-page-header').height() + 10 + 'px');
		} else if (parseInt($('.field-name-field-background-image').css('min-height'), 10) > $('.bean-page-header').height() + 20) {$('.field-name-field-background-image').css('min-height','250px')}
//		$(window).load(function(){
		var bkrdHeaderHeight = $('.field-name-field-background-image .field-item img').height(); 	
		$('body.not-front .region-highlighted .block-bean').css('height',bkrdHeaderHeight+'px');
		$('body.not-front .field-name-field-background-image').css('height',bkrdHeaderHeight+'px');
//});
	} 
	if ($(window).width() > 980) {
		//$('body.not-front .region-highlighted .block-bean').removeAttr('style');
		//$('body.not-front .field-name-field-background-image').removeAttr('style');
	} 
});










    var minimized_elements = $('.view-id-tier_4_homepage_view_new.view-display-id-block .field-content');
    var minimize_character_count = 255;    

    minimized_elements.each(function(){    
        var t = $(this).text();        
        if(t.length < minimize_character_count ) return;

        $(this).html(
            t.slice(0,minimize_character_count )+'<span>... </span>' //<a href="#" class="more">More</a>'+
            //'<span style="display:none;">'+ t.slice(minimize_character_count ,t.length)+' <a href="#" class="less">Less</a></span>'
        );
        $('.facebook-read-more').show();
    }); 

    










$(window).resize();
//$(window).width()


/*html body.admin-menu {
margin-top: 0 !important;
}
$('html body.admin-menu').load(function(){

});
*/



								





$('#mobile-menu .expanded a').once().click(function(e){
					e.preventDefault();
				});

	$(document).ready(function(){
		
		if ($(window).width() > 980) {
			var tier1Height = $('#tier-1').height();
		 	//console.log(tier1Height);
		 	var adjustedHeight = ( tier1Height - parseInt($('#tier-1').css('min-height'),10) ) / 4;
		 	//console.log(adjustedHeight + ' : ' + tier1Margin );
		 	//console.log();
			$('.field-name-field-tier-1-blurb1').css('margin-top',tier1Margin + adjustedHeight + 'px');
		}

});





// home page JS. making the file upload of the background images the cck image upload
$('#tier-2').css({
	'background': 'url('+$(".tier-2-background-upload .field-item").html() + ') no-repeat top center',
	'background-size':'cover'
 });

$('#tier-4').css({
	'background': 'url('+$(".tier-4-background-upload .field-item").html() + ') no-repeat top center',
	'background-size':'cover'
 });




//$(function() {					
					//console.log('width check');
					
					
					$(window).load(function(){
						$('#tier-1-bkrd .slides img').each(function() {
							var thisWidth = $(this).attr('width');
							//console.log(thisWidth+', thisWidth');
							$(this).css({
								'width':thisWidth+'px',
								'margin-left': - thisWidth / 2 + 'px'
							});
							//console.log(thisWidth / 2 +', thisWidth / 2');
						});

						$('#tier-1-bkrd ul.slides').animate({opacity:1}, 'fast');

					});
								 //   });
//								});



	// end code

  }
};


})(jQuery, Drupal, this, this.document);
