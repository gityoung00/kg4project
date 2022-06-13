<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.IdeaDAO"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	request.setCharacterEncoding("utf-8");

	String id = (String)session.getAttribute("id");
	String name = (String)session.getAttribute("name");
	String title = request.getParameter("title");
	String content = request.getParameter("content");
	
	if(id == null || id == ""){
		response.sendRedirect("/blueHouse/member/login.jsp");
		return;
	}

	if(title == null || title == ""){
		out.print("<script>alert('제목을 써주세요!'); history.back(); </script>");
		return ;
	}
	if(content == null || content == ""){
		out.print("<script>alert('내용을 써주세요!'); history.back(); </script>");
		return ;
	}
	
	boardDTO boardDto = new boardDTO();
	boardDto.setTitle(title);
	boardDto.setContent(content);
	boardDto.setName(name);
	boardDto.setId(id);
	
	Date date = new Date();
	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	int wdate = Integer.parseInt(sdf.format(date));
	boardDto.setWrite_date(wdate);
	
	IdeaDAO ideaDao = new IdeaDAO();
	ideaDao.write(boardDto); 
%>
<script>alert('아이디어 작성이 완료되었습니다'); location.href='make-idea.jsp';</script>