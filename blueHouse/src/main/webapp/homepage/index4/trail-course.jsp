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
											src="/blueHouse/img/homepage/등산로/등산로코스/sns_facebook.png" alt=""></a></li>
									<li class="band"><a href="@band" class="social"><img
											src="/blueHouse/img/homepage/등산로/등산로코스/sns_band.png" alt=""></a></li>
									<li class="kakao"><a href="javascript:kakaoShare()"
										class=""><img src="/blueHouse/img/homepage/등산로/등산로코스/sns_kakao.png" alt=""></a></li>
								</ul>
							</div>
						</div>

						<script type="text/javascript">
  Kakao.init('9da64b9dda2ac6b378ebe13069219e47');

  function kakaoShare() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '청와대, 국민 품으로 – 등산로 – 등산로 코스 ',
        description: '청와대, 국민 품으로 – 등산로 – 등산로 코스 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/trail-course',
          webUrl: 'https://www.opencheongwadae.kr/trail-course',
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
						<h1 id="contents_title">등산로 코스</h1>
					</div>
					<div id="contents_body">
						<!-- 컨텐츠 내용이 들어갑니다 -->
						<div class="example_wrap">
							<div class="course_wrap">
								<div class="course_map">
									<img src="/blueHouse/img/homepage/등산로/등산로코스/course_img01.png" alt="">
								</div>
								<div class="course_list">
									<div class="item">
										<div class="tit">
											<strong>첫번째 추천코스</strong> <span>약 2시간 내외</span>
										</div>
										<div class="refer">
											<span>춘추관 옆길 또는 칠궁 뒷길(경복고 맞은편) ⇆ 백악정 ⇆ 만세동방 ⇆ 청운대 쉼터 ⇆
												백악마루 ⇆ 창의문 안내소</span>
										</div>
									</div>
									<div class="item">
										<div class="tit">
											<strong>두번째 추천코스</strong> <span>약 1.5시간 내외</span>
										</div>
										<div class="refer">
											<span>춘추관 옆길 또는 칠궁 뒷길(경복고 맞은편) ⇆ 백악정 ⇆ 만세동방 ⇆ 숙정문 ⇆
												말바위 안내소</span>
										</div>
									</div>
									<div class="item">
										<div class="tit">
											<strong>세번째 추천코스</strong> <span>약 1.5시간 내외</span>
										</div>
										<div class="refer">
											<span>춘추관 옆길 또는 칠궁 뒷길(경복고 맞은편) ⇆ 백악정 ⇆ 삼청 안내소</span>
										</div>
									</div>
								</div>
								<div class="red_warning">
									<p>* 2022. 6. 14.부터 신규 탐방로는 매주 화요일 휴무</p>
									<p>* 6개 안내소(창의문 안내소, 청운대안내소, 곡장 안내소, 숙정문 안내소, 말바위 안내소, 삼청
										안내소)는 정상 운영</p>
								</div>
							</div>
						</div>
						<!-- 컨텐츠 내용이 들어갑니다 -->
					</div>
				</div>
			</div>
		</main>
<%@ include file="../../footer.jsp" %>