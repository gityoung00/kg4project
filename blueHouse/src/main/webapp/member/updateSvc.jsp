<%@page import="blueHouse.MemberDTO"%>
<%@page import="blueHouse.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	request.setCharacterEncoding("utf-8");
	String id = (String)session.getAttribute("id");
	String pw = request.getParameter("pw");
	String pwChk = request.getParameter("pwChk");
	
	String name = (String)session.getAttribute("name");
	String name2 = request.getParameter("name");
	if(!name.equals(name2)) name = name2;
	
	String email = (String)session.getAttribute("email");
	String email2 = request.getParameter("email");
	if(!email.equals(email2)) email = email2;
	
	String tel = (String)session.getAttribute("tel");
	String tel2 = request.getParameter("tel");
	if(!tel.equals(tel2)) tel = tel2;
	
	// 입력 값 검증
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
	if(check != null){
	
		check.setPw(pw);
		check.setName(name);
		check.setTel(tel);
		check.setEmail(email);
		
		memberDao.update(check);
		
		out.print("<script>alert('회원 수정 완료. 다시 로그인 해주세요'); location.href='logout.jsp';</script>");
	}else{
		out.print("<script>alert('회원 수정 실패'); history.back();</script>");
	}
	
%>
