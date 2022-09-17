$('.center').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '0px',
  speed: 500,
  variableWidth: true,
});
$('.center').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  console.log('beforeChange', currentSlide, nextSlide);
});
$('.center').on('afterChange', function (event, slick, currentSlide) {
  console.log('afterChange', currentSlide);
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

$('.owl-carousel').owlCarousel({
  margin: 10,
  loop: true,
  autoWidth: true,
  items: 4
})

const range = document.getElementById("exampleInputEmail1")
const input = document.getElementById("customRange1")
const range1 = document.getElementById("exampleInputEmail2")
const input1 = document.getElementById("customRange2")
const netice = document.getElementById("exampleInputEmail3")


netice.value = (parseInt(input.value) / parseInt(input1.value)).toFixed(2)

range.addEventListener("input", () => {
  input.value = range.value

  netice.value = (parseInt(input.value) / parseInt(input1.value)).toFixed(2)

})
input.addEventListener("input", () => {
  range.value = input.value
  //   var x=input.value
  //   console.log(x);
  //   var color=`linear-gradient(90deg, rgb(117,252,117)`+x+`%,
  // rgba(214,214,214)`+x+`%)`
  // $('#customRange1').css('display', color);

  netice.value = (parseInt(input.value) / parseInt(input1.value)).toFixed(2)
})
range1.addEventListener("input", () => {
  input1.value = range1.value

  netice.value = (parseInt(input.value) / parseInt(input1.value)).toFixed(2)
})
input1.addEventListener("input", () => {
  range1.value = input1.value
  netice.value = (parseInt(input.value) / parseInt(input1.value)).toFixed(2)
})
var slideIndexs = 1;
showSlides(slideIndexs);

function plusSlidess(n) {
  showSlidess(slideIndexs += n);
}

function currentSlidess(n) {
  showSlidess(slideIndexs = n);
}

function showSlidess(n) {
  var i;
  var slidess = document.getElementsByClassName("mySlidess");
  var dotss = document.getElementsByClassName("dots");
  if (n > slidess.length) {
    slideIndexs = 1
  }
  if (n < 1) {
    slideIndexs = slidess.length
  }
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  for (i = 0; i < dotss.length; i++) {
    dotss[i].className = dotss[i].className.replace(" active", "");
  }
  slidess[slideIndexs - 1].style.display = "block";
  dotss[slideIndexs - 1].className += " active";
}
window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 3000);
}
var slideIndexs = 1;
showSlidess(slideIndexs);

function plusSlidess(n) {
  showSlidess(slideIndexs += n);
}

function currentSlidess(n) {
  showSlidess(slideIndexs = n);
}

function showSlidess(n) {
  var i;
  var slidess = document.getElementsByClassName("mySlidess");
  var dotss = document.getElementsByClassName("dots");
  if (n > slidess.length) {
    slideIndexs = 1
  }
  if (n < 1) {
    slideIndexs = slidess.length
  }
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  for (i = 0; i < dotss.length; i++) {
    dotss[i].className = dotss[i].className.replace(" active", "");
  }
  slidess[slideIndexs - 1].style.display = "block";
  dotss[slideIndexs - 1].className += " active";
}


/////
var slideIndexss = 1;
showSlidesss(slideIndexss);

function plusSlidesss(n) {
  showSlidesss(slideIndexss += n);
  console.log(1);
}

function currentSlidesss(n) {
  showSlidesss(slideIndexss = n);
}

function showSlidesss(n) {
  var i;
  var slidesss = document.getElementsByClassName("mySlidesss");
  var dotsss = document.getElementsByClassName("dotss");
  if (n > slidesss.length) {
    slideIndexss = 1
  }
  if (n < 1) {
    slideIndexss = slidesss.length
  }
  for (i = 0; i < slidesss.length; i++) {
    slidesss[i].style.display = "none";
  }
  for (i = 0; i < dotsss.length; i++) {
    dotsss[i].className = dotsss[i].className.replace(" active", "");
  }
  slidesss[slideIndexss - 1].style.display = "block";
  dotsss[slideIndexss - 1].className += " active";
}
window.onload = function () {
  setInterval(function () {
    plusSlidesss(1, plusSlides(1), plusSlidess(1));
  }, 3000);
}
document.getElementById("customRange1").oninput = function () {
  var value = (this.value - this.min) / (this.max - this.min) * 100
  this.style.background = 'linear-gradient(to right, #475ed0 0%, #475ed0 ' + value + '%, #fff ' + value + '%, white 100%)'
}
document.getElementById("customRange2").oninput = function () {
  var value = (this.value - this.min) / (this.max - this.min) * 100
  this.style.background = 'linear-gradient(to right, #475ed0 0%, #475ed0 ' + value + '%, #fff ' + value + '%, white 100%)'
}
const progressContainer = document.querySelector('.progress-container');
const progress = Array.from(document.querySelectorAll('.progress'));
const status = document.querySelector('.status');

const playNext = (e) => {
  const current = e && e.target;
  let next;

  if (current) {
    const currentIndex = progress.indexOf(current);
    if (currentIndex < progress.length) {
      next = progress[currentIndex + 1];
    }
    current.classList.remove('active');
    current.classList.add('passed');
  }

  if (!next) {
    progress.map((el) => {
      el.classList.remove('active');
      el.classList.remove('passed');
    })
    next = progress[0];
  }
  next.classList.add('active');

  status.innerText = 'Current: ' + progress.indexOf(next);
}

const clickHandler = (e) => {
  const index = Math.floor(e.offsetX / (progressContainer.clientWidth / progress.length));
  status.innerText = "Clicked " + index;
}

progress.map(el => el.addEventListener("animationend", playNext, false));
progressContainer.addEventListener("click", clickHandler, false);

playNext();