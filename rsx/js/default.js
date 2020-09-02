$(window).load(function(){
	//	Handling responsive header navigation affix and menu...
	var DOCUMENT_header_respond = function() {
		var header_position = ($('#header').offset().top + $('#header').height()),
			landing_position = ($('.landing').offset().top + $('.landing').height()),
			document_position = ($(document).scrollTop());
		if(header_position <= document_position &&
				$(document).width() >= 751 )
		{
			if(!$('#header .navbar').hasClass('navbar-fixed-top'))
			{
				$('#header .navbar').addClass('navbar-fixed-top');
				$('#header .header-offset').removeClass('hidden');
			}
			if(landing_position <= document_position)
			{
				$('#header .navbar').addClass('hovering');
			}
		}else{
			if($('#header .navbar').hasClass('navbar-fixed-top'))
			{
				$('#header .navbar').removeClass('navbar-fixed-top');
				$('#header .navbar').removeClass('hovering');
				$('#header .header-offset').addClass('hidden');
			}
		}
		//	Toggles mobile view by screen width...
		if( $(document).width() <= 750 )
		{
			$('body').attr('is-mobile',true);
		}else{
			$('body').removeAttr('is-mobile');
		}
	};
	//When the document scrolls...
	$(document).on('scroll',function(){
		DOCUMENT_header_respond();
	});
	//When the window resizes...
	$(window).on('resize',function(){
		DOCUMENT_header_respond();
	});
	//Initializing on page load...
		DOCUMENT_header_respond();
		//The preloader scrolls to right...
		$('#page-preloader').attr('state','loaded');
});