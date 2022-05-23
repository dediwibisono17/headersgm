$('#fase-menyusui button').click(function () {
    $('#fase-menyusui button').removeClass('active');
    $(this).addClass('active');
});

let faseMenyusi = document.getElementById("fase-menyusui");
let subFase = faseMenyusi.getElementsByClassName("sub-fase");
for (let i = 0; i < subFase.length; i++) {
    subFase[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        console.log(current)
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        if ($(window).width() < 768) {
            faseMenyusi.scrollLeft = this.offsetLeft - 50
        } else {
            faseMenyusi.scrollLeft
        }
    });
}

$('#topik button').click(function () {
    $('#topik button').removeClass('active');
    $(this).addClass('active');
});



let topik = document.getElementById("topik");
let subTopik = topik.getElementsByClassName("sub-topik");
for (let i = 0; i < subTopik.length; i++) {
    subTopik[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        console.log(current)
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        if ($(window).width() < 768) {
            topik.scrollLeft = this.offsetLeft - 50
        } else {
            topik.scrollLeft
        }
    });
}

