<%@page import="blueHouse.FaqDAO"%>
<%@page import="blueHouse.boardDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@include file="/header.jsp"%>
<%
	id = (String)session.getAttribute("id");
	String n = request.getParameter("num"); 
	
	if(id == null || id == ""){ 
		response.sendRedirect("/blueHouse/member/login.jsp");
		return;
	}
	if(n == null || n == ""){
		response.sendRedirect("communicate-faq.jsp");
		return;
	}
	int num = 0;
	try{
		num = Integer.parseInt(n);
	} catch(Exception e) {
		response.sendRedirect("communicate-faq.jsp");
		return;
	}
	
	FaqDAO faqDao = new FaqDAO();
	boardDTO boardDto = faqDao.selectNum(num);
	if(boardDto == null) {
		response.sendRedirect("communicate-faq.jsp");
		return;
	}
%>
<style>
	#idea_write_btn{
	border: none;
	background-color: #2f3337;
	color: white;
	font-size: 13px;
	width: 80px;
	height: 35px;
	padding: 8px 10px 15px 10px;
	margin-top: 15px;
}
</style>
<main id="main">
	<div class="main_wrap">
		<div id="contents">
			<div class="contents_util">
				<h1 id="contents_title">공지 사항</h1>
			</div>
			<div id="contents_body">
				<div class="example_wrap">
					<form action="communicate-faqUpdateSvc.jsp?num=<%=num %>" class="board-form plani-form" method="post" accept-charset="utf-8">
						<div class="alert-error"></div>
						<div class="alert-success"></div>
						<input type="hidden" name="redirect" value="communicate-faq/index" style="display: none;"> 
						<input type="hidden" name="encoding" value="1" style="display: none;"> 
						<input type="hidden" name="csrf_test_name" value="c4a3256126ec9dbc908a188f0a9742ad" style="display: none;">
						<input type="hidden" name="history" value="communicate-faq/index" style="display: none;">
						<div class="type2 bbsWrap_def">
							<h5>Lists</h5>
			
							
							<div class="request plani-board-lists">
								<table class="bbs" style="margin-left: 130px; width: 1100px;">
	
									<tr>
										<th width="200">제목</th>
										<td><input type="text" name="title" style="width: 80%; font-size: 23px" value=<%=boardDto.getTitle() %>></td>
									</tr>
									<tr>
										<th>내용</th>
										<td><textarea name="content" style="height: 300px; font-size: 18px"><%=boardDto.getContent() %></textarea></td>
									</tr>
								</table>
								<div align="center">
									<input type="submit" value="완료" id="idea_write_btn">
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</main>

<%@include file="/footer.jsp"%>