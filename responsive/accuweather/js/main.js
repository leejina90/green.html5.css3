$(function(){
    $(".nav").hover(function() {
        var lnbShow = $(".lnb_container").is(":visible");

        if (lnbShow) { //하위 메뉴가 보이면
            $(".lnb_container").removeClass("appear");
            $(".lnb_container").addClass("disappear");
        } else {  //하위 메뉴가 보이지 않으면
            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
        }

        $(".lnb_container").toggle(); // block 혹은 none 처리
    });

    $(".nav li").hover(function(){
        $(".active_bar").toggle();

        var listLeft = $(this).offset().left;
        var listWidth = $(this).width();

        $(".active_bar").width(listWidth);
        $(".active_bar").offset({ left: listLeft + 17 });
    });
});