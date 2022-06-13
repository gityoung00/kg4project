<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.IdeaDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	String n = request.getParameter("num");
	int num = Integer.parseInt(n);
	
	IdeaDAO ideaDao = new IdeaDAO();
	boardDTO boardDto = ideaDao.selectNum(num);
	
	String id = (String)session.getAttribute("id");
	if(id == null || id == ""){
		response.sendRedirect("/blueHouse/member/login.jsp");
		return;
	}
	if(id.equals(boardDto.getId()) == false) {
		response.sendRedirect("make-idea.jsp");
		return;
	}
	ideaDao.delete(num);
%>
<script>alert('아이디어가 삭제되었습니다.'); location.href="make-idea.jsp";</script>