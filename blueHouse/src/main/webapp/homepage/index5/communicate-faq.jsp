<%@page import="blueHouse.PageVO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="blueHouse.FaqDAO"%>
<%@page import="blueHouse.boardDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/header.jsp"%>
<style>


#faq_write_btn {
	border: none;
	background-color: #2f3337;
	color: white;
	font-size: 13px;
	height: 35px;
	padding: 8px 10px 15px 10px;
	margin-top: 5px;
}

</style>

<%
request.setCharacterEncoding("utf-8");

//검색
String mode = request.getParameter("mode");
String search_keyword = request.getParameter("search_keyword");

FaqDAO faqDao = new FaqDAO();
ArrayList<boardDTO> boards;
if (mode != null && mode.equals("search")) {
	if (search_keyword == null || search_keyword == "") {
		out.print("<script>alert('검색어를 입력해 주세요.'); history.back();</script>");
		return;
	}
	boards = faqDao.search(search_keyword);
} else
	boards = faqDao.selectAll();

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
				<h1 id="contents_title">자주하는 질문</h1>
			</div>
			<div id="contents_body">
				<div class="example_wrap">
					<form action="communicate-faq.jsp?mode=search"
						class="board-form plani-form" method="post" accept-charset="utf-8">
						<div class="alert-error"></div>
						<div class="alert-success"></div>
						<input type="hidden" name="redirect"
							value="/communicate-faq/index" style="display: none;"> <input
							type="hidden" name="encoding" value="1" style="display: none;">
						<input type="hidden" name="csrf_test_name"
							value="595d84d9ff5815c661afca44bf72262d" style="display: none;">
						<input type="hidden" name="history" value="/communicate-faq/index"
							style="display: none;">
						<div class="type2 bbsWrap_faq">
							<h5>Lists</h5>
							<h1 id="board_title">자주하는 질문</h1>


							<div class="bbs-search">
								<div class="right-zone">
									<input type="hidden" name="search_order" value=""
										id="search_order"><input type="hidden"
										name="search_field" value="A.subject+A.name+A.tag+A.contents"
										id="search_field"><input type="text"
										name="search_keyword" value="" placeholder="검색어를 입력해 주세요."
										title="키워드검색">
									<button type="submit"
										class="pi-btn light-gray left-import btn-search">
										<span> 검색</span>
									</button>
								</div>
							</div>

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
												href="communicate-faqView.jsp?num=<%=boardDto.getNum()%>"><%=boardDto.getTitle()%></a></td>

										</tr>
										<%
										}
										%>
									</tbody>
								</table>
								<div align="right">
									<input type="button" value="글쓰기" id="faq_write_btn"
										onclick="location.href='communicate-faqWrite.jsp'">
								</div>
								<div class="paging-area">
									<ul class="paging">
										<li class="first"><a href="communicate-faq.jsp?page=1"><span
												class="hidden">처음으로</span> <i class="xi-angle-left-thin"></i>
												<i class="xi-angle-left-thin"></i></a> <%
 //이전 페이지
 if (pageVo.getPageNumber() <= 1) {
 	out.print(
 	"<li class='previous'><a href='#'><span class='hidden'>이전페이지</span><i class='xi-angle-left-thin'></i></a></li>");
 } else {
 	int tmp = pageVo.getPageNumber() - 1;
 	out.print("<li class='previous'><a href='communicate-faq.jsp?page=" + tmp + "&mode=" + mode + "&search_keyword="
 	+ search_keyword + "'><span class='hidden'>이전페이지</span><i class='xi-angle-left-thin'></i></a></li>");
 }
 //현재 페이지
 for (int i = 1; i <= pageVo.getTotalPage(); i++) {
 	if (pageVo.getPageNumber() == i)
 		out.print("<li class='current'><a href='communicate-faq.jsp?page=" + i + "&mode=" + mode + "&search_keyword="
 		+ search_keyword + "'><strong> " + i + " </strong></li>");
 	else
 		out.print("<li class=''><a href='communicate-faq.jsp?page=" + i + "&mode=" + mode + "&search_keyword="
 		+ search_keyword + "'><strong> " + i + " </strong></a></li>");
 }
 //다음 페이지
 if (pageVo.getPageNumber() >= pageVo.getTotalPage()) {
 	out.print(
 	"<li class='next'><a href='#'><span class='hidden'>다음페이지</span><i class='xi-angle-right-thin'></i></a></li>");
 } else {
 	int tmp = pageVo.getPageNumber() + 1;
 	out.print("<li class='next'><a href='communicate-faq.jsp?page=" + tmp + "&mode=" + mode + "&search_keyword="
 	+ search_keyword + "'><span class='hidden'>다음페이지</span><i class='xi-angle-right-thin'></i></a></li>");
 }
 %>
										<li class="last">
											<a href='communicate-faq.jsp?page=<%=totalpage %>'><span class="hidden">마지막으로</span>
											<i class="xi-angle-right-thin"></i>
											<i class="xi-angle-right-thin"></i></a>
										</li>
									</ul>
								</div>
								<div class="label-button"></div>

							</div>
					</form>
				</div>
				<!-- 컨텐츠 내용이 들어갑니다 -->
			</div>
		</div>
	</div>
</main>
<%@include file="/footer.jsp"%>