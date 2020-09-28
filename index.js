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

major_array = ['#about', '#projects', '#contact'];
//refer to bars and navs by appending -bar or -link
