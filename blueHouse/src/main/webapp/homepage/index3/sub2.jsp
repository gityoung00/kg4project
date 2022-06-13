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
										title : '청와대, 국민 품으로 – 관람안내 – 관람 신청 ',
										description : '청와대, 국민 품으로 – 관람안내 – 관람 신청 ',
										imageUrl : 'https://opencheongwadae.kr/kakao_images.png',
										link : {
											mobileWebUrl : 'https://www.opencheongwadae.kr/sub0303',
											webUrl : 'https://www.opencheongwadae.kr/sub0303',
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
				<h1 id="contents_title">관람 신청</h1>
				<div class="depth3_tab">
					<button class="m_active" style="display: none;">
						<span>관람 신청</span><i class="xi-angle-down-min"></i>
					</button>
					<ul class="tab_list rowTab">
						<li class=""><a href="sub1.jsp">관람시간 및 해설안내</a></li>
						<li class="active"><a href="sub2.jsp">관람 신청</a></li>
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
					<div class="apply_wrap t2">
						<div class="top_box">
							<div class="left">
								<h2 class="title">
									<span>청와대 개방</span> 관람예약 신청
								</h2>
								<p class="title_desc">
									청와대를 개방합니다.<br> 청와대 관람은 아래의 신청 안내, 주의 사항 등을 참고하여 <strong>관람예약시스템</strong>에
									접속하여 신청하시면 됩니다.
								</p>
							</div>
							<div class="right">
								<ul class="top_link t2">
									<li><a href="/blueHouse/test.jsp"
										target="_blank" title="새창" rel="noopener noreferrer"> <strong>청와대
												관람예약 하러가기</strong>
									</a></li>
								</ul>
							</div>
						</div>
						<div class="apply_sec2">
							<div class="event_info">
								<dl class="item1">
									<dt>
										<strong class="circle"><span>관람<br>운영일
										</span></strong>
									</dt>
									<dd>
										<ul class="dot_list">
											<li>5.10.(화) ~ 5.21.(토) : 이벤트 기간</li>
											<li>5.22.(일) ~ 지속</li>
										</ul>
									</dd>
								</dl>
								<dl class="item2">
									<dt>
										<strong class="circle"><span>관람<br>시간
										</span></strong>
									</dt>
									<dd>
										<ul class="dot_list">
											<li>5.10.(화) : 12시 / 14시 / 16시 / 18시</li>
											<li>5.11.(수) ~ 5.21.(토) : 07시 / 09시 / 11시 / 13시 / 15시 /
												17시</li>
											<li>5.22.(일) : 07시 / 09시 및 KBS 열린음악회(별도 신청접수)</li>
											<li>5.23.(월) ~ 6.11.(토) : 07시 / 09시 / 11시 / 13시 / 15시 /
												17시</li>
											<li>6.12.(일) ~ : 09시 / 10시30분 / 12시 / 13시30분 / 15시 /
												16시30분</li>
										</ul>
									</dd>
								</dl>
							</div>
							<ul class="info_list">
								<li><img
									src="https://www.opencheongwadae.kr/_html/img/sub/apply_icon_1.png"
									alt="" class="icon"> <strong class="title">최대 신청
										인원 (6.12.(일) 관람분부터)</strong>
									<p class="desc">
										개인 관람은 6명 이하, 단체 관람은 20~50명 이하,<br> 65세이상 어르신/장애인은 6명 이하
									</p>
									<p class="small_desc">
										※ 신청 유형 : 개인, 단체, 65세이상 어르신/<br>장애인 등 3가지
									</p></li>
								<li><img
									src="https://www.opencheongwadae.kr/_html/img/sub/apply_icon_2.png"
									alt="" class="icon"> <strong class="title">신청 기간
										(6.12.(일) 관람분부터)</strong>
									<p class="desc">
										신청일 기준 최대 4주까지<br> 관람예약 가능
									</p>
									<p class="small_desc">
										※ (예) 6.12.(일)에 관람신청 시<br> 6.13.(월) 부터 7.9.(토)까지<br>
										관람예약 가능
									</p></li>
								<li><img
									src="https://www.opencheongwadae.kr/_html/img/sub/apply_icon_3.png"
									alt="" class="icon"> <strong class="title">예약자
										통보 (6.12.(일) 관람분부터)</strong>
									<p class="desc">예약 당일 알림메시지 발송</p>
									<p class="small_desc">
										※ (예) 6.12.(일)에 관람신청 시<br> 6.12.(일) 즉시 알림 발송<br> ※
										예약되지 않은 분들께는 별도로<br> 알림발송이 되지 않음
									</p></li>
							</ul>
							<script>
								// <![CDATA[
								function fn_openChatbotPop() {
									var _oPopup = window.open("",
											"chatbot_popup",
											"width=10, height=10");
									_oPopup.location.href = "https://chatbot.ips.go.kr/chatbotPop.ndo?bnrId=dsUY18sKvrqydwa#none";
								}
								// ]]>
							</script>
						</div>
						<div class="apply_sec3">
							<div class="box1">
								<h3 class="title">주의 사항</h3>
								<ul class="dot_list">
									<li>1인 1회만 예약신청 가능합니다.(예약된 경우 관람일 이후 추가 신청 가능)</li>
									<li>예약되신 분은 관람 당일, 동반자와 함께 입장하며, 신청하신 분의 휴대폰으로 발송된 예약 바코드를
										보여주셔야 입장이 가능합니다.</li>
									<li>동반자는 반드시 예약자(신청자)와 동반 입장만 가능하며, 모든 관람자는 재입장이 불가합니다.</li>
									<li>사회적약자 예약 시 65세이상 어르신 또는 장애인 최소 1인 포함하고 동반자 5명 포함 최대
										6명까지 예약하실 수 있습니다.&nbsp;(6.12.(일) 관람분부터)</li>
									<li>65세이상 어르신 또는 장애인 유형으로 예약되신 분은 관람 당일에 신분증을 지참하고 오셔서 입장
										입구에서 자격 확인을 받으시기 바랍니다.
										<ul class="def_list">
											<li>※ 65세이상 어르신 : 주민등록증, 운전면허증, 여권 중 택1</li>
											<li>※ 장애인 : 장애인등록증 또는 장애인복지카드</li>
										</ul>
									</li>
									<li>다둥이 자녀 가족의 경우 가족관계 증명자료 지참시, 개인 6명 초과 인원도
										입장가능&nbsp;(6.12.(일) 관람분부터)</li>
									<li>입장시 모바일 바코드 확인이 어려우신 분은 입장 전 현장데스크에 방문하셔서 별도의 출입 손목띠를
										발급받으신 후 입장해주시기 바랍니다.</li>
									<li>관람 30~10분 전까지 입장라인으로 오시기 바랍니다. 바코드가 없는 분들은 현장 등록데스크에
										여유있게 먼저 도착해주시기 바랍니다.</li>
									<li>관람시간에 늦을 경우, 관람 운영에 어려움이 예상되니, 반드시 관람시간을 지켜주시기 바랍니다.</li>
									<li>관람 당일 인원 추가는 불가합니다.</li>
									<li>입장 마감은 17:30분으로 이후 입장이 불가능합니다.&nbsp;(6.12.(일) 관람분부터)</li>
									<li>우천시 본관, 영빈관 등 주요 건물 내부의 훼손 방지를 위해 내부관람이 제한될 수 있습니다. 또한
										태풍 등 자연재해로 관람객의 안전이 우려될 경우 청와대 권역 전부 또는 일부에 대한 관람을 중지할 수 있습니다.</li>
								</ul>
								<div class="guide_box">
									<div class="txt">
										<i class="xi-call"></i>문의전화 : 개방행사 안내센터(1522-7760),
										다산콜센터(02-120), 관광통역안내(1330), 국민콜110(110)
									</div>
									<div class="btns">
										<a href="../index5/communicate-faq.jsp" class="blank_btn">자주하는 질문</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 컨텐츠 내용이 들어갑니다 -->
			</div>
		</div>
	</div>
</main>
<%@ include file="/footer.jsp"%>