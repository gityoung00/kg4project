<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="blueHouse.PageVO"%>
<%@page import="blueHouse.ReserveDTO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="blueHouse.ReserveDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8");
	String id = (String)session.getAttribute("id");
	if(id == null || !id.equals("admin")) {
		out.print("<script>alert('관리자 로그인 요망.'); location.href='/blueHouse/homepage/main.jsp'</script>");
		return;
	}
	
	Date todays = new Date();
	SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
	int todayOf = Integer.parseInt(format.format(todays));
	
	//검색
	String mode = request.getParameter("mode");
	String search_keyword = request.getParameter("search_keyword");
	String year1 = request.getParameter("year"); 
	String month1 = request.getParameter("month"); 
	String day1 = request.getParameter("day");
	int date = 0;
	
	
	ReserveDAO reserveDao = new ReserveDAO();
	ArrayList<ReserveDTO> reserveInfo = new ArrayList<>();
	int sumToday = reserveDao.sumToday(todayOf);
	
	if (mode != null && mode.equals("search")) {
		if (search_keyword != null || search_keyword != "") {
			if(month1 != "" && day1 != "") {
				date = Integer.parseInt(year1 + month1 + day1);
				reserveInfo = reserveDao.searchBoth(date, search_keyword);
			}
		}
		
		if(search_keyword == null || search_keyword == "") {
			if(month1 != null && day1 !=null) {
				date = Integer.parseInt(year1 + month1 + day1);
				reserveInfo = reserveDao.selectDate(date);
			}
		}
		
		if(month1 == "" && day1 == "") {
			if(search_keyword != null || search_keyword != ""){
				reserveInfo = reserveDao.searchId(search_keyword);
			}
		}
		
	} else{
		reserveInfo = reserveDao.selectAll();
	}
	
	

%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
* {
	padding: 0;
	margin: 0;
}

body {
	hight: 100%;
}

div {
	display: block;
}

/* 
#menuBoard {
	overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    
}	
 */
#menu {
	position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 220px;
    background-color: #272837;
}

#menuTable {
	border-collapse: collapse;
	width: 220px;
}

#menuTable tr {
	height: 70px;
	text-align: left;
	font-size: 23px;
	font-weight: bold;
	color: #EEEEF1;
	border-bottom: 1px solid rgba(255,255,255,0.5);
}

#menuTable td {
	padding: 10px;
}

#menuTable .text {
	padding-left: 20px;
}

#board{
	background-color: #EFF0FF;
	overflow: hidden;
    position: absolute;
    left: 221px;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
 }
 


#menuTable .on {
	background-color:#494A59  ;
}

table img {
	width: 180px;
}

#innerBoard {
	background-color: white;
    height: 80%;
    margin: 50px;
    padding: 50px;
    margin-bottom: 40px;
    display: flex;
    min-width: 1100px;
}

#inner1 {
	margin: 0 auto;
	margin-top: 50px;
	width: 80%;
	text-align: left;
	overflow: auto;
}

#inner1::-webkit-scrollbar {
    width: 10px;
  }
  
#inner1::-webkit-scrollbar-thumb {
  background-color: #CFCFCF;
  border-radius: 10px;
  background-clip: padding-box;
  border: 2px solid transparent;
}

#inner1::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 10px;
  box-shadow: inset 0px 0px 5px white;
}

#innerTable {
	width: 100%;
	font-size: 18px;
	border-collapse: collapse;
	
}

#innerTable .members {
	height: 50px;

}

#innerTable .head{
	border-bottom: 3px solid #383EA7;
	font-size: 24px;
	color: grey;
	height: 42px;
}

#innerTable td {
	padding-left: 10px;
}

button {
	border: none;
    background-color: #2f3337;
    color: white;
    font-size: 13px;
    height: 37px;
    padding: 10px;
}

#today {
	padding: 0 30px 50px 0;
	height: 100px;
	font-size: 30px;
	color: grey;
	font-weight: bold;
	
}

#today span {
	float: right;
}
.visit {
	color: #9293AD;
}

.number {
	font-size: 80px;
}

