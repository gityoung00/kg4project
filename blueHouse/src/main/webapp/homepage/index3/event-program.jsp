<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/header.jsp"%>
<main id="main">
	<div class="main_wrap">
		<div id="contents">
			<div class="contents_util">
				<div class="share">
					<h2 class="title">
						<a href="" class="btn open u_btn"><i class="xi-share-alt-o"></i></a><a
							href="#share" class="close"><i class="xi-close"></i></a>
					</h2>
					<div class="item">
						<ul id="share" class="list">
							<li class="facebook"><a href="@facebook" class="social"><img
									src="https://www.opencheongwadae.kr/_html/img/sub/sns_facebook.png"
									alt=""></a></li>
							<li class="band"><a href="@band" class="social"><img
									src="https://www.opencheongwadae.kr/_html/img/sub/sns_band.png"
									alt=""></a></li>
							<li class="kakao"><a href="javascript:kakaoShare()" class=""><img
									src="https://www.opencheongwadae.kr/_html/img/sub/sns_kakao.png"
									alt=""></a></li>
						</ul>
					</div>
				</div>

				<script type="text/javascript">
					Kakao.init('9da64b9dda2ac6b378ebe13069219e47');

					function kakaoShare() {
						Kakao.Link
								.sendDefault({
									objectType : 'feed',
									content : {
										title : '청와대, 국민 품으로 – 관람안내 – 개방 특별행사(5.10.~5.22.) ',
										description : '청와대, 국민 품으로 – 관람안내 – 개방 특별행사(5.10.~5.22.) ',
										imageUrl : 'https://opencheongwadae.kr/kakao_images.png',
										link : {
											mobileWebUrl : 'https://www.opencheongwadae.kr/event-program',
											webUrl : 'https://www.opencheongwadae.kr/event-program',
										},
									},
									buttons : [
											{
												title : '웹으로 보기',
												link : {
													mobileWebUrl : '카카오공유하기 시 클릭 후 이동 경로',
													webUrl : '카카오공유하기 시 클릭 후 이동 경로',
												},
											}, ],
									// 카카오톡 미설치 시 카카오톡 설치 경로이동
									installTalk : true,
								})
					}
				</script>
				<h1 id="contents_title">개방 특별행사(5.10.~5.22.)</h1>
				<div class="depth3_tab">
					<button class="m_active" style="display: inline-block;">
						<span>개방 특별행사(5.10.~5.22.)</span><i class="xi-angle-down-min"></i>
					</button>
					<ul class="tab_list rowTab">
						<li class=""><a href="sub1.jsp">관람시간 및 해설안내</a></li>
						<li class=""><a href="sub2.jsp">관람 신청</a></li>
						<li class=""><a href="sub3.jsp">안내도 및 관람코스</a></li>
						<li class=""><a href="sub4.jsp">활용 프로그램</a></li>
						<li class=""><a href="sub5.jsp">오시는 길</a></li>
						<li class=""><a href="event-tourism.jsp">함께 가 볼 만한 장소</a></li>
						<li class="active"><a href="event-program.jsp">개방
								특별행사(5.10.~5.22.)</a></li>
						<li class=""><a href="sub6.jsp">주말 공연(5.28.~6.26.)</a></li>
					</ul>
				</div>
			</div>
			<div id="contents_body">
				<!-- 컨텐츠 내용이 들어갑니다 -->
				<div class="example_wrap">
					<!--<div class="event_wrap"><img src="https://www.opencheongwadae.kr/_html/img/sub/img_event_teaser.jpg" alt="COMING SOON | 청와대, 국민 품으로 - 꽃 피는 봄과 함께 청와대, 경복궁, 복악산 일대, 전국 유관장소에서 다채로운 행사가 진행됩니다. 2022년 5월 10일(화) ~ 5월 22일(일)" /></div>-->
					<div class="program">
						<h2 class="title">
							<img
								src="https://www.opencheongwadae.kr/_html/img/sub/program_title.png"
								alt="청와대, 국민 품으로"><span class="title_sub"> -
								5.10.~5.22. 종료</span>
						</h2>
						<p class="title_desc">
							5월 10일 새로운 희망의 문이 열립니다<br> 열린 공간 청와대의 역사적인 순간으로 초대합니다
						</p>
						<h3 class="sub_title">5월 10일 프로그램</h3>
						<div class="tbl_wrap">
							<div class="tbl_box">
								<table class="tbl proTbl c1">
									<caption>5월 10일 프로그램을 담은 표로, 구분, 장소, 프로그램, 일자, 시간,
										내용, 출연으로 구성되어 있습니다.</caption>
									<colgroup>
										<col style="width: 9.7%;">
										<col style="width: 8.5%;">
										<col style="width: 19%;">
										<col style="width: 10%;">
										<col style="width: 11%;">
										<col>
									</colgroup>
									<thead>
										<tr>
											<th scope="col">구분</th>
											<th scope="col">장소</th>
											<th scope="col">프로그램</th>
											<th scope="col">일자</th>
											<th scope="col">시간</th>
											<th scope="col">내용</th>
											<th scope="col">출연</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="rowgroup" rowspan="5">약속을<br> 담다
											</th>
											<td>춘추문</td>
											<td>등산로 오픈식<br>북악의 새아침, 열어갈 새길
											</td>
											<td>5월 10일</td>
											<td>6:30</td>
											<td class="txt_left">등산로 완전개방을 위한 개문행사</td>
											<td class="txt_left">타고, 축시 등</td>
										</tr>
										<tr>
											<td>정문</td>
											<td>개문행사<br>새로운 희망의 문을 열다
											</td>
											<td>5월 10일</td>
											<td>10:30</td>
											<td class="txt_left">새로운 시대, 새로운 희망을 품은 청와대 개문을 축하하며
												방문객들을 맞이하는 프로그램</td>
											<td class="txt_left">경복궁 수문군, 경비대 등</td>
										</tr>
										<tr>
											<td rowspan="3">대정원</td>
											<td rowspan="3">우리, 다 함께 누려요</td>
											<td rowspan="2">5월 10일</td>
											<td rowspan="2">12:00</td>
											<td rowspan="2" class="txt_left">국민과 함께 청와대 완전개방을 축하하는
												공연</td>
											<td class="txt_left">종묘제례보존회</td>
										</tr>
										<tr>
											<td class="txt_left">종묘제례악보존회</td>
										</tr>
										<tr>
											<td>5월 10일</td>
											<td>14:30</td>
											<td class="txt_left">국가무형문화유산으로 지정된 농악단들이 펼치는 신명의 한마당</td>
											<td class="txt_left">국가무형문화재 농악 5개</td>
										</tr>
										<tr>
											<th scope="rowgroup" rowspan="2">희망을<br> 나누다
											</th>
											<td>춘추관 앞</td>
											<td>날아라, 줄광대!</td>
											<td>5월 10일</td>
											<td>12:30, 14:30</td>
											<td class="txt_left">아슬아슬, 포복절도의 전통줄타기 공연</td>
											<td class="txt_left">줄타기연희단</td>
										</tr>
										<tr>
											<td>녹지원</td>
											<td>푸른 봄, 푸른 향기</td>
											<td>5월 10일</td>
											<td>12:30, 16:30</td>
											<td class="txt_left">푸른 반송, 푸른 잔디밭 위에서 펼치는 젊은 감각의 퓨전음악
												공연</td>
											<td class="txt_left">두번째달</td>
										</tr>
										<tr>
											<th scope="rowgroup" rowspan="4">역사를<br> 그리다
											</th>
											<td rowspan="2">영빈관 앞</td>
											<td rowspan="2">최고의 무사를 뽑아라!</td>
											<td rowspan="2">5월 10일</td>
											<td rowspan="2">12:30, 16:30</td>
											<td rowspan="2" class="txt_left">국가의 경사를 맞아 펼쳐졌던
												내금위(왕실경호원) 무사 등용 의식을 재현</td>
											<td class="txt_left">십팔기보존회</td>
										</tr>
										<tr>
											<td class="txt_left">경복궁수문군</td>
										</tr>
										<tr>
											<td rowspan="2">칠궁</td>
											<td rowspan="2">봄 햇살, 꽃바람</td>
											<td rowspan="2">5월 10일</td>
											<td rowspan="2">13:00, 15:00</td>
											<td rowspan="2" class="txt_left">고즈넉한 칠궁 마당에서 마음의 여유를
												누리는 전통음악공연</td>
											<td class="txt_left">프로젝트 바움</td>
										</tr>
										<tr>
											<td class="txt_left">한국정악연구회</td>
										</tr>
										<tr>
											<th scope="rowgroup" rowspan="4">문화를<br> 펼치다
											</th>
											<td>청와대 경내</td>
											<td>왕가의 산책</td>
											<td>5월 10일</td>
											<td>14:00, 17:00</td>
											<td class="txt_left">조선의 왕과 왕비가 국민과 함께 자연과 문화유산이 잘 보존된
												경복궁 후원을 산책</td>
											<td class="txt_left">경복궁수문군</td>
										</tr>
										<tr>
											<td>청와대로</td>
											<td>팡팡(웃음팡, 희망팡) 퍼레이드<br> ‘신명의 길을 여시오’
											</td>
											<td>5월 10일</td>
											<td>13:00, 16:00</td>
											<td class="txt_left">사자춤, 탈춤, 풍물, 진도북춤, 기접놀이 등이 성대하게
												어우러지는 축하 퍼레이드</td>
											<td class="txt_left">한국의집예술단</td>
										</tr>
										<tr>
											<td>소정원</td>
											<td>쉿! 마술사의 비밀 이야기</td>
											<td>5월 10일</td>
											<td>14:30</td>
											<td class="txt_left">비밀의 정원에서 드러나는 조선마술사의 비밀이야기</td>
											<td class="txt_left">조선마술사 이경재</td>
										</tr>
										<tr>
											<td>녹지원</td>
											<td>웃음 톡! 희망 톡! 비눗방울 톡톡!</td>
											<td>5월 10일</td>
											<td>14:30, 17:00</td>
											<td class="txt_left">온 가족이 함께 즐기는 동심의 세계</td>
											<td class="txt_left">팀클라운</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<h3 class="sub_title">5월 11일 ~ 22일 프로그램</h3>
						<div class="tbl_wrap">
							<div class="tbl_box">
								<table class="tbl proTbl c2">
									<caption>5월 11일 ~ 22일 프로그램을 담은 표로, 구분, 장소, 프로그램, 일자,
										시간, 내용, 출연으로 구성되어 있습니다.</caption>
									<colgroup>
										<col style="width: 9.7%;">
										<col style="width: 8.5%;">
										<col style="width: 19%;">
										<col style="width: 10%;">
										<col style="width: 11%;">
										<col>
									</colgroup>
									<thead>
										<tr>
											<th scope="col">구분</th>
											<th scope="col">장소</th>
											<th scope="col">프로그램</th>
											<th scope="col">일자</th>
											<th scope="col">시간</th>
											<th scope="col">내용</th>
											<th scope="col">출연</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th rowspan="3" scope="rowgroup">약속을<br> 담다
											</th>
											<td rowspan="3">대정원</td>
											<td rowspan="3">우리가 꿈꾸는 세상</td>
											<td>5월 11일~17일</td>
											<td>11:30</td>
											<td rowspan="3" class="txt_left">청와대 방문을 환영하며 방문객들을 맞이하는
												다양한 공연</td>
											<td class="txt_left">국립국악원</td>
										</tr>
										<tr>
											<td>5월 11일~12일</td>
											<td>13:30</td>
											<td class="txt_left">한국의집예술단</td>
										</tr>
										<tr>
											<td>5월 13일~17일</td>
											<td>13:30</td>
											<td class="txt_left">국방부근무지원단</td>
										</tr>
										<tr>
											<th scope="rowgroup" rowspan="11">희망을<br> 나누다
											</th>
											<td rowspan="5">춘추관 앞</td>
											<td rowspan="3">날아라, 줄광대!</td>
											<td>5월 11일~17일</td>
											<td rowspan="2">11:30, 15:30</td>
											<td class="txt_left" rowspan="3">아슬아슬, 포복절도의 전통줄타기 공연</td>
											<td class="txt_left">줄타기연희단</td>
										</tr>
										<tr>
											<td>5월 18일~19일</td>
											<td class="txt_left" rowspan="2">줄타기보존회</td>
										</tr>
										<tr>
											<td>5월 20일~21일</td>
											<td>11:30, 15:30, 17:30</td>
										</tr>
										<tr>
											<td rowspan="2">웃음 톡! 희망 톡! 비눗방울 톡톡!</td>
											<td>5월 14일~15일</td>
											<td>13:30, 17:30</td>
											<td class="txt_left" rowspan="2">온 가족이 함께 즐기는 동심의 세계</td>
											<td class="txt_left" rowspan="2">팀클라운</td>
										</tr>
										<tr>
											<td>5월 21일</td>
											<td>14:00, 16:30</td>
										</tr>
										<tr>
											<td rowspan="6">녹지원</td>
											<td rowspan="4">푸른 봄, 푸른 향기</td>
											<td>5월 11일~13일</td>
											<td rowspan="2">11:30, 15:30</td>
											<td class="txt_left" rowspan="4">푸른 반송, 푸른 잔디밭 위에서 펼치는
												젊은 감각의 퓨전음악 공연</td>
											<td class="txt_left">두번째달</td>
										</tr>
										<tr>
											<td>5월 14일~17일</td>
											<td class="txt_left">피어나</td>
										</tr>
										<tr>
											<td>5월 18일~20일</td>
											<td>13:30, 15:30</td>
											<td class="txt_left">고물</td>
										</tr>
										<tr>
											<td>5월 21일</td>
											<td>11:30, 13:30, 15:30, 17:30</td>
											<td class="txt_left">첼로가야금</td>
										</tr>
										<tr>
											<td rowspan="2">우리가 꿈꾸는 세상</td>
											<td>5월 18일~20일</td>
											<td>11:30</td>
											<td class="txt_left" rowspan="2">청와대 방문을 환영하며 방문객들을 맞이하는
												다양한 공연</td>
											<td class="txt_left">국립국악원</td>
										</tr>
										<tr>
											<td>5월 19일</td>
											<td>10:30</td>
											<td class="txt_left">국방부근무지원단</td>
										</tr>
										<tr>
											<th scope="rowgroup" rowspan="5">역사를<br> 그리다
											</th>
											<td rowspan="3">영빈관 앞</td>
											<td rowspan="2">최고의 무사를 뽑아라!</td>
											<td rowspan="2">5월 11일~21일</td>
											<td rowspan="2">13:30, 17:30</td>
											<td rowspan="2" class="txt_left">국가의 경사를 맞아 펼쳐졌던
												내금위(왕실경호원) 무사 등용 의식을 재현</td>
											<td class="txt_left">십팔기보존회</td>
										</tr>
										<tr>
											<td class="txt_left">경복궁수문군</td>
										</tr>
										<tr>
											<td>우리가 꿈꾸는 세상</td>
											<td>5월 21일</td>
											<td>10:00, 12:00</td>
											<td class="txt_left">청와대 방문을 환영하며 방문객들을 맞이하는 다양한 공연</td>
											<td class="txt_left">국립무용단</td>
										</tr>
										<tr>
											<td rowspan="2">칠궁</td>
											<td rowspan="2">봄 햇살, 꽃바람</td>
											<td>5월 11일~17일</td>
											<td rowspan="2">11:00, 15:00</td>
											<td rowspan="2" class="txt_left">고즈넉한 칠궁 마당에서 마음의 여유를
												누리는 전통음악공연</td>
											<td class="txt_left">프로젝트 바움</td>
										</tr>
										<tr>
											<td>5월 18일~22일</td>
											<td class="txt_left">한국정악연구회</td>
										</tr>
										<tr>
											<th scope="rowgroup" rowspan="3">자연을<br> 품다
											</th>
											<td rowspan="3">청와대 경내</td>
											<td>경복궁 후원 산책</td>
											<td>5월 10일~22일</td>
											<td>자유탐방</td>
											<td class="txt_left">도심과 북악산의 자연으로 이어지는 청와대의 아름다운 산책로를
												자유롭게 걷는 프로그램</td>
											<td class="txt_left">온실-순찰로-서순찰로-영빈관</td>
										</tr>
										<tr>
											<td rowspan="2">보물을 찾아라!<br> ‘경복궁 후원 문화유산 탐방’
											</td>
											<td rowspan="2">5월 10일~22일</td>
											<td>자유탐방</td>
											<td class="txt_left" rowspan="2">침류각, 어정(御井), 석조여래좌상 등의
												문화유적을 둘러보며 이 땅에 새겨진 역사의 흔적을 돌아보는 프로그램</td>
											<td class="txt_left" rowspan="2">미남불, 오운정, 침류각 등</td>
										</tr>
										<tr>
											<td>안내해설<!--<br> (10:00, 11:00, 13:00, 14:00, 15:00, 16:00)--></td>
										</tr>
										<tr>
											<th scope="rowgroup" rowspan="2">문화를<br> 펼치다
											</th>
											<td>청와대 경내</td>
											<td>왕가의 산책</td>
											<td>5월 11일~21일</td>
											<td>10:00, 15:00</td>
											<td class="txt_left">조선의 왕과 왕비가 국민과 함께 자연과 문화유산이 잘 보존된
												경복궁 후원을 산책</td>
											<td class="txt_left">경복궁수문군</td>
										</tr>
										<tr>
											<td>청와대로</td>
											<td>팡팡(웃음팡, 희망팡) 퍼레이드<br> ‘신명의 길을 여시오’
											</td>
											<td>5월 11일~21일</td>
											<td>12:00, 16:00</td>
											<td class="txt_left">사자춤, 탈춤, 풍물, 진도북춤, 기접놀이 등이 성대하게
												어우러지는 축하 퍼레이드</td>
											<td class="txt_left">한국의집예술단</td>
										</tr>
										<tr>
											<th scope="rowgroup" rowspan="7">전국을<br> 누리다
											</th>
											<td rowspan="2">합천 청와대세트장</td>
											<td rowspan="2">날마다 좋은 날</td>
											<td>5월 14일~15일</td>
											<td rowspan="2">11:00, 15:00</td>
											<td class="txt_left" rowspan="2">화합을 주제로, 음악과 춤 그리고
												풍물놀이까지 다양한 예술공연</td>
											<td class="txt_left" rowspan="2">국립부산국악원</td>
										</tr>
										<tr>
											<td>5월 21일~22일</td>
										</tr>
										<tr>
											<td>대통령기록관 야외 공간</td>
											<td>기록으로 보는 청와대</td>
											<td>5월 10일~22일</td>
											<td>-</td>
											<td class="txt_left">청와대의 역사를 한 눈에 볼 수 있는 사진전</td>
											<td class="txt_left">세종 대통령 기록관</td>
										</tr>
										<tr>
											<td rowspan="4">청주 청남대</td>
											<td rowspan="4">청남대의 봄을 걷다</td>
											<td>5월 14일</td>
											<td>13:30, 15:00</td>
											<td class="txt_left" rowspan="4">한국관광 100선 추천 여행지로 선정된
												청남대에서 아름다운 자연과 함께 즐기는 음악의 향연</td>
											<td class="txt_left">충북도립교향악단, 난장 &amp; 판</td>
										</tr>
										<tr>
											<td>5월 15일</td>
											<td>14:00, 14:30, 15:00</td>
											<td class="txt_left">퓨전국악 SOS, 익스프레션크루, 난장 &amp; 판</td>
										</tr>
										<tr>
											<td>5월 21일</td>
											<td>13:30, 15:00, 15:30</td>
											<td class="txt_left">충북도립교향악단, 조현민, 박민규</td>
										</tr>
										<tr>
											<td>5월 22일</td>
											<td>14:00, 14:30, 15:00, 15:30</td>
											<td class="txt_left">퓨전국악, 세자전거, 오드아이, 익스프레션크루</td>
										</tr>
										<tr>
											<th scope="row" rowspan="2">주말특별 프로그램</th>
											<td rowspan="2">소정원</td>
											<td rowspan="2">쉿! 마술사의 비밀 이야기</td>
											<td>5월 14일~15일</td>
											<td>12:00</td>
											<td class="txt_left" rowspan="2">비밀의 정원에서 드러나는 조선마술사의
												비밀이야기</td>
											<td class="txt_left" rowspan="2">조선마술사 이경재</td>
										</tr>
										<tr>
											<td>5월 21일</td>
											<td>11:30</td>
										</tr>
										<tr>
											<th colspan="3">개방행사 피날레</th>
											<td>5월 22일</td>
											<td>19:30</td>
											<td class="txt_left" colspan="2">KBS 열린음악회</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="program_bg"></div>
						<div class="program_bg2">
							<img
								src="https://www.opencheongwadae.kr/_html/img/sub/program_bg_item1.png"
								alt="" class="item1"> <img
								src="https://www.opencheongwadae.kr/_html/img/sub/program_bg_item2.png"
								alt="" class="item2">
						</div>
					</div>
				</div>
				<!-- 컨텐츠 내용이 들어갑니다 -->
			</div>
		</div>
	</div>
</main>
<%@ include file="/footer.jsp"%>