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
        title: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 지도 및 주요시설 ',
        description: '청와대, 국민 품으로 – 청와대 소개 – 지도 및 주요시설 – 지도 및 주요시설 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/introduce-map00',
          webUrl: 'https://www.opencheongwadae.kr/introduce-map00',
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
</script>     <h1 id="contents_title">지도 및 주요시설</h1>
         </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      <div class="cwd_map">
<p class="intro_txt"><img src="https://www.opencheongwadae.kr/_html/img/sub/map_cwd_icon01.png" alt="">지도 내의 장소를 클릭하여 자세히 살펴보세요</p>
<div class="map_box"><img src="https://www.opencheongwadae.kr/_html/img/sub/map_cwd.png" alt="청와대 지도" usemap="#Map" class="mapImg"> <map name="Map"> 
<area shape="rect" coords="417,13,676,122" href="/blueHouse/homepage/index2/introduce-map01.jsp" alt="청와대 본관">
 
<area shape="rect" coords="354,286,430,364" href="/blueHouse/homepage/index2/introduce-map02.jsp" alt="영빈관">
 
<area shape="rect" coords="893,18,1099,117" href="/blueHouse/homepage/index2/introduce-map03.jsp" alt="대통령 관저">
 
<area shape="rect" coords="724,108,810,171" href="/blueHouse/homepage/index2/introduce-map04.jsp" alt="수궁터">
 
<area shape="rect" coords="843,186,974,280" href="/blueHouse/homepage/index2/introduce-map05.jsp" alt="상춘재">
 
<area shape="rect" coords="845,316,932,387" href="/blueHouse/homepage/index2/introduce-map06.jsp" alt="녹지원">
 
<area shape="rect" coords="678,402,880,514" href="/blueHouse/homepage/index2/introduce-map07.jsp" alt="대통령비서실">
 
<area shape="rect" coords="933,462,1122,560" href="/blueHouse/homepage/index2/introduce-map08.jsp" alt="춘추관">
 
<area shape="rect" coords="8,342,169,456" href="/blueHouse/homepage/index2/introduce-map09.jsp" alt="무궁화동산">
 
<area shape="rect" coords="107,191,326,245" href="/blueHouse/homepage/index2/introduce-map10.jsp" alt="칠궁">
 </map>
<ol class="map_number">
<li class="m1"><a href="/blueHouse/homepage/index2/introduce-map01.jsp"> <i>1</i>
<div class="label"><strong>청와대 본관</strong></div>
</a></li>
<li class="m2"><a href="/blueHouse/homepage/index2/introduce-map02.jsp"> <i>2</i>
<div class="label"><strong>영빈관</strong></div>
</a></li>
<li class="m3"><a href="/blueHouse/homepage/index2/introduce-map03.jsp"> <i>3</i>
<div class="label"><strong>대통령 관저</strong></div>
</a></li>
<li class="m4"><a href="/blueHouse/homepage/index2/introduce-map04.jsp"> <i>4</i>
<div class="label"><strong>수궁터</strong></div>
</a></li>
<li class="m5"><a href="/blueHouse/homepage/index2/introduce-map05.jsp"> <i>5</i>
<div class="label"><strong>상춘재</strong></div>
</a></li>
<li class="m6"><a href="/blueHouse/homepage/index2/introduce-map06.jsp"> <i>6</i>
<div class="label"><strong>녹지원</strong></div>
</a></li>
<li class="m7"><a href="/blueHouse/homepage/index2/introduce-map07.jsp"> <i>7</i>
<div class="label"><strong>대통령비서실</strong></div>
</a></li>
<li class="m8"><a href="/blueHouse/homepage/index2/introduce-map08.jsp"> <i>8</i>
<div class="label"><strong>춘추관</strong></div>
</a></li>
<li class="m9"><a href="/blueHouse/homepage/index2/introduce-map09.jsp"> <i>9</i>
<div class="label"><strong>무궁화동산</strong></div>
</a></li>
<li class="m10"><a href="/blueHouse/homepage/index2/introduce-map10.jsp"> <i>10</i>
<div class="label"><strong>칠궁</strong></div>
</a></li>
</ol>
<script src="https://www.opencheongwadae.kr/_html/jquery/imageMapResizer.min.js"></script>
</div>
</div>     </div>
    </div>
   </div>
  </div>
 </main>
<%@include file="/footer.jsp" %>