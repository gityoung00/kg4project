<%@page import="blueHouse.boardDTO"%>
<%@page import="blueHouse.PageService"%>
<%@page import="java.util.ArrayList"%>
<%@page import="blueHouse.NoticeDAO"%>
<%@page import="blueHouse.PageVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@include file="/header.jsp"%>

<style>
}
#faq_write_btn {
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


<%
request.setCharacterEncoding("utf-8");

//검색
String mode = request.getParameter("mode");
String search_keyword = request.getParameter("search_keyword");

NoticeDAO noticeDao = new NoticeDAO();
ArrayList<boardDTO> boards;
if (mode != null && mode.equals("search")) {
	if (search_keyword == null || search_keyword == "") {
		out.print("<script>alert('검색어를 입력해 주세요.'); history.back();</script>");
		return;
	}
	boards = noticeDao.search(search_keyword);
} else
	boards = noticeDao.selectAll();

//페이지
String pageNumber = request.getParameter("page");

PageVO pageVo = new PageVO(5);
pageVo.setPageNumber(pageNumber);
pageVo.setTotalCount(boards.size());
int block = pageVo.getBlock();

int nowpage = pageVo.getPageNumber();
int totalpage = pageVo.getTotalPage();

int size = (boards.size() - ((nowpage - 1) * block));

System.out.println("pageNumber" + pageNumber);
%>



<main id="main">
	<div class="main_wrap">
		<div id="contents">
			<div class="contents_util">
				<h1 id="contents_title">공지사항</h1>
			</div>
			<div id="contents_body">
				<div class="example_wrap">

					<div class="alert-error"></div>
					<div class="alert-success"></div>
					<input type="hidden" name="redirect"
						value="/communicate-notice/index" style="display: none;">
					<input type="hidden" name="encoding" value="1"
						style="display: none;"> <input type="hidden"
						name="csrf_test_name" value="c4a3256126ec9dbc908a188f0a9742ad"
						style="display: none;"> <input type="hidden"
						name="history" value="/communicate-notice/index"
						style="display: none;">
					<div class="type2 bbsWrap_def">
						<h5>Lists</h5>
						<h1 id="board_title">공지사항</h1>
						<form action="communicate-notice.jsp?mode=search" method="post">
							<div class="bbs-search">
								<div class="board_info"></div>
								<div class="right-zone">
									<input type="hidden" name="search_order" value=""
										id="search_order"> <input type="hidden"
										name="search_field" value="A.subject+A.name+A.tag+A.contents"
										id="search_field"> <input type="text"
										name="search_keyword" value="" placeholder="검색어를 입력해 주세요"
										title="키워드검색">
									<button type="submit"
										class="pi-btn user-search left-import btn-search">
										<span> 검색</span>
									</button>
								</div>
							</div>
						</form>
						<div class="request plani-board-lists">
							<p class="page cnt_area">
								<span class="total">전체 <b><%=boards.size()%></b>
								</span> <span class="current">현재 페이지 <strong><%=nowpage%></strong>/<b><%=totalpage%></b></span>
							</p>
							<table class="bbs">
								<caption>번호, 파일, 제목, 카테고리, 작성자, 조회수, 작성일 제공표</caption>
								<thead>
									<tr>
										<th width="60">번호</th>
										<th sort="A.subject" class="cursor-hand">제목<span
											class="sort"></span>
										</th>

									</tr>
								</thead>
								<tbody>
									<%
									for (int i = pageVo.getStart(); i < pageVo.getEnd() && i < pageVo.getTotalCount(); i++) {
										boardDTO boardDto = boards.get(i);
									%>
									<tr>
										<td><%=size--%></td>
										<td class="left"><a
											href="communicate-noticeView.jsp?num=<%=boardDto.getNum()%>"><%=boardDto.getTitle()%><i
												class="xi-lock-o board-icon"></i></a></td>

									</tr>
									<%
									}
									%>
								</tbody>
							</table>
							<%
							id = (String) session.getAttribute("id");
							if (id.equals("admin")) {
							%>
							<div align="right">
								<input type="button" value="글쓰기" id="faq_write_btn"
									onclick="location.href='communicate-noticeWrite.jsp'">
							</div>
							<%
							}
							%>
						</div>
						<div class="paging-area">
							<ul class="paging">
								<li class="first"><a href="communicate-notice.jsp?page=1"><span
										class="hidden">처음으로</span> <i class="xi-angle-left-thin"></i>
										<i class="xi-angle-left-thin"></i></a> <%
 //이전 페이지
 if (pageVo.getPageNumber() <= 1) {
 	out.print(
 	"<li class='previous'><a href='#'><span class='hidden'>이전페이지</span><i class='xi-angle-left-thin'></i></a></li>");
 } else {
 	int tmp = pageVo.getPageNumber() - 1;
 	out.print("<li class='previous'><a href='communicate-notice.jsp?page=" + tmp + "&mode=" + mode + "&search_keyword="
 	+ search_keyword + "'><span class='hidden'>이전페이지</span><i class='xi-angle-left-thin'></i></a></li>");
 }
 //현재 페이지
 for (int i = 1; i <= pageVo.getTotalPage(); i++) {
 	if (pageVo.getPageNumber() == i)
 		out.print("<li class='current'><a href='communicate-notice.jsp?page=" + i + "&mode=" + mode + "&search_keyword="
 		+ search_keyword + "'><strong> " + i + " </strong></li>");
 	else
 		out.print("<li class=''><a href='communicate-notice.jsp?page=" + i + "&mode=" + mode + "&search_keyword="
 		+ search_keyword + "'><strong> " + i + " </strong></a></li>");
 }
 //다음 페이지
 if (pageVo.getPageNumber() >= pageVo.getTotalPage()) {
 	out.print(
 	"<li class='next'><a href='#'><span class='hidden'>다음페이지</span><i class='xi-angle-right-thin'></i></a></li>");
 } else {
 	int tmp = pageVo.getPageNumber() + 1;
 	out.print("<li class='next'><a href='communicate-notice.jsp?page=" + tmp + "&mode=" + mode + "&search_keyword="
 	+ search_keyword + "'><span class='hidden'>다음페이지</span><i class='xi-angle-right-thin'></i></a></li>");
 }
 %>
								<li class="last"><a
									href='communicate-notice.jsp?page=<%=totalpage%>'><span
										class="hidden">마지막으로</span> <i class="xi-angle-right-thin"></i>
										<i class="xi-angle-right-thin"></i></a></li>
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