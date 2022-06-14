<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
<%@page import="blueHouse.FaqDAO"%>
<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.ReviewDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	String n = request.getParameter("num");
	int num = Integer.parseInt(n);
	
	FaqDAO FaqDao = new FaqDAO();
	boardDTO boardDto = FaqDao.selectNum(num);
	
	String id = (String)session.getAttribute("id");
	if(id == null || id == ""){
		response.sendRedirect("/blueHouse/member/login.jsp");
		return;
	}
	if(id.equals(boardDto.getId()) == false) {
		response.sendRedirect("communicate-Faq.jsp");
		return; 
	}
	FaqDao.delete(num);
%>
<script>alert('공지가 삭제되었습니다.'); location.href="communicate-Faq.jsp";</script>

</body>
</html>