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
        title: '청와대, 국민 품으로 – 관람안내 – 활용 프로그램 ',
        description: '청와대, 국민 품으로 – 관람안내 – 활용 프로그램 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/sub0508',
          webUrl: 'https://www.opencheongwadae.kr/sub0508',
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
</script>     <h1 id="contents_title">활용 프로그램</h1>
     <div class="depth3_tab"><button class="m_active" style="display: none;"><span>활용 프로그램</span><i class="xi-angle-down-min"></i></button>
 <ul class="tab_list rowTab">
     <li class=""><a href="sub1.jsp">관람시간 및 해설안내</a></li>
						<li class=""><a href="sub2.jsp">관람 신청</a></li>
						<li class=""><a href="sub3.jsp">안내도 및 관람코스</a></li>
						<li class="active"><a href="sub4.jsp">활용 프로그램</a></li>
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
      <div class="usePro_wrap">
<ul class="usePro_list">
<li>
<div class="usePro_item">
<div class="usePro_top">
<div class="img_box"><img src="https://www.opencheongwadae.kr/_html/img/sub/usePro_img1.jpg" alt=""></div>
<div class="desc_box"><span>대규모 회의와 외국 국빈들을 위한 공식행사를 열었던 건물</span> <strong>영빈관 내부 개방 프로그램</strong>
<p>영빈관은 대규모 회의와 외국 국빈들을 위한 공식행사를 열었던 건물로써, 외국의 대통령이나 총리가 방문했을 때 우리나라를 알리는 민속공연과 만찬 등이 베풀어지는 공식 행사장으로 이용되었던 공간입니다. 우리나라를 상징하는 무궁화, 월계수, 태극무늬가 형상화되어있는 아름다운 무늬로 장식된 연회장을 방문하여 포토존에서 멋진 인생샷을 남겨보세요.</p>
</div>
</div>
<ul class="info_list">
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/apply_icon_5.png" alt="" class="icon"> <strong class="title">활용내용</strong>
<p class="desc">국빈 만찬 등 공식행사가 개최되었던 영빈관 1층을 개방하고, 영빈관의 주요 용도와 관련 기록을 소개</p>
</li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/apply_icon_2.png" alt="" class="icon"> <strong class="title">개방기간</strong>
<p class="big_desc">5.23.(월) ~ 계속</p>
</li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/apply_icon_6.png" alt="" class="icon"> <strong class="title">출입동선</strong>
<p class="desc"><i>영빈관 로비 입장 -&gt; 1층홀 입장 </i> <i>-&gt; 포토존 촬영 -&gt; 1층 홀퇴장 </i> <i>-&gt; 영빈관 로비 퇴장</i></p>
</li>
</ul>
<a href="../index2/introduce-map02.jsp" class="defBtn fill arrow">영빈관 시설안내</a></div>
</li>
<li>
<div class="usePro_item">
<div class="usePro_top">
<div class="img_box"><img src="https://www.opencheongwadae.kr/_html/img/sub/usePro_img2.jpg" alt=""></div>
<div class="desc_box"><span>대통령의 기자 회견 장소와 출입 기자들의 기사송고실</span> <strong>춘추관 내부 개방 프로그램</strong>
<p>1990년 완공된 춘추관은 원래 대통령의 기자회견 및 출입기자들의 기사 송고실로 사용하기 위해 만들어진 곳입니다. 춘추관이라는 명칭은 고려와 조선시대에 역사기록을 맡아보던 관아인 춘추관·예문 춘추관에서 비롯된 것으로, 엄정하게 역사를 기록한다는 의미가 오늘날의 자유 언론의 정신을 잘 상징한다는 뜻에서 채택되었습니다. 역대 대통령들이 직접 기자회견을 하던 2층 브리핑룸의 포디움 위에 직접 서서 멋진 컨셉샷을 찍어보세요.</p>
</div>
</div>
<ul class="info_list">
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/apply_icon_5.png" alt="" class="icon"> <strong class="title">활용내용</strong>
<p class="desc">대통령 기자회견 장소로 사용되었던 춘추관 2층 브리핑룸을 국민들에게 개방하고, 포디움에 직접 서서 촬영할 수 있는 포토존 마련</p>
</li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/apply_icon_2.png" alt="" class="icon"> <strong class="title">개방기간</strong>
<p class="big_desc">5.23.(월) ~ 계속</p>
</li>
<li><img src="https://www.opencheongwadae.kr/_html/img/sub/apply_icon_6.png" alt="" class="icon"> <strong class="title">출입동선</strong>
<p class="desc"><i>춘추관 입장 -&gt; 2층 브리핑룸</i> <i>-&gt; 포토존 촬영 -&gt; 1층 포디움 촬영</i> <i>-&gt; 춘추관 퇴장</i></p>
</li>
</ul>
<a href="../index2/introduce-map08.jsp" class="defBtn fill arrow">춘추관 시설안내</a></div>
</li>
</ul>
</div>     </div>
     <!-- 컨텐츠 내용이 들어갑니다 -->
    </div>
   </div>
  </div>
 </main>
<%@ include file="/footer.jsp"%>