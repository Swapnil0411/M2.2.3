require([
    'jquery'
], function (jQuery) {
    (function ($) {
        $(document).ready(function () {
            if($(window).width() < 767){
			$( '.middle-footer .middle-block .block-title').click(function() {
				$(this).parent().find('.block-content').slideToggle('fast');
				if($(this).hasClass('is-show')){
					$(this).removeClass('is-show');
				}else{
					$(this).addClass('is-show');
				}
			});
	
            }
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200 & $(this).width() > 991) {
                    $('.header-v1.sticky-menu .middle-header-content').addClass('sticky-content');
					$('.header-v2.sticky-menu > .header-menu').addClass('sticky-content');
					$('.header-v2.sticky-menu > .middle-header-content').addClass('sticky-logo');
                } else {
                    $('.header-v1.sticky-menu .middle-header-content').removeClass('sticky-content');
					$('.header-v2.sticky-menu > .header-menu').removeClass('sticky-content');
					$('.header-v2.sticky-menu > .middle-header-content').removeClass('sticky-logo');
                }
            });
            $('.btn-responsive-nav').click(function () {
                $('.navigation').addClass('show-menu');
            });
            $('.navigation .fa-times').click(function () {
                $('.navigation').removeClass('show-menu');
            });
            $('.mega-menu-item ul.dropdown-menu .level1 .toggle-menu .fa-plus').click(function () {
                $(this).parent().siblings('ul').slideDown('fade');
                $(this).addClass('hide-plus');
                $(this).siblings('.fa-minus').addClass('show-minus');
            });

            $('.mega-menu-item ul.dropdown-menu .level1 .toggle-menu .fa-minus').click(function () {
                $(this).parent().siblings('ul').slideUp('fade');
                $(this).siblings('.fa-plus').removeClass('hide-plus');
                $(this).removeClass('show-minus');
            });

            $('.static-menu .dropdown-submenu .toggle-menu .fa-plus').click(function () {
                $(this).parent().siblings('ul').slideDown('fade');
                $(this).addClass('hide-plus');
                $(this).siblings('.fa-minus').addClass('show-minus');
            });

            $('.static-menu .dropdown-submenu .toggle-menu .fa-minus').click(function () {
                $(this).parent().siblings('ul').slideUp('fade');
                $(this).siblings('.fa-plus').removeClass('hide-plus');
                $(this).removeClass('show-minus');
            });
            $('.modal-header .action-close').click(function () {
                $('.modals-overlay').hide();
            });
            
        });
		$(window).load(function () {
			setTimeout(hideAlert, 2000);
		});
    })(jQuery);
});
function hideAlert(){
	require([
        'jquery'
    ], function ($) {
        (function () {
            $('.cms-index-index .page-main > .page.messages').slideUp(1000);
        })(jQuery);
    });
	
}
function setLocation(url) {
    require([
        'jquery'
    ], function (jQuery) {
        (function () {
            window.location.href = url;
        })(jQuery);
    });
}
function showHideFilter(item) {
    require([
        'jquery'
    ], function (jQuery) {
        (function ($) {
			$('.filter-options-content'+item).slideToggle('fast');
			if($('.hide-filter'+item+' .fa').hasClass('fa-plus')){
				$('.hide-filter'+item+' .fa').removeClass('fa-plus');
				$('.hide-filter'+item+' .fa').addClass('fa-minus');
			}else{
				$('.hide-filter'+item+' .fa').removeClass('fa-minus');
				$('.hide-filter'+item+' .fa').addClass('fa-plus');
			}
        })(jQuery);
    });
}