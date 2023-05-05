//navigation
$(function () {
  $(".main-menu li").hover(function () {
    $(this).find(".sub-menu").stop().fadeToggle(200);
  });
});

//main
$(function () {
  var $slider = $(".main-slide"),
    $firstSlide = $slider
      .find("li")
      .first() // 첫번째 슬라이드
      .stop(true)
      .animate({ opacity: 1, transition: "0.8s" }, 200); // 첫번째 슬라이드만 보이게 하기

  // 이전버튼 함수
  function PrevSlide() {
    stopSlide();
    startSlide(); //타이머 초기화
    $lastSlide = $slider
      .find("li")
      .last() //마지막 슬라이드
      .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기
    $secondSlide = $slider
      .find("li")
      .eq(1) //두 번째 슬라이드 구하기
      .stop(true)
      .animate({ opacity: 0, transition: "0.8s" }, 200); //밀려난 두 번째 슬라이드는 fadeOut 시키고
    $firstSlide = $slider
      .find("li")
      .first() //맨 처음 슬라이드 다시 구하기
      .stop(true)
      .animate({ opacity: 1, transition: "0.8s" }, 200); //새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
  }

  // 다음 버튼 함수
  function NextSlide() {
    stopSlide();
    startSlide(); //타이머 초기화
    $firstSlide = $slider
      .find("li")
      .first() // 첫 번째 슬라이드
      .appendTo($slider); // 맨 마지막으로 보내기
    $lastSlide = $slider
      .find("li")
      .last() // 맨 마지막으로 보낸 슬라이드
      .stop(true)
      .animate({ opacity: 0, transition: "0.8s" }, 200); // fadeOut시키기
    $firstSlide = $slider
      .find("li")
      .first() // 맨 처음 슬라이드
      .stop(true)
      .animate({ opacity: 1, transition: "0.8s" }, 200); // fadeIn 시키기
  }

  $(".main-next").on("click", function () {
    //다음버튼 클릭
    NextSlide();
  });
  $(".main-prev").on("click", function () {
    //이전 버튼 클릭
    PrevSlide();
  });

  startSlide(); // 자동 슬라이드 시작

  var theInterval;

  function startSlide() {
    theInterval = setInterval(NextSlide, 5000); //자동 슬라이드 설정
  }

  function stopSlide() {
    clearInterval(theInterval); //자동 멈추기
  }

  $(".main-slide").hover(
    function () {
      stopSlide(); //마우스 hover시 슬라이드 멈춤
    },
    function () {
      startSlide();
    }
  );
});

//popup
$(function () {
  $(".popup-icon-menu").click(function () {
    $(".popup").show();
    $("#backview").show();
  });
  $(".popup-close").click(function () {
    $(".popup").hide();
    $("#backview").hide();
  });
});
