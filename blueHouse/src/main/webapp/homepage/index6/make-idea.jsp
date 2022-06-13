<%@page import="blueHouse.PageService"%>
<%@page import="blueHouse.PageVO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.IdeaDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@include file="/header.jsp"%>

<%
	request.setCharacterEncoding("utf-8");
	
	//검색
	String mode = request.getParameter("mode");
	String search_keyword = request.getParameter("search_keyword");
		
	IdeaDAO ideaDao = new IdeaDAO();
	ArrayList<boardDTO> boards;
	if(mode != null && mode.equals("search")){
		if(search_keyword == null || search_keyword == ""){
			out.print("<script>alert('검색어를 입력해 주세요.'); history.back();</script>");
			return;
		}
		boards = ideaDao.search(search_keyword);
	}else
		boards = ideaDao.selectAll();
	
	//페이지
	String pageNumber = request.getParameter("page");
	
	PageVO pageVo = new PageVO(5);
	pageVo.setPageNumber(pageNumber);
	pageVo.setTotalCount(boards.size());
	int block = pageVo.getBlock();
	
	int nowpage = pageVo.getPageNumber();
	int totalpage = pageVo.getTotalPage();
	
	int size = (boards.size()-((nowpage-1) * block));
	
	System.out.println("pageNumber" + pageNumber);
	
	
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
									<p>
										<span>현재까지 접수 </span><strong>842</strong><i>건</i>
									</p>
								</div>
								<p class="warning">* 비방 및 욕설 등 부적절한 제안은 관리자에 의해 숨김처리 혹은 삭제될 수 있습니다.</p>
								<p>
									<a href="https://www.epeople.go.kr/cmmn/idea/redirect.do?ideaRegNo=1AE-2204-0000396" target="_blank">
										* 대통령 집무실 명칭 국민 공모는 이곳을 클릭해주세요.</a>
								</p>
								<div class="bg"></div>
							</div>
							<form action="make-idea.jsp?mode=search" method="post" >
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
							</form>
							<div class="request plani-board-lists">
								<p class="page cnt_area">
									<span class="total"><a href="make-idea.jsp" style="list-style: none;">전체</a><b><%=boards.size() %>건</b>
									</span> <span class="current">현재 페이지 <strong><%=nowpage %></strong>/<b><%=totalpage %></b></span>
								</p>
								<table class="bbs">
									<thead>
										<tr>
											<th width="60">번호</th>
											<th sort="A.subject" class="cursor-hand">제목
												<span class="sort"></span></th>
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
											int w_date = boardDto.getWrite_date();
											int year = w_date / 10000;
											int date = w_date % 10000;
											int mon = date / 100;
											int day = date % 100;
									%>
										<tr>
											<td><%=size-- %></td>
											<td class="left">
												<a href="make-ideaView.jsp?num=<%=boardDto.getNum() %>"><%=boardDto.getTitle() %><i class="xi-lock-o board-icon"></i></a></td>
											<td class="hidden2"><%=boardDto.getName() %></td>
											<td><%=year+"."+mon+"."+day %></td>
										</tr>
									<% } %>
									</tbody>
								</table>
								<div align="right">
									<input type="button" value="글쓰기" id="notice_write_btn" onclick="location.href='make-ideaWrite.jsp'">
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
												out.print("<li class='previous'><a href='make-idea.jsp?page="+tmp+"&mode="+mode+"&search_keyword="+search_keyword+"'><span class='hidden'>이전페이지</span><i class='xi-angle-left-thin'></i></a></li>");
											} 
											//현재 페이지
											for(int i = 1; i <= pageVo.getTotalPage(); i++){
											if(pageVo.getPageNumber() == i)
												out.print("<li class='current'><a href='make-idea.jsp?page="+i+"&mode="+mode+"&search_keyword="+search_keyword+"'><strong> "+ i +" </strong></li>");
											else	
												out.print("<li class=''><a href='make-idea.jsp?page="+i+"&mode="+mode+"&search_keyword="+search_keyword+"'><strong> "+  i  +" </strong></a></li>");
											}	
											//다음 페이지
											if(pageVo.getPageNumber() >= pageVo.getTotalPage()){
												out.print("<li class='next'><a href='#'><span class='hidden'>다음페이지</span><i class='xi-angle-right-thin'></i></a></li>");
											}else{
												int tmp = pageVo.getPageNumber() + 1;
												out.print("<li class='next'><a href='make-idea.jsp?page="+tmp+"&mode="+mode+"&search_keyword="+search_keyword+"'><span class='hidden'>다음페이지</span><i class='xi-angle-right-thin'></i></a></li>");
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
				</div>
			</div>
		</div>
	</div>
</main>

<%@include file="/footer.jsp"%>







