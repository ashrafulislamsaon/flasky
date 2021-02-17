// Filter 
$(document).ready(function(){
    $('.s-list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.s-image').show('1000');
        }
        else{
            $('.s-image').not('.'+ value).hide('1000');
            $('.s-image').filter('.'+ value).show('1000');
        }
    })
});
// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    item:3,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
// counter
$(function(){

    $(".num").numScroll({
      number: 2540
    });
    $(".num2").numScroll({
        number: 7325
    });
    $(".num3").numScroll({
        number: 1924
    });
    $(".num4").numScroll({
        number: 4275
    });
  });