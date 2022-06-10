<%@page import="java.util.ArrayList"%>
<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.PageVO"%>
<%@page import="blueHouse.ReviewDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@include file="/header.jsp"%>

<%
	ReviewDAO reviewDao = new ReviewDAO();	
	ArrayList<boardDTO> boards = reviewDao.selectAll();
	
	request.setCharacterEncoding("utf-8");
	String pageNumber = request.getParameter("page");
	
	PageVO pageVo = new PageVO(5);
	pageVo.setPageNumber(pageNumber);
	pageVo.setTotalCount(boards.size());
	
	int nowpage = pageVo.getPageNumber();
	int totalpage = pageVo.getTotalPage();
	
	int size = boards.size() + 1;
%>
<style>
	#review_write_btn{
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
				<h1 id="contents_title">관람후기</h1>
			</div>
			<div id="contents_body">
				<div class="example_wrap">
					<form action="https://www.opencheongwadae.kr/make-review/redirect" class="board-form plani-form" method="post" accept-charset="utf-8">
						<div class="alert-error"></div>
						<div class="alert-success"></div>
						<input type="hidden" name="redirect" value="/make-review/index" style="display: none;"> 
						<input type="hidden" name="encoding" value="1" style="display: none;"> 
						<input type="hidden" name="csrf_test_name" value="c4a3256126ec9dbc908a188f0a9742ad" style="display: none;">
						<input type="hidden" name="history" value="/make-review/index" style="display: none;">
						<div class="type2 bbsWrap_def">
							<h5>Lists</h5>
							
							<div class="idea_wrap review">
								<strong class="tit"><span>청와대</span> 관람후기</strong>
								<div class="idea_cnt">
									<p>
										<span>현재까지 등록 </span><strong>133</strong><i>건</i>
									</p>
									<a href="/make-review/form" class="defBtn fill arrow">관람후기 등록하기</a>
								</div>
								<p class="warning">
									* 비방 및 욕설 등 부적절한 후기, 개인정보 노출 우려가 있는 후기 등은<br> 관리자에 의해 숨김처리 혹은 삭제 될 수 있습니다.
								</p>
								<div class="bg"></div>
							</div>
							
							<div class="bbs-search">
								<div class="board_info"></div>
								<div class="right-zone">
									<input type="hidden" name="search_order" value="" id="search_order">
									<input type="hidden" name="search_field" value="A.subject+A.name+A.tag+A.contents" id="search_field">
									<input type="text" name="search_keyword" value="" placeholder="검색어를 입력해 주세요" title="키워드검색">
									<button type="submit" class="pi-btn user-search left-import btn-search">
										<span> 검색</span>
									</button>
								</div>
							</div>
							
							<div class="request plani-board-lists">
								<p class="page cnt_area">
									<span class="total">전체 <b><%=boards.size() %>건</b>
									</span> <span class="current">현재 페이지 <strong><%=nowpage %></strong>/<b><%=totalpage %></b></span>
								</p>
								<table class="bbs">
									<thead>
										<tr>
											<th width="60">번호</th>
											<th>내용</th>
											<th width="120" class="hidden2 cursor-hand" sort="A.name">작성자
												<span class="sort"></span></th>
											<th width="130" sort="A.created" class="cursor-hand">작성일
												<span class="sort"></span></th>
										</tr>
									</thead>
									<tbody>
									<% 
										for(int i = pageVo.getStart(); i < pageVo.getEnd() && i < pageVo.getTotalCount(); i++){ 
											boardDTO boardDto = boards.get(i);
									%>
										<tr>
											<td><%=size-- %></td>
											<td class="left">
												<a href="make-reviewView.jsp?num=<%=boardDto.getNum() %>"><%=boardDto.getContent() %></a></td>
											<td class="hidden2"><%=boardDto.getName() %></td>
											<td><%=boardDto.getWrite_date() %></td>
										</tr>
										<% } %>
									</tbody>
								</table>
								<div align="right">
									<input type="button" value="글쓰기" id="review_write_btn" onclick="location.href='make-reviewWrite.jsp'">
								</div>
								
								<div class="paging-area">
									<ul class="paging">
										<li class="first">
											<a href="make-idea.jsp?page=1"><span class="hidden">처음으로</span>
											<i class="xi-angle-left-thin"></i>
											<i class="xi-angle-left-thin"></i></a>
										</li>
										<%
											//이전 페이지
											if(pageVo.getPageNumber() <= 1){
												out.print("<li class='previous'><a href='#'><span class='hidden'>이전페이지</span><i class='xi-angle-left-thin'></i></a></li>");
											}else{
												int tmp = pageVo.getPageNumber() - 1;
												out.print("<li class='previous'><a href='make-review.jsp?page="+tmp+"'><span class='hidden'>이전페이지</span><i class='xi-angle-left-thin'></i></a></li>");
											} 
											//현재 페이지
											for(int i = 1; i <= pageVo.getTotalPage(); i++){
											if(pageVo.getPageNumber() == i)
												out.print("<li class='current'><a href='make-review.jsp?page="+i+"'><strong> "+ i +" </strong></li>");
											else	
												out.print("<li class=''><a href='make-review.jsp?page="+i+"'><strong> "+  i  +" </strong></a></li>");
											}
											//다음 페이지
											if(pageVo.getPageNumber() >= pageVo.getTotalPage()){
												out.print("<li class='next'><a href='#'><span class='hidden'>다음페이지</span><i class='xi-angle-right-thin'></i></a></li>");
											}else{
												int tmp = pageVo.getPageNumber() + 1;
												out.print("<li class='next'><a href='make-review.jsp?page="+tmp+"'><span class='hidden'>다음페이지</span><i class='xi-angle-right-thin'></i></a></li>");
											} 
										%>
										<li class="last">
											<a href='make-idea.jsp?page=<%=totalpage %>'><span class="hidden">마지막으로</span>
											<i class="xi-angle-right-thin"></i>
											<i class="xi-angle-right-thin"></i></a>
										</li>
									</ul>
								</div>
								<div class="label-button"></div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</main>

<%@include file="/footer.jsp"%>








