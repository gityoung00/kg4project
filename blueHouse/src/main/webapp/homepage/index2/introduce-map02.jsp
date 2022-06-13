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
        title: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 영빈관 ',
        description: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 영빈관 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/introduce-map02',
          webUrl: 'https://www.opencheongwadae.kr/introduce-map02',
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
</script>     <h1 id="contents_title">영빈관</h1>
         </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      <!-- ※ facWrap에 t1 ~ t5 클래스로 스타일 구분 -->
<div class="facWrap t2">
  <h2 class="fac_title">영빈관</h2>
<div class="fac_top radial"><a href="introduce-map01.jsp" class="arrow_btn prev"><span class="sr_only">청와대 본관 자세히 보기 페이지로 이동</span></a> <img src="https://opencheongwadae.kr/_html/img/sub/fac_topAi_2.png" alt=""> <a href="introduce-map03.jsp" class="arrow_btn next"><span class="sr_only">대통령 관저 자세히 보기 페이지로 이동</span></a></div>
<div class="white_box">
<p>대규모 회의와 외국 국빈들을 위한 공식행사를 열었던 건물이다. 외국의 대통령이나 총리가 방문했을 때 우리나라를 알리는<br> 민속공연과 만찬 등이 베풀어지는 공식 행사장으로 이용되거나 100명 이상 대규모 회의 및 연회를 위한 장소로도 사용됐다.<br> 1978년 1월에 착공해 그해 12월 준공됐으며 18개의 돌기둥이 건물 전체를 떠받들고 있는 웅장한 형태로<br> 내부에는 우리나라를 상징하는 무궁화, 월계수, 태극무늬가 형상화돼 있다.<br> 1층과 2층에는 똑같은 홀이 있는데 1층은 접견장으로 외국 국빈의 접견행사를 치르는 곳으로,<br> 2층은 만찬장으로 대규모 오찬 및 만찬 행사를 하기 위한 장소로 활용했다.</p>
</div>
<!-- ※ col1~3 클래스로 한 라인의 이미지 수 결정 (최대 3개) -->
<ul class="img_list col3">
<li><img src="https://opencheongwadae.kr/_html/img/sub/fac_img_2_1.jpg" alt=""></li>
<li><img src="https://opencheongwadae.kr/_html/img/sub/fac_img_2_2.jpg" alt=""></li>
<li><img src="https://opencheongwadae.kr/_html/img/sub/fac_img_2_3.jpg" alt=""></li>
</ul>
<div class="btn_area"><a href="introduce-map00.jsp" class="defBtn fill arrow">전체지도 보기</a></div>
<div class="facBg"></div>
</div>     </div>
    </div>
   </div>
  </div>
 </main>
 <%@include file="/footer.jsp" %>