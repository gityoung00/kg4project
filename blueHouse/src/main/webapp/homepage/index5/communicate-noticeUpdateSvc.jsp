<%@page import="java.io.File"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@page import="blueHouse.NoticeDAO"%>
<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.ReviewDAO"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	request.setCharacterEncoding("UTF-8");

	String id = (String)session.getAttribute("id");
	//기존파일이름
	String file_Name = request.getParameter("fileName");
	System.out.print(file_Name);
	
	String location = "/Users/gayeonkim/blueHouseDB/notice/";
	File file = new File(location);
	MultipartRequest multi = new MultipartRequest(request, location, 1024 * 1024 * 20 ,"utf-8");

	String title = multi.getParameter("title");
	String content = multi.getParameter("content");
	//새로 업로드한 파일
	String upfile = multi.getFilesystemName("upfile");
	
	if(id == null || id == ""){
		response.sendRedirect("/blueHouse/member/login.jsp");
		return;
	}
	
	String n = request.getParameter("num");
	if(n == null || n == ""){
		response.sendRedirect("communicate-noticeWrite.jsp");
		return;
	}
	int num = 0;
	try{
		num = Integer.parseInt(n);
	} catch(Exception e) {
		response.sendRedirect("communicate-noticeWrite.jsp");
		return;
	}
	
	
	if(content == null || content == ""){
		out.print("<script>alert('내용을 써주세요!'); history.back(); </script>");
		return ;
	}
	
	NoticeDAO noticeDao = new NoticeDAO();
	boardDTO boardDto = noticeDao.selectNum(num);
	boardDto.setContent(content);
	boardDto.setTitle(title);
	boardDto.setNum(num);
	if(upfile != "") {
		boardDto.setFile_name(upfile);
		File file2 = new File(location + file_Name);
		System.out.println(file2);
		if(file2.exists()) {
			file2.delete();
		}
	
	}
	
	
	noticeDao.update(boardDto); 
	
%>
<script>alert('공지사항이 수정이 완료 되었습니다'); location.href='communicate-noticeView.jsp?num=<%=boardDto.getNum()%>';</script>