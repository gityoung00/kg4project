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
        title: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 무궁화 동산 ',
        description: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 무궁화 동산 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/introduce-map09',
          webUrl: 'https://www.opencheongwadae.kr/introduce-map09',
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
</script>     <h1 id="contents_title">무궁화 동산</h1>
         </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      <!-- ※ facWrap에 t1 ~ t5 클래스로 스타일 구분 -->
<div class="facWrap t4">
<h2 class="fac_title">무궁화동산</h2>
<div class="fac_top radial"><a href="introduce-map08.jsp" class="arrow_btn prev"><span class="sr_only">춘추관 자세히 보기 페이지로 이동</span></a> <img src="https://www.opencheongwadae.kr/_html/img/sub/fac_topAi_9.png" alt=""> <a href="introduce-map10.jsp" class="arrow_btn next"><span class="sr_only">칠궁 자세히 보기 페이지로 이동</span></a></div>
<div class="white_box">
<p>무궁화동산은 옛 중앙정보부의 궁정동 안전가옥(안가) 터에 마련된 시민휴식공원이다.<br> 본래 이곳은 청와대 구내로 출입이 금지되었던 곳이었으나 1993년 청와대 앞길이 개방된 뒤 시민공원으로 조성됐다.<br> 공원 내에는 나라꽃 무궁화와 함께 각종 수목과 야생화가 식재되어 있으며,<br> 맞은편에는 분수대가 있어 청와대를 찾는 관광객과 인근 주민들의 휴식처가 되고 있다.</p>
</div>
<!-- ※ col1~3 클래스로 한 라인의 이미지 수 결정 (최대 3개) -->
<ul class="img_list col2">
  <li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_9_1.jpg" alt=""></li>
       <li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_9_2.jpg" alt=""></li>
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