<%@page import="blueHouse.NoticeDAO"%>
<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.ReviewDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	String n = request.getParameter("num");
	int num = Integer.parseInt(n);
	
	NoticeDAO noticeDao = new NoticeDAO();
	boardDTO boardDto = noticeDao.selectNum(num);
	
	String id = (String)session.getAttribute("id");
	if(id == null || id == ""){
		response.sendRedirect("/blueHouse/member/login.jsp");
		return;
	}
	if(id.equals(boardDto.getId()) == false) {
		response.sendRedirect("communicate-notice.jsp");
		return; 
	}
	noticeDao.delete(num);
%>
<script>alert('공지가 삭제되었습니다.'); location.href="communicate-notice.jsp";</script>