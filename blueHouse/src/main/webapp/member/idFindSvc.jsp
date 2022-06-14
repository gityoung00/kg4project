<%@page import="javax.mail.MessagingException"%>
<%@page import="javax.mail.Transport"%>
<%@page import="javax.mail.Message"%>
<%@page import="javax.mail.internet.InternetAddress"%>
<%@page import="javax.mail.internet.MimeMessage"%>
<%@page import="javax.mail.PasswordAuthentication"%>
<%@page import="javax.mail.Session"%>
<%@page import="java.util.Properties"%>
<%@page import="blueHouse.MemberDTO"%>
<%@page import="blueHouse.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	request.setCharacterEncoding("utf-8");

	String name = request.getParameter("name");
	String email = request.getParameter("email");
	
	//빈칸 확인
	if(name=="" || email=="") {
		out.print("<script>alert('이름과 이메일을 입력해 주세요'); history.back();</script>");
		return;
	}
	System.out.println("name " + name + " email " + email);
	
	MemberDAO memberDao = new MemberDAO();
	MemberDTO memberDto = memberDao.selectName(name);
	
	//가입정보확인
	if(memberDto == null) {
		out.print("<script>alert('가입이 되어있지 않은 정보입니다.'); history.back();</script>");
		return;
	}
	
	//메일보내기
	//발신자
	String host = "smtp.naver.com";
	final String user = "winsomenk@naver.com";
	final String password = "skrud6141!";
	
	//수신자
	String to = memberDto.getEmail();
	
	//SMTP 서버 정보 설정
	Properties props = new Properties();
	props.put("mail.smtp.host", host);
	props.put("mail.smtp.auth", "true");

	props.put("mail.smtp.ssl.protocols", "TLSv1.2");
			
			
	Session sess = Session.getInstance(props, new javax.mail.Authenticator() {
		protected PasswordAuthentication getPasswordAuthentication() {
			return new PasswordAuthentication(user, password);
		}
	});
		
	//내용
	try {
		MimeMessage message = new MimeMessage(sess);
		message.setFrom(new InternetAddress(user));
		message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
	
		//제목
		message.setSubject("[blueHouse]아이디가 도착하였습니다");
		
		//내용
		message.setText(memberDto.getName()+" 님의 아이디는 " + memberDto.getId() + "입니다.");
		
		//확인
		Transport.send(message);
		System.out.println("메세지 보내기 성공~!");
		
	} catch (MessagingException e) {
		e.printStackTrace();
	}
	
	
%>
<script>alert('입력하신 이메일로 아이디가 발송되었습니다. 다시 로그인해주세요.'); location.href="login.jsp";</script>

