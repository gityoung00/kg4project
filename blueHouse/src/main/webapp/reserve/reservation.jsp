<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="0">
<meta http-equiv="Pragma" content="no-cache">
<title>청와대, 국민 품으로</title>
<link rel="shortcut icon"
	href="https://reserve1.opencheongwadae.kr/assets/images/favicon.png"
	type="image/x-icon">
<link rel="stylesheet"
	href="https://reserve1.opencheongwadae.kr/assets/css/common.css">
<link rel="stylesheet"
	href="https://reserve1.opencheongwadae.kr/assets/css/template.css">
<link rel="stylesheet"
	href="https://reserve1.opencheongwadae.kr/assets/jquery-ui/jquery-ui.css">
<script
	src="https://reserve1.opencheongwadae.kr/assets/js/jquery-3.6.0.min.js"></script>
<script
	src="https://reserve1.opencheongwadae.kr/assets/js/jquery.serialize.js"></script>
<script
	src="https://reserve1.opencheongwadae.kr/assets/jquery-ui/jquery-ui.js"></script>
</head>
<body style="cursor: url(&quot;null&quot;), default;">
	<div id="wrap">
		<a id="to-home" data-cp="" href="/" tabindex="-1">청와대, 국민 품으로</a>
		<div class="topR_menu">
			<a href="https://www.opencheongwadae.kr/sub0506" target="_new">관람안내</a><a
				href="https://www.opencheongwadae.kr/communicate-faq" target="_new">자주묻는질문</a>
		</div>
		<div id="container">
			<header class="title">
				<h1>
					청와대 <br class="mobile">관람예약
				</h1>
			</header>
			<div class="content form-content">
				<div class="box-white">
					<!--
        <ul class="step-reserve">
            <li>
                <span>STEP 01</span>
                <h2>관람 예약 <br />신청</h2>
                <p>관람을 원하시는 일자,시간,인원을<br />선택해주세요</p>
            </li>
            <li>
                <span>STEP 02</span>
                <h2>청와대 <br />관람</h2>
                <p>
                예약문자를 받으신 분들은 관람 일자에<br/>청와대를 방문, 관람해 주세요
                </p>
            </li>
        </ul>
		-->
					<span class="caution_title">주<br>의<br>사<br>항
					</span> <span class="caution_txt">
						<ol>
							<li style="font-size: 13px; list-style: decimal;">청와대 관람신청은
								선착순으로 가능하며, 예약완료 시에는 취소 전까지 추가 신청이 불가합니다.</li>
							<li style="font-size: 13px; list-style: decimal;">다자녀 가족의 경우
								: 신청가능 인원 수(6명)을 넘더라도 입장 시 가족관계증명서 또는 주민등록등본을 보여주시면 인원 제한없이 입장하실
								수 있습니다.</li>
							<li style="font-size: 13px; list-style: decimal;">청와대 관람권을
								제3자에게 양도하거나 유상으로 판매할 수 없으며, 필요 시 현장에서 신분증 확인을 요구할 수 있습니다.</li>
						</ol>
					</span>
					<form id="form-certify"
						action="https://www.kmcert.com/kmcis/web/kmcisReq.jsp"
						method="post" target="KMCISWindow">
						<input type="hidden" name="tr_cert"
							value="KMC000001-A1E8DEB9BF66DDB9C10B95A1A06452B5CE796DC489763FD2D7F694C0B905B21076286131D819CA2CDF3AAC9C560BEED227310A2ECF32BB58CBE6E2C67F2F84724CBD320FC67773CD648C487FF4FC338D9C2CE36EC3948ED02DD3BCBA0371C2CC24A790465B11F9CCC9486914EE17BAE966386B9929FD4EDE2B21799334FD6D8EAAF33B3FEE2A75C85621FEC2B413188C2A4A78813E12DE74BBC164FEAF2E89F21A4051AF5C9926AA118EC19D473E1829154CA2ED33F55BB917F210707B094DECD5D04C0D9A0AB0496FE3AC67A3F866873C31C51DC1D5031ECA3D36496CA84A34BEF378EB919334BFEAA4AE505EBBED4D75600FBE69A5C196A454C0616DA5B14F61509EF05893C4DD1B1E646E645BF5783981A4529E4CD5C07B9EE524665E406F">
						<input type="hidden" name="tr_url"
							value="https://reserve1.opencheongwadae.kr/certified"> <input
							type="hidden" name="tr_add" value="N">
					</form>
					<form id="form-reservation" action="/reservation" method="post">
						<input type="hidden" id="booking-id" name="booking-id"
							value="9887eca4a0ce4f468884b3b8aeb4a2d8"> <input
							type="hidden" id="booker-id" name="booker-id"> <input
							type="hidden" id="booking-se" name="booking-se"> <input
							type="hidden" id="booking-time" name="booking-time">
						<div class="inner">
							<h3 class="tit01">예약 신청 정보</h3>
							<div class="inner-box">
								<button id="btn-daily-state" type="button" class="btn-append"
									tabindex="-1">날짜별 신청현황 조회 및 예약신청</button>
								<div class="inner-list">
									<label for="booking-se-display">예약유형</label> <input type="text"
										id="booking-se-display" tabindex="-1" readonly="readonly">
								</div>
								<div class="inner-list">
									<label for="booking-date">관람예약일자</label> <input type="text"
										id="booking-date" name="booking-date" tabindex="-1"
										readonly="readonly">
								</div>
								<div class="inner-list">
									<label for="booking-time-display">관람예약시간</label> <input
										type="text" id="booking-time-display" tabindex="-1"
										readonly="readonly">
								</div>
								<div class="inner-list_all inner-list2" tabindex="4">
									<label for="see-persons">관람예약인원</label> <input type="hidden"
										id="see-persons" name="see-persons" value="0">
									<div class="number-box">
										<div class="people-num">
											<span id="see-persons-txt">0</span>
											<p>명</p>
										</div>
										<div class="people-btn" style="z-index: 1000">
											<button type="button" id="plus-see-persons" tabindex="-1">
												<img
													src="https://reserve1.opencheongwadae.kr/assets/images/ico_plus_btn.png">
											</button>
											<button type="button" id="minus-see-persons" tabindex="-1">
												<img
													src="https://reserve1.opencheongwadae.kr/assets/images/ico_minus_btn.png">
											</button>
										</div>
									</div>
								</div>

							</div>

							<h3 class="tit01">본인 인증</h3>
							<div class="inner-box">
								<button id="btn-certify" type="button" class="btn-append"
									tabindex="1">휴대폰 본인 인증하기</button>
								<p id="msg-certified" class="certify-txt" style="display: none">본인
									인증이 완료되었습니다.</p>
							</div>
							<div class="inner-box">
								<div class="inner-list">
									<label for="phone-name">이름</label> <input type="text"
										id="phone-name" name="phone-name" readonly="readonly"
										tabindex="-1">
								</div>
								<div class="inner-list">
									<label for="phone-no">전화번호</label> <input type="text"
										id="phone-no" name="phone-no" readonly="readonly"
										tabindex="-1">
								</div>
							</div>
							<div class="pwd-cont">
								<div class="inner-list">
									<label for="booking-pwd">비밀번호 (숫자4자리)</label> <input
										type="password" id="booking-pwd" name="booking-pwd"
										maxlength="4" tabindex="2">
								</div>
								<div class="inner-list">
									<label for="re-booking-pwd">비밀번호확인</label> <input
										type="password" id="re-booking-pwd" maxlength="4" tabindex="3">
								</div>
							</div>

							<h3 class="tit01">약관동의</h3>
							<div class="agreement-box all-agree">
								<span class="check-box"> <input type="checkbox"
									id="agree-all" tabindex="9"> <label for="agree-all">전체
										필수 약관 및 항목에 동의합니다.</label>
								</span>
							</div>
							<div class="agreement-box">
								<span class="check-box"> <input type="checkbox"
									id="privacy-collection" name="privacy-collection" tabindex="4">
									<label for="privacy-collection"> <span class="req">[필수]</span>
										<span id="privacy-collection-txt">개인정보 수집 및 이용 동의</span>
								</label> <a href="javascript:void(0)">상세내용 펼침</a>
								</span>
								<div class="agree-txt">
									<textarea readonly="">1. 수집항목
   개인식별정보(CI), 이름, 휴대전화번호
