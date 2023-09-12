$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        stagePadding: 0,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                center: true,
            },
            998: {
                items: 3,
            },
            1300: {
                items: 4
            }
        }
    });
});