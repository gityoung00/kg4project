<%@page import="blueHouse.ReviewDAO"%>
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

	ReviewDAO reviewDao = new ReviewDAO();
	boardDTO boardDto = reviewDao.selectNum(num);
	if(boardDto == null) {
		response.sendRedirect("make-review.jsp");
		return;
	}
%>
<style>
	#notice_write_btn{
	border: none;
	background-color: #2f3337;
	color: white;
	font-size: 13px;
	height: 35px;
	padding: 8px 10px 15px 10px;
	margin-top: 5px;
}
</style>
<main id="main">
	<div class="main_wrap">
		<div id="contents">
			<div class="contents_util">
				<div class="share">
					<h2 class="title">
						<a href="" class="btn open u_btn"><i class="xi-share-alt-o"></i></a>
						<a href="#share" class="close"><i class="xi-close"></i></a>
					</h2>
					<div class="item">
						<ul id="share" class="list">
							<li class="facebook"><a href="@facebook" class="social">
								<img src="/_html/img/sub/sns_facebook.png" alt=""></a></li>
							<li class="band"><a href="@band" class="social">
								<img src="/_html/img/sub/sns_band.png" alt=""></a></li>
							<li class="kakao"><a href="javascript:kakaoShare()" class="">
								<img src="/_html/img/sub/sns_kakao.png" alt=""></a></li>
						</ul>
					</div>
				</div>
				<h1 id="contents_title">관람후기</h1>
			</div>
			<div id="contents_body">
				<div class="example_wrap">
					<div class="type2 bbsView_def">
						<h5>View</h5>
						<table class="bbs view" summary="내가 만드는 청와대 > 관람후기 상세페이지">
							<thead>
								<tr><th colspan="3">&nbsp;</th></tr>
							</thead>
							<tbody>
								<tr>
									<td colspan="3">
										<button type="button" class="pi-btn list type2" onclick="location.href='make-review.jsp'">
											<span> 목록으로</span>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="bbs-html">
							<div class="contents_inner" style="margin: 2rem auto;">
								<%=boardDto.getContent() %>
							</div>
						</div>
						<div class="label-button">
							<button type="button" class="pi-btn list" onclick="location.href='make-review.jsp'">
								<span> 목록으로</span>
							</button>
							<%if(id.equals(boardDto.getId())) { %>
							<button type="button" class="pi-btn blue save user-search" onclick="location.href='make-reviewUpdate.jsp?num=<%=boardDto.getNum()%>'">
								<span> 수정</span>
							</button>
							<button type="button" class="pi-btn red btn-del" onclick="location.href='make-reviewDelete.jsp?num=<%=boardDto.getNum()%>'">
								<span> 삭제</span>
							</button>
							<%} %>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<%@include file="/footer.jsp"%>












