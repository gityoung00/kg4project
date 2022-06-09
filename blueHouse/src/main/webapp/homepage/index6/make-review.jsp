<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@include file="/header.jsp"%>

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
									<span class="total">전체 <b>133건</b>
									</span> <span class="current">현재 페이지 <strong>1</strong>/<b>14</b></span>
								</p>
								<table class="bbs">
									<caption>번호, 파일, 제목, 카테고리, 작성자, 조회수, 작성일 제공표</caption>
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
										<tr>
											<td>133</td>
											<td class="left"><a href="/make-review/view/id/1405">티비로만
													보았는데 오늘 갔ㄷㅏ왔어요 정말 낭비였네요 조선시대도 아니고 지금어느시대인데 정말청와대 개방 찬성입니다
													그런궁궐에서 무슨 소통이 있었나요 용산 청사정말 잘결정했습니다 국민 세금이 다 청와대 에 쏟아부었네요
													갔다오니 더 한심하네요</a></td>
											<td class="hidden2">꽃님이</td>
											<td>2022-06-08</td>
										</tr>
										<tr>
											<td>132</td>
											<td class="left"><a href="/make-review/view/id/1404">상상
													속의 세상을 직접 가보니, 멋지고 아름다운 경관에 홀딱 빠졌습니다. 대한민국 국민으로서 자부심을
													느꼈습니다. 잘 가꾸어진 정원 처럼 윤석열 정부는 정치도 멋지게 해서, 공정과 정의가 살아 숨쉬는 정치로,
													국민들이 평안하게 살아갈 수 있는 세상을 만들어 주시기 바랍니다.</a></td>
											<td class="hidden2">최성기</td>
											<td>2022-06-08</td>
										</tr>
										<tr>
											<td>131</td>
											<td class="left"><a href="/make-review/view/id/1403">불친절,
													무능력한 안내요원들 전부 교체해주세요. '청와대, 국민 품으로' 이게 맞나요? 전부 하나같이 나무그늘
													구석에 앉아서 휴대폰 보고 있는 노란색조끼 직원들 그렇게 있으면 진행요원인지 뭔지 어떻게 알죠? 당연히
													사람이 붐비는 곳에 서있어야 정상 아닌가? 더 심한건 주황색조끼 알바생들 미남불, 오운정 가는 길 모름
													등산로 연결된 곳 모름 편의시설, 셔틀버스 모름 주목, 반송 자체가 뭔지 모름 지도에 안나오는 길과 내용을
													묻는 건데, 지도 보라는 말만 반복 개뿔도 아는 것이 없는데 안내명찰을 왜 달고 있는 거죠? 본관
													새치기하는 노인들 안잡음 대략 30정도로 보이는 남자분만 움직일 뿐, 다른 여자애들은 그냥 보고만 있음
													너네끼리 싸워라, 나는 방관한다 이런 수준 춘추문이었나? 나이 있어 보이는 뚱뚱한 여자 말투 싸가지없음,
													반존대로 훈계하는 느낌 블로그나 지인 후기에서도 주황색애들에 대한 안좋은 얘기들이 있었는데 왜 그런지 바로
													이해됨ㅎㅎ 조금만 생각해보니 답이 나오더군요 공무원들은 귀찮은 외근 끌려나왔다는 생각에 근무에 대한 열의가
													없을 거고, 알바생들은 그저 작은 대행업체에 외주줘서 대충 시간만 때우면 되는 대학생들 아무나 세워놓는
													거니까 관련지식도 없고, 배울 의지도 없고, 서비스마인드도 개판인 거겠죠 며칠있으면 상시개방한다던데 계속
													이런 식으로 인력 운영할 건가요? 상시개방하면 당연히 관람객 숫자도 엄청 늘어날거고, 안내 알바들에 대한
													불만족도도 높아질 거고, 관람객끼리 혹은 관람객과 알바생들 사이의 트러블도 더 많이 생기게 되지 않을까요?
													그리고 몰지각한 관람객들도 많이 오게 될 테니 경험이 적은 대학생들은 그런 상황을 원만하게 대처하기 힘들
													겁니다. 있으나마나한 직원들과 알바생 수십명에게 세금지원하느니, 차라리 인크루트나 리크루트 같은 데서
													행사진행이나 서비스직 경험 많은 사람들을 뽑아서 사전교육하고 근무하게 하는 것이 훨씬 나을 겁니다.
													불안하면 관련직원 몇명만 남기든지요 일자리는 생기고, 인건비는 줄고, 현정부 이미지에도 더 도움될 텐데요</a></td>
											<td class="hidden2">ASD</td>
											<td>2022-06-08</td>
										</tr>
										<tr>
											<td>130</td>
											<td class="left"><a href="/make-review/view/id/1402">관람예약시
													한국인이름으로 외국인을 동반한 예약을 하려 할때 안내사항이나 페이지상에 문의 할 곳도 없어 불편합니다.
													콜센터는 전화통화가 거의 불가능할 정도로 계속 통화중이고, 문의사항을 전화로만 받는 다는게 참…..
													뒤떨어지는듯</a></td>
											<td class="hidden2">Heejo</td>
											<td>2022-06-08</td>
										</tr>
										<tr>
											<td>129</td>
											<td class="left"><a href="/make-review/view/id/1401">6월3일
													3시 관람자입니다. 갑자기 오른 기온탓에 잘걷지 못하시는 어머님을 모시고 그넓은 부지를 다 돌아보지
													못했습니다. 기대를 안고 청와대를 찾아 왔지만 갑작스러운 개방탓인지 뭔가 준비가 덜됐단 느낌이 들었습니다.
													넓고 먼거리를 편하게 돌아볼수 있는 시스템이 있었으면 좋겠습니다. 순환열차를 운행한다던지 카트를
													운행한다던지 편하게 관람할수 있는 시스템이 필요하다고 봅니다. 군데군데 쉴수 있는 벤치도 많이 부족
													합니다. 어르신들을 위한 배려가 부족하다고 봅니다. 힘들어서 본관 하나도 겨우 관람하고 나왔습니다. 좀 더
													관람자들의 편의를 생각하고 운영해 주시면 좋겠습니다.</a></td>
											<td class="hidden2">이 정</td>
											<td>2022-06-08</td>
										</tr>
										<tr>
											<td>128</td>
											<td class="left"><a href="/make-review/view/id/1400">청화대관람</a></td>
											<td class="hidden2">Lyb498</td>
											<td>2022-06-07</td>
										</tr>
										<tr>
											<td>127</td>
											<td class="left"><a href="/make-review/view/id/1399">즐겁게
													부모님 모시고 관람 했습니다 부모님은 티비에서나 보던 역사적 공간에 계신것에 너무나 즐거워 하셨어요 벤치나
													물 마실수 있는 공간도 센스 있었습니다 다만 관저 뒤에 장독대 놓인곳이 아쉬웠습니다 빨간 고무통이랑 장독이
													그냥 방치되어 있는듯한 느낌이었습니다 우리전통의 장독대 놓는 장소를 마련해서 아름다운 장독대터를 마련
													했으면 더 좋았을것 같았습니다~~</a></td>
											<td class="hidden2">레이니</td>
											<td>2022-06-07</td>
										</tr>
										<tr>
											<td>126</td>
											<td class="left"><a href="/make-review/view/id/1398">청와대
													예약 진행했습니다. 기대되네요.</a></td>
											<td class="hidden2">마스콩</td>
											<td>2022-06-07</td>
										</tr>
										<tr>
											<td>125</td>
											<td class="left"><a href="/make-review/view/id/1392">노력의
													결실, 청와대 관람 왜 이리 운이 나빴었는지… 엄청 열심히 신청했는데도 떨어지다가 지난주 당첨돼서 갔는데
													너무 좋았어요. 특히 본관 대통령 집무실에서 넓은 방에 의자와 책상이 있는게 예뻤어요.</a></td>
											<td class="hidden2">나는나다</td>
											<td>2022-06-06</td>
										</tr>
										<tr>
											<td>124</td>
											<td class="left"><a href="/make-review/view/id/1391">관람~</a></td>
											<td class="hidden2">강완순</td>
											<td>2022-06-06</td>
										</tr>
									</tbody>
								</table>
								<div align="right">
									<input type="button" value="글쓰기" id="notice_write_btn">
								</div>
								
								<div class="paging-area">
									<ul class="paging">
										<li class="first"><a href="#"><span class="hidden">처음으로</span>
											<i class="xi-angle-left-thin"></i><i class="xi-angle-left-thin"></i></a>
										</li>
										<li class="previous"><a href="#"><span class="hidden">이전페이지</span>
											<i class="xi-angle-left-thin"></i></a></li>
										<li class="current"><a href="#"><strong>1</strong></a></li>
										<li><a href="/make-review/index/page/2">2</a></li>
										<li><a href="/make-review/index/page/3">3</a></li>
										<li><a href="/make-review/index/page/4">4</a></li>
										<li><a href="/make-review/index/page/5">5</a></li>
										<li><a href="/make-review/index/page/6">6</a></li>
										<li><a href="/make-review/index/page/7">7</a></li>
										<li><a href="/make-review/index/page/8">8</a></li>
										<li><a href="/make-review/index/page/9">9</a></li>
										<li><a href="/make-review/index/page/10">10</a></li>
										<li class="total_page">1 / 14</li>
										<li class="next"><a href="/make-review/index/page/2">
											<span class="hidden">다음페이지</span><i class="xi-angle-right-thin"></i></a>
										</li>
										<li class="last"><a href="/make-review/index/page/14">
											<span class="hidden">마지막으로</span><i class="xi-angle-right-thin"></i>
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








