var mySwiper = new Swiper('.swiper-container-h', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        paginationBulletRender: function (swiper, index, className) {
            return '< div class=" ' + className + ' ">< div class="inner-dot"></div>< /div>';
        },
        parallax: true,
    },
    hashNavigation: {
        watchState: true,
    },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        invert: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

var swiperV = new Swiper('.swiper-container-v', {
    pagination: {
        el: '.swiper-pagination-v',
        paginationClickable: false,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    direction: 'vertical',
    spaceBetween: 50,
    nested: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    slidesPerView: 1,

});

window.onload = function () {

    // Video
    var video = document.getElementById("video");

    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");

    // Sliders
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");

    playButton.addEventListener("click", function () {
        if (video.paused == true) {
            // Play the video
            video.play();

            // Update the button text to 'Pause'
            playButton.innerHTML = "<img src='img/pause.png' height='20px'>";
        } else {
            // Pause the video
            video.pause();

            // Update the button text to 'Play'
            playButton.innerHTML = "<img src='img/play-button.png' height='20px'>";
        }
    });

    muteButton.addEventListener("click", function () {
        if (video.muted == false) {
            // Mute the video
            video.muted = true;

            // Update the button text
            muteButton.innerHTML = "<img src='img/mute.png' height='20px'>";
        } else {
            // Unmute the video
            video.muted = false;

            // Update the button text
            muteButton.innerHTML = "<img src='img/volume.png' height='20px'>";
        }
    });

    seekBar.addEventListener("change", function () {
        // Calculate the new time
        var time = video.duration * (seekBar.value / 100);

        // Update the video time
        video.currentTime = time;
    });


    video.addEventListener("timeupdate", function () {
        // Calculate the slider value
        var value = (100 / video.duration) * video.currentTime;

        // Update the slider value
        seekBar.value = value;
    });
    seekBar.addEventListener("mousedown", function () {
        video.pause();
        playButton.innerHTML = "<img src='img/play-button.png' height='20px'>";
    });

    // Play the video when the slider handle is dropped
    seekBar.addEventListener("mouseup", function () {
        video.play();
        playButton.innerHTML = "<img src='img/pause.png' height='20px'>";
    });

    fullScreenButton.addEventListener("click", function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        }
    });
}


//a partir d'ici c'est des test



$("document").ready(function () {

    $('a').on("click", function () {

        console.log(mySwiper.activeIndex);
    });

    if (mySwiper.activeIndex = 1) {
        $('#sl1').css('font-weight', 'bold');
    }
});

//il aurait fallut mettre if activeindex = 1 alors mettre accueil en gras   if activeindex = 2 mettre synopsis en gras et ainsi de suite mais ca marche pas

//la j'ai juste essayé de voir ce que retournait activeIndex dans la console pour voir et ca donnne 'undifined'



//paralax : 
/*
var scene = document.getElementById('content2');
var parallaxInstance = new Parallax(scene);*/

/*if (window.matchMedia("(max-width:768px)").matches) {
    var mySwiper = new Swiper('.swiper-container-h', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            paginationBulletRender: function (swiper, index, className) {
                return '< div class=" ' + className + ' ">< div class="inner-dot"></div>< /div>';
            },
            parallax: true,
        },
        hashNavigation: {
            watchState: true,
        },
        keyboard: {
            enabled: true,
        },
        mousewheel: {
            invert: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    var swiperV = new Swiper('.swiper-container-v', {
        pagination: {
            el: '.swiper-pagination-v',
            paginationClickable: false,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        direction: 'horizontal',
        spaceBetween: 50,
        nested: true,
        loop: true,
        keyboard: {
            enabled: true,
        },
        slidesPerView: 1,

    });

}*/


$(document).ready(function ($) {
    let toggle = 0;
    $('.main-header__toggle').on("click", function () {
        toggle = toggle + 1;


        if (toggle % 2 == 0) {
            $('.main-header__toggle-open').css('display', 'block')
            $('.main-header__toggle-close').css('display', 'none')
        } else {
            $('.main-header__toggle-open').css('display', 'none')
            $('.main-header__toggle-close').css('display', 'block')

        }

        $('.menu ul').slideToggle();
    });


    if (window.matchMedia("(max-width:768px)").matches) {
        $('a').on("click", function () {
            $('.menu ul').slideToggle();
        });
    }

});
