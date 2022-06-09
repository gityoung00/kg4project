<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@include file="/header.jsp" %>

	<div id="wrap">
		<main id="main">
			<div class="main_wrap">
				<div id="contents">
					<div class="contents_util">
						<h1 id="contents_title">자주하는 질문</h1>
					</div>
					<div id="contents_body">
						<div class="example_wrap">
							<form action="https://www.opencheongwadae.kr/communicate-faq/redirect"
								class="board-form plani-form" method="post"
								accept-charset="utf-8">
								<div class="alert-error"></div>
								<div class="alert-success"></div>
								<input type="hidden" name="redirect" value="/communicate-faq/index" style="display: none;">
								<input type="hidden" name="encoding" value="1" style="display: none;"> 
								<input type="hidden" name="csrf_test_name" value="c4a3256126ec9dbc908a188f0a9742ad" style="display: none;"> 
								<input type="hidden" name="history" value="/communicate-faq/index" style="display: none;">
								<div class="type2 bbsWrap_faq">
									<h5>Lists</h5>
									<h1 id="board_title">자주하는 질문</h1>
									<div class="bbs-search">
										<div class="right-zone">
											<input type="hidden" name="search_order" value="" id="search_order">
											<input type="hidden" name="search_field" value="A.subject+A.name+A.tag+A.contents" id="search_field">
											<input type="text" name="search_keyword" value="" placeholder="검색어를 입력해 주세요." title="키워드검색">
											<button type="submit" class="pi-btn light-gray left-import btn-search">
												<span> 검색</span>
											</button>
										</div>
									</div>
									<div class="request bbs-faq-lists plani-board-lists">
										<div class="bbs-faq">
											<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span> 
													개인 관람인원이 최대 6명으로, 다자녀 가족은 어떻게 되나요?
												</a>
												<div class="a" style="display: none;">
													<span class="label">A</span>
													<div>
														다자녀 가족(예 : 자녀가 셋인 경우)이 당첨된 경우, 
														가족관계증명서 또는 주민등록등본을 입장시 보여주시면, 인원 제한없이 입장하실 수 있습니다.<br>
														(6.12.(일) 관람분부터)
													</div>
													<p></p>
												</div>
											</div>
											<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span> 
													예약알림 메시지를 못받았는데요, 예약여부를 확인할 수 있는 방법이 있나요?
												</a>
												<div class="a">
													<span class="label">A</span>
													<div>
														<div>정상적으로 관람예약이 완료된 경우 예약사이트의 예약조회를 통해 확인이 가능합니다.</div>
														<div>자세한 내용은 아래 붙임파일을 참고하시기 바랍니다.</div>
														<div>&nbsp;</div>
														<p>
															<iframe width="100%" height="600px"
																style="width: 100%; height: 600px;"
																src="/_res/pdfjs/web/viewer.html?url=/_files/board/20220602/7ca20daefa3f16e6232f0f822b5e759a.pdf"
																frameborder="0"></iframe>
														</p>
													</div>
													<p></p>
												</div>
											</div>
											<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span> 
													청와대 관람신청은 어떻게 하나요?
												</a>
												<div class="a">
													<span class="label">A</span>
													<div>
														<p>
															스마트폰 및 PC를 통해서 청와대 국민 품으로 홈페이지(
																<a href="https://www.청와대개방.kr/" target="_blank">www.청와대개방.kr</a>,
																<a href="https://www.opencheongwadae.kr/" target="_blank">www.opencheongwadae.kr</a>)
															및 관람예약페이지(
																<a href="https://reserve.opencheongwadae.kr/" target="_blank">reserve.opencheongwadae.kr</a>)
															에 접속하여 신청하실 수 있습니다.
														</p>
													</div>
													<p></p>
												</div>
											</div>
											<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span> 
													누구나 들어갈 수 있나요? 신분증 가지고 가야 하나요?
												</a>
												<div class="a">
													<span class="label">A</span>
													<div>
														<div>관람신청 후 당첨되신 분들은 남녀노소 그리고 외국인 누구나 올 수 있습니다. 다만,
															‘65세이상 어르신’ 또는 ‘장애인’ 관람 유형으로 신청하신 경우, 해당 관람자의 신분증을 통해 관람
															유형 사실여부를 확인하여 공정성을 확보하고자 합니다. 또한, 그 외 일반개인이나 단체 유형으로 신청한
															경우에도 필요 시 신분 확인이 있을 수 있으니 신분증을 지참해주시길 바랍니다.
														</div>
													</div>
													<p></p>
												</div>
											</div>
											<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span> 
													신청 유형에 ‘65세이상 어르신’ 또는 ‘장애인’을 별도로 둔 이유는 무엇인가요?
												</a>
												<div class="a">
													<span class="label">A</span>
													<div>
														<div>‘65세이상 어르신’ 및 ‘장애인’ 분들에게 보다 많은 관람 기회를 드리기 위해서입니다.</div>
													</div>
													<p></p>
												</div>
											</div>
											<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span>
													‘65세이상 어르신’ 또는 ‘장애인’으로 관람 신청한 경우 어떻게 자격 확인이 이루어지나요?
												</a>
												<div class="a">
													<span class="label">A</span>
													<div>
														<div>관람 당일, 별도의 입장라인에서 신청자 정보 및 관련 신분증으로 확인받으신 후 입장하시면 됩니다.</div>
														<div>&nbsp; ※ 65세이상 어르신 : 주민등록증, 운전면허증, 여권 중 택1</div>
														<div>&nbsp; ※ 장애인 : 장애인등록증 또는 장애인복지카드</div>
													</div>
													<p></p>
												</div>
											</div>
											<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span> 
													청소년, 어린이의 경우 신분증은 무엇을 지참해야 하나요?
												</a>
												<div class="a">
													<span class="label">A</span>
													<div>
														<div>14세 미만 청소년, 어린이는 신분증 없이 보호자(부모, 인솔교사 등)와 동반하시면 됩니다(최대 신청인원 이내).</div>
													</div>
													<p></p>
												</div>
											</div>
											<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span>
													미취학아동은 관람을 못하나요?
												</a>
												<div class="a">
													<span class="label">A</span>
													<div>
														<div>안전을 고려하여 14세 미만은 보호자(부모, 인솔교사 등)와 동반하시면 됩니다.</div>
													</div>
													<p></p>
												</div>
											</div>
											<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span> 
													50명 넘는 단체는 입장 가능한가요?
												</a>
												<div class="a">
													<span class="label">A</span>
													<div>
														<div>특정 단체에 치우치지 않고 모든 분들께 공정한 신청 기회를&nbsp;드리고자 한 단체에 20~50명 이하로 신청을 제한하고 있습니다.</div>
													</div>
													<p></p>
												</div>
											</div>
											<div class="faq-group">
												<a href="#" class="q"> <span class="label">Q</span> 
													외국인 관람 신청은 어떻게 하나요?
												</a>
												<div class="a">
													<span class="label">A</span>
													<div>
														<div>외국인등록번호와 국내 휴대전화번호를 소지하고 있는 경우 대한민국 국민과 동일하게 예약페이지를 이용하여 신청하시면 됩니다.</div>
														<div>또한 현장에서 2회(09시~, 13시30분~) 각 500명씩 현장발급 가능합니다.</div>
													</div>
													<p></p>
												</div>
											</div>
											<div align="right">
												<input type="button" value="글쓰기" id="notice_write_btn">
											</div>
										</div>

										<div class="paging-area">
											<ul class="paging">
												<li class="first"><a href="#"><span class="hidden">처음으로</span>
													<i class="xi-angle-left-thin"></i>
													<i class="xi-angle-left-thin"></i></a></li>
												<li class="previous"><a href="#">
													<span class="hidden">이전페이지</span>
													<i class="xi-angle-left-thin"></i></a>
												</li>
												<li class="current"><a href="#"><strong>1</strong></a></li>
												<li><a href="/communicate-faq/index/page/2">2</a></li>
												<li><a href="/communicate-faq/index/page/3">3</a></li>
												<li><a href="/communicate-faq/index/page/4">4</a></li>
												<li><a href="/communicate-faq/index/page/5">5</a></li>
												<li class="total_page">1 / 5</li>
												<li class="next"><a
													href="/communicate-faq/index/page/2"><span
														class="hidden">다음페이지</span><i class="xi-angle-right-thin"></i></a>
												</li>
												<li class="last"><a
													href="/communicate-faq/index/page/5"><span
														class="hidden">마지막으로</span><i class="xi-angle-right-thin"></i><i
														class="xi-angle-right-thin"></i></a></li>
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






