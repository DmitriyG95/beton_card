$(function() {
     
    // Скрытие лишних элементов у полной карточки
    

    $(' .category__card--full .category__card_characteristics_list').each(function (i){
        $(this).find(' li').each(function (i){
            if (i>=3) {
                $(this).hide().addClass('hide')
            }
        })
    })
    // Раскрытие лишних элементов у полной карточки
    $('.category__card--full .toggle_list').on('click',function(){
        var hideList = $(this).closest('.category__card_characteristics_list').find('.hide')
        $(this).toggleClass('active');
        if (hideList.is(':hidden')) {
            hideList.show('300')
        } else {
            hideList.hide('300')
        }
        if ($(this).text() == 'Читать все') {
            $(this).text('Скрыть')
        } else {
            $(this).text('Читать все')
        }
    })


    // Скрытие лишних элементов у карточки без цены
    
    function hideText(){
        $(' .category__card--empty .category__card_characteristics_list').each(function (i){
            var bigText = $(this).find('.category__card_characteristics_text--big')
                smallText = $(this).find('.category__card_characteristics_text--small');
                lineHeight = parseFloat($(this).find('.category__card_characteristics_text').css('line-height'))
                
             //   скрытие текст
             
             if(window.matchMedia('(max-width: 768px)').matches){
                // 4 строчки
                if (bigText.height()/lineHeight > 2) {
                    bigText.css('max-height', lineHeight * 2 )
                }
                // 3 строчки
                if (smallText.height()/lineHeight > 2) {
                    smallText.css('max-height', lineHeight * 2 )
                }
            } else {
                // 4 строчки
                if (bigText.height()/lineHeight > 4) {
                    bigText.css('max-height', lineHeight * 4 )
                }
                // 3 строчки
                if (smallText.height()/lineHeight > 3) {
                    smallText.css('max-height', lineHeight * 3 )
                }
            }
                 
         })
    }
    hideText()
    // Раскрытие лишних элементов у карточки без цены
    $('.category__card--empty .toggle_list').on('click', function() {
        var bigText = $(this).closest('.category__card_characteristics_list').find('.category__card_characteristics_text--big')
        smallText = $(this).closest('.category__card_characteristics_list').find('.category__card_characteristics_text--small');
        $(this).toggleClass('active');
        if (smallText.hasClass('max-text')) {
            smallText.removeClass('max-text')
            hideText()
    
        } else {
            smallText.addClass('max-text')
        }
        if (bigText.hasClass('max-text')) {
            bigText.removeClass('max-text')
            hideText()
        } else {
            bigText.addClass('max-text')
        }
        if ($(this).text() == 'Читать все') {
            $(this).text('Скрыть')
        } else {
            $(this).text('Читать все')
        }
    })

    // плюс-минус
    $('body').on('click', '.number-minus, .number-plus', function(){
		var $row = $(this).closest('.number');
		var $input = $row.find('.number-text');
		var step = $row.data('step');
		var val = parseFloat($input.val());
		if ($(this).hasClass('number-minus')) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});
 
	$('body').on('change', '.number-text', function(){
		var $input = $(this);
		var $row = $input.closest('.number');
		var step = $row.data('step');
		var min = parseInt($row.data('min'));
		var max = parseInt($row.data('max'));
		var val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if ( val < min) {
			val = min;	
		} else if (max && val > max) {
			val = max;	
		}
		$input.val(val);
	});



    // итоговая цена

    $('body').on('change', '.number-text', function(){
      var number = $(this).val()
          $this = $(this)
          price = $(this).closest('.category__card_row ').find('.category__card_price').attr('data-price')
          addPmd = $(this).closest('.category__card').find('.category__card_checkprice input:checked').val()
          $(this).closest('.category__card').find('.category__card_total .totalprice span').text((+price + +addPmd) * number )
          $(this).closest('.category__card').find('.category__card_total #numbergoods').text(number)
          
          
    })


     $('body').on('change', '.category__card_checkprice input:checked', function() {
        
        if(window.matchMedia('(max-width: 768px)').matches){
            var number = $(this).closest('.category__card').find('.number-text').val()
        } else {
            var number = $(this).closest('.category__card').find('.category__card_calculator .number-text').val()
        }
        var price = $(this).closest('.category__card').find('.category__card_mainprice').attr('data-price')
        var addPmd = $(this).closest('.category__card').find('.category__card_checkprice input:checked').val()
        $(this).closest('.category__card_calculator').find('.category__card_total .totalprice span').text((+price + +addPmd) * number )
        $(this).closest('.category__card_calculator').find('.category__card_total #numbergoods').text(number)
    })







    // слайдер для сертификатов




      document.querySelectorAll('.sert_slider').forEach(n => {
        const BrownSlider = new Swiper(n.querySelector('.swiper'), {
        lazy: true,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl:n.querySelector(' .swiper-button-next') ,
          prevEl:n.querySelector(' .swiper-button-prev') ,
        },
        
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            920 : {
              slidesPerView: 3
  
            },
            1200: {
              slidesPerView: 3
            }
          }
        
        });
      
       
      });
    //   fancy Для сертификатов
    $('[data-fancybox="cert_gallery"]').fancybox({
        touch:false,
        backFocus: false,
    });





    // наши объекты
    




      document.querySelectorAll('.our_objects').forEach(n => {
        const BrownSlider = new Swiper(n.querySelector('.swiper'), {
        lazy: true,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl:n.querySelector(' .swiper-button-next') ,
          prevEl:n.querySelector(' .swiper-button-prev') ,
        },
        
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            920 : {
              slidesPerView: 3
  
            },
            1200: {
              slidesPerView: 3
            }
          }
        
        });
      
       
      });
    //   fancy Для наших объектов
    $('[data-fancybox="objects_gallery"]').fancybox({
        touch:false,
        backFocus: false,
    });


    // маска телефона
    $('input[type=phone]').mask('+7(999)999-99-99')


    // Popup для оформления заказа
    $('.btn_checkout').on('click', function(){
      checkValue()
    })
    $('.checkout_popup .close').on('click', function(){
      $.fancybox.close()
    })

    // Если количество товаров >0 то вызывается fancy
    function checkValue(){
      $('.number-text').each(function(){
        if ($(this).val()>0) {
          $.fancybox.open({
            src: '.checkout_popup',
            type: 'inline',
            touch: false,
            baseClass: 'fancy__checkout'
          });
          
        }
      })
    }
    

    // удаление товара из popup
    $('.delete_product').on('click', function(){
        var delElem = $(this).closest('tr')
        delElem.remove()
        checkValElem()
    })

    // количество элементов в popup
    function checkValElem(){
      var popupElem = document.querySelectorAll('.fancy__checkout .checkout_popup__table tr')
      for (i=0;i<popupElem.length;i++) {
        if (popupElem.length == 1) {
          $.fancybox.close()
        }
      }
      
    }
    
});