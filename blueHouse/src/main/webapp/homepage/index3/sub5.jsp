<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/header.jsp"%>
<main id="main">
  <div class="main_wrap">
   <div id="contents">
    <div class="contents_util">
     <div class="share">
 <h2 class="title"><a href="" class="btn open u_btn"><i class="xi-share-alt-o"></i></a><a href="#share" class="close"><i class="xi-close"></i></a></h2>
 <div class="item">
  <ul id="share" class="list">
   <li class="facebook"><a href="@facebook" class="social"><img src="https://www.opencheongwadae.kr/_html/img/sub/sns_facebook.png" alt=""></a></li>
   <li class="band"><a href="@band" class="social"><img src="https://www.opencheongwadae.kr/_html/img/sub/sns_band.png" alt=""></a></li>
   <li class="kakao"><a href="javascript:kakaoShare()" class=""><img src="https://www.opencheongwadae.kr/_html/img/sub/sns_kakao.png" alt=""></a></li>
  </ul>
 </div>
</div>

<script type="text/javascript">
  Kakao.init('9da64b9dda2ac6b378ebe13069219e47');

  function kakaoShare() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '청와대, 국민 품으로 – 관람안내 – 오시는 길 ',
        description: '청와대, 국민 품으로 – 관람안내 – 오시는 길 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/sub050402',
          webUrl: 'https://www.opencheongwadae.kr/sub050402',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: '카카오공유하기 시 클릭 후 이동 경로',
            webUrl: '카카오공유하기 시 클릭 후 이동 경로',
          },
        },
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    })
  }
</script>     <h1 id="contents_title">오시는 길</h1>
     <div class="depth3_tab"><button class="m_active" style="display: none;"><span>오시는 길</span><i class="xi-angle-down-min"></i></button>
 <ul class="tab_list rowTab">
     <li class=""><a href="sub1.jsp">관람시간 및 해설안내</a></li>
						<li class=""><a href="sub2.jsp">관람 신청</a></li>
						<li class=""><a href="sub3.jsp">안내도 및 관람코스</a></li>
						<li class=""><a href="sub4.jsp">활용 프로그램</a></li>
						<li class="active"><a href="sub5.jsp">오시는 길</a></li>
						<li class=""><a href="event-tourism.jsp">함께 가 볼 만한 장소</a></li>
						<li class=""><a href="event-program.jsp">개방
								특별행사(5.10.~5.22.)</a></li>
						<li class=""><a href="sub6.jsp">주말 공연(5.28.~6.26.)</a></li>
   </ul>
</div>    </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      <div class="road_wrap">
<div class="road_map"><img src="https://www.opencheongwadae.kr/_html/img/sub/event_road_map.jpg" alt=""></div>
<div class="road_info">
<h2 class="roadInfo_tit">오시는 길</h2>
<dl>
<dt>버스</dt>
<dd>효자동 정류장에서 하차 (경복궁역 3번 출구 앞 ‘경복궁역 정류장’에서 1711, 1020, 7018, 7016, 7022, 7212번 버스 타시면 됩니다.)</dd>
</dl>
<dl>
<dt>지하철</dt>
<dd>
<ul class="dot_list">
<li>3호선 경복궁역 4번 출구 → 도보 15분 거리</li>
<li>3호선 안국역 1번 출구 → 도보 20분 거리</li>
</ul>
</dd>
</dl>
</div>
</div>
<div class="road_botBg"></div>
<!--<script>// <![CDATA[
$(function(){
       $(".contents_util").addClass("titView");
  $("#contents_title").text("행사 이모저모");
      });
// ]]></script>-->     </div>
     <!-- 컨텐츠 내용이 들어갑니다 -->
    </div>
   </div>
  </div>
 </main>
<%@ include file="/footer.jsp"%>