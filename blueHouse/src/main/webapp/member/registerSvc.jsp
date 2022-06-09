<%@page import="blueHouse.MemberDTO"%>
<%@page import="blueHouse.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8");
	String id = request.getParameter("id");
	String pw = request.getParameter("pw");
	String pwChk = request.getParameter("pwChk");
	String name = request.getParameter("name");
	String tel = request.getParameter("tel");
	String email = request.getParameter("email");
	
	// 입력 값 검증
	if(id == ""){
		out.print("<script>alert('아이디는 필수 정보 입니다.'); history.back();</script>");
		return;
	}
	if(pw == "" ){
		out.print("<script>alert('비밀번호는 필수 정보 입니다.'); history.back();</script>");
		return;
	}
	if(name == ""){
		out.print("<script>alert('이름은 필수 정보 입니다.'); history.back();</script>");
		return;
	}
	if(tel == ""){
		out.print("<script>alert('전화번호는 필수 정보 입니다.'); history.back();</script>");
		return;
	}
	if(email == ""){
		out.print("<script>alert('이메일은 필수 정보 입니다.'); history.back();</script>");
		return;
	}
	
	// 입력 값 검증.
	if(! pw.equals(pwChk)){
		out.print("<script>alert('두 패스워드가 일치하지 않습니다.'); history.back();</script>");
		return ;
	}
	
	// 중복 아이디
	MemberDAO memberDao = new MemberDAO();
	MemberDTO check = memberDao.selectId(id);
	if(check == null){
		MemberDTO member = new MemberDTO();
		member.setId(id);
		member.setPw(pw);
		member.setName(name);
		member.setTel(tel);
		member.setEmail(email);
		memberDao.insert(member);
		out.print("<script>alert('회원 가입에 성공하셨습니다'); location.href='login.jsp';</script>");
	}else{
		out.print("<script>alert('중복된 아이디 입니다. 다시 입력해주세요.'); history.back();</script>");
	}
	
%>