<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String id = (String)session.getAttribute("id");
	if(id == null || !id.equals("admin")) {
		out.print("<script>alert('관리자 로그인 요망.'); location.href='/blueHouse/homepage/main.jsp'</script>");
		return;
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


#menuBoard {
	overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
}	

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
}
#inner1 {
	margin: 200px auto;
	width: 80%;
	text-align: left;
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
	font-size: 28px;
	color: grey;
}

#innerTable td {
	padding-left: 10px;
}

button {
	border: none;
	background-color: #2f3337;
	color: white;
	font-size: 13px;
	height: 35px;
	padding: 8px 10px 15px 10px;
	margin-top: 5px;
}

/* input {
	height: 25px;
	border: 1px solid grey;
	border-radius: 0;
	padding: 5px;
}
 */
</style>
<title></title>
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
				<tr class="on">
					<td class="text" onclick="location.href='/blueHouse/admin/adminMember.jsp'">
						<span>회원 관리</span>
					</td>
				</tr>
				<tr>
					<td class="text" onclick="location.href='/blueHouse/admin/adminReserve.jsp'">
						<span>예약 관리</span>
					</td>
				</tr>
				
			
			</table>
		</div>
	</div>

	<div id="board">
		<div id="innerBoard">
			<div id="inner1">
				<div>
					<input type="text" placeholder="검색어를 입력해 주세요" value="">
					<button type="submit" class="search">
						<span> 검색</span>
					</button>
				</div>
				<table id="innerTable">
					<colgroup>
						<col width="20%">
						<col width="20%">
						<col width="30%">
						<col width="30%">
						<col>
					</colgroup>
					<tr class="head">
						<th>이름</th>
						<th>아이디</th>
						<th>이메일</th>
						<th>번호</th>
					</tr>
					
					<tr class="members">
						<td>관리자</td>		
						<td>admin</td>		
						<td>admin@open.jr</td>		
						<td>01000000000</td>		
					</tr>
					<tr class="members">
						<td>관리자</td>		
						<td>admin</td>		
						<td>admin@open.jr</td>		
						<td>01000000000</td>		
					</tr>
					<tr class="members">
						<td>관리자</td>		
						<td>admin</td>		
						<td>admin@open.jr</td>		
						<td>01000000000</td>		
					</tr>
					<tr class="members">
						<td>관리자</td>		
						<td>admin</td>		
						<td>admin@open.jr</td>		
						<td>01000000000</td>		
					</tr>
					
				</table>
		
			</div>
		
		</div>
	
	</div>



</body>
</html>