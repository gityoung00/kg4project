<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/header.jsp"%>
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
        title: '청와대, 국민 품으로 – 관람안내 – 안내도 및 관람코스 ',
        description: '청와대, 국민 품으로 – 관람안내 – 안내도 및 관람코스 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/sub0507',
          webUrl: 'https://www.opencheongwadae.kr/sub0507',
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
</script>     <h1 id="contents_title">안내도 및 관람코스</h1>
     <div class="depth3_tab"><button class="m_active" style="display: none;"><span>안내도 및 관람코스</span><i class="xi-angle-down-min"></i></button>
					<ul class="tab_list rowTab">
						<li class=""><a href="sub1.jsp">관람시간 및 해설안내</a></li>
						<li class=""><a href="sub2.jsp">관람 신청</a></li>
						<li class="active"><a href="sub3.jsp">안내도 및 관람코스</a></li>
						<li class=""><a href="sub4.jsp">활용 프로그램</a></li>
						<li class=""><a href="sub5.jsp">오시는 길</a></li>
						<li class=""><a href="event-tourism.jsp">함께 가 볼 만한 장소</a></li>
						<li class=""><a href="event-program.jsp">개방
								특별행사(5.10.~5.22.)</a></li>
						<li class=""><a href="sub6.jsp">주말 공연(5.28.~6.26.)</a></li>
					</ul>
				</div>    </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      <div class="course_wrap fes">
<div class="course_map"><img src="https://www.opencheongwadae.kr/_html/img/sub/fes_course_mapDef.jpg" alt="안내도 및 관람코스 지도">
<div class="btn_area">
  <a href="https://www.opencheongwadae.kr/_html/img/sub/fes_course_mapDef.jpg" class="btn mapSearch t2" target="_blank" rel="noopener noreferrer">지도 크게보기</a>
  </div>
</div>
<div class="course_list">
<div class="item">
<div class="tit"><strong><i>첫번째</i> 추천경로</strong></div>
<div class="refer"><span>정문 – 녹지원 – 침류각 – 관저 – 수궁터 – 소정원 – 본관 – 대정원 – 영빈관 – 영빈문 - 칠궁</span></div>
</div>
<div class="item">
<div class="tit"><strong><i>두번째</i> 추천경로</strong></div>
<div class="refer"><span>영빈문 – 영빈관 – 대정원 – 본관 – 소정원 – 수궁터 –관저 – 침류각 – 헬기장 – 춘추관 - 춘추문</span></div>
</div>
<div class="item">
<div class="tit"><strong><i>세번째</i> 추천경로</strong></div>
<div class="refer"><span>춘추문 – 헬기장 – 침류각 – 관저 – 수궁터 – 본관 – 대정원 – 영빈관 – 영빈문 - 칠궁</span></div>
</div>
</div>
</div>     </div>
     <!-- 컨텐츠 내용이 들어갑니다 -->
    </div>
   </div>
  </div>
 </main>
<%@ include file="/footer.jsp"%>