.people {
	padding-top: 40px;
	color: #000;
}

.right-zone {
	margin-bottom: 50px;
	float: right;
}

#date {
	padding-right: 10px;
	font-size: 18px;
	font-weight: bold;
	color: #595A6C;
}

input {
   height: 25px;
   width: 200px;
   border: 1px solid grey;
   border-radius: 0;
   padding: 5px;
}

select {
	height: 35px;
	width: 80px;
	border-radius: 0;
	padding: 5px;
	font-size: 15px;
}


</style>
<title>예약관리</title>
</head>

<body>
	<div id="menuBoard">
		<div id="menu">
			<table id="menuTable">
				<tr>
					<td><a href="/blueHouse/homepage/main.jsp">
						<span><img src="/blueHouse/img/logo.png"></span></a>
					</td>
				</tr>
				<tr>
					<td class="text" onclick="location.href='/blueHouse/admin/adminMember.jsp'">
						<span>회원 관리</span>
					</td>
				</tr>
				<tr class="on">
					<td class="text" onclick="location.href='/blueHouse/admin/adminReserve.jsp'">
						<span>예약 관리</span>
					</td>
				</tr>
				
			
			</table>
		</div>
	</div>
	<form action="adminReserve.jsp?mode=search" method="post" accept-charset="utf-8">
		<div id="board">
			<div id="innerBoard">
				<div id="inner1">
					<div id="today">
						<span class="visit">오늘의 방문자</span><br>
						<span class="people">명</span>
						<span class="number"><%=sumToday%></span>
						
					</div>
					<div class="bbs-search">
		               <div class="right-zone">
		               		<span id="date">
							<select id="year" name="year">
								<option value="">연도</option>
								<option value="2022">2022</option>
							</select>&nbsp;년&nbsp;&nbsp;
							<select id="month" name="month">
								<option value="">월</option>
								<%for(int i=1;i<=12;i++) { 
									String month = String.format("%02d", i);%>
								<option value="<%=month %>"><%=month %></option>
								<%} %>
							</select>&nbsp;월&nbsp;&nbsp;
							<select id="day" name="day">
								<option value="">일</option>
								<%for(int i=1;i<=31;i++) { 
									String day = String.format("%02d", i);%>
								<option value="<%=day %>"><%=day %></option>
								<%} %>
							</select>&nbsp;일&nbsp;&nbsp;
							</span> 
							<input type="text" name="search_keyword" placeholder="아이디를 검색할 수 있습니다." >
		                  <button type="submit">
		                  <span>검색</span>
		                  </button>
		               </div>
		            </div>
		            <div id="tableWrap">
						<table id="innerTable">
							<colgroup>
								<col width="15%">
								<col width="15%">
								<col width="20%">
								<col width="17%">
								<col width="13%">
								<col width="20%">
								<col>
							</colgroup>
							<tr class="head">
								<th>관람예약일</th>
								<th>관람시간</th>
								<th>아이디</th>
								<th>이름</th>
								<th>관람인원</th>
								<th>예약번호</th>
							</tr>
							<%
								for (int i = 0; i < reserveInfo.size(); i++) {
									ReserveDTO reserve = reserveInfo.get(i);
									int time = reserve.getSee_time(); String timeline="";
									if(time == 1) {timeline="0900";}
									else if(time == 2) {timeline="1030";}
									else if(time == 3) {timeline="1200";}
									else if(time == 4) {timeline="1330";}
									else if(time == 5) {timeline="1500";}
									else if(time == 6) {timeline="1630";}
									String reserveNum = reserve.getSee_date() + timeline + reserve.getReserve_num();
							%>
								<tr class="members">
									<td><%=reserve.getSee_date()%></td>		
									<td><%=timeline%></td>		
									<td><%=reserve.getId()%></td>	
									<td><%=reserve.getName()%></td>	
									<td><%=reserve.getCompany()%></td>		
									<td><%=reserveNum%></td>		
								</tr>
							<%
							}
							%>
						</table>
					</div>
				</div>
			
			</div>
		
		</div>
	</form>


</body>
</html>