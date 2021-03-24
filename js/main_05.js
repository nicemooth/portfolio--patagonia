$(document).ready(function() {
   $(".main_05-sub li").mouseover(function() {
       $(this).css("transform","scale(1.5)");
       $(this).css("transition","all 0.2s ease");
   }).mouseout(function() {
       $(this).css("transform","scale(1)");
   });    
     
    
    //1
    $(".main_05-sub li img:eq(0)").click(function() {
        $(".main_05-img img").eq(0).css("opacity","1").attr("src","images/main/bg1.png");
        $(".main_05-img img").eq(1).css("opacity","0").stop().attr("src","images/main/mat_1.png").animate({opacity: "1"},1000);
        
        $(".main_05-txt").css({top: "280px", opacity: "0"}).stop().animate({top: "250px", opacity: "1"},1000);
        
        
        $(".main_05-txt h5").text("리사이클 제품을 요구하세요.");
        $(".main_05-txt p:nth-child(2)").text("이번 시즌 파타고니아에서 사용한 원단 중 68%는 리사이클 소재입니다.");
        $(".main_05-txt p:nth-child(3)").text("리사이클 소재로 만들어지는 원단은 전 세계에서 생산되는 원단 중 10%도 되지 않습니다.");
        $(".main_05-txt p:nth-child(4)").text("만약 더 많은 기업이 리사이클 소재를 사용한다면 우리는 제품 생산에 필요한 석유 의존도를 더욱 줄일 수 있습니다.");
        $(".main_05-txt").css("width","848px");
        
        
    });
    
    //2
    $(".main_05-sub li img:eq(1)").click(function() {
        $(".main_05-img img").eq(0).css("opacity","1").attr("src","images/main/bg2.png");
        $(".main_05-img img").eq(1).css("opacity","0").stop().attr("src","images/main/mat_2.png").animate({opacity: "1"},1000);
        
        $(".main_05-txt").css({top: "280px", opacity: "0"}).stop().animate({top: "250px", opacity: "1"},1000);
        
        $(".main_05-txt h5").text("재생 유기농 인증 제품을 요구하세요.");
        $(".main_05-txt p:nth-child(2)").text("파타고니아는 재생 유기농 방식으로 목화를 재배하는 550개 이상의 농장에 투자하고 있습니다.");
        $(".main_05-txt p:nth-child(3)").text("전 세계에서 유기농 방식으로 재배되는 목화는 1%도 되지 않습니다.");
        $(".main_05-txt p:nth-child(4)").text("재생 유기농 방식을 고수하는 농장에 대한 투자가 늘어난다면, 많은 농부들을 도울 수 있고, 기후변화에 강한 건강한 토양을 만들 수 있습니다.");
        $(".main_05-txt").css("width","848px");
    });
    
    //3
    $(".main_05-sub li img:eq(2)").click(function() {
        $(".main_05-img img").eq(0).css("opacity","1").attr("src","images/main/bg3.png");
        $(".main_05-img img").eq(1).css("opacity","0").stop().attr("src","images/main/mat_3.png").animate({opacity: "1"},1000);
        
        $(".main_05-txt").css({top: "280px", opacity: "0"}).stop().animate({top: "250px", opacity: "1"},1000);
        
        $(".main_05-txt h5").text("헴프 사용을 요구하세요.");
        $(".main_05-txt p:nth-child(2)").text("올해 파타고니아는 68개 제품군에 헴프를 사용했습니다.");
        $(".main_05-txt p:nth-child(3)").text("전 세계 섬유 시장에서 헴프의 비율은 0.1%도 되지 않습니다.");
        $(".main_05-txt p:nth-child(4)").text("보다 많은 기업이 헴프를 사용한다면 석유 사용과 화학 비료의 사용을 줄이고 더욱 건강한 토양을 만들 수 있습니다.");
        $(".main_05-txt").css("width","570px");
    });
    
    //4
    $(".main_05-sub li img:eq(3)").click(function() {
        $(".main_05-img img").eq(0).css("opacity","1").attr("src","images/main/bg4.png");
        $(".main_05-img img").eq(1).css("opacity","0").stop().attr("src","images/main/mat_4.png").animate({opacity: "1"},1000);
        
        $(".main_05-txt").css({top: "280px", opacity: "0"}).stop().animate({top: "250px", opacity: "1"},1000);
        
        $(".main_05-txt h5").text("질 좋은 제품을 요구하세요.");
        $(".main_05-txt p:nth-child(2)").text("많은 옷들이 너무나 금방 버려지고 있습니다.");
        $(".main_05-txt p:nth-child(3)").text("지난 15년간 전 세계적으로 의류 사용 횟수는 36%나 감소했으며, 파타고니아의 모든 제품에는 철갑 보증(Ironclad Guarantee)이 적용됩니다.");
        $(".main_05-txt p:nth-child(4)").text("만약 더 많은 기업이 제품의 내구성에 보다 신경 쓴다면 우리는 불필요한 에너지 낭비와 물의 사용을 막을 수 있으며 배출되는 쓰레기의 양도 줄일 수 있습니다.");
        $(".main_05-txt").css("width","770px");
    });
    
    //5
    $(".main_05-sub li img:eq(4)").click(function() {
        $(".main_05-img img").eq(0).css("opacity","1").attr("src","images/main/bg5.png");
        $(".main_05-img img").eq(1).css("opacity","0").stop().attr("src","images/main/mat_5.png").animate({opacity: "1"},1000);
        
        $(".main_05-txt").css({top: "280px", opacity: "0"}).stop().animate({top: "250px", opacity: "1"},1000);
        
        
        $(".main_05-txt h5").text("트레이서블(Traceable) 다운 제품을 요구하세요.");
        $(".main_05-txt p:nth-child(2)").text("파타고니아 제품에 사용되는 다운은 100% ‘유통 과정 추적 다운(Traceable Down)’입니다.");
        $(".main_05-txt p:nth-child(3)").text("이것은 살아있는 거위, 푸아그라를 위해 강제로 사료를 먹여 키운 거위에서 얻은 다운이 절대 들어있지 않다는 것을 의미합니다. 파타고니아를 제외한 다른 아웃도어 브랜드에서 TDS 인증 다운을 사용하는 곳은 없습니다.");
        $(".main_05-txt p:nth-child(4)").text("만약 더 많은 기업이 TDS(Traceable Down Standard) 인증 다운을 사용한다면 다운 채취를 위해 강제로 사료를 먹이는 공급 체계로부터 윤리적인 보호 장치를 마련할 수 있습니다.");
        $(".main_05-txt").css("width","848px");
    });
    
    //6
    $(".main_05-sub li img:eq(5)").click(function() {
        $(".main_05-img img").eq(0).css("opacity","1").attr("src","images/main/bg6.png");
        $(".main_05-img img").eq(1).css("opacity","0").stop().attr("src","images/main/mat_6.png").animate({opacity: "1"},1000);
        
        $(".main_05-txt").css({top: "280px", opacity: "0"}).stop().animate({top: "250px", opacity: "1"},1000);
        
        $(".main_05-txt h5").text("유기농 원단 사용을 요구하세요.");
        $(".main_05-txt p:nth-child(2)").text("파타고니아 면 제품의 원료는 100% 유기농 방식으로 재배됩니다.");
        $(".main_05-txt p:nth-child(3)").text("전 세계에서 유기농 방식으로 재배되는 목화는 1%도 되지 않습니다.");
        $(".main_05-txt p:nth-child(4)").text("만약 의류 산업 전반에 걸쳐 유기농 방식이 채택된다면 우리는 건강한 토양을 되찾고 물과 탄소 배출량을 줄일 수 있습니다.");
        $(".main_05-txt").css("width","650px");
    });
    
    //7
    $(".main_05-sub li img:eq(6)").click(function() {
        $(".main_05-img img").eq(0).css("opacity","1").attr("src","images/main/bg7.png");
        $(".main_05-img img").eq(1).css("opacity","0").stop().attr("src","images/main/mat_7.png").animate({opacity: "1"},1000);
        
        $(".main_05-txt").css({top: "280px", opacity: "0"}).stop().animate({top: "250px", opacity: "1"},1000);
        
        $(".main_05-txt h5").text("더 나은 수선 서비스를 요구하세요.");
        $(".main_05-txt p:nth-child(2)").text("매년 1,120만 톤의 의류 폐기물이 매립지에 버려지고 있습니다.");
        $(".main_05-txt p:nth-child(3)").text("파타고니아는 올해 71,000점이 넘는 의류를 수선했습니다.");
        $(".main_05-txt p:nth-child(4)").text("보다 많은 기업이 수선 서비스를 소비자에게 적극적으로 제시한다면 옷의 수명은 길어질 것이고, 버려지는 옷의 양은 자연스레 줄어들 것입니다.");
        $(".main_05-txt").css("width","660px");
    });
    
    //8
    $(".main_05-sub li img:eq(7)").click(function() {
        $(".main_05-img img").eq(0).css("opacity","1").attr("src","images/main/bg8.png");
        $(".main_05-img img").eq(1).css("opacity","0").stop().attr("src","images/main/mat_8.png").animate({opacity: "1"},1000);
        
        $(".main_05-txt").css({top: "280px", opacity: "0"}).stop().animate({top: "250px", opacity: "1"},1000);
        
        $(".main_05-txt h5").text("리스판서블(Responsible) 울 제품을 요구하세요.");
        $(".main_05-txt p:nth-child(2)").text("파타고니아는 리스판서블 울 인증 기준(Responsible Wool Standard: 이하 RWS)에 따라 인증이 완료된 울을 사용합니다.");
        $(".main_05-txt p:nth-child(3)").text("전 세계에서 사용되는 RWS 인증 울은 1% 미만입니다.");
        $(".main_05-txt p:nth-child(4)").text("만약 더 많은 기업이 RWS 인증 울을 사용한다면 우리는 동물에 대한 윤리적 대우와 동물을 기르는 방목지의 토양 보호를 보다 장려할 수 있을 것입니다.");
        $(".main_05-txt").css("width","800px");
    });
    
    
    //9
    $(".main_05-sub li img:eq(8)").click(function() {
        $(".main_05-img img").eq(0).css("opacity","1").attr("src","images/main/bg9.png");
        $(".main_05-img img").eq(1).css("opacity","0").stop().attr("src","images/main/mat_9.png").animate({opacity: "1"},1000);
        
        $(".main_05-txt").css({top: "280px", opacity: "0"}).stop().animate({top: "250px", opacity: "1"},1000);
        
        $(".main_05-txt h5").text("율렉스® 천연 고무 제품을 요구하세요.");
        $(".main_05-txt p:nth-child(2)").text("파타고니아가 생산하는 Wetsuit는 100% FSC® 인증 천연고무로 만들어집니다.");
        $(".main_05-txt p:nth-child(3)").text("전 세계에서 생산되는 천연고무는 절반이 채 되지 않습니다.");
        $(".main_05-txt p:nth-child(4)").text("만약 더 많은 기업이 천연고무를 사용한다면 우리는 제품 생산에 필요한 석유 의존도를 더욱 줄일 수 있습니다.");
        $(".main_05-txt").css("width","800px");
    });
    
    
    //10
    $(".main_05-sub li img:eq(9)").click(function() {
        $(".main_05-img img").eq(0).css("opacity","1").attr("src","images/main/bg10.png");
        $(".main_05-img img").eq(1).css("opacity","0").stop().attr("src","images/main/mat_10.png").animate({opacity: "1"},1000);
        
        $(".main_05-txt").css({top: "280px", opacity: "0"}).stop().animate({top: "250px", opacity: "1"},1000);
        
        $(".main_05-txt h5").text("공정 무역 제품을 요구하세요.");
        $(".main_05-txt p:nth-child(2)").text("파타고니아 전체 제품 중 83%는 공정 무역 봉제 제품입니다.");
        $(".main_05-txt p:nth-child(3)").text("모든 의류 브랜드 중 가장 높은 수치입니다.");
        $(".main_05-txt p:nth-child(4)").text("보다 많은 의류 기업이 공정 무역에 동참한다면, 우리는 전 세계 수만 명의 생산 노동자들에게 더욱 나은 삶을 제공할 수 있습니다.");
        $(".main_05-txt").css("width","590px");
    });
});//end