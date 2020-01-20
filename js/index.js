window.onload = function () {
  
  var myBannerSwiper = new Swiper('#banner-swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    autoplay:true,
    loop: true, // 循环模式选项
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var aFurnitureSpan = document.querySelectorAll(".furniture .phone-title a span");
  function addOn(obj){
    var span_index=0;
    for (var i = 0; i < obj.length; i++) {
      obj[i].index=i;
      obj[i].onmouseenter=function(){
        obj[span_index].classList.remove("on");
        span_index=this.index;
        this.classList.add("on");
      }
    }
  }
  addOn(aFurnitureSpan);
  // 智能
  var aSmartSpan = document.querySelectorAll(".smart .phone-title a span");
  addOn(aSmartSpan);
  // 搭配
  var aMatchSpan = document.querySelectorAll(".match .phone-title a span");
  addOn(aMatchSpan);
  // 配件
  var aAccessorSpan = document.querySelectorAll(".accessories .phone-title a span");
  addOn(aAccessorSpan);
  // 周边
  var aRimSpan = document.querySelectorAll(".rim .phone-title a span");
  addOn(aRimSpan);

  // 为你推荐
  var myRecSwiper = new Swiper('#rec-swiper-container', {
    direction: 'horizontal', 
    slidesPerView : 1,
    centeredSlides : true,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.rec-swiper-rbtn',
      prevEl: '.rec-swiper-lbtn',
    },
  })

  // 内容
  var myConSwiper1 = new Swiper('.con1-swiper-container', {
    direction: 'horizontal', 
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.con1-swiper-rbtn',
      prevEl: '.con1-swiper-lbtn',
    },
  })

  var myConSwiper2 = new Swiper('.con2-swiper-container', {
    direction: 'horizontal', 
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.con2-swiper-rbtn',
      prevEl: '.con2-swiper-lbtn',
    },
  })

  var myConSwiper3 = new Swiper('.con3-swiper-container', {
    direction: 'horizontal', 
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.con3-swiper-rbtn',
      prevEl: '.con3-swiper-lbtn',
    },
  })

  var myConSwiper4 = new Swiper('.con4-swiper-container', {
    direction: 'horizontal', 
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.con4-swiper-rbtn',
      prevEl: '.con4-swiper-lbtn',
    },
  })

}



