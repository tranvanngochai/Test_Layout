
// JS scick 
$(".outservice-carousel").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
            },
        },
    ],
});


//Js toggle menu
const toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-listmenu");
const close = document.querySelector(".navbar-listmenu__close");

toggle.addEventListener("click", function () {
    menu.classList.add("is-show");
});


close.addEventListener("click", function () {
    menu.classList.remove("is-show");
});