$(document).ready(function() {
    var element = document.getElementsByClassName("kid_side"); 
    Stickyfill.add(element);

    window.addEventListener("scroll", scrollevent);
    function scrollevent() {
          if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
            document.getElementById("video_over").style.backgroundColor="rgba(0,0,0,0.1)";
              document.getElementById("video_over").style.transition="all 2s ease";
              document.querySelector("section.kid_main-02").style.width="1880px";
              document.querySelector("section.kid_main-02").style.height="1062px";
              document.querySelector("section.kid_main-02").style.transition="all 2s ease";
              
              
          } else {
              document.getElementById("video_over").style.backgroundColor="rgba(0,0,0,1)";
              document.getElementById("video_over").style.transition="all 2s ease";
              document.querySelector("section.kid_main-02").style.width="1680px";
              document.querySelector("section.kid_main-02").style.height="862px";
              document.querySelector("section.kid_main-02").style.transition="all 2s ease";
              
              
          }
        }
    
    window.addEventListener("scroll", scrollevent2);
    
    function scrollevent2() {
        if(document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
            document.querySelector("div.video_over-txt").style.opacity = "1";
            document.querySelector("div.video_over-txt").style.transition = "all 3s ease";
            document.querySelector("div.video_over-txt").style.transitionDelay = "2s";
        }else {
            document.querySelector("div.video_over-txt").style.opacity = "0";
            document.querySelector("div.video_over-txt").style.transition = "all 1s ease";
        }
    }

    window.addEventListener("scroll", scrollevent3);
    function scrollevent3() {
        if(document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
//            document.querySelector(".f_img > p:nth-child(1)").style.opacity = "1";
            document.querySelector("div.f_img p:nth-child(1)").style.top = "0";
            document.querySelector("div.f_img p:nth-child(2)").style.top = "0";
            document.querySelector("div.f_img p:nth-child(3)").style.top = "0";
            document.querySelector("div.f_img p:nth-child(1)").style.opacity = "1";
            document.querySelector("div.f_img p:nth-child(2)").style.opacity = "1";
            document.querySelector("div.f_img p:nth-child(3)").style.opacity = "1";
            document.querySelector("div.f_img p:nth-child(1)").style.transition = "all 2s ease";
            document.querySelector("div.f_img p:nth-child(2)").style.transition = "all 2s ease";
            document.querySelector("div.f_img p:nth-child(3)").style.transition = "all 2s ease";
        }else {
            document.querySelector("div.f_img p:nth-child(1)").style.top = "-40px";
            document.querySelector("div.f_img p:nth-child(2)").style.top = "40px";
            document.querySelector("div.f_img p:nth-child(3)").style.top = "-40px";
            document.querySelector("div.f_img p:nth-child(1)").style.opacity = "0";
            document.querySelector("div.f_img p:nth-child(2)").style.opacity = "0";
            document.querySelector("div.f_img p:nth-child(3)").style.opacity = "0";
        }
    }
       
    window.addEventListener("scroll", scrollevent4);
    function scrollevent4() {
        if(document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) {
            document.querySelector("div.s_img p:first-child").style.opacity = "1";
            document.querySelector("div.s_img p:first-child").style.left = "0";
            document.querySelector("div.s_img p:first-child").style.transition = "all 3s ease";
            document.querySelector("div.s_img p:last-child").style.opacity = "1";
            document.querySelector("div.s_img p:last-child").style.right = "0";
            document.querySelector("div.s_img p:last-child").style.transition = "all 3s ease";
        }else {
            document.querySelector("div.s_img p:first-child").style.opacity = "0";
            document.querySelector("div.s_img p:first-child").style.left = "-50px";
            document.querySelector("div.s_img p:last-child").style.opacity = "0";
            document.querySelector("div.s_img p:last-child").style.right = "-50px";
        }
        
    }
    
    var sideEvent = false;
    $(".sidebar > li:not(:first)").click(function() {  
        sideEvent =! sideEvent;
        if(sideEvent) {
            $(this).css("background-image","url(images/men/arrow_up.png)");
            $(this).find("ul").css("display","block");
            $(this).addClass("on").css("transition","all 0.3s ease");
        }else {
            $(this).css("background-image","url(images/men/arrow_down.png)");
            $(this).find("ul").css("display","none");
            $(this).removeClass("on");
            
        }
 
    });
       
    $(".sidebar > li").hover(function() {
        $(this).css("background-color","#f5f5f5");
        $(this).css("cursor","pointer");
    },function() {
        $(this).css("background-color","");
    });
    
    $(".item_01, .item_02, .item_03, .item_04").hover(function() {
        $(this).css("box-shadow","0 0 10px rgba(0,0,0,0.3)").css("transition","all 0.3s ease").css("cursor","pointer");
    },function() {
        $(this).css("box-shadow","");
    });
    
    //img slide
    $(".img_slide").css("cursor","pointer").css("outline","none");
    $('.new_slide').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5
      }
    }
  ]
});
    
    
    
    
});//end