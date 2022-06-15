<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<style>
body {
	margin: 0px;
}

#member-page {
	height: 100vh;
	background: url(../img/member/memberLayer.png) no-repeat center;
	background-size: cover;
}

#member-block {
	position: relative;
	top: 25%;
	margin: auto;
	background-color: #fff;
	width: 730px;
	height: 570px;
	border-radius: 9px;
	font-align: center;
	box-shadow: 0 24px 57px -2px rgba(0, 0, 0, 0.3);
}

.member-title {
	font-family: "넥슨Lv1고딕 Low OTF";
	font-size: 35px;
	font-weight: bold;
	position: relative;
	left: 280px;
	top: 80px;
}

table {
	position: relative;
	top: 100px;
	margin: auto;
	border: 0px;
	align: center;
	max-width: 560px;
}

tr {
	height: 100px;
	text-align: center;
}

tr .menu {
	font-family: "넥슨Lv1고딕 Low OTF";
	font-size: 30px;
	text-align: left;
	padding-left: 50px;
	
}

input[type=button] {
	border: 0;
	color: #ffffff;
	font-weight: bold;
	font-size: 23px;
	box-shadow: 3px 7px 20px 2px rgb(0 0 0/ 30%);
	background-color: #5D5D5D;
	width: 230px;
	height: 60px;
	margin-top: 10px;
}

hr {
	width: 480px;
	height: 3px;
	background-color: #19a0b5;
}

a:link {
	color: black;
	text-decoration: none;
}

a:visited {
	color: black;
	text-decoration: none;
}

a:hover {
	color: #19a0b5;
	text-decoration: none;
}

a:active {
	color: #19a0b5;
	text-decoration: none;
}

</style>

<%
	if(id == null) {
		out.print("<script>alert('로그인 정보가 없습니다.'); location.href='login.jsp'</script>");
		
	}else {
%>

<body>
	<div id="member-page">
		<div id="member-block">
			<div class="member-title">마이 페이지</div>
				<table>
					<tr>
						<td class="menu"> 
							<img src="../img/mypageBullet.png"> 
							<a href="update.jsp">회원 정보 수정</a> 
							<hr />
						</td>
					</tr>
					<tr>
						<td class="menu"> 
							<img src="../img/mypageBullet.png"> 
							<a href="../reserve/inquiry.jsp">관람 예약 정보 </a>
							<hr />
						</td>
					</tr>
					<tr>
						<td class="menu"> 
							<img src="../img/mypageBullet.png"> 
							<a href="logout.jsp">로그아웃 </a>
							<hr />
						</td>
					</tr>

					<tr>
						
						<td><input type="button" value="나가기"
							onclick="location.href='/blueHouse/homepage/main.jsp'"></td>
					</tr>
				</table>

		</div>
	</div>

<%@include file="/footer.jsp" %>
	
<%}%>
	
	
	