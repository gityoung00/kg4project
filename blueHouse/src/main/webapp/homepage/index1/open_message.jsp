<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/header.jsp"%>
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
									src="https://www.opencheongwadae.kr/_html/img/layout/sitemap.png/_html/img/sub/sns_facebook.png"
									alt=""></a></li>
							<li class="band"><a href="@band" class="social"><img
									src="https://www.opencheongwadae.kr/_html/img/layout/sitemap.png/_html/img/sub/sns_band.png"
									alt=""></a></li>
							<li class="kakao"><a href="javascript:kakaoShare()" class=""><img
									src="https://www.opencheongwadae.kr/_html/img/layout/sitemap.png/_html/img/sub/sns_kakao.png"
									alt=""></a></li>
						</ul>
					</div>
				</div>

				<script type="text/javascript">
					Kakao.init('9da64b9dda2ac6b378ebe13069219e47');

					function kakaoShare() {
						Kakao.Link
								.sendDefault({
									objectType : 'feed',
									content : {
										title : '청와대, 국민 품으로 – 개방의 의미 ',
										description : '청와대, 국민 품으로 – 개방의 의미 ',
										imageUrl : 'https://opencheongwadae.kr/kakao_images.png',
										link : {
											mobileWebUrl : 'https://www.opencheongwadae.kr/open-message',
											webUrl : 'https://www.opencheongwadae.kr/open-message',
										},
									},
									buttons : [
											{
												title : '웹으로 보기',
												link : {
													mobileWebUrl : '카카오공유하기 시 클릭 후 이동 경로',
													webUrl : '카카오공유하기 시 클릭 후 이동 경로',
												},
											}, ],
									// 카카오톡 미설치 시 카카오톡 설치 경로이동
									installTalk : true,
								})
					}
				</script>
				<h1 id="contents_title">개방의 의미</h1>
			</div>
			<div id="contents_body">
				<!-- 컨텐츠 내용이 들어갑니다 -->
				<div class="example_wrap">
					<div class="opening2_wrap">
						<div class="txt_box">
							<strong>존경하는 국민 여러분</strong>
							<p class="s_txt">
								5월 10일부터 청와대가 온전히 국민의 공간이 됩니다.<br> 청와대 본관과 영빈관을 비롯해,<br>
								사계절 아름다운 풍경을 자랑하는 녹지원과 상춘재까지<br> 모두 국민의 품으로 돌아갑니다.
							</p>
							<p class="s_txt">
								청와대의 완전한 개방으로<br> 광화문에서부터 북악산까지 이어지는 길은<br> 새로운 명소로
								자리매김할 것입니다.
							</p>
							<p class="s_txt">
								진정한 대통령의 권위는<br> 국민으로부터 나온다는 사실을 명심하고,<br> 늘 국민 곁에서
								국민의 목소리를 경청하겠습니다.
							</p>
							<p class="s_txt">
								‘일 잘하는 정부’로 국민의 뜻을 제대로 받들겠습니다. <br>민생과 외교, 안보를 빈틈없이 챙기겠습니다.
							</p>
							<p class="s_txt">감사합니다.</p>
							<span class="sign" style="bottom: -7rem"><img
								src="https://www.opencheongwadae.kr/_files/board/20220510//2a0f0df86c6d840a19ebc738aaccb021.png"
								alt="대통령 윤석열"></span>
						</div>
					</div>
				</div>
				<!-- 컨텐츠 내용이 들어갑니다 -->
			</div>
		</div>
	</div>
</main>
<%@ include file="/footer.jsp"%>