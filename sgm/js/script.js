$('.toggle-menu').click(function () {
    $('.exo-menu').toggleClass('display');
});

// alert(1)


$(".scroll_ontop, .scroll_ontop-mob").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

// ========== start of menu tabs fase ===============
$('#nav-rounded li a').click(function () {
    $('#nav-rounded li').removeClass('active');
    $('#nav-rounded li a').attr('aria-expanded', false)
    $(this).addClass('active');
    $(this).attr('aria-expanded', true);

    // tabs content
    const getFase = $(this).attr('href')
    $(getFase).addClass('in active').siblings().removeClass('active');
});

let topik = document.getElementById("nav-rounded");
let subTopik = topik.getElementsByTagName("li");
for (let i = 0; i < subTopik.length; i++) {
    subTopik[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        console.log(current)
        current[0].className = current[0].className.replace(" active", "");
        this.className += "active";
        if ($(window).width() < 768) {
            topik.scrollLeft = this.offsetLeft - 50
        } else {
            topik.scrollLeft
        }
    });
}
// ========== end of menu tabs fase =================