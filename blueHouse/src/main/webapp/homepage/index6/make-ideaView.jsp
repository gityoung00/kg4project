<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.IdeaDAO"%>
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
		response.sendRedirect("make-idea.jsp");
		return;
	}
	int num = 0;
	try{
		num = Integer.parseInt(n);
	} catch(Exception e) {
		response.sendRedirect("make-idea.jsp");
		return;
	}

	IdeaDAO ideaDao = new IdeaDAO();
	boardDTO boardDto = ideaDao.selectNum(num);
	if(boardDto == null) {
		response.sendRedirect("make-idea.jsp");
		return;
	}
%>
<style>
#idea_write_btn, #idea_view_btn{
	border: none;
	color: white;
	font-size: 13px;
	width: 80px;
	height: 35px;
	padding: 8px 10px 15px 10px;
	margin-top: 15px;
}
#idea_write_btn{
	background-color: #2f3337;
}
#idea_view_btn{
	background-color: gray;
}
</style>
<main id="main">
	<div class="main_wrap">
		<div id="contents">
			<div class="contents_util">
				<h1 id="contents_title">국민 아이디어 제안</h1>
			</div>
			<div id="contents_body">
				<div class="example_wrap">
						<div class="alert-error"></div>
						<div class="alert-success"></div>
						<input type="hidden" name="redirect" value="/make-idea/index" style="display: none;"> 
						<input type="hidden" name="encoding" value="1" style="display: none;"> 
						<input type="hidden" name="csrf_test_name" value="c4a3256126ec9dbc908a188f0a9742ad" style="display: none;">
						<input type="hidden" name="history" value="/make-idea/index" style="display: none;">
						<div class="type2 bbsWrap_def">
							<h5>Lists</h5>
							<div class="idea_wrap">
								<strong class="tit">국민 모두가 누릴 수 있는 <span>열린 공간</span>으로</strong>
								<p class="desc">
									청와대를 국민 품으로 돌려드리기 위한 국민 여러분의 참신하고 기발한 아이디어를 모집합니다.<br> 
									항상 국민 여러분의 목소리를 귀담아 듣고 겸손하게, 낮은 자세로 국민 여러분과 소통하겠습니다.
								</p>
								<dl class="date">
									<dt>접수기간</dt>
									<dd>5.22 까지</dd>
								</dl>
								<div class="idea_cnt">
									<p><span>현재까지 접수 </span><strong>842</strong><i>건</i></p>
								</div>
								<p class="warning">* 비방 및 욕설 등 부적절한 제안은 관리자에 의해 숨김처리 혹은 삭제될 수 있습니다.</p>
								<p>
									<a href="https://www.epeople.go.kr/cmmn/idea/redirect.do?ideaRegNo=1AE-2204-0000396" target="_blank">
										* 대통령 집무실 명칭 국민 공모는 이곳을 클릭해주세요.</a>
								</p>
								<div class="bg"></div>
							</div>
							
							<div class="request plani-board-lists">
								<table class="bbs" style="margin-left: 130px; width: 1100px;">
									<tr>
										<th width="200">아이디</th>
										<td><input type="text" name="id" style="width: 80%; font-size: 23px" value=<%=boardDto.getId() %> disabled> </td>
									</tr>
									<tr>
										<th width="200">이름</th>
										<td><input type="text" name="name" style="width: 80%; font-size: 23px" value=<%=boardDto.getName() %> disabled></td>
									</tr>
									<tr>
										<th width="200">제목</th>
										<td><input type="text" name="title" style="width: 80%; font-size: 23px" value=<%=boardDto.getTitle() %> disabled></td>
									</tr>
									<tr>
										<th>내용</th>
										<td><textarea name="content" style="height: 300px; font-size: 18px" disabled><%=boardDto.getContent() %></textarea></td>
									</tr>
								</table>
								<div align="center">
									<input type="submit" value="목록" id="idea_write_btn" onclick="location.href='make-idea.jsp'">&nbsp;
									<%if(id.equals(boardDto.getId())) {%>
									<input type="button" value="수정" id="idea_view_btn" onclick="location.href='make-ideaUpdate.jsp?num=<%=num %>'">&nbsp;
									<input type="button" value="삭제" id="idea_view_btn" onclick="location.href='make-ideaDelete.jsp?num=<%=num %>'">
									<%} %>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	</div>
</main>

<%@include file="/footer.jsp"%>





