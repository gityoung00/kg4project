<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@include file="/header.jsp" %>
<main id="main">
  <div class="main_wrap">
   <div id="contents">
    <div class="contents_util">
     <div class="share">
 <h2 class="title"><a href="" class="btn open u_btn"><i class="xi-share-alt-o"></i></a><a href="#share" class="close"><i class="xi-close"></i></a></h2>
 <div class="item">
  <ul id="share" class="list">
   <li class="facebook"><a href="@facebook" class="social"><img src="https://opencheongwadae.kr/_html/img/sub/sns_facebook.png" alt=""></a></li>
   <li class="band"><a href="@band" class="social"><img src="https://opencheongwadae.kr/_html/img/sub/sns_band.png" alt=""></a></li>
   <li class="kakao"><a href="javascript:kakaoShare()" class=""><img src="https://opencheongwadae.kr/_html/img/sub/sns_kakao.png" alt=""></a></li>
  </ul>
 </div>
</div>

<script type="text/javascript">
  Kakao.init('9da64b9dda2ac6b378ebe13069219e47');

  function kakaoShare() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 칠궁 ',
        description: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 칠궁 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/introduce-map10',
          webUrl: 'https://www.opencheongwadae.kr/introduce-map10',
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
</script>     <h1 id="contents_title">칠궁</h1>
         </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      <!-- ※ facWrap에 t1 ~ t5 클래스로 스타일 구분 -->
<div class="facWrap t5">
  <h2 class="fac_title">칠궁</h2>
<div class="fac_top radial mb5"><a href="introduce-map09.jsp" class="arrow_btn prev"><span class="sr_only">무궁화동산 자세히 보기 페이지로 이동</span></a> <img src="https://opencheongwadae.kr/_html/img/sub/fac_topAi_10.png" alt=""> <a href="introduce-map01.jsp" class="arrow_btn next"><span class="sr_only">청와대 본관 자세히 보기 페이지로 이동</span></a></div>
<div class="white_box">
<p>칠궁은 조선 시대 때 왕을 낳은 후궁들의 위패를 모신 곳으로 청와대 서남쪽에 위치하고 있다.<br> 이곳에는 육상궁(毓祥宮·숙종의 후궁 숙빈 최씨)과 저경궁(儲慶宮·선조의 후궁 인빈 김씨), 대빈궁(大嬪宮·숙종의 후궁 희빈 장씨),<br> 연호궁(延祜宮·영조의 후궁 정빈 이씨), 선희궁(宣禧宮·영조의 후궁 영빈 이씨), 경우궁(景祐宮·정조의 후궁 수빈 박씨), 덕안궁(德安宮·고종의 후궁 엄씨) 등 7개의 사당이 있어 칠궁이라 한다. 1968년 이후 일반인의 출입이 금지됐으나 2001년 11월 24일부터 다시 일반에게 공개됐다.<br> 관람객 방문이 가능해진 이후 기존의 청와대 관람과 연계해 칠궁 관람이 이뤄지곤 했다.</p>
</div>
<!-- ※ col1~3 클래스로 한 라인의 이미지 수 결정 (최대 3개) -->
<ul class="img_list col3">
<li><img src="https://opencheongwadae.kr/_html/img/sub/fac_img_10_1.jpg" alt=""></li>
<li><img src="https://opencheongwadae.kr/_html/img/sub/fac_img_10_2.jpg" alt=""></li>
<li><img src="https://opencheongwadae.kr/_html/img/sub/fac_img_10_3.jpg" alt=""></li>
</ul>
<div class="btn_area"><a href="introduce-map00.jsp" class="defBtn fill arrow">전체지도 보기</a></div>
<div class="facBg"></div>
</div>     </div>
     <!-- 컨텐츠 내용이 들어갑니다 -->
    </div>
   </div>
  </div>
 </main>
 <%@include file="/footer.jsp" %>