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
        title: '청와대, 국민 품으로 – 청와대 소개 – 역사 ',
        description: '청와대, 국민 품으로 – 청와대 소개 – 역사 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/introduce-history',
          webUrl: 'https://www.opencheongwadae.kr/introduce-history',
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
</script>     <h1 id="contents_title">역사</h1>
         </div>
    <div id="contents_body">
     <div class="example_wrap">
      <div class="history_wrap">
<div class="top_box">
<div class="txt_box">
<p class="s_txt">청와대의 주소는 서울시 종로구 청와대로 1번지입니다. <br>북악산을 배경으로 자리 잡고 있으며, 시청과 종로·을지로 등 도심 사무실 밀집지역의 북쪽에 있습니다.</p>
<p class="s_txt">청와대의 주소는 일제 강점기인 1911년 12월 20일 ‘광화문 1번지’로 정해졌었는데, <br>광복 다음 해인 1946년 1월 1일부터 일본식 주소가 한국식으로 바뀌면서 ‘세종로 1번지’가 되었습니다.</p>
</div>
<span class="img"><img src="https://www.opencheongwadae.kr/_html/img/sub/history_img01.png" alt=""></span></div>
<div class="history_list"><span class="progressbar"><span class="progress" style="height: 0%;"></span></span>
<ul>
<li><span class="img"><img src="https://www.opencheongwadae.kr/_html/img/sub/history_img02.png" alt=""><em class="r_img"><strong>남경 왕궁 배치 추정 복원도</strong></em></span>
<div class="txt_box">
<h5 class="l_tit">고려시대</h5>
<strong class="s_tit">이궁(離宮)이 있던 자리</strong>
<p class="s_txt">청와대 부근이 역사에 처음 등장한 것은 고려 숙종 때인 1104년 무렵 고려의 이궁이 이 곳에 들어서면서 부터입니다. 고려는 풍수지리설에 따라 도읍이었던 개경(지금의 북한 개성)과 함께 서경(평양), 동경(경주)의 세 곳을 삼경으로 두었는데 숙종 때 동경 대신 이곳에 이궁을 설치하고 남경으로 삼았습니다. 남경이란 ‘남쪽의 서울’ 이란 뜻이 담겨져 있습니다.</p>
</div>
</li>
<li>
<div class="img"><img src="https://www.opencheongwadae.kr/_html/img/sub/history_img03.png" alt="">
<ul class="r_img">
<li><strong>1. 경복궁도</strong>문화재청, 『사진으로 보는 경복궁』<br> 2006년, 75면 전체</li>
<li><strong>2. 경복궁도 </strong>조선 영조 43(1767)년 이후,<br> 서울역사박물관 소장</li>
<li><strong>3. 경복궁전도 </strong>조선 영조 43(1767)년 이후,<br> 서울 삼성출판박물관 소장</li>
</ul>
</div>
<div class="txt_box">
<h5 class="l_tit">조선시대</h5>
<strong class="s_tit">경복궁의 후원터</strong>
<p class="s_txt">청와대 자리가 다시 역사에 등장한 것은 조선의 건국과 함께 도읍을 옮기자는 주장이 시작되면서 부터였습니다.</p>
<p class="s_txt">조선의 첫 임금인 태조 이성계는1394년 새로운 서울을 세우기 위한 <span class="in_block">&lt;신도궁궐조성도감(新都宮闕造成都監)&gt;</span>이라는 특별 기구를 만들었습니다. 그리고 관리들을 보내 궁궐터를 찾아보게 했는데 고려 숙종 때의 이궁 자리는 너무 좁아서 새로 궁궐을 짓기가 어려우므로 좀 더 남쪽으로 내려가서 궁궐을 지어야 한다고 의견이 모아졌습니다. 즉, 오늘날의 청와대 터에서 좀 더 내려간 평지에 왕궁을 짓기로 한 것이지요.<br> 태조는 그 해 12월 정도전으로 하여금 궁궐 짓는 일을 시작하도록 했고 이듬해에 본격적으로 시작하여 9월에 궁을 완성하였습니다. 이렇게 만들어진 궁이 바로 경복궁입니다.</p>
<p class="s_txt">경복궁이 완성된 뒤 세종 8년인 1426년 현재의 청와대 자리에 경복궁의 후원(뒤뜰)이 조성되었습니다. 이때 후원에는 서현정, 연무장, 과거 시험장이 만들어졌습니다. 1592년 임진왜란이 일어나면서 경복궁과 이 곳은 완전히 폐허가 되었습니다. 경복궁과 그 후원인 지금의 청와대 근처는 270년 동안 방치되었다가 고종 2년인 1865년 흥선대원군의 노력으로 다시 지어졌습니다. 이 당시에 함께 건축되어 후세까지도 이름을 남기게 된 경무대도 지어졌는데, 경무대는 창덕궁 후원의 춘당대 뒤를 이어 인재를 등용하는 ‘과거장’으로서의 기능을 이어갔습니다.</p>
<p class="s_txt">경복궁은 고종 33, 건양 1(1896)년 소위 아관파천으로 고종 황제가 경운궁으로 떠나자 정궁으로서의 위상이 급속히 추락했습니다. 고종이 이어(移御)한 경운궁은 대한제국 황궁으로서의 면모를 갖추기 위해 증축했습니다.</p>
</div>
</li>
<li><span class="img"><img src="https://www.opencheongwadae.kr/_html/img/sub/history_img04.png" alt=""></span>
<div class="txt_box">
<h5 class="l_tit">일제 강점기 시대</h5>
  <strong class="s_tit">청와대 자리</strong>
<p class="s_txt">1929년 조선총독부 통치 20주년 기념으로 개최한 조선박람회가 경복궁과 옛 후원 자리에서 열리면서 이 곳의 조선시대 및 대한제국 건물들은 대부분 철거되었습니다. 일제는 1937년부터 1939년에 걸쳐 조선박람회 이후 한동안 공원으로 남아있던 옛 후원 자리에 조선 총독의 관사를 지었습니다. 이후 조선 총독의 관사 일대를 경무대라고 불렀습니다.</p>
</div>
</li>
<li>
<div class="txt_box">
<h5 class="l_tit">경무대에서 청와대로</h5>
<p class="s_txt">1948년 8월 15일 대한민국 정부가 수립된 뒤 이승만 대통령 내외는 이화장에서 일제 총독 관저였던 경무대로 거처를 옮겼습니다. 경무대는 제4대 윤보선 전 대통령 시절부터 ‘청와대’라는 지금의 이름을 가지게 되었고 오늘날까지 푸른 기와의 청와대로 불리고 있습니다.</p>
</div>
</li>
</ul>
</div>
<span class="org_tag">출처 : 대통령 기록관</span></div>     </div>
    </div>
   </div>
  </div>
 </main>
 
 <%@include file="/footer.jsp" %>