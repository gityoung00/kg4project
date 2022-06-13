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
										title : '청와대, 국민 품으로 – 관람안내 – 관람시간 및 해설안내 ',
										description : '청와대, 국민 품으로 – 관람안내 – 관람시간 및 해설안내 ',
										imageUrl : 'https://opencheongwadae.kr/kakao_images.png',
										link : {
											mobileWebUrl : 'https://www.opencheongwadae.kr/sub0506',
											webUrl : 'https://www.opencheongwadae.kr/sub0506',
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
				<h1 id="contents_title">관람시간 및 해설안내</h1>
				<div class="depth3_tab">
					<button class="m_active" style="display: none;">
						<span>관람시간 및 해설안내</span><i class="xi-angle-down-min"></i>
					</button>
					<ul class="tab_list rowTab">
						<li class="active"><a href="sub1.jsp">관람시간 및 해설안내</a></li>
						<li class=""><a href="sub2.jsp">관람 신청</a></li>
						<li class=""><a href="sub3.jsp">안내도 및 관람코스</a></li>
						<li class=""><a href="sub4.jsp">활용 프로그램</a></li>
						<li class=""><a href="sub5.jsp">오시는 길</a></li>
						<li class=""><a href="event-tourism.jsp">함께 가 볼 만한 장소</a></li>
						<li class=""><a href="event-program.jsp">개방
								특별행사(5.10.~5.22.)</a></li>
						<li class=""><a href="sub6.jsp">주말 공연(5.28.~6.26.)</a></li>
					</ul>
				</div>
			</div>
			<div id="contents_body">
				<!-- 컨텐츠 내용이 들어갑니다 -->
				<div class="example_wrap">
					<div class="see_wrap">
						<div class="see_top">
							<h2 class="red_title">
								<img
									src="https://www.opencheongwadae.kr/_html/img/sub/see_flag.png"
									alt=""> 관람시간
							</h2>
							<ul class="date_list">
								<li><strong>2022년 5월 23일<i>(월)</i> <span
										class="in_block">~ 6월 11일<i>(토)</i></span></strong>
									<p>
										<img
											src="https://www.opencheongwadae.kr/_html/img/sub/see_time.png"
											alt=""> 매일 07시 ~ 19시
									</p></li>
								<li><strong>2022년 6월 12일<i>(일)</i>&nbsp;~ 계속
								</strong>
									<p>
										<img
											src="https://www.opencheongwadae.kr/_html/img/sub/see_time.png"
											alt=""> 09시 ~ 18시 <span style="color: #e23e58;">*매주
											화요일 미개방</span>
									</p></li>
							</ul>
							<div class="list_box">
								<h3 class="dot_title">관람방법</h3>
								<ol class="list">
									<li><i>01</i> 사전 관람예약을 하여 당첨된 국민 누구나 청와대 곳곳을 자유롭게 둘러볼 수
										있습니다.</li>
									<li><i>02</i> 현장신청은 정문 종합안내소에서 2회(09시~, 13시30분~) 각 500명씩
										현장발급 가능합니다.</li>
									<li><i>03</i> 입장 가능한 문은 정문, 영빈문, 춘추문 등 총 3곳으로 오시는 길에 따라
										자유롭게 선택 가능하며, 입장 시 신분증을 지참한 채 예약 바코드를 스캔 후 출입합니다.</li>
									<li><i>04</i> 청와대 전 구역은 금연구역입니다.</li>
									<li><i>05</i> 입장 시 생수, 양산 등을 지참하시길 권장합니다.</li>
									<li><i>06</i> 우천시 본관, 영빈관 등 주요 건물 내부의 훼손 방지를 위해 내부관람이 제한될
										수 있습니다. 또한 태풍 등 자연재해로 관람객의 안전이 우려될 경우 청와대 권역 전부 또는 일부에 대한 관람을
										중지할 수 있습니다.</li>
									<li><i>06</i> 코로나19 확산 방지를 위하여 경내에서는 실외 마스크 착용이 적극 권고됩니다.
										<p class="gray">*실내 마스크 착용 의무</p></li>
									<li><i>07</i> 기타 사항은 &lt;자주하는 질문&gt;을 참고하여 주시기 바랍니다.</li>
								</ol>
							</div>
						</div>
						<div class="see_bottom">
							<h2 class="title">관람해설시간</h2>
							<div class="scroll_wrap">
								<div class="scroll_box">
									<p class="seeTbl_caption">
										<i>*</i> 기상 상황 악화 시 관람해설이 취소될 수 있습니다.
									</p>
									<ul class="seeTbl_head">
										<li>구분</li>
										<li>시간</li>
										<li>해설코스</li>
										<li>시작하는 곳</li>
									</ul>
									<ul class="seeTbl_body">
										<li><strong>1회차</strong>
											<div class="bodyBox">
												<ul>
													<li>10:00~11:00<br>
														<p class="gray">(1시간)</p>
													</li>
													<li>녹지원 - 상춘재 - 수궁터 - 본관 - 영빈관</li>
													<li>녹지원</li>
												</ul>
											</div></li>
										<li><strong>2회차</strong>
											<div class="bodyBox">
												<ul>
													<li>11:00~11:40<br>
														<p class="gray">(40분)</p>
													</li>
													<li>침류각 - 오운정 - 불상</li>
													<li>침류각</li>
												</ul>
											</div></li>
										<li><strong>3회차</strong>
											<div class="bodyBox">
												<ul>
													<li>14:00~15:00<br>
														<p class="gray">(1시간)</p>
													</li>
													<li>녹지원 - 상춘재 - 수궁터 - 본관 - 영빈관</li>
													<li>녹지원</li>
												</ul>
											</div></li>
										<li><strong>4회차</strong>
											<div class="bodyBox">
												<ul>
													<li>15:00~16:00<br>
														<p class="gray">(1시간)</p>
													</li>
													<li>녹지원 - 상춘재 - 수궁터 - 본관 - 영빈관</li>
													<li>녹지원</li>
												</ul>
											</div></li>
										<li><strong>5회차</strong>
											<div class="bodyBox">
												<ul>
													<li>16:00~16:40<br>
														<p class="gray">(40분)</p>
													</li>
													<li>침류각 - 오운정 - 불상</li>
													<li>침류각</li>
												</ul>
											</div></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="bg"></div>
					</div>
				</div>
				<!-- 컨텐츠 내용이 들어갑니다 -->
			</div>
		</div>
	</div>
</main>
<%@ include file="/footer.jsp"%>