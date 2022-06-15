<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	String id = (String)session.getAttribute("id");
	if(id == null || !id.equals("admin")) {
		out.print("<script>alert('관리자 로그인 요망.'); location.href='/blueHouse/homepage/main.jsp'</script>");
	}else {

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
    min-width: 1100px;
}
#inner1 {
	margin: auto;
	text-align: center;
	font-size: 50px;
}

span b{
	color: #383EA7 ;
}
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
				<tr>
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
				<span><img src="/blueHouse/img/admin.png" style="width:400px;"></span>
				<br>
				<span><b>관리자님 </b>  환영합니다.</span>
			</div>
		
		</div>
	
	</div>

	

</body>
</html>
<%}%>