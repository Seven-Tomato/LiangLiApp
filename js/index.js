$(function() {
	/*底部icon变换*/
    $(".active1").click(function() {
        $(this).find("img").attr("src", "img/icon_nav_home_active.png");
        $(".active2").find("img").attr("src", "img/icon_nav_address.png");
        $(".active3").find("img").attr("src", "img/icon_nav_function.png");
        $(".active4").find("img").attr("src", "img/icon_nav_message.png");
        $(".active5").find("img").attr("src", "img/icon_nav_me.png");
    })
    $(".active2").click(function() {
        $(".active1").find("img").attr("src", "img/icon_nav_home.png");
        $(this).find("img").attr("src", "img/icon_nav_address_active.png");
        $(".active3").find("img").attr("src", "img/icon_nav_function.png");
        $(".active4").find("img").attr("src", "img/icon_nav_message.png");
        $(".active5").find("img").attr("src", "img/icon_nav_me.png");
    })
    $(".active3").click(function() {
        $(".active1").find("img").attr("src", "img/icon_nav_home.png");
        $(".active2").find("img").attr("src", "img/icon_nav_address.png");
        $(this).find("img").attr("src", "img/icon_nav_function_active.png");
        $(".active4").find("img").attr("src", "img/icon_nav_message.png");
        $(".active5").find("img").attr("src", "img/icon_nav_me.png");
    })
    $(".active4").click(function() {
        $(".active1").find("img").attr("src", "img/icon_nav_home.png");
        $(".active2").find("img").attr("src", "img/icon_nav_address.png");
        $(".active3").find("img").attr("src", "img/icon_nav_function.png");
        $(this).find("img").attr("src", "img/icon_nav_message_active.png");
        $(".active5").find("img").attr("src", "img/icon_nav_me.png");
    })
    $(".active5").click(function() {
        $(".active1").find("img").attr("src", "img/icon_nav_home.png");
        $(".active2").find("img").attr("src", "img/icon_nav_address.png");
        $(".active3").find("img").attr("src", "img/icon_nav_function.png");
        $(".active4").find("img").attr("src", "img/icon_nav_message.png");
        $(this).find("img").attr("src", "img/icon_nav_me_active.png");
    })

    /*首页轮播*/
    $(".swiper-container").swiper({
       /* loop: true,
        autoplay: 2000*/
      });
})