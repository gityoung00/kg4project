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
        title: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 청와대 본관 ',
        description: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 청와대 본관 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/introduce-map01',
          webUrl: 'https://www.opencheongwadae.kr/introduce-map01',
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
</script>     <h1 id="contents_title">청와대 본관</h1>
         </div>
    <div id="contents_body">
     <div class="example_wrap">
      <!-- ※ facWrap에 t1 ~ t5 클래스로 스타일 구분 -->
<div class="facWrap t1">
  <h2 class="fac_title">청와대 본관</h2>
<div class="fac_top mb5 radial"><a href="introduce-map10.jsp" class="arrow_btn prev"><span class="sr_only">칠궁 자세히 보기 페이지로 이동</span></a> <img src="https://www.opencheongwadae.kr/_html/img/sub/fac_topAi_1.png" alt=""> <a href="introduce-map02.jsp" class="arrow_btn next"><span class="sr_only">영빈관 자세히 보기 페이지로 이동</span></a></div>
<div class="white_box">
<p>조선시대 서울의 주산인 북악산의 정남향에 자리 잡고 있는 본관은 대통령의 집무와 외빈 접견 등에 사용된 중심 건물이다.<br> 일제 강점기 조선 총독이 거주하던 곳을 대통령 집무실 및 관저로 사용한다는 것이 대내외적으로 바람직하지 못하다는 주장이<br> 제기돼 1991년 9월 4일 신축됐다. 전통 목구조와 궁궐 건축양식을 기본으로 가장 격조 높고 아름답다는 팔작지붕을 올리고<br> 총 15만여 개의 한식 청기와를 이었다. 2층 본채를 중심으로 좌우에 단층의 별채를 배치했다.</p>
</div>
<!-- ※ col1~3 클래스로 한 라인의 이미지 수 결정 (최대 3개) -->
<ul class="img_list col3">
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_1_1.jpg" alt=""></li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_1_2.jpg" alt=""></li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_1_3.jpg" alt=""></li>
</ul>
<div class="btn_area"><a href="introduce-map00.jsp" class="defBtn fill arrow">전체지도 보기</a></div>
<div class="facBg"></div>
</div>     </div>
    </div>
   </div>
  </div>
 </main>
 <%@include file="/footer.jsp" %>