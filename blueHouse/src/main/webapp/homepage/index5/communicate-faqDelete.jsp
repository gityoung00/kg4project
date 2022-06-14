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

<%
	String n = request.getParameter("num");
	int num = Integer.parseInt(n);
	
	FaqDAO FaqDao = new FaqDAO();

	FaqDao.delete(num);
%>
<script>alert('공지가 삭제되었습니다.'); location.href="communicate-faq.jsp";</script>

</body>
</html>