2. 수집 및 이용목적
   청와대 방문 신청 접수, 고객상담 및 분쟁 발생 시 해결을 위한 기록 보존
3. 보관기관
   ① 개인정보 수집 및 이용 목적 달성 시 지체없이 파기
   ② 단, 관련 법령에 의하여 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관함
4. 동의 거부권 등에 대한 고지
   정보주체는 개인정보의 수집 및 이용 동의를 거부할 권리가 있으나, 이 경우 서비스 이용이 제한될 수 있습니다.
                        </textarea>
								</div>
							</div>
							<div class="agreement-box">
								<span class="check-box"> <input type="checkbox"
									id="privacy-offer" name="privacy-offer" tabindex="5"> <label
									for="privacy-offer"> <span class="req">[필수]</span> <span
										id="privacy-offer-txt">개인정보 제공 동의</span>
								</label> <a href="javascript:void(0)">상세내용 펼침</a>
								</span>
								<div class="agree-txt">
									<textarea readonly="">1. 개인정보를 제공받는 자
  한국문화재재단, 트리허브(주), (주)가비아, (주)서진인포텍
2. 제공하는 기본 개인정보 항목
  개인식별정보(CI), 이름, 휴대전화번호, 관람 예약 정보(관람 구분, 관람일자, 관람시간, 인원수)
3. 개인정보를 제공받는 자의 이용목적
  ① 관람 예약 정보(개인식별정보(CI), 이름, 휴대전화번호, 관람 신청 정보): 청와대 관람 예약 관리, 민원처리 등 
  ② 관람 신청정보(개인식별정보(CI), 이름, 휴대전화번호, 예약정보): 관람 예약 결과 알림을 위한 문자서비스(SMS) 발송
4. 개인정보를 제공받는 자의 보유 및 이용기간
  ① 관람신청정보(개인식별정보(CI), 이름, 휴대전화번호, 예약정보): &ZeroWidthSpace;동의일로부터 관람예약일 이후 30일까지 보관 후 파기
5. 동의 거부권 등에 대한 고지
  정보주체는 개인정보 제공 동의를 거부할 권리가 있으나, 이 경우 서비스 이용이 제한될 수 있습니다.
                        </textarea>
								</div>
							</div>
							<div class="agreement-box">
								<span class="check-box"> <input type="checkbox"
									id="alarm-reception" name="alarm-reception" tabindex="6">
									<label for="alarm-reception"> <span class="req">[필수]</span>
										<span id="alarm-reception-txt">청와대 관람 예약 결과 알림 수신동의</span>
								</label> <a href="javascript:void(0)">상세내용 펼침</a>
								</span>
								<div class="agree-txt">
									<textarea readonly="">청와대 관람 예약 결과를 신청하신 휴대폰으로 수신하는 것에 대해 동의합니다.
                        </textarea>
								</div>
							</div>
							<br>
							<p style="font-size: 14px">※ 이에 대한 동의를 거부할 수 있습니다. 다만, 관람예약 및
								관련 정보 제공이 불가능 할 수 있음을 알려드립니다.</p>
						</div>
					</form>
					<a id="btn-booking" href="javascript:void(0)"
						class="btn-bottom disabled" tabindex="7">관람 신청 등록</a>
				</div>
			</div>
			<div id="page-expired"
				style="background: #fff; border-radius: 16px; display: none">
				<h3 class="tit01" style="text-align: center; margin: 75px 0">만료된
					페이지</h3>
				<button id="btn-to-reserve" type="button" class="btn-append"
					tabindex="-1" style="width: 100%;">예약하러가기</button>
			</div>
			<div id="popup-daily-state" class="wrap1" style="z-index: 1001">
				<div id="container1">
					<div class="content form-content">
						<div class="box-white">
							<div class="inner">
								<div class="inner-header">
									<h3 class="tit01">예약 신청 정보</h3>
									<p class="sub01"></p>
									<div id="state-tab">
										<span class="certify-txt1">1. 아래 예약유형을 선택하세요.</span> <br>
										<button type="button" id="P" class="on" data-no="6200">개인(1~6명)</button>
									</div>
									<span class="certify-txt1">2. 아래 예약일자 및 시간을 선택하세요. (숫자는
										예약 가능한 인원입니다.)</span>
									<p></p>
									<a href="javascript:void(0)" class="close_btn">닫기</a>
								</div>
								<div class="cwd-table-wrap t-scroll">
									<table id="state-table" class="cwd-table2">
										<caption>예약 신청조회</caption>
										<colgroup>
											<col width="16%">
											<col width="14%">
											<col width="14%">
											<col width="14%">
											<col width="14%">
											<col width="14%">
											<col>
										</colgroup>
										<thead>
											<tr>
												<th scope="col">구분</th>
												<th scope="col" data-time="0900">09:00~10:30</th>
												<th scope="col" data-time="1030">10:30~12:00</th>
												<th scope="col" data-time="1200">12:00~13:30</th>
												<th scope="col" data-time="1330">13:30~15:00</th>
												<th scope="col" data-time="1500">15:00~16:30</th>
												<th scope="col" data-time="1630">16:30~18:00</th>
											</tr>
										</thead>
										<tbody>
											<tr data-date="20220612">
												<td>6.12 (일)</td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
											</tr>
											<tr data-date="20220613">
												<td>6.13 (월)</td>
												<td class="on"><span>3,103</span></td>
												<td><span>예약완료</span></td>
												<td class="on"><span>2,374</span></td>
												<td class="on"><span>1,973</span></td>
												<td class="on"><span>3,649</span></td>
												<td class="on"><span>3,957</span></td>
											</tr>
											<tr data-date="20220614">
												<td>6.14 (화)</td>
												<td class="off" colspan="6">휴관</td>
											</tr>
											<tr data-date="20220615">
												<td>6.15 (수)</td>
												<td class="on"><span>4,489</span></td>
												<td><span>예약완료</span></td>
												<td class="on"><span>3,551</span></td>
												<td class="on"><span>2,831</span></td>
												<td class="on"><span>3,945</span></td>
												<td class="on"><span>4,734</span></td>
											</tr>
											<tr data-date="20220616">
												<td>6.16 (목)</td>
												<td class="on"><span>4,841</span></td>
												<td class="on"><span>637</span></td>
												<td class="on"><span>4,421</span></td>
												<td class="on"><span>3,923</span></td>
												<td class="on"><span>4,515</span></td>
												<td class="on"><span>4,779</span></td>
											</tr>
											<tr data-date="20220617">
												<td>6.17 (금)</td>
												<td class="on"><span>4,987</span></td>
												<td class="on"><span>1,452</span></td>
												<td class="on"><span>4,620</span></td>
												<td class="on"><span>4,049</span></td>
												<td class="on"><span>3,489</span></td>
												<td class="on"><span>1,951</span></td>
											</tr>
											<tr data-date="20220618">
												<td>6.18 (토)</td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
											</tr>
											<tr data-date="20220619">
												<td>6.19 (일)</td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
											</tr>
											<tr data-date="20220620">
												<td>6.20 (월)</td>
												<td class="on"><span>5,267</span></td>
												<td class="on"><span>2,997</span></td>
												<td class="on"><span>4,942</span></td>
												<td class="on"><span>4,842</span></td>
												<td class="on"><span>5,230</span></td>
												<td class="on"><span>5,332</span></td>
											</tr>
											<tr data-date="20220621">
												<td>6.21 (화)</td>
												<td class="off" colspan="6">휴관</td>
											</tr>
											<tr data-date="20220622">
												<td>6.22 (수)</td>
												<td class="on"><span>5,562</span></td>
												<td class="on"><span>3,470</span></td>
												<td class="on"><span>5,137</span></td>
												<td class="on"><span>4,827</span></td>
												<td class="on"><span>5,029</span></td>
												<td class="on"><span>5,572</span></td>
											</tr>
											<tr data-date="20220623">
												<td>6.23 (목)</td>
												<td class="on"><span>5,610</span></td>
												<td class="on"><span>4,247</span></td>
												<td class="on"><span>5,493</span></td>
												<td class="on"><span>4,869</span></td>
												<td class="on"><span>5,356</span></td>
												<td class="on"><span>5,701</span></td>
											</tr>
											<tr data-date="20220624">
												<td>6.24 (금)</td>
												<td class="on"><span>5,524</span></td>
												<td class="on"><span>3,985</span></td>
												<td class="on"><span>5,515</span></td>
												<td class="on"><span>5,124</span></td>
												<td class="on"><span>4,710</span></td>
												<td class="on"><span>5,067</span></td>
											</tr>
											<tr data-date="20220625">
												<td>6.25 (토)</td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
											</tr>
											<tr data-date="20220626">
												<td>6.26 (일)</td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td class="on"><span>1</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
											</tr>
											<tr data-date="20220627">
												<td>6.27 (월)</td>
												<td class="on"><span>5,749</span></td>
												<td class="on"><span>4,880</span></td>
												<td class="on"><span>5,578</span></td>
												<td class="on"><span>5,514</span></td>
												<td class="on"><span>5,689</span></td>
												<td class="on"><span>5,711</span></td>
											</tr>
											<tr data-date="20220628">
												<td>6.28 (화)</td>
												<td class="off" colspan="6">휴관</td>
											</tr>
											<tr data-date="20220629">
												<td>6.29 (수)</td>
												<td class="on"><span>5,815</span></td>
												<td class="on"><span>4,942</span></td>
												<td class="on"><span>5,847</span></td>
												<td class="on"><span>5,502</span></td>
												<td class="on"><span>5,668</span></td>
												<td class="on"><span>5,914</span></td>
											</tr>
											<tr data-date="20220630">
												<td>6.30 (목)</td>
												<td class="on"><span>5,952</span></td>
												<td class="on"><span>5,361</span></td>
												<td class="on"><span>5,914</span></td>
												<td class="on"><span>5,529</span></td>
												<td class="on"><span>5,764</span></td>
												<td class="on"><span>5,986</span></td>
											</tr>
											<tr data-date="20220701">
												<td>7.01 (금)</td>
												<td class="on"><span>5,926</span></td>
												<td class="on"><span>5,444</span></td>
												<td class="on"><span>6,015</span></td>
												<td class="on"><span>5,660</span></td>
												<td class="on"><span>5,717</span></td>
												<td class="on"><span>5,735</span></td>
											</tr>
											<tr data-date="20220702">
												<td>7.02 (토)</td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
												<td><span>예약완료</span></td>
											</tr>
											<tr data-date="20220703">
												<td>7.03 (일)</td>
												<td class="on"><span>2,215</span></td>
												<td><span>예약완료</span></td>
												<td class="on"><span>897</span></td>
												<td class="on"><span>1,928</span></td>
												<td class="on"><span>3,364</span></td>
												<td class="on"><span>4,441</span></td>
											</tr>
											<tr data-date="20220704">
												<td>7.04 (월)</td>
												<td class="on"><span>6,023</span></td>
												<td class="on"><span>5,852</span></td>
												<td class="on"><span>6,037</span></td>
												<td class="on"><span>5,737</span></td>
												<td class="on"><span>6,067</span></td>
												<td class="on"><span>6,075</span></td>
											</tr>
											<tr data-date="20220705">
												<td>7.05 (화)</td>
												<td class="off" colspan="6">휴관</td>
											</tr>
											<tr data-date="20220706">
												<td>7.06 (수)</td>
												<td class="on"><span>5,799</span></td>
												<td class="on"><span>5,852</span></td>
												<td class="on"><span>6,098</span></td>
												<td class="on"><span>5,939</span></td>
												<td class="on"><span>5,992</span></td>
												<td class="on"><span>6,124</span></td>
											</tr>
											<tr data-date="20220707">
												<td>7.07 (목)</td>
												<td class="on"><span>6,117</span></td>
												<td class="on"><span>5,790</span></td>
												<td class="on"><span>6,087</span></td>
												<td class="on"><span>5,977</span></td>
												<td class="on"><span>6,072</span></td>
												<td class="on"><span>6,097</span></td>
											</tr>
											<tr data-date="20220708">
												<td>7.08 (금)</td>
												<td class="on"><span>6,031</span></td>
												<td class="on"><span>5,944</span></td>
												<td class="on"><span>6,079</span></td>
												<td class="on"><span>5,981</span></td>
												<td class="on"><span>6,024</span></td>
												<td class="on"><span>6,027</span></td>
											</tr>
											<tr data-date="20220709">
												<td>7.09 (토)</td>
												<td class="on"><span>4,540</span></td>
												<td><span>예약완료</span></td>
												<td class="on"><span>4,130</span></td>
												<td class="on"><span>3,219</span></td>
												<td class="on"><span>3,730</span></td>
												<td class="on"><span>2,927</span></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<script>
	// 예약 현황 관련 처리 
	$(function() {
		var cp = $("#to-home").data("cp");
		var state = null;
		var timeTable = [];
		$("#state-table thead").find("th").each(function(i, th) {
			var txt = $(th).text();
			var time = $(th).data("time")
			timeTable[i] = {txt: txt, time: time}
		})
		function limitBySe(se) {
			if (se === "P") {
				return parseInt($("#P").data("no"));
			} else if (se === "G") {
				return parseInt($("#G").data("no"));
			} else if (se === "Q") {
				return parseInt($("#Q").data("no"));
			}
		}
		function setState() {
			var se = $("#state-tab").find("button.on").prop("id");
			$("#state-table").find("tbody tr").each(function(i, tr) {
				$(tr).find("td span").each(function(j, span) {
					var no = state[se][i][j];
					var limit =  limitBySe(se);
					var leftNo = limit - no;

					if (leftNo > 0) {
						$(span).closest("td").addClass("on");
						$(span).text(leftNo.toLocaleString());
					} else {
						$(span).closest("td").removeClass("on");
						$(span).text("예약완료");
					}
				});
			});
		}
		$("#booking-date").closest(".inner-list").on("click", function() {
			$("#btn-daily-state").trigger("click");	
		});
		$("#btn-daily-state").on("click", function() {
			$("#popup-daily-state").addClass("on");
			if (!state) {
				var bookingId = $("#booking-id").val();
				var url = cp + "/reservation/state/" + bookingId; 
				$.get(url).done(function(res){
					if (res && res.code == 200 && res.data) {
						state = res.data;
						setState();
					}
				});				
			} else {
				setState();
			}
		});
		$("#state-tab").find("button").on("click", function() {
			$(this).addClass("on").siblings().removeClass("on");
			setState();
		});
		$("#state-table").on("click", "td.on", function() {
			var date = $(this).closest("tr").data("date");
			var idx = $(this).index();
			var se = $("#state-tab").find("button.on").prop("id");
			var seDisplay = $("#" + se).text();
			$("#booking-se-display").val(seDisplay);
			$("#booking-se").val(se);
			$("#booking-date").val(date);
			$("#booking-time-display").val(timeTable[idx].txt);
			$("#booking-time").val(timeTable[idx].time);
			$("#popup-daily-state").removeClass("on");
			$("#booking-se-display").closest(".inner-list").addClass("val");
			$("#booking-date").closest(".inner-list").addClass("val");
			$("#booking-time-display").closest(".inner-list").addClass("val");
            // 구분에 따른 인원설정
            if (se == "P" || se == "Q") {
                var seePersons = 1;
                $("#see-persons").val(seePersons);
                $("#see-persons-txt").text(seePersons);
            } else if (se == "G") {
                var seePersons = 20;
                $("#see-persons").val(seePersons);
                $("#see-persons-txt").text(seePersons);                
            }
            // 예약 현황 처리후 validation
            $.validate();
		});
		
	})
	// 인증관련처리
	$(function() {
	    window.name = "blue_house_reservation";
	    $("#btn-certify").on("click", function() {
	    	var UserAgent = navigator.userAgent;

	    	// 모바일인 경우 (변동사항 있을경우 추가 필요)
	    	if (UserAgent.match(/iPhone|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
	    	{
	    		KMCIS_window = window.open('', 'KMCISWindow');
	    	}
	    	// 모바일이 아닌 경우
	    	else
	    	{
	    		// 기본 팝업 size
	    		var jwidth	= "425";
	    		var jHeight	= "600";

	    		var UserAgent = navigator.userAgent.toLowerCase();

	    		if(UserAgent.indexOf("chrome") != -1){
	    			var jwidth	= "560";
	    			var jHeight	= "770";
	    		}else if(UserAgent.indexOf("safari") != -1){
	    			jwidth	= "441";
	    			jHeight	= "588";
	    		}

	    		KMCIS_window = window.open('', 'KMCISWindow', 'width='+jwidth+', height='+jHeight+', resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250' );
	    	}

	    	if(KMCIS_window == null){
	    		alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
	    	}
	    	$("#form-certify").submit();
	    });
	    window.afterSetvalue = function(name, phone) {
			$("#phone-name").val(name).trigger("focusout");
			$("#phone-no").val(phone).trigger("focusout");
			// 인증 종료후 validation
			$.validate();
	    }
	})
    $(function() {
        var $form = $("#form-reservation");
        var $formNumber = $form.find(".inner-list.inner-list2");
        var $formInput = $form.find(".inner-list").not(".sel").not(".inner-list2");
        
        var pMin = 1;
        var pMax = 6;
        var gMin = 20;
        var gMax = 50;
        $("#minus-see-persons").on("click", function() {
            var bookingSe = $("#booking-se").val();
            var seePersons = parseInt($("#see-persons").val());
            if (bookingSe == "P" || bookingSe == "Q") {
                if (seePersons > pMin) {
                    seePersons = seePersons - 1;
                } else {
                    seePersons = pMin;
                }
            } else if (bookingSe == "G") {
                if (seePersons > gMin) {
                    seePersons = seePersons - 1;
                } else {
                    seePersons = gMin;
                }
            }
            $("#see-persons").val(seePersons);
            $("#see-persons-txt").text(seePersons);
        })

        $("#plus-see-persons").on("click", function() {
            var bookingSe = $("#booking-se").val();
            var seePersons = parseInt($("#see-persons").val());
            if (bookingSe == "P" || bookingSe == "Q") {
                if (seePersons < pMax) {
                    seePersons = seePersons + 1;
                } else {
                    seePersons = pMax;
                }
            } else if (bookingSe == "G") {
                if (seePersons < gMin) {
                    seePersons = gMin;
                } else if (seePersons < gMax) {
                    seePersons = seePersons + 1;
                } else {
                    seePersons = gMax;
                }
            }
            $("#see-persons").val(seePersons);
            $("#see-persons-txt").text(seePersons);
        })

        $formNumber.focusin(function() {
            var $this = $(this);
            if (!$this.hasClass("focus")) {
                $this.addClass("focus");
            }
        });

        $formNumber.on("focusout", function() {
            $(this).removeClass("focus");
            var val = parseInt($(this).find("input").val());
            if (val) {
                $(this).addClass("val");
            } else {
                $(this).removeClass("val");
            }
        });

        $formInput.find("input").on("focus", function() {
            $formInput.removeClass("focus");
            $(this).closest(".inner-list").addClass("focus");
        });

        $formInput.find("input").on("focusout", function() {
            var $comp = $(this).closest(".inner-list");
            $comp.removeClass("focus");
            var val = $(this).val();
            if (val) {
                $comp.addClass("val");
            } else {
                $comp.removeClass("val");
            }
        });

    });
	// 약관동의
	$(function() {
		
        $(".agreement-box").find("a").on("click", function() {
    		if ($(this).parent().next(".agree-txt").is(":hidden")) {
    			$(".agree-txt").slideUp(300);
    			$(this).parent().next(".agree-txt").slideDown(300);
    			$(this).text("상세내용 닫기");
    		} else {
    			$(this).parent().next(".agree-txt").slideUp(300);
    			$(this).text("상세내용 펼침");
    		}
        });
        $("#agree-all").on("change", function() {
            var checked = $(this).prop("checked");
            if (checked) {
                $(".agreement-box").find("input").prop("checked", true);
            } else {
                $(".agreement-box").find("input").prop("checked", false);
            }
        });
        $(".agreement-box").find("input").on("change", function() {
        	var checked = $(this).prop("checked");
        	if (checked) {
        		var inputs = $(".agreement-box").find("input").filter(function() {
        			return $(this).prop("checked");
        		});
				if (inputs.length == 3) $("#agree-all").prop("checked", true);        		
        	} else {
        		$("#agree-all").prop("checked", false);		
        	}
        });
        
    });
    $(function() {
        var cp = $("#to-home").data("cp");
        $("#btn-booking").on("click", function() {
        	var isDisabled = $("#btn-booking").hasClass("disabled");
        	if (!isDisabled) {
            	// 입력이 모두 끝난경우
    			var pwd = $("#booking-pwd").val();
    			var repwd = $("#re-booking-pwd").val();
            	if (pwd == repwd) {
                    var data = $("#form-reservation").serializeObject();
                    var url = $("#form-reservation").prop("action");
                    
                    $.rta.post(url, data).done(function(res) {
                        if (res && res.code == 200 && res.data.successYn) {
                        	location.href = cp + "/reserved/" + res.data.bookingId;
                        } else if (res && res.code == 501) {
                        	alert("관람이 끝나지 않은 예약이 존재합니다. 관람 후 다시 예약해 주세요!!!");
                        } else if (res && res.code == 502) {
                        	alert("현재보다 과거를 예약할 수 없습니다 !!!");
                        } else if (res && res.code == 503) {
                        	alert("예약가능한 인원수를 범위가 아닙니다 !!!");
                        } else {
                        	alert("예약 중에 에러가 발생하였습니다. 잠시 후에 다시 시도해 주세요!!!");
                        }
                    });
            	} else {
            		alert("패스워드가 일치하지 않습니다.")
            	}
        	} else {
        		var agree = ["privacy-collection", "privacy-offer", "alarm-reception"];
        		// 입력이 끝나지 않은 경우의 알림
        		var bookerId = $("#booker-id").val();
        		var bookingSe = $("#booking-se").val();
        		var bookingTime = $("#booking-time").val();
				var agreeResult = agree.every(function(id) {
					var checked = $("#" + id).prop("checked");
					return checked;
				});
        		if (!bookingSe || !bookingTime) {
        			alert("날짜별 신청현황을 클릭하시셔서 예약일시를 선택하셔야 예약을 하실 수 있습니다.");	
        		} else if (!bookerId) {
        			alert("본인인증을 하셔야 예약을 하실 수 있습니다.");
        		} else if (!agreeResult) {
        			alert("약관에 모두 동의를 하셔야 예약을 하실 수 있습니다.");
        		}
        	}
        });
    });
    
	/*	1. 본인인증시 // validation
		2. 날짜
		3. 비밀번호
		4. 약관 동의시	*/
	$(function() {
		var inputs = ["phone-name", "phone-no", "booking-se", "booking-time"]
		var pwds = ["booking-pwd", "re-booking-pwd"];
		var agree = ["privacy-collection", "privacy-offer", "alarm-reception"];
		function validate() {
			// input
			var inputResult = inputs.every(function(id) {
				var val = $("#" + id).val();
				if (!val) {
					return false;	
				}
				return true;
			})
			// 패스워드
			var pwdResult = pwds.every(function(id) {
				var val = $("#" + id).val();
				if (val && val.length == 4) return true;
				return false;	
			});

			// 동의
			var agreeResult = agree.every(function(id) {
				var checked = $("#" + id).prop("checked");
				return checked;
			});
			
			if (inputResult && pwdResult && agreeResult)  {
				$("#btn-booking").removeClass("disabled");
			} else {
				$("#btn-booking").addClass("disabled");
			}
		}
		$.validate = validate;
		
		$("#booking-pwd, #re-booking-pwd").on("input", function(e) {
			var key = e.originalEvent.keyCode;
			var val = $(this).val();
			$(this).val(val.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, ''));
			// 패스워드 처리후 validation
			$.validate();
		});
		$("#booking-pwd, #re-booking-pwd").on("keypress", function(e) {
			var key = e.originalEvent.keyCode;
			if (key < 48 || key > 57) {
				return false;
			}
		});
		
		$(".agreement-box").find("input").on("change", function() {
			var checked = $(this).prop("checked");
			// 동의 체크 후 validation
			$.validate();
		});
	});
	
	$(document).ready(function(){
        $('.close_btn').on('click',function(){
            $('.wrap1').removeClass('on')
        })
    })

	window.addEventListener('beforeunload', function() {
		$(".content").empty();
		$("#popup-daily-state").remove();
		$("#page-expired").show();
	});
	$("#btn-to-reserve").on("click", function(){
		location.href="https://reserve.opencheongwadae.kr/"
	});
</script>
		</div>
	</div>

</body>
</html>