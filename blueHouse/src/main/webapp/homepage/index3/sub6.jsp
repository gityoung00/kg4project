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
									src="https://www.opencheongwadae.kr/_html/img/sub/sns_facebook.png"
									alt=""></a></li>
							<li class="band"><a href="@band" class="social"><img
									src="https://www.opencheongwadae.kr/_html/img/sub/sns_band.png"
									alt=""></a></li>
							<li class="kakao"><a href="javascript:kakaoShare()" class=""><img
									src="https://www.opencheongwadae.kr/_html/img/sub/sns_kakao.png"
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
										title : '청와대, 국민 품으로 – 관람안내 – 주말 공연(5.28.~6.26.) ',
										description : '청와대, 국민 품으로 – 관람안내 – 주말 공연(5.28.~6.26.) ',
										imageUrl : 'https://opencheongwadae.kr/kakao_images.png',
										link : {
											mobileWebUrl : 'https://www.opencheongwadae.kr/sub0510',
											webUrl : 'https://www.opencheongwadae.kr/sub0510',
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
				<h1 id="contents_title">주말 공연(5.28.~6.26.)</h1>
				<div class="depth3_tab">
					<button class="m_active" style="display: none;">
						<span>주말 공연(5.28.~6.26.)</span><i class="xi-angle-down-min"></i>
					</button>
					<ul class="tab_list rowTab">
						<li class=""><a href="sub1.jsp">관람시간 및 해설안내</a></li>
						<li class=""><a href="sub2.jsp">관람 신청</a></li>
						<li class=""><a href="sub3.jsp">안내도 및 관람코스</a></li>
						<li class=""><a href="sub4.jsp">활용 프로그램</a></li>
						<li class=""><a href="sub5.jsp">오시는 길</a></li>
						<li class=""><a href="event-tourism.jsp">함께 가 볼 만한 장소</a></li>
						<li class=""><a href="event-program.jsp">개방
								특별행사(5.10.~5.22.)</a></li>
						<li class="active"><a href="sub6.jsp">주말 공연(5.28.~6.26.)</a></li>
					</ul>
				</div>
			</div>
			<div id="contents_body">
				<!-- 컨텐츠 내용이 들어갑니다 -->
				<div class="example_wrap">
					<div class="weekend">
						<h2 class="title">
							<img
								src="https://www.opencheongwadae.kr/_html/img/sub/weekend_title.png"
								alt="주말 공연 일정">
						</h2>
						<div class="tbl_wrap">
							<div class="tbl_box">
								<table class="tbl proTbl c1">
									<caption>주말 공연 일정을 담은 표로, 장소, 날짜, 요일, 시간, 공연단체, 공연명,
										공연내용으로 구성되어 있습니다.</caption>
									<colgroup>
										<col style="width: 13%;">
										<col style="width: 8.5%;">
										<col style="width: 6.2rem;">
										<col style="width: 15%;">
										<col style="width: 13%;">
										<col>
										<col>
									</colgroup>
									<thead>
										<tr>
											<th scope="col">장소</th>
											<th scope="col">날짜</th>
											<th scope="col">요일</th>
											<th scope="col">시간</th>
											<th scope="col">공연단체</th>
											<th scope="col">공연명</th>
											<th scope="col">공연내용</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="rowgroup" rowspan="4">춘추관앞<br> (헬기장)
											</th>
											<td>5월28일</td>
											<td>토</td>
											<td>12:00 / 14:00</td>
											<td>극단 마린보이</td>
											<td class="txt_left">유쾌! 상쾌! 통쾌! 나홀로서커스</td>
											<td class="txt_left">다양한 묘기 퍼레이드와 광대의 유쾌한 재담</td>
										</tr>
										<tr>
											<td>5월29일</td>
											<td>일</td>
											<td>12:00 / 14:00</td>
											<td>극단 마린보이</td>
											<td class="txt_left">유쾌! 상쾌! 통쾌! 나홀로서커스</td>
											<td class="txt_left">다양한 묘기 퍼레이드와 광대의 유쾌한 재담</td>
										</tr>
										<tr>
											<td>6월4일</td>
											<td>토</td>
											<td>12:00 / 14:00</td>
											<td>극단 마린보이</td>
											<td class="txt_left">유쾌! 상쾌! 통쾌! 나홀로서커스</td>
											<td class="txt_left">다양한 묘기 퍼레이드와 광대의 유쾌한 재담</td>
										</tr>
										<tr>
											<td>6월5일</td>
											<td>일</td>
											<td>12:00 / 14:00</td>
											<td>팀클라운</td>
											<td class="txt_left">웃음 톡! 희망 톡! 비눗방울 톡톡!</td>
											<td class="txt_left">온 가족이 함께 즐기는 동심의 세계</td>
										</tr>
										<tr>
											<th scope="rowgroup">대정원-녹지원<br> (이동형)
											</th>
											<td>6월11일</td>
											<td>토</td>
											<td>12:00 / 14:00 / 16:00</td>
											<td>팀클라운</td>
											<td class="txt_left">버블퍼레이드카</td>
											<td class="txt_left">형형색색의 비눗방울을 쏘는 버블카 퍼레이드</td>
										</tr>
										<tr>
											<th scope="rowgroup" rowspan="5">춘추관앞<br> (헬기장)
											</th>
											<td>6월12일</td>
											<td>일</td>
											<td>12:00 / 14:00</td>
											<td>팀클라운</td>
											<td class="txt_left">웃음 톡! 희망 톡! 비눗방울 톡톡!</td>
											<td class="txt_left">온 가족이 함께 즐기는 동심의 세계</td>
										</tr>
										<tr>
											<td>6월18일</td>
											<td>토</td>
											<td>12:00 / 14:00</td>
											<td>극단 마린보이</td>
											<td class="txt_left">유쾌! 상쾌! 통쾌! 나홀로서커스</td>
											<td class="txt_left">다양한 묘기 퍼레이드와 광대의 유쾌한 재담</td>
										</tr>
										<tr>
											<td>6월19일</td>
											<td>일</td>
											<td>12:00 / 14:00</td>
											<td>팀클라운</td>
											<td class="txt_left">웃음 톡! 희망 톡! 비눗방울 톡톡!</td>
											<td class="txt_left">온 가족이 함께 즐기는 동심의 세계</td>
										</tr>
										<tr>
											<td>6월25일</td>
											<td>토</td>
											<td>12:00 / 14:00</td>
											<td>팀클라운</td>
											<td class="txt_left">웃음 톡! 희망 톡! 비눗방울 톡톡!</td>
											<td class="txt_left">온 가족이 함께 즐기는 동심의 세계</td>
										</tr>
										<tr>
											<td>6월26일</td>
											<td>일</td>
											<td>12:00 / 14:00</td>
											<td>극단 마린보이</td>
											<td class="txt_left">유쾌! 상쾌! 통쾌! 나홀로서커스</td>
											<td class="txt_left">다양한 묘기 퍼레이드와 광대의 유쾌한 재담</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="weekend_bg"></div>
					</div>
				</div>
				<!-- 컨텐츠 내용이 들어갑니다 -->
			</div>
		</div>
	</div>
</main>
<%@ include file="/footer.jsp"%>