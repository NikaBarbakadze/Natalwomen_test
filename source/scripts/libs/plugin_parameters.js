$(document).ready(function(){
	// სელექტორის გაფორმება
	$("select.selectori").each(function(){
		var placeholder = $(this).data('placeholder') || 'Default placeholder';
		$(this).select2({
			allowClear: true,
			minimumResultsForSearch: -1,
			placeholder: placeholder
		}); 
	});
	// სლაიდერი
	$(".main_slider").slick({
		autoplay: true,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 4000,
		slidesToShow: 1,
		fade: true,
		adaptiveHeight: true
	});

	
    $('.multiple-items').slick({
      infinite: true,
      autoplay: true,
	  dots: false,
	  arrows: true,
	  infinite: true,
	  speed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<em class="fas fa-angle-left"></em>',
      nextArrow: '<em class="fas fa-angle-right"></em>'
    });

    $('.multiple-items2').slick({
      infinite: true,
      autoplay: true,
	  dots: true,
	  arrows: true,
	  infinite: true,
	  speed: 4000,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<em class="fas fa-angle-left"></em>',
      nextArrow: '<em class="fas fa-angle-right"></em>'
    });

    $('.multiple-items3').slick({
      infinite: true,
      autoplay: true,
	  dots: true,
	  arrows: false,
	  infinite: true,
	  speed: 4000,
      slidesToShow: 2,
      slidesToScroll: 1,
    });
        
        
	// გალერეა
	$(".magnific").each(function(){
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			gallery:{
				enabled: true
			},
			zoom:{
				enabled: true,
				duration: 300
			}
		});
	});
	if($(".magnific_video").length){
		$(".magnific_video").magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	}
	/**/
	// არტ ფორმა
	$("input.artform").artmediaForm();
});
   //
