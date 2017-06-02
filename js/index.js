$('.form').find('input, textarea').on('keyup blur focus', function (e) {

	var $this = $(this),
		label = $this.prev('label');

	if (e.type === 'keyup') {
		if ($this.val() === '') {
			label.removeClass('active highlight');
		} else {
			label.addClass('active highlight');
		}
	} else if (e.type === 'blur') {
		if ($this.val() === '') {
			label.removeClass('active highlight');
		} else {
			label.removeClass('highlight');
		}
	} else if (e.type === 'focus') {

		if ($this.val() === '') {
			label.removeClass('highlight');
		} else if ($this.val() !== '') {
			label.addClass('highlight');
		}
	}

});

$('.tab a').on('click', function (e) {

	e.preventDefault();

	$(this).parent().addClass('active');
	$(this).parent().siblings().removeClass('active');

	target = $(this).attr('href');

	$('.tab-content > div').not(target).hide();

	$(target).fadeIn(600);

});


// Tab Content and background animation
$('.signupBTN').on('click', function () {

	$('.wrapper').animate({
			opacity: 1
		},
		200,
		function () {
			$('body').removeClass('acad-img');
			$('body').addClass('tal-img');
			$('#acad-btn').css('background-color', '#B3D144');
			$('.wrapper').animate({
					opacity: 0
				},
				200,
				function () {

				});
		});
});


$('.loginBTN').on('click', function () {
	$('.wrapper').animate({
			opacity: 1
		},
		200,
		function () {
			$('body').removeClass('tal-img');
			$('body').addClass('acad-img');
			$('#acad-btn').css('background-color', '#B3D144');
			$('.wrapper').animate({
					opacity: 0
				},
				200,
				function () {

				});
		});
});


// Modal Thank You 


$('#submit-btn').on('click', function () {
	
	$.ajax({
		url: "contact.php",
		cache: false,
		success: function (html) {
			$("#thankyou").show();
			$(".hide-form").hide();	
		}
	});
});
































