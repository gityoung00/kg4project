<%@page import="blueHouse.MemberDTO"%>
<%@page import="blueHouse.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8");

	String id = request.getParameter("id");
	String pw = request.getParameter("pw");
	
	if(id == "" || pw == "") {
		out.print("<script>alert('아이디와 비밀번호를 모두 입력해 주세요.'); history.back();</script>");
		return;
	}
	
	MemberDAO memberDao = new MemberDAO();
	MemberDTO member = memberDao.selectId(id);
	
	if(member != null && member.getPw().equals(pw)) {
		session.setAttribute("id", member.getId());
		session.setAttribute("name", member.getName());
		session.setAttribute("email", member.getEmail());
		session.setAttribute("tel", member.getTel());
		out.print("<script>alert('로그인에 성공하셨습니다.'); location.href='/blueHouse/homepage/main.jsp';</script>");
		
	}else {
		out.print("<script>alert('아이디 혹은 비밀번호를 다시 입력해 주세요.'); history.back();</script>");
	}
	



%>