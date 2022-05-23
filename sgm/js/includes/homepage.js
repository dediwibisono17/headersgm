// alert(1)
$(".slider-banner").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
});

$(".card-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
});

$(".wrap-shortcut").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6.2,
    swipeToSlide: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                swipeToSlide: true,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2.4,
                swipeToSlide: true,
            }
        }
    ]
});

$(".produk__sgm").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                swipeToSlide: true,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                swipeToSlide: true,
            }
        }
    ]
})

var $this = $('.wrap-tools');
// var $this2 = $('.wrap-shortcut');
var scrollAmount = 100;

function moveRight() {
    if ($this[0].scrollWidth - $this.scrollLeft() > $this.outerWidth()) {
        $this.scrollLeft($this.scrollLeft() + scrollAmount);
    }
}

function moveLeft() {
    if ($this.scrollLeft() > 0) {
        $this.scrollLeft($this.scrollLeft() - scrollAmount);
    }
}

// function moveRight2() {
//     if ($this2[0].scrollWidth - $this2.scrollLeft() > $this2.outerWidth()) {
//         $this2.scrollLeft($this2.scrollLeft() + scrollAmount);
//     }
// }

// function moveLeft2() {
//     if ($this2.scrollLeft() > 0) {
//         $this2.scrollLeft($this2.scrollLeft() - scrollAmount);
//     }
// }

$('.wrap-tools .to-left').click(moveLeft);
$('.wrap-tools .to-right').click(moveRight);

// $('.wrap-shortcut .to-left').click(moveLeft2);
// $('.wrap-shortcut .to-right').click(moveRight2);