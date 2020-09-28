$(window).scroll(function(){
    var pos = $(this).scrollTop();
    $('main .major').each(function(){
        var target = $(this).offset().top - 80;
        var id = $(this).attr('id');
        

        if (pos >= target){
            $(`a h2`).removeClass('active-nav');
            $(`a[href="#${id}"] h2`).addClass('active-nav');
        }
    })
});

$("#nav-appear").on("click", () => {
    console.log('clicked')
    $("nav").css("display", "flex");
})