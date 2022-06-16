<%@page import="blueHouse.ReserveDTO"%>
<%@page import="blueHouse.ReserveDAO"%>
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
			<a href="/blueHouse/homepage/index3/sub1.jsp" target="_new">관람안내</a><a
				href="/blueHouse/homepage/index5/communicate-faq.jsp" target="_new">자주묻는질문</a>
		</div>
		
<%
	String id = (String)session.getAttribute("id");
	String name = (String)session.getAttribute("name");
	String tel = (String)session.getAttribute("tel");
	ReserveDAO reserveDao = new ReserveDAO();
	ReserveDTO reserveInfo = reserveDao.selectId(id);
	
	if(reserveInfo == null) {
		out.print("<script>alert('예약 정보를 찾을 수 없습니다.'); history.back();</script>");
		return;
	}else {
		int reserve_num = reserveInfo.getReserve_num();
		int company = reserveInfo.getCompany();
		int see_date = reserveInfo.getSee_date();
		int see_time = reserveInfo.getSee_time();
		
		String time = "";
		String timeline ="";
		if(see_time == 1) {time="09:00 ~ 10:30"; timeline="0900";}
		else if(see_time == 2) {time="10:30 ~ 12:00"; timeline="1030";}
		else if(see_time == 3) {time="12:00 ~ 13:30"; timeline="1200";}
		else if(see_time == 4) {time="13:30 ~ 15:00"; timeline="1330";}
		else if(see_time == 5) {time="15:00 ~ 16:30"; timeline="1500";}
		else if(see_time == 6) {time="16:30 ~ 18:00"; timeline="1630";}
		
		String req_date = reserveInfo.getReq_date();
		String resault = String.format("%04d", reserve_num);
		String reserveNumber = see_date + timeline + resault;
				
%>
		<div id="container">
			<header class="title">
				<h1>
					청와대 관람<br class="mobile">예약 결과
				</h1>
			</header>
			<div class="content form-content">
				<div class="box-white">
					<ul class="step-reserve">
						<li><span>STEP 01</span>
							<h2>
								관람 예약 <br>신청
							</h2>
							<p>
								관람을 원하시는 일자,시간,인원을<br>선택해주세요
							</p></li>
						<li><span>STEP 02</span>
							<h2>
								청와대 <br>관람
							</h2>
							<p>
								예약문자를 받으신 분들은 관람 일자에<br>청와대를 방문, 관람해 주세요
							</p></li>
					</ul>
					<div class="inner-wrap">
						<div class="inner">
							<h2>관람신청 예약이 정상적으로 처리되었습니다.</h2>
							<h3 class="tit01">예약 신청 정보</h3>
							<!-- <div class="barcode">
            	    <div id="barcode-image" style="padding: 0px; overflow: auto; width: 209px;"><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 10px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 3px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 3px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 3px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 4px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 2px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 3px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 3px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 3px"></div><div style="float: left; font-size: 0; width:0; border-left: 3px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 1px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 1px"></div><div style="float: left; font-size: 0; width:0; border-left: 2px solid #000000; height: 80px;"></div><div style="float: left; font-size: 0; background-color: #FFFFFF; height: 80px; width: 10px"></div><div style="clear:both; width: 100%; background-color: #FFFFFF; color: #000000; text-align: center; font-size: 18px; margin-top: 5px;">202207080900P00086F</div></div>
                </div> -->
							<div class="inner-box2">
								<div class="inner-list">
									<label for="booking-date" class="input-tit">관람예약일자</label> <input
										type="text" name="booking-date" id="booking-date" readonly=""
										value="<%=see_date%>">
								</div>
								<div class="inner-list">
									<label for="booking-time" class="input-tit">관람예약시간</label> <input
										type="text" name="booking-time" id="booking-time" readonly=""
										value="<%=time%>">
								</div>
								<div class="inner-list">
									<label for="nop" class="input-tit">관람예약인원</label> <input
										type="text" name="nop" id="nop" readonly="" value="<%=company%>">
								</div>
								<div class="inner-list">
									<label for="reserver" class="input-tit">예약자 성명</label> <input
										type="text" name="reserver" id="reserver" readonly=""
										value="<%=name%>">
								</div>
								<div class="inner-list">
									<label for="telephone" class="input-tit">휴대폰 번호</label> <input
										type="text" name="telephone" id="telephone" readonly=""
										value="<%=tel%>">
								</div>
								<div class="inner-list">
									<label for="se" class="input-tit">예약구분</label> <input
										type="text" name="se" id="se" readonly="" value="개인">
								</div>
								<div class="inner-list">
									<label for="booking-no" class="input-tit">예약번호</label> <input
										type="text" name="booking-no" id="booking-no" readonly=""
										value="<%=reserveNumber%>">
								</div>
								<div class="inner-list">
									<label for="apply-dt" class="input-tit">신청일자</label> <input
										type="text" name="apply-dt" id="apply-dt" readonly=""
										value="<%=req_date %>" style="color: #aaa">
								</div>
							</div>
							<div class="notice-con">
								<strong>알림</strong>
								<ul class="ul-list">
									<li>청와대 관람 예약은 1인 1회에 한하여 예약이 가능하며 중복 예약은 불가능합니다..</li>
									<li>예약자의 휴대폰번호로 예약 관람 안내 정보를 발송하여 드립니다.</li>
									<li>청와대 관람 방문 시 바코드를 제시하여 주시기 바랍니다.</li>
									<li>정상예약 후에도 예약 알림문자를 수신하지 못하신 경우에는 개방행사 안내센터(1522-7760)로
										문의하여 주시기 바랍니다.</li>
								</ul>
							</div>
						</div>
						<a id="btn-close" href="/blueHouse/reserveMain.jsp"
							class="btn-bottom compelte-btn">확인</a>
					</div>
				</div>
			</div>
<%} %>
			<script src="/assets/js/jquery-barcode.min.js"></script>
			<script>
$(function() {
    var cp = $("#to-home").data("cp");
    $("#btn-close").on("click",function() {
    	location.href = cp + "/";
    });
    var bookingNo = $("#booking-no").val();
    $('#barcode-image').barcode(bookingNo, "code128", {fontSize:18, barWidth:1, barHeight:80});
});
</script>
		</div>
	</div>

</body>
</html>