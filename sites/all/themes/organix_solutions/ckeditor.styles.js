/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            // These styles are already available in the "Format" drop-down list, so they are
            // not needed here by default. You may enable them to avoid placing the
            // "Format" drop-down list in the toolbar, maintaining the same features.
            /*
            { name : 'Paragraph'		, element : 'p' },
            { name : 'Heading 1'		, element : 'h1' },
            { name : 'Heading 2'		, element : 'h2' },
            { name : 'Heading 3'		, element : 'h3' },
            { name : 'Heading 4'		, element : 'h4' },
            { name : 'Heading 5'		, element : 'h5' },
            { name : 'Heading 6'		, element : 'h6' },
            { name : 'Preformatted Text', element : 'pre' },
            { name : 'Address'			, element : 'address' },
            */

            { name : 'Blue Title - Interior'     , element : 'h3', attributes: { 'class': 'blue-title' }, styles : {  
                'font-weight': 'bold',
                'font-size': '18px',
                'border-top': '3px dotted #00338e',
                'border-bottom':'3px dotted #00338e',
                'padding':'5px',  
                'color':'#00338e'
            } },
            { name : 'Green Title - Interior'		, element : 'h3', attributes: { 'class': 'green-title' }, styles : {  
                'font-weight': 'bold',
                'font-size': '18px',
                'border-top': '3px dotted #007836',
                'border-bottom':'3px dotted #007836',
                'padding':'5px',  
                'color':'#007836' 
            } },

            { name : 'Fact Bullet'     , element : 'p', attributes: { 'class': 'fact-interior' }, styles : {
                'line-height': '120%',
                'font-size': '0.67em',
                'margin-top': '2.23881em',
                'margin-bottom': '2.23881em',
                'font-weight': 'bold',
                'background': 'url(/sites/all/themes/organix_solutions/images/os-theme/OS_fact-interior.png) no-repeat left',
                'min-height': '55px',
                'padding-top':'10px',
                'padding-left': '80px'
            } },
            { name : 'Did You Know Bullet'     , element : 'p', attributes: { 'class': 'did-you-know-interior' }, styles : {
                'line-height': '120%',
                'font-size': '0.67em',
                'margin-top': '2.23881em',
                'margin-bottom': '2.23881em',
                'font-weight': 'bold',
                'background': 'url(/sites/all/themes/organix_solutions/images/os-theme/OS_didyouknow-interior.png) no-repeat left',
                'min-height': '55px',
                'padding-top':'10px',
                'padding-left': '80px'
            } },

            { name : 'Blue List'     , element : 'ul', attributes: { 'class': 'blue-list' }, styles : { 'background-color' : '#a9d9ea' } },
            { name : 'Green List'     , element : 'ul', attributes: { 'class': 'green-list' },styles : { 'background-color' : '#95c676' } },
            { name : 'Orange Button'     , element : 'span', attributes: { 'class': 'orange-button' }, styles : {'background-color':'#df7727','color':'white','padding':'5px 10px;'} },
            { name : 'Orange Video Link'     , element : 'span', attributes: { 'class': 'orange-video-link' }, styles : {
                'background': 'url(/sites/all/themes/organix_solutions/images/os-theme/tier-3-bullet.png) no-repeat left',
                'position': 'relative',
                'text-decoration': 'none',
                'color': '#df7727',
                'font-size': '18PX',
                'padding-left': '30px'
            } },





            
 
            /* Inline Styles */

            // These are core styles available as toolbar buttons. You may opt enabling
            // some of them in the "Styles" drop-down list, removing them from the toolbar.
            /*
            { name : 'Strong'			, element : 'strong', overrides : 'b' },
            { name : 'Emphasis'			, element : 'em'	, overrides : 'i' },
            { name : 'Underline'		, element : 'u' },
            { name : 'Strikethrough'	, element : 'strike' },
            { name : 'Subscript'		, element : 'sub' },
            { name : 'Superscript'		, element : 'sup' },
            * /

            { name : 'Marker: Yellow'	, element : 'span', styles : { 'background-color' : 'Yellow' } },
            { name : 'Marker: Green'	, element : 'span', styles : { 'background-color' : 'Lime' } },

            { name : 'Big'				, element : 'big' },
            { name : 'Small'			, element : 'small' },
            { name : 'Typewriter'		, element : 'tt' },

            { name : 'Computer Code'	, element : 'code' },
            { name : 'Keyboard Phrase'	, element : 'kbd' },
            { name : 'Sample Text'		, element : 'samp' },
            { name : 'Variable'			, element : 'var' },

            { name : 'Deleted Text'		, element : 'del' },
            { name : 'Inserted Text'	, element : 'ins' },

            { name : 'Cited Work'		, element : 'cite' },
            { name : 'Inline Quotation'	, element : 'q' },

            { name : 'Language: RTL'	, element : 'span', attributes : { 'dir' : 'rtl' } },
            { name : 'Language: LTR'	, element : 'span', attributes : { 'dir' : 'ltr' } },

            /* Object Styles */

            {
                    name : 'Image on Left',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-right: 5px',
                            'border' : '2',
                            'align' : 'left'
                    }
            },

            {
                    name : 'Image on Right',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-left: 5px',
                            'border' : '2',
                            'align' : 'right'
                    }
            }
    ]);
}