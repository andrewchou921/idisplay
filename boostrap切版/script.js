$(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  
AOS.init({
  duration:1000,
  offset:90
});

  // 当页面滚动时检测滚动距离
  window.addEventListener('scroll', function() {
    var button = document.querySelector('.scroll-to-top');
    if (window.scrollY > 400) { // 当滚动距离大于200px时显示按钮
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else { // 否则隐藏按钮
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });

  
	
 
  