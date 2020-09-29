$(document).ready( () => {
    $(window).scroll(function(){
        var pos = $(this).scrollTop();
        $('main .major').each(function(){
            var target = $(this).offset().top - 100;
            var id = $(this).attr('id');
            

            if (pos >= target){
                
                $(`a h2`).removeClass('active-nav');
                $(`a[href="#${id}"] h2`).addClass('active-nav');
            }
        })
    });
});


$("#nav-appear").on("click", () => {
    console.log('clicked')
    $("nav").css("display", "flex");
    $("#nav-return").css("display", "inline");
    $("#nav-appear").css("display", "none");
})

$("#nav-return").on("click", () => {
    $("nav").css("display", "none");
    $("#nav-appear").css("display", "inline");
    $("#nav-return").css("display", "none");
})

window.onresize = () => {
    x = window.matchMedia("(min-width: 1280px)");

    if(x.matches){ //above 1280px
        $("nav").css("display", "flex");
        $("#nav-return").css("display", "none");
        $("#nav-appear").css("display", "none");
    }
    else{ //smaller than 1280px
        $("#nav-appear").css("display", "inline");
        $("#nav-return").css("display", "none");
        $("nav").css("display", "none");
    }
}