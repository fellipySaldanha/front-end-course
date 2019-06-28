$('.header-main').on('show.bs.collapse', function () {
    $(".header-banner").css("transform", "translate(-50%, -10%)");
})
$('.header-main').on('hide.bs.collapse', function () {
        $(".header-banner").css("transform", "translate(-50%, -50%)");
    })
