let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

document.addEventListener('DOMContentLoaded', () => {

    //------ Slider Begin
      const CaroS = document.querySelector('.Carousel-slider');
      const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
      const hammer = new Hammer(CaroS);
      const CaroSTimer = 2000;
      let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

    //------- Mouseenter Event
      CaroS.onmouseenter = function(e) {
          clearInterval(CaroAutoplay); 
          console.log(e.type + ' mouse detected');
      }

    //----- Mouseleave Event
      CaroS.onmouseleave = function(e) {
          clearInterval(CaroAutoplay); 
          CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
          console.log(e.type + ' mouse detected');
      }

    //----- Mouseclick Event
      CaroS.onclick = function(e) {
          clearInterval(CaroAutoplay); 
          console.log(e.type + ' mouse detected');
      }

    //------ Gesture Tap Event
      hammer.on('tap', function(e) {
          clearInterval(CaroAutoplay);
          console.log(e.type + ' gesture detected');
      });

    //----- Gesture Swipe Event
      hammer.on('swipe', function(e) {
          clearInterval(CaroAutoplay); 
          CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
          console.log(e.type + ' gesture detected');
      });

    let slideLink = document.querySelectorAll('.slider-item');
    if (slideLink && slideLink !== null && slideLink.length > 0){
      slideLink.forEach( el => el.addEventListener('click', e => {
        e.preventDefault();
        let href = el.dataset.href;
        let target = el.dataset.target;
        if (href !== '#') window.open(href, target);
      }));
    }

    //---- Slider left

  });


  let line1 = document.getElementById('line1');
  let line2 = document.getElementById('line2');
  let line3 = document.getElementById('line3');
  function scrollToPosition(position) {
    window.scrollTo({
        top: position,
        behavior: 'smooth' // للتمرير بشكل سلس
    });
}

// استدعاء الدالة للتمرير إلى الموضع 784 بكسل


  var prevScrollTop = 0;

window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;

    // Check if scrollTop crossed certain thresholds
    if (scrollTop > 100 && prevScrollTop <= 100) {
        line1Anim();
    } else if (scrollTop < 100 && prevScrollTop >= 100) {
        line1AnimOut();
    }

    if (scrollTop > 510 && prevScrollTop <= 510) {
      scrollToPosition(784);

      line2Anim();
  } else if (scrollTop < 510 && prevScrollTop >= 510) {
      line2AnimOut();
  }



    if (scrollTop > 899 && prevScrollTop <= 899) {
        line3Anim();
    } else if (scrollTop < 899 && prevScrollTop >= 899) {
        line3AnimOut();
    }

    // Update prevScrollTop for the next scroll event
    prevScrollTop = scrollTop;
});

function line1Anim() {
  line1.style.translate = '0rem 0rem';
  line1.style.opacity = '100%';
  line1.style.filter = 'blur(0px)';
  timeline.style.setProperty('--height1','0%')
  timeline1H1.style.setProperty('--width1','100%')
  setTimeout(function(){
    timeline1H1.style.setProperty('--left','0')
    timeline1H1.style.setProperty('--width1','0')
    timeline1H1.style.setProperty('--width3','100%')
  },1000)
}

function line2Anim() {
    line2.style.translate = '0rem 0rem';
    line2.style.opacity = '100%';
    line2.style.filter = 'blur(0px)';
    timeline.style.setProperty('--height1','30%')
    timeline2H1.style.setProperty('--width1','100%')
setTimeout(function(){
  timeline2H1.style.setProperty('--left','0')
  timeline2H1.style.setProperty('--width1','0')

    timeline2H1.style.setProperty('--width3','100%')
},1000)





  }

function line3Anim() {
    line3.style.translate = '0rem 0rem';
    line3.style.opacity = '100%';
    line3.style.filter = 'blur(0px)';
    timeline.style.setProperty('--height1','62%')
    timeline3H1.style.setProperty('--width1','100%')

setTimeout(function(){
  timeline3H1.style.setProperty('--left','0')
  timeline3H1.style.setProperty('--width1','0')


  timeline3H1.style.setProperty('--width3', '100%')


},1000)






  }





function line1AnimOut() {
  line1.style.translate = '0rem 0rem';
  line1.style.opacity = '0%';
  line1.style.filter = 'blur(0px)';
  timeline.style.setProperty('--height1','0%')
  timeline1H1.style.setProperty('--width3','0')
  timeline1H1.style.setProperty('--width1','0')



}function line2AnimOut() {
  line2.style.translate = '0rem 0rem';
  line2.style.opacity = '0%';
  line2.style.filter = 'blur(0px)';
  timeline.style.setProperty('--height1','0%')
  timeline2H1.style.setProperty('--width3','0')
  timeline2H1.style.setProperty('--width1','0')






  }function line3AnimOut() {
    line3.style.translate = '0rem 0rem';
    line3.style.opacity = '0%';
    line3.style.filter = 'blur(0px)';
    timeline.style.setProperty('--height1','30%')
    timeline3H1.style.setProperty('--width3','0')
    timeline3H1.style.setProperty('--width1','0')





  }
  let timeline = document.querySelector('.timeline');

  let timeline1H1 = document.querySelector('.timeline1-h1');


  let timeline2H1 = document.querySelector('.timeline2-h1');


  let timeline3H1 = document.querySelector('.timeline3-h1');





  let section_counter = document.querySelector('#section_counter');
  let counters = document.querySelectorAll('.counter-item .counter');

  // Scroll Animation

  let CounterObserver = new IntersectionObserver(
    (entries, observer) => {
      let [entry] = entries;
      if (!entry.isIntersecting) return;

      let speed = 30;
      counters.forEach((counter, index) => {
        function UpdateCounter() {
          const targetNumber = +counter.dataset.target;
          const initialNumber = +counter.innerText;
          const incPerCount = targetNumber / speed;
          if (initialNumber < targetNumber) {
            counter.innerText = Math.ceil(initialNumber + incPerCount);
            setTimeout(UpdateCounter, 40);
          }
        }
        UpdateCounter();

        if (counter.parentElement.style.animation) {
          counter.parentElement.style.animation = '';
        } else {
          counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
            index / counters.length + 0.5
          }s`;
        }
      });
      observer.unobserve(section_counter);
    },
    {
      root: null,
      threshold: window.innerWidth > 768 ? 0.4 : 0.3,
    }
  );

  CounterObserver.observe(section_counter);



headerContent = document.querySelector('.header__content')

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY ;

  if (scrollTop > 1464) {
   headerMove()
  }

});
function headerMove(){
  headerContent.style.transform ='translatex(0rem)' ;
  headImg.style.setProperty('--width2','20%')

}
function headerMoveOut(){
  headerContent.style.transform ='translatex(-20rem)' ;
}


let headImg = document.querySelector('.header__image');
let imgSolid = window.getComputedStyle(headImg,'::before');