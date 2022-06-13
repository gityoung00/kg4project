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
        title: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 춘추관 ',
        description: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 춘추관 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/introduce-map08',
          webUrl: 'https://www.opencheongwadae.kr/introduce-map08',
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
</script>     <h1 id="contents_title">춘추관</h1>
         </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      <!-- ※ facWrap에 t1 ~ t5 클래스로 스타일 구분 -->
<div class="facWrap t3">
<h2 class="fac_title">춘추관</h2>
<div class="fac_top radial"><a href="introduce-map07.jsp" class="arrow_btn prev"><span class="sr_only">대통령비서실 자세히 보기 페이지로 이동</span></a> <img src="https://www.opencheongwadae.kr/_html/img/sub/fac_topAi_8.png" alt=""> <a href="introduce-map09.jsp" class="arrow_btn next"><span class="sr_only">무궁화동산 자세히 보기 페이지로 이동</span></a></div>
<div class="white_box">
<p>1990년에 완공된 춘추관은 대통령의 기자 회견 장소와 출입 기자들의 기사송고실로 사용하기 위해 만들어졌다.<br> 춘추관이라는 명칭은 고려와 조선시대 역사기록을 맡아보던 관아인 춘추관·예문 춘추관에서 비롯된 것으로,<br> 엄정하게 역사를 기록한다는 의미가 오늘날의 자유 언론의 정신을 잘 상징한다는 뜻에서 채택됐다.<br> 춘추관은 주위 경관과 잘 어울리게 맞배지붕에 토기와를 올려 전통적인 우아한 멋이 깃들여져 있다.</p>
</div>
<!-- ※ col1~3 클래스로 한 라인의 이미지 수 결정 (최대 3개) -->
<ul class="img_list col3">
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_8_1.jpg" alt=""></li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_8_2.jpg" alt=""></li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_8_3.jpg" alt=""></li>
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