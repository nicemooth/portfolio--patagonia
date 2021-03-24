$(document).ready(function() {
   $("#top_banner").hover(function() {
      $(this).css("background-color","rgba(255,255,255,1)"); 
   },function() {
       $(this).css("background-color","rgba(0,0,0,0.5)");
   });
    
   $(".top_banner-menu > ul > li > a").mouseover(function() {
        $(this).css("color","#e0592a");
    }).mouseout(function() {
        $(this).css("color","");
    });
    
    $(".dropdown_men").mouseover(function() {
        $("li.bar a:eq(0)").css("color","#e0592a");
    }).mouseout(function() {
        $("li.bar a:eq(0)").css("color","");
    });
    
    $(".dropdown_women").mouseover(function() {
        $("li.bar a[href$='html']:eq(1)").css("color","#e0592a");
    }).mouseout(function() {
        $("li.bar a[href$='html']:eq(1)").css("color","");
    });
    
    $(".dropdown_kid").mouseover(function() {
        $("li.bar a[href$='html']:eq(2)").css("color","#e0592a");
    }).mouseout(function() {
        $("li.bar a[href$='html']:eq(2)").css("color","");
    });
    
    $(".dropdown_collection").mouseover(function() {
        $("li.bar a[href$='html']:eq(3)").css("color","#e0592a");
    }).mouseout(function() {
        $("li.bar a[href$='html']:eq(3)").css("color","");
    });
    
    $(".dropdown_collection > div > img").click(function() {
        $(this).css("outline","none");
    });
    
    window.addEventListener("scroll", scrollFunction);
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("top_banner").style.top = "-15px"; document.getElementById("top_banner").style.backgroundColor="rgba(0,0,0,0.5)";
          } else {
            document.getElementById("top_banner").style.top = "0";
              document.getElementById("top_banner").style.backgroundColor="transparent";
          }
        }
    
         
     
    $('.dropdown_collection').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 4.5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 4.5
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});
    
    $(".dropdown_collection div img").mouseover(function() {
       $(this).css("transform","scale(1.03)").css("opacity","0.5").css("transition","all 0.3s ease"); 
    }).mouseout(function() {
        $(this).css("transform","scale(1)").css("opacity","1");
    });
                                   
    
});//end