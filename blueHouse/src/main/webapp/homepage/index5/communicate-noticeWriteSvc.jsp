<%@page import="blueHouse.FaqDAO"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@page import="java.io.File"%>
<%@page import="blueHouse.NoticeDAO"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.Date"%>
<%@page import="blueHouse.boardDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%
request.setCharacterEncoding("utf-8");

String id = (String) session.getAttribute("id");
String title = request.getParameter("title");
String content = request.getParameter("content");

if (id == null || id == "") {
	out.print("<script>alert(' 로그인을 해주세요.'); history.back();</script>");
	return;
}
if (id.equals("admin")) {
	boardDTO boardDto = new boardDTO();
	boardDto.setTitle(title);
	boardDto.setContent(content);

	NoticeDAO noticeDao = new NoticeDAO();
	noticeDao.write(boardDto);

} else {
	out.print("<script>alert('관리자 계정이 아님니다.'); history.back();</script>");
	return;
}


%>
<script>
	alert('질문 작성이 완료되었습니다');
	location.href = 'communicate-notice.jsp';
</script>
