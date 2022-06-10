<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.ReviewDAO"%>
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
		response.sendRedirect("make-review.jsp");
		return;
	}
	int num = 0;
	try{
		num = Integer.parseInt(n);
	} catch(Exception e) {
		response.sendRedirect("make-review.jsp");
		return;
	}
	
	String name = (String)session.getAttribute("name");
	String content = request.getParameter("content");
	
	if(content == null || content == ""){
		out.print("<script>alert('내용을 써주세요!'); history.back(); </script>");
		return ;
	}
	
	ReviewDAO reviewDao = new ReviewDAO();
	boardDTO boardDto = reviewDao.selectNum(num);
	boardDto.setContent(content);
	boardDto.setNum(num);
	
	Date date = new Date();
	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	int wdate = Integer.parseInt(sdf.format(date));
	boardDto.setWrite_date(wdate);
	
	reviewDao.update(boardDto); 
	
%>
<script>alert('관람후기 수정이 완료 되었습니다'); location.href='make-reviewView.jsp?num=<%=boardDto.getNum()%>';</script>


