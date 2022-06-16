<%@page import="blueHouse.PageVO"%>
<%@page import="blueHouse.boardDTO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="blueHouse.FaqDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/header.jsp" %>
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
		<main id="main">
			<div class="main_wrap">
				<div id="contents">
					<div class="contents_util">
						<h1 id="contents_title">자주하는 질문</h1>
					</div>
					<div id="contents_body">
						<!-- 컨텐츠 내용이 들어갑니다 -->
						<div class="example_wrap">
							<form
								action="https://www.opencheongwadae.kr/communicate-faq/redirect"
								class="board-form plani-form" method="post"
								accept-charset="utf-8">
								<div class="alert-error"></div>
								<div class="alert-success"></div>
								<input type="hidden" name="redirect"
									value="/communicate-faq/index" style="display: none;">
								<input type="hidden" name="encoding" value="1"
									style="display: none;"> <input type="hidden"
									name="csrf_test_name" value="a4ce56a89bf9e33ebc6895536886c910"
									style="display: none;"> <input type="hidden"
									name="history" value="/communicate-faq/index"
									style="display: none;">
								<div class="type2 bbsWrap_faq">
									<h5>Lists</h5>
									<h1 id="board_title">자주하는 질문</h1>


									<div class="bbs-search">
										<div class="right-zone">
											<input type="hidden" name="search_order" value=""
												id="search_order"><input type="hidden"
												name="search_field"
												value="A.subject+A.name+A.tag+A.contents" id="search_field"><input
												type="text" name="search_keyword" value=""
												placeholder="검색어를 입력해 주세요." title="키워드검색">
											<button type="submit"
												class="pi-btn light-gray left-import btn-search">
												<span> 검색</span>
											</button>
										</div>
									</div>

									<div class="request bbs-faq-lists plani-board-lists">
										<div class="bbs-faq">
										
										<%
										for (int i = pageVo.getStart(); i < pageVo.getEnd() && i < pageVo.getTotalCount(); i++) {
											boardDTO boardDto = boards.get(i);
										%>
										<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span> <%=boardDto.getTitle() %>
												</a>
												<div class="a">
													<span class="label">A</span>
													<div>
														<%=boardDto.getContent() %>
													</div>
													<p></p>
												</div>
											</div>
										<%
										}
										%>
											</div>
											

										<div class="paging-area">
									<ul class="paging">
										<li class="first"><a href="editfaq.jsp?page=1"><span
												class="hidden">처음으로</span> <i class="xi-angle-left-thin"></i>
												<i class="xi-angle-left-thin"></i></a> <%
 //이전 페이지
 if (pageVo.getPageNumber() <= 1) {
 	out.print(
 	"<li class='previous'><a href='#'><span class='hidden'>이전페이지</span><i class='xi-angle-left-thin'></i></a></li>");
 } else {
 	int tmp = pageVo.getPageNumber() - 1;
 	out.print("<li class='previous'><a href='editfaq.jsp?page=" + tmp + "&mode=" + mode + "&search_keyword="
 	+ search_keyword + "'><span class='hidden'>이전페이지</span><i class='xi-angle-left-thin'></i></a></li>");
 }
 //현재 페이지
 for (int i = 1; i <= pageVo.getTotalPage(); i++) {
 	if (pageVo.getPageNumber() == i)
 		out.print("<li class='current'><a href='editfaq.jsp?page=" + i + "&mode=" + mode + "&search_keyword="
 		+ search_keyword + "'><strong> " + i + " </strong></li>");
 	else
 		out.print("<li class=''><a href='editfaq.jsp?page=" + i + "&mode=" + mode + "&search_keyword="
 		+ search_keyword + "'><strong> " + i + " </strong></a></li>");
 }
 //다음 페이지
 if (pageVo.getPageNumber() >= pageVo.getTotalPage()) {
 	out.print(
 	"<li class='next'><a href='#'><span class='hidden'>다음페이지</span><i class='xi-angle-right-thin'></i></a></li>");
 } else {
 	int tmp = pageVo.getPageNumber() + 1;
 	out.print("<li class='next'><a href='editfaq.jsp?page=" + tmp + "&mode=" + mode + "&search_keyword="
 	+ search_keyword + "'><span class='hidden'>다음페이지</span><i class='xi-angle-right-thin'></i></a></li>");
 }
 %>
												<li class="last"><a
													href="editfaq.jsp?page=<%=totalpage %>"><span
														class="hidden">마지막으로</span><i class="xi-angle-right-thin"></i><i
														class="xi-angle-right-thin"></i></a></li>
											</ul>
										</div>
										<div class="label-button"></div>
									</div>

								</div>
							</form>
						</div>
						<!-- 컨텐츠 내용이 들어갑니다 -->
					</div>
				</div>
			</div>
		</main>
		
	
	<script>

	$(function() {
		var form = $('form.board-form'),
			list_type = 'faq',
			//module_method = list_type == 'card' ? 'masonry' : 'lists';
			module_method = list_type == 'card' ? 'lists' : 'lists';

		new $.module['board.' + module_method](
			form, {
				'callback': function($this) {
					$('.change').ui_swap({
						'Yes': ['공개', '#18A689'],
						'No': ['비공개', "#f26520"]
					});

					if (list_type == 'faq') {
						$('.faq-group .q').on('click', function(e) {
							if (e.target == this) {
								var a = $(this).next('.a'),
									group = $(this).parent('.faq-group');

								if (group.hasClass('active') == false) {
									group.addClass('active');
									//a.slideDown();
									a.show();
								} else {
									group.removeClass('active');
									//a.slideUp();
									a.hide();
								}

								return false;
							}
						});
					}
				}
			}
		);

		$('.management', form).on(
				'click',
				function(e) {
					if (e.target.type != 'checkbox') {
						if ($('.ids:checked', form).length < 1) {
							alert('관리하실 게시물을 선택해 주세요');
							return false;
						}
						new $.module['modal'](
							'/communicate-faq/pm_management', {
								'title': '게시물관리 (%s건)'.sprintf($('.ids:checked', form).length),
								'close': false,
								'iframe': true,
								'width': 770,
								'onclose': function() {}
							}
						);
					}
				}
			)
			.find('input').on(
				'change',
				function() {
					$('.ids', form).attr('checked', this.checked);
				}
			);

	});

	
	
	</script>


<%@ include file="/footer.jsp"%>