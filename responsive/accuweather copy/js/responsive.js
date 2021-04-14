$(function(){
    var gnbFlag = false;
    var gnbIndex;

    $(".nav li").on({
        "mouseenter" : function() {
            // lnb show

            if(gnbFlag != undefined){
                $(".lnb").eq(gnbIndex).css("display", "none"); 
            }

            gnbIndex = $(this).index();
            gnbFlag = true;

            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
            $(".lnb_container").show();

            $(".lnb").eq(gnbIndex).css("display", "block");// 인라인 태그 우선순위 이용

            // active_bar show
            $(".active_bar").show();

            // 선택된 li의 left와 width를 구해 active_bar의 위치와 길이를 조절
            var listLeft = $(this).offset().left;
            var listWidth = $(this).width();

            $(".active_bar").width(listWidth);
            $(".active_bar").offset({left: listLeft + 17}); //li에 padding이 있었으므로 17을 더 더함
        },
        "mouseleave" : function() {
            // ...
        }
    });

    $(".lnb_container").on({
        "mouseleave" : function(){
            if(gnbFlag) {
                $(".lnb_container").removeClass("appear");
                $(".lnb_container").addClass("disappear");
                $(".lnb_container").hide();
                $(".active_bar").hide();
            } else {
                return;
            }
        }
    });

    // 모바일 햄버거 메뉴 클릭시
    $(".trigger").on({
        "click" : function() {
            if ($(".mobile.hamburger").is(":visible")) {
                // 모바일 닫기 버튼 show
                $(".mobile.hamburger").hide();
                $(".mobile.close").show();

                // 모바일 전체 메뉴 show
                $("#main_header").height(60);
                $("#main_content").hide();
                $("#main_footer").hide();

                $("#mobile_menu").empty(); //mobile_menu 하위 태그
                $("li").eq(3).show(); //mobile에서만 보이는
                $("li").eq(4).show();

                var nav = $(".nav").clone();
                $("#mobile_menu").append(nav);
                $("#mobile_menu").show();

            } else { //닫기 메뉴 버튼이 보일때
                // 모바일 햄버거 버튼 show
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();

                // 모바일 전체 메뉴 show
                $("#main_header").height(390);
                $("#main_content").show();
                $("#main_footer").show();
                
                $("#mobile_menu").hide();
            }
        },
        "mouseleave" : function() {
            //...
        }
    });

    $(window).resize(function(){
        var width = $(window).width();

        if(width > 767) {
            $("li").eq(3).hide();
            $("li").eq(4).hide();

            if ($("#mobile_menu").is(":visible")) {
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();

                $("#main_header").height(390);
                $("#main_content").show();
                $("#main_footer").show();

                $("#mobile_menu").hide();
            }
        }
    });

    // $(".nav").hover(function() {
    //     var lnbShow = $(".lnb_container").is(":visible");

    //     if (lnbShow) { //하위 메뉴가 보이면
    //         $(".lnb_container").removeClass("appear");
    //         $(".lnb_container").addClass("disappear");
    //     } else {  //하위 메뉴가 보이지 않으면
    //         $(".lnb_container").removeClass("disappear");
    //         $(".lnb_container").addClass("appear");
    //     }

    //     $(".lnb_container").toggle(); // block 혹은 none 처리
    // });

    // $(".nav li").hover(function(){
    //     $(".active_bar").toggle();

    //     var listLeft = $(this).offset().left;
    //     var listWidth = $(this).width();

    //     $(".active_bar").width(listWidth);
    //     $(".active_bar").offset({ left: listLeft + 17 });
    // });
});