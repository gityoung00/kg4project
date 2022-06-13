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
        title: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 녹지원 ',
        description: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 녹지원 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/introduce-map06',
          webUrl: 'https://www.opencheongwadae.kr/introduce-map06',
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
</script>     <h1 id="contents_title">녹지원</h1>
         </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      <!-- ※ facWrap에 t1 ~ t5 클래스로 스타일 구분 -->
<div class="facWrap t2">
  <h2 class="fac_title">녹지원</h2>
<div class="fac_top radial"><a href="introduce-map05.jsp" class="arrow_btn prev"><span class="sr_only">상춘재 자세히 보기 페이지로 이동</span></a> <img src="https://www.opencheongwadae.kr/_html/img/sub/fac_topAi_6.png" alt=""> <a href="introduce-map07.jsp" class="arrow_btn next"><span class="sr_only">대통령비서실 자세히 보기 페이지로 이동</span></a></div>
<div class="white_box">
<p>청와대 경내에서 가장 아름다운 곳으로 120여 종의 나무와 역대 대통령들의 기념식수가 있는 곳이다.<br> 조선시대에는 경복궁 신무문 밖 후원으로 문·무의 과거를 보는 장소로 이용됐으며, 이후 정원이 되면서 가축사육장과 온실 등의 부지로 사용됐다.<br> 야외행사장으로도 이용됐으며 매년 봄 어린이날 행사를 시작으로 어버이날, 장애인의 날 등 각종 다채로운 행사가 펼쳐졌다.<br> 또 주변에는 녹지원을 상징하는 소나무인 한국산 반송이 있는데 수령은 약 150여 년에 이르며 높이는 16m이다.</p>
</div>
<!-- ※ col1~3 클래스로 한 라인의 이미지 수 결정 (최대 3개) -->
<ul class="img_list col3">
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_6_1.jpg" alt=""></li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_6_2.jpg" alt=""></li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_6_3.jpg" alt=""></li>
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