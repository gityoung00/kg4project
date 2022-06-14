<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.FaqDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp"%>
<%
id = (String) session.getAttribute("id");
String n = request.getParameter("num");
 
int num = 0;
try {
	num = Integer.parseInt(n);
} catch (Exception e) {
	response.sendRedirect("communicate-faq.jsp");
	return;
}

FaqDAO faqDao = new FaqDAO();
boardDTO boardDto = faqDao.selectNum(num);
if (boardDto == null) {
	response.sendRedirect("communicate-faq.jsp");
	return;
}
%>
<style>
#idea_write_btn, #idea_view_btn {
	border: none;
	color: white;
	font-size: 13px;
	width: 80px;
	height: 35px;
	padding: 8px 10px 15px 10px;
	margin-top: 15px;
}

#idea_write_btn {
	background-color: #2f3337;
}

#idea_view_btn {
	background-color: gray;
}
</style>
<main id="main">
	<div class="main_wrap">
		<div id="contents">
			<div class="contents_util">
				<h1 id="contents_title">자주하는 질문</h1>
			</div>
			<body>
				<p id="skip_nav">
					<a href="#contents">본문으로 바로가기</a>
				</p>
				<div id="wrap"></div>
				<main id="main">
					<div class="main_wrap">
						<div id="contents">

							<div id="contents_body">
								<!-- 컨텐츠 내용이 들어갑니다 -->
								<div class="example_wrap">
									<div class="type2 bbsView_def">
										<h5>View</h5>
										<table class="bbs" style="margin-left: 130px; width: 1100px;">

											<tr>
												<th width="200">제목</th>
												<td><input type="text" name="title"
													style="width: 80%; font-size: 23px"
													value=<%=boardDto.getTitle()%> disabled></td>
											</tr>
											<tr>
												<th>내용</th>
												<td><textarea name="content"
														style="height: 300px; font-size: 18px" disabled><%=boardDto.getContent()%></textarea></td>
											</tr>
										</table>

										<div class="request plani-board-lists">
											<div align="center">
												<input type="submit" value="목록" id="idea_write_btn"
													onclick="location.href='communicate-notice.jsp'">&nbsp;
												<%
												if (id.equals("admin")) {
												%>
												<input type="button" value="수정" id="idea_view_btn"
													onclick="location.href='communicate-faqUpdate.jsp?num=<%=num%>'">&nbsp;
												<input type="button" value="삭제" id="idea_view_btn"
													onclick="location.href='communicate-faqDelete.jsp?num=<%=num%>'">
												<%
												}
												%>
											</div>

										</div>
									</div>
								</div>
								<!-- 컨텐츠 내용이 들어갑니다 -->
							</div>
						</div>
					</div>
				</main>
			</body>


			<%@include file="/footer.jsp"%>