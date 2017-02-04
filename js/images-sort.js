
/* TABS */

$(document).ready(function(){
	$('.portfolio_item').addClass('Active')
	$('#All').addClass('tabs-active')
});


$(document).ready(function(){
	
	$('#All').click(function(){ 
		$('.WB, .GD, .Ar').addClass('Active')
	});

	$('#WB').click(function(){
		$('.GD, .Ar').removeClass('Active')
		$('.WB').addClass('Active')
	});

	$('#GD').click(function(){
		$('.WB, .Ar').removeClass('Active')
		$('.GD').addClass('Active')
	});

	$('#Ar').click(function(){
		$('.GD, .WB').removeClass('Active')
		$('.Ar').addClass('Active')
	});
});


		/*  hover effect for 'li' and 'a' elements together */  




		/* for link in tabs */
/*
$(document).ready(function(){
	$('ul.tabs li a').click(function(){
		return false;
	});
});  */

			/* для кнопки наверх */


  var show_button = 550; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > show_button) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });