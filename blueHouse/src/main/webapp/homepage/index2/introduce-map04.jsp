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
        title: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 수궁터 ',
        description: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 수궁터 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/introduce-map04',
          webUrl: 'https://www.opencheongwadae.kr/introduce-map04',
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
</script>     <h1 id="contents_title">수궁터</h1>
         </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      <!-- ※ facWrap에 t1 ~ t5 클래스로 스타일 구분 -->
<div class="facWrap t4">
  <h2 class="fac_title">수궁터</h2>
<div class="fac_top radial"><a href="introduce-map03.jsp" class="arrow_btn prev"><span class="sr_only">대통령 관저 자세히 보기 페이지로 이동</span></a> <img src="https://www.opencheongwadae.kr/_html/img/sub/fac_topAi_4.png" alt=""> <a href="introduce-map05.jsp" class="arrow_btn next"><span class="sr_only">상춘재 자세히 보기 페이지로 이동</span></a></div>
<div class="white_box">
<p>지금 청와대가 위치한 곳은 조선시대 경복궁의 후원이었다.<br> 고종 5년에 경복궁이 중건되면서 융문당, 융무당, 오운각 등의 건물이 들어서고 과거시험이나 무술대회가 열리기도 했다.<br> 현재의 수궁터는 당시 왕궁을 지키는 수궁(守宮)의 자리였다. 일제시대 조선총독부는 이 수궁터에 총독의 관사를 지었으며,<br> 광복 이후에는 미군정 사령부 하지 중장의 거처로 사용되기도 했다.<br> 대한민국 정부 수립 이후에는 경무대, 청와대로 이름이 바뀌어 가며 대통령 집무실 겸 관저로 사용됐다.<br> 1991년 청와대 본관을 새롭게 건축한 후 1993년 11월 역사 바로세우기 차원에서 그 건물을 철거하고 수궁터로 복원했다.</p>
</div>
<!-- ※ col1~3 클래스로 한 라인의 이미지 수 결정 (최대 3개) -->
<ul class="img_list col2">
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_4_1.jpg" alt=""></li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_4_2.jpg" alt=""></li>
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