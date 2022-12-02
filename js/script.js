$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:130,
		autoplay:true,
	    autoplayTimeout:1500,
	    autoplayHoverPause:true,
		stagePadding: 130,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	    // > 0
	    0 : {
	      dots: false,
	      margin:30,
	      stagePadding: 30,
	    },
	    // > 768
	    768 : {
	    	margin:130,
	    	stagePadding: 130,
        dots: true,
	    }
		}
	});
});

const TIME_LIMIT = 1800;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

startTimer();

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("timer__label").innerHTML = formatTime(
      timeLeft
    );

    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}
