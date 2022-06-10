<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../../header.jsp" %>
		<main id="main">
			<div class="main_wrap">
				<div id="contents">
					<div class="contents_util">
						<div class="share">
							<h2 class="title">
								<a href="" class="btn open u_btn"><i class="xi-share-alt-o"></i></a><a
									href="#share" class="close"><i class="xi-close"></i></a>
							</h2>
							<div class="item">
								<ul id="share" class="list">
									<li class="facebook"><a href="@facebook" class="social"><img
											src="/blueHouse/img/homepage/등산로/등산로개요/sns_facebook.png" alt=""></a></li>
									<li class="band"><a href="@band" class="social"><img
											src="/blueHouse/img/homepage/등산로/등산로개요/sns_band.png" alt=""></a></li>
									<li class="kakao"><a href="javascript:kakaoShare()"
										class=""><img src="/blueHouse/img/homepage/등산로/등산로개요/sns_kakao.png" alt=""></a></li>
								</ul>
							</div>
						</div>

						<script type="text/javascript">
  Kakao.init('9da64b9dda2ac6b378ebe13069219e47');

  function kakaoShare() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '청와대, 국민 품으로 – 등산로 – 개요 ',
        description: '청와대, 국민 품으로 – 등산로 – 개요 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/trail-summary',
          webUrl: 'https://www.opencheongwadae.kr/trail-summary',
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
</script>
						<h1 id="contents_title" style="color: rgb(255, 255, 255);">개요</h1>
					</div>
					<div id="contents_body">
						<!-- 컨텐츠 내용이 들어갑니다 -->
						<div class="example_wrap">
							<div class="climbing_summary_wrap">
								<div class="left_img">
									<img src="/blueHouse/img/homepage/등산로/등산로개요/climbing_summary_img02.jpg" alt="">
								</div>
								<div class="right_txt">
									<h5 class="tit">
										청와대에서 북악산까지<br> 국민께 돌려드립니다.
									</h5>
									<p class="txt">
										광화문과 경복궁 그리고 북악산(서울성곽)으로 이어지는 역사공간이 청와대로 인해 단절되어 있었습니다. <br>
										역대 정부에서 등산로를 소폭 개방했으나, 보안문제로 탐방시간 제한 등 제약이 많았습니다. <br>
										청와대 경내에서 출발하는 등산로를 개방하면 청와대 일대와 북악산 전면 개방 효과가 생겨 국민들의 휴식, 산책,
										역사탐방 등이 가능해집니다. <br> 또한 북악산-서울성곽-숙정문-청와대-경복궁-광화문으로 이어지는
										한양도심축이 복원됩니다. <br> 생태계가 잘 보전된 등산로인 만큼 세계적인 등산코스로 자리잡을 수
										있도록 준비하겠습니다.
									</p>
								</div>
							</div>
							<script>// <![CDATA[
titleColorChange();
// ]]></script>
						</div>
						<!-- 컨텐츠 내용이 들어갑니다 -->
					</div>
				</div>
			</div>
		</main>
<%@ include file="../../footer.jsp" %>