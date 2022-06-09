<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@include file="/header.jsp"%>

<main id="main">
	<div class="main_wrap">
		<div id="contents">
			<div class="contents_util">
				<h1 id="contents_title">공지사항</h1>
			</div>
			<div id="contents_body">
				<div class="example_wrap">
					<form action="https://www.opencheongwadae.kr/communicate-notice/redirect"
						class="board-form plani-form" method="post" accept-charset="utf-8">
						<div class="alert-error"></div>
						<div class="alert-success"></div>
						<input type="hidden" name="redirect" value="/communicate-notice/index" style="display: none;">
						<input type="hidden" name="encoding" value="1" style="display: none;"> 
						<input type="hidden" name="csrf_test_name" value="c4a3256126ec9dbc908a188f0a9742ad" style="display: none;"> 
						<input type="hidden" name="history" value="/communicate-notice/index" style="display: none;">
						<div class="type2 bbsWrap_def">
							<h5>Lists</h5>
							<h1 id="board_title">공지사항</h1>

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
									<span class="total">전체 <b>6건</b>
									</span> <span class="current">현재 페이지 <strong>1</strong>/<b>1</b></span>
								</p>
								<table class="bbs">
									<caption>번호, 파일, 제목, 카테고리, 작성자, 조회수, 작성일 제공표</caption>
									<thead>
										<tr>
											<th width="60">번호</th>
											<th sort="A.subject" class="cursor-hand">제목<span class="sort"></span>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr class="notice">
											<td><i class="ti-volume"></i></td>
											<td class="left"><a
												href="/communicate-notice/view/id/1348">청와대 관람 예약 일정 안내</a></td>
										</tr>
										<tr>
											<td>5</td>
											<td class="left"><a
												href="/communicate-notice/view/id/1131">[5월 12일 보도자료]
													청와대 관람신청 231만 돌파, 관람 신청접수 연장</a></td>
										</tr>
										<tr>
											<td>4</td>
											<td class="left"><a
												href="/communicate-notice/view/id/1030">[5월 10일 보도자료]
													청와대 개방특집 ‘케이비에스 열린음악회’ 관람 신청하세요</a></td>
										</tr>
										<tr>
											<td>3</td>
											<td class="left"><a
												href="/communicate-notice/view/id/778">[4월 25일 발표문] 청와대
													개방 행사 발표문</a></td>
										</tr>
										<tr>
											<td>2</td>
											<td class="left"><a
												href="/communicate-notice/view/id/777">[4월 14일 보도자료] 청와대
													개방 전용 온라인소통관 ‘청와대, 국민 품으로’ 개설</a></td>
										</tr>
										<tr>
											<td>1</td>
											<td class="left"><a
												href="/communicate-notice/view/id/184">청와대 개방 소식을 전하는
													홈페이지 오픈</a></td>
										</tr>
									</tbody>
								</table>
								<div align="right">
									<input type="button" value="글쓰기" id="notice_write_btn">
								</div>
								</div>
								<div class="paging-area">
									<ul class="paging">
										<li class="first"><a href="#"><span class="hidden">처음으로</span>
											<i class="xi-angle-left-thin"></i><i class="xi-angle-left-thin"></i></a>
										</li>
										<li class="previous"><a href="#"><span class="hidden">이전페이지</span>
											<i class="xi-angle-left-thin"></i></a></li>
										<li class="current"><a href="#"><strong>1</strong></a></li>
										<li class="total_page">1 / 1</li>
										<li class="next"><a href="#"><span class="hidden">다음페이지</span>
											<i class="xi-angle-right-thin"></i></a></li>
										<li class="last"><a href="#"><span class="hidden">마지막으로</span>
											<i class="xi-angle-right-thin"></i>
											<i class="xi-angle-right-thin"></i></a></li>
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






