<%@page import="blueHouse.FaqDAO"%>
<%@page import="blueHouse.boardDTO"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	request.setCharacterEncoding("UTF-8");

	String id = (String)session.getAttribute("id");
	if(id == null || id == ""){
		response.sendRedirect("/blueHouse/member/login.jsp");
		return;
	}
	
	String n = request.getParameter("num");
	if(n == null || n == ""){
		response.sendRedirect("communicate-faqWrite.jsp");
		return;
	}
	int num = 0;
	try{
		num = Integer.parseInt(n);
	} catch(Exception e) {
		response.sendRedirect("communicate-faqWrite.jsp");
		return;
	}
	
	String name = (String)session.getAttribute("name");
	String content = request.getParameter("content");
	String title = request.getParameter("title");
	if(content == null || content == ""){
		out.print("<script>alert('내용을 써주세요!'); history.back(); </script>");
		return ;
	}
	
	FaqDAO faqDao = new FaqDAO();
	boardDTO boardDto = faqDao.selectNum(num);
	boardDto.setContent(content);
	boardDto.setTitle(title);
	boardDto.setNum(num);
	
	
	faqDao.update(boardDto);
	
%>
<script>alert('게시판이 수정이 완료 되었습니다'); location.href='communicate-faqView.jsp?num=<%=boardDto.getNum()%>';</script>