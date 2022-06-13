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
        title: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 대통령 관저 ',
        description: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 대통령 관저 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/introduce-map03',
          webUrl: 'https://www.opencheongwadae.kr/introduce-map03',
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
</script>     <h1 id="contents_title">대통령 관저</h1>
         </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      <!-- ※ facWrap에 t1 ~ t5 클래스로 스타일 구분 -->
<div class="facWrap t3">
<h2 class="fac_title">대통령 관저</h2>
<div class="fac_top radial"><a href="introduce-map02.jsp" class="arrow_btn prev"><span class="sr_only">영빈관 자세히 보기 페이지로 이동</span></a> <img src="https://www.opencheongwadae.kr/_html/img/sub/fac_topAi_3.png" alt=""> <a href="introduce-map04.jsp" class="arrow_btn next"><span class="sr_only">수궁터 자세히 보기 페이지로 이동</span></a></div>
<div class="white_box">
<p>대통령과 그 가족이 생활하는 대통령 관저는 대통령의 공적인 업무공간과 사적인 업무공간을 구분하기 위해 건립됐다.<br> 생활공간인 본채와 접견 행사 공간인 별채가 배치돼 있고 앞마당에는 우리나라 전통 양식의 뜰과 사랑채가 자리잡고 있다.<br> 대문은 전통 한옥의 분위기에 맞는 삼문으로 만들어졌다.<br> 전통적인 목조 구조로서 궁궐 건축양식인 팔작(八作)지붕의 겹처마에 한식 청기와를 얹은 ㄱ자형 지붕 형태를 띠고 있다.</p>
</div>
<!-- ※ col1~3 클래스로 한 라인의 이미지 수 결정 (최대 3개) -->
<ul class="img_list col3">
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_3_1.jpg" alt=""></li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_3_2.jpg" alt=""></li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/fac_img_3_3.jpg" alt=""></li>
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