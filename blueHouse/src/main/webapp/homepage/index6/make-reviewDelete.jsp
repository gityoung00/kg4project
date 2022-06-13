<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.ReviewDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	String n = request.getParameter("num");
	int num = Integer.parseInt(n);
	
	ReviewDAO reviewDao = new ReviewDAO();
	boardDTO boardDto = reviewDao.selectNum(num);
	
	String id = (String)session.getAttribute("id");
	if(id == null || id == ""){
		response.sendRedirect("/blueHouse/member/login.jsp");
		return;
	}
	if(id.equals(boardDto.getId()) == false) {
		response.sendRedirect("make-review.jsp");
		return;
	}
	reviewDao.delete(num);
%>
<script>alert('후기가 삭제되었습니다.'); location.href="make-review.jsp";</script>