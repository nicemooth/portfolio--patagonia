$(document).ready(function () {
    
    
//    document.addEventListener("scroll", () => {
//        console.log(window.scrollY);
//    });
    
    //sticky
    var element1 = document.getElementsByClassName("main_04-txt")
    var element2 = document.getElementsByClassName("background_logo"); 
    Stickyfill.add(element1);
    Stickyfill.add(element2);

    //450 scroll event
   $(".circle1,.circle2,.circle3").css("opacity","0"); window.addEventListener("scroll",scrollevent1);
    function scrollevent1() {
        
        //당면한 문제
        if(document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
            document.querySelector("div.main_02-fir h3").style.left = 0;
            document.querySelector("div.main_02-fir h3 img").classList.add("size1");
            document.querySelector(".main_02-fir-sen").classList.add("text_col");
            document.querySelector(".main_02-sec").style.marginTop = "115px";
            document.querySelector(".main_02-fir-sen").style.top = "20%"; document.querySelector(".line1").classList.add("line_ev1");

            
        }else {
             document.querySelector("div.main_02-fir h3").style.left = "283px";
            document.querySelector("div.main_02-fir h3 img").classList.remove("size1");
            document.querySelector(".main_02-fir-sen").classList.remove("text_col");
            document.querySelector(".main_02-sec").style.marginTop = "0";
           document.querySelector(".main_02-fir-sen").style.top = "";
            document.querySelector(".line1").classList.remove("line_ev1");
        }
        //덜 사세요.
        if(document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
            document.querySelector(".line1").style.height = "1985px";
            document.querySelector(".main_02-sec h3 > img").classList.add("size1");
            document.querySelector(".main_02-sec h3").style.top = "-110px";
            document.querySelector(".main_02-sec h3").style.right = "195px";
            document.querySelector(".main_02-sec-sen").classList.add("text_col");
            document.querySelector(".main_02-sec-sen").style.top = "30%";
            document.querySelector(".line2").classList.add("line_ev2");
            document.querySelector(".line2").style.left = "0";
            document.querySelector(".main_02-sec h4").style.top = "50%";
            document.querySelector(".circle4").style.opacity = "0.3";
            document.querySelector(".circle5").style.opacity = "0.7";
            document.querySelector(".circle6").style.opacity = "0.5";
            document.querySelector(".circle4").style.top = "190px";
            document.querySelector(".circle5").style.top = "190px";
            document.querySelector(".circle6").style.top = "190px";
        }else {
            document.querySelector(".line1").style.height = "";
            document.querySelector(".main_02-sec h3 > img").classList.remove("size1");
            document.querySelector(".main_02-sec h3").style.top = "";
            document.querySelector(".main_02-sec h3").style.right = "";
            document.querySelector(".main_02-sec-sen").classList.remove("text_col");
            document.querySelector(".main_02-sec-sen").style.top = "";
            document.querySelector(".main_02-sec h4").style.top = "25%";
            document.querySelector(".line2").classList.remove("line_ev2");
            document.querySelector(".line2").style.left = "";
            document.querySelector(".circle4").style.opacity = "0";
            document.querySelector(".circle5").style.opacity = "0";
            document.querySelector(".circle6").style.opacity = "0";
            document.querySelector(".circle4").style.top = "230px";
            document.querySelector(".circle5").style.top = "230px";
            document.querySelector(".circle6").style.top = "230px";
        }
        //더 요구하세요.
        if(document.body.scrollTop > 2700 || document.documentElement.scrollTop >2700) {
            document.querySelector(".main_02-thi h3 img").classList.add("size1");
            document.querySelector(".main_02-thi-img").style.marginLeft = "0";
            document.querySelector(".line3").classList.add("line_ev1");
            document.querySelector(".line3").style.top = "0";
            document.querySelector(".main_02-thi-sen").classList.add("text_col");
            document.querySelector(".main_02-thi-sen").style.top = "400px";
            document.querySelector(".main_02-thi-sen").style.left = "200px";
            document.querySelector(".main_02-thi").style.top = "-150px";
            document.querySelector(".main_02-thi-img h4").style.top = "490px";
            document.querySelector(".circle1").style.opacity = "0.7";
            document.querySelector(".circle2").style.opacity = "0.5";
            document.querySelector(".circle3").style.opacity = "0.3";
        }else {
            document.querySelector(".main_02-thi h3 img").classList.remove("size1");
            document.querySelector(".main_02-thi-img").style.marginLeft = "";
            document.querySelector(".line3").classList.remove("line_ev1");
            document.querySelector(".line3").style.top = "";
            document.querySelector(".main_02-thi-sen").classList.remove("text_col");
            document.querySelector(".main_02-thi-sen").style.top = "";
            document.querySelector(".main_02-thi-sen").style.left = "";
            document.querySelector(".main_02-thi").style.top = "";
            document.querySelector(".main_02-thi-img h4").style.top = "";
            document.querySelector(".circle1").style.opacity = "0";
            document.querySelector(".circle2").style.opacity = "0";
            document.querySelector(".circle3").style.opacity = "0";
        }
        
    }//scroll event1 end
    
    //main_03 button
    $("#main_03").hover(function() {
        $(this).find("button").css({
            backgroundColor: "#ffffff",
            color: "#333333"
        });
    },function() {
        $(this).find("button").css({
            backgroundColor: "",
            color: ""
        });
    });
    
    
   $("#main_03 p, #main_03 button").css("opacity","0"); window.addEventListener("scroll",scrollevent2);
    function scrollevent2 () {
        if(document.body.scrollTop > 3650 || document.documentElement.scrollTop > 3650) {
           $("#main_03 p").css({opacity:"1"});
           $("#main_03 button").css({opacity:"1"});
           }else {
           $("#main_03 p").css({opacity:"0"});
           $("#main_03 button").css({opacity:"0"});
           }
    }
    
    //main4 img,button hover
    $(".com2").hover(function() {
    $(this).find("img").css("transform","scale(1.5)");
    $(this).find(".com5").css("opacity","1");
    $(this).find("button").css({
        color: "#333333",
        backgroundColor: "#ffffff"
        });
    },function() {
    $(this).find("img").css("transform","");   
    $(this).find(".com5").css("opacity","");
    $(this).find("button").css({
        color: "",
        backgroundColor: ""
        });    
    });
    
    //main 6 hover
    $(".com6").hover(function() {
        $(this).find("img").css("transform","scale(1.2)");
        $(this).find("button").css({
            backgroundColor: "#ffffff",
            color: "#333333",
        })
    },function() {
        $(this).find("img").css("transform","scale(1)");
        $(this).find("button").css({
            backgroundColor: "",
            color: "",
        })
    });
    
    //slick slide
    $('.main_01-wrap').slick({
        autoplay: true,
        autoplaySpeed: 3500
    });



}); //end
