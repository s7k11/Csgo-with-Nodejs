$(window).scroll(function()
	{

  		var wScroll = $(this).scrollTop();

  		if(wScroll > $('.main-img3').offset().top - ($(window).height() /5)) {

    		$('.foot .col-lg-1').each(function(i)
			{
      		setTimeout(function()
        		{
					$('.foot .col-lg-1').eq(i).addClass('showing');
				}
      			,150*(i+1));
    		}
		);
		}

});