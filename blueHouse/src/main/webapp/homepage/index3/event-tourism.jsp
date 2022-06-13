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
										title : '청와대, 국민 품으로 – 관람안내 – 함께 가 볼 만한 장소 ',
										description : '청와대, 국민 품으로 – 관람안내 – 함께 가 볼 만한 장소 ',
										imageUrl : 'https://opencheongwadae.kr/kakao_images.png',
										link : {
											mobileWebUrl : 'https://www.opencheongwadae.kr/event-tourism',
											webUrl : 'https://www.opencheongwadae.kr/event-tourism',
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
				<h1 id="contents_title">함께 가 볼 만한 장소</h1>
				<div class="depth3_tab">
					<button class="m_active" style="display: inline-block;">
						<span>함께 가 볼 만한 장소</span><i class="xi-angle-down-min"></i>
					</button>
					<ul class="tab_list rowTab">
						<li class=""><a href="sub1.jsp">관람시간 및 해설안내</a></li>
						<li class=""><a href="sub2.jsp">관람 신청</a></li>
						<li class=""><a href="sub3.jsp">안내도 및 관람코스</a></li>
						<li class=""><a href="sub4.jsp">활용 프로그램</a></li>
						<li class=""><a href="sub5.jsp">오시는 길</a></li>
						<li class="active"><a href="event-tourism.jsp">함께 가 볼 만한
								장소</a></li>
						<li class=""><a href="event-program.jsp">개방
								특별행사(5.10.~5.22.)</a></li>
						<li class=""><a href="sub6.jsp">주말 공연(5.28.~6.26.)</a></li>
					</ul>
				</div>
			</div>
			<div id="contents_body">
				<!-- 컨텐츠 내용이 들어갑니다 -->
				<div class="example_wrap">
					<div class="place_intro_wrap">
						<p class="title">함께 가 볼 만한 장소</p>
						<div class="place_map_wrap">
							<p>
								<img
									src="https://www.opencheongwadae.kr/_html/img/sub/ruins_img02.png"
									alt="">지도 내의 장소를 클릭하여 자세히 살펴보세요
							</p>
							<img
								src="https://www.opencheongwadae.kr/_html/img/sub/place_intro_img02.png"
								usemap="#Map">
							<map name="Map">
								<area shape="rect" coords="769,367,939,504" href="#place1">
								<!-- 국립현대미술관 -->
								<area shape="rect" coords="665,182,820,345" href="#place2">
								<!-- 국립민속박물관 -->
								<area shape="rect" coords="620,598,835,729" href="#place3">
								<!-- 대한민국역사박물관 -->
								<area shape="rect" coords="370,454,530,558" href="#place4">
								<!-- 고궁박물관 -->
								<area shape="rect" coords="258,153,408,240" href="#place5">
								<!-- 청와대사랑채 -->
								<area shape="rect" coords="517,311,656,435" href="#place6">
								<!-- 경복궁 -->
								<area shape="rect" coords="554,631,621,818" href="#place7">
								<!-- 광화문 광장 -->
								<area shape="rect" coords="900,41,976,122" href="#place8">
								<!-- 삼청동 -->
								<area shape="rect" coords="921,175,1061,251" href="#place9">
								<!-- 북촌한옥마을 -->
								<area shape="rect" coords="979,608,1065,683" href="#place10">
								<!-- 인사동 -->
								<area shape="rect" coords="180,240,290,282" href="#place11">
								<!-- 통인시장 -->
								<area shape="rect" coords="20,212,181,258" href="#place12">
								<!-- 박노수미술관 -->
								<area shape="rect" coords="198,282,357,326" href="#place13">
								<!-- 서촌세종마을 -->
								<area shape="rect" coords="170,29,349,83" href="#place14">
								<!-- 청운문학도서관 -->
							</map>
						</div>
						<div class="place_list_wrap">
							<div class="item pink co_black" id="place1">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img01.png"
										alt=""> <span class="num">01</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>도시와 역사와 현대를 간직한 열린
											미술관</span> 국립현대미술관 서울관
									</strong>
									<p class="s_txt">경복궁 바로 옆에 자리잡고 있는 국립현대미술관 서울관은 현대사의 주요
										무대였던 옛 국군기무사령부의 붉은 벽돌 건물, 한옥 처마가 만들어내는 유려한 곡선의 조선시대 종친부와 현대적인
										미감의 건축이 공존하는 공간이다.</p>
									<p class="s_txt">어느 곳에서든 하늘을 바라볼 수 있는 개방 구조로, 도시의 역사와 현대를
										간직한 ‘열린 미술관’이다.</p>
									<p class="s_txt">대한민국을 대표하는 동시대 미술 전시 프로그램과 함께 예술 교육, 예술영화
										상영, 퍼포먼스, 학술행사, 미술 자료 열람 등 다양한 문화예술 활동을 향유할 수 있다.</p>
									<a href="https://www.mmca.go.kr/" target="_blank"
										class="go_btn" rel="noopener noreferrer"><span><img
											src="https://www.opencheongwadae.kr/_html/img/sub/placego_img01.png"
											alt=""></span>홈페이지 바로가기<i class="xi-arrow-right"></i></a>
								</div>
							</div>
							<div class="item pink co_white" id="place2">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img02.png"
										alt=""> <span class="num">02</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>전통 시대로부터 근현대까지 아우르는</span>
										국립민속박물관
									</strong>
									<p class="s_txt">경복궁 내에 자리한 국립민속박물관은 전통 시대로부터 근현대에 이르기까지
										한국인의 생활문화를 직접 보고 체험할 수 있는 교육의 터전이다.</p>
									<p class="s_txt">
										한국인의 일생과 일상생활 등 우리 삶의 모습을 조사·연구한 자료를 바탕으로 <span
											class="in_block">&lt;한국인의 하루&gt;, &lt;한국인의 일년&gt;,
											&lt;한국인의 일상&gt;</span> 등 상설 전시를 비롯하여 연중 다양한 공연 및 행사가 다채롭게 어우러진다.
									</p>
									<p class="s_txt">그리고 어린이의 눈높이에서 다양한 체험형 전시 프로그램으로 채워진
										어린이박물관 또한 즐길 수 있다.</p>
									<a href="https://www.nfm.go.kr/home/index.do" target="_blank"
										class="go_btn" rel="noopener noreferrer"><span><img
											src="https://www.opencheongwadae.kr/_html/img/sub/placego_img01.png"
											alt=""></span>홈페이지 바로가기<i class="xi-arrow-right"></i></a>
								</div>
							</div>
							<div class="item pink co_black " id="place3">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img03.png"
										alt=""> <span class="num">03</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>함께 나누고 공감하는 역사문화 공간</span>
										대한민국역사박물관
									</strong>
									<p class="s_txt">
										광화문 앞에 자리 잡고 있는 대한민국역사박물관은 <br>대한민국의 탄생과 발전 및 다양한 역사적 경험을
										<br>함께 나누고 공감하는 역사문화 공간이다. <br>우리 현대사의 여정을 파노라마로
										조명하고, <br>세대 소통을 주제로 우리 현대사 속 여러 세대의 시절을 <br>체험 형식으로
										구성한 전시 프로그램을 통해 <br>자연스럽게 대한민국 현대사를 돌아볼 수 있다.
									</p>
									<p class="s_txt">
										더불어 박물관 옥상에 오르면 인왕산과 서촌, 경복궁, 광화문 일대의 <br>탁 트인 경치를 조망할 수
										있고, <br>박물관 외벽에 설치된 ㄱ자 형태의 초대형 미디어 캔버스 ‘광화벽화’를 통해, <br>13종의
										첨단 실감 영상 콘텐츠를 감상할 수 있다.
									</p>
									<a href="https://www.much.go.kr/" target="_blank"
										class="go_btn" rel="noopener noreferrer"><span><img
											src="https://www.opencheongwadae.kr/_html/img/sub/placego_img01.png"
											alt=""></span>홈페이지 바로가기<i class="xi-arrow-right"></i></a>
								</div>
							</div>
							<div class="item pink co_black" id="place4">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img04.png"
										alt=""> <span class="num">04</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>조선 왕실과 대한제국 황실의 문화를
											보고 즐기고 느낄 수 있는</span> 국립고궁박물관
									</strong>
									<p class="s_txt">
										조선왕실의 품격과 예법이 살아있는 국립고궁박물관은 500여 년간 이어져온 조선 왕실의 기록과 문화, 생활을
										보여주는 왕실 문화재를 모아 전시하고 있다. <br>옛 선조들이 남긴 고품격의 문화재를 통해 오랜
										역사의 숨결을 느낄 수 있는 공간이다.
									</p>
									<p class="s_txt">국립고궁박물관에서 조선을 대표하는 화려하면서도 기품 있는 왕실문화유산을
										감상하시면서 우리의 문화적 위상을 느껴보기 바란다.</p>
									<a href="https://www.gogung.go.kr" target="_blank"
										class="go_btn" rel="noopener noreferrer"><span><img
											src="https://www.opencheongwadae.kr/_html/img/sub/placego_img01.png"
											alt=""></span>홈페이지 바로가기<i class="xi-arrow-right"></i></a>
								</div>
							</div>
							<div class="item blue co_white" id="place5">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img05.png"
										alt=""> <span class="num">01</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>한국의 종합관광홍보관</span> 청와대 사랑채
									</strong>
									<p class="s_txt">청와대 사랑채는 청와대 및 역대 대통령의 관련된 전시, 한국의 관광지 등에
										대한 전시를 관람할 수 있는 종합관광홍보관이다. 상설전시 이외에도 다양한 주제의 기획전이 개최되고 관람객을 위한
										체험 프로그램도 즐길 수 있다. 전시관 내의 기념품숍에서만 구매할 수 있는 청와대 CI 기념품은 청와대 사랑채를
										꼭 방문해봐야 하는 이유 중의 하나이다.</p>
									<a href="https://cwdsarangchae.kr/" target="_blank"
										class="go_btn" rel="noopener noreferrer"><span><img
											src="https://www.opencheongwadae.kr/_html/img/sub/placego_img01.png"
											alt=""></span>홈페이지 바로가기<i class="xi-arrow-right"></i></a>
								</div>
							</div>
							<div class="item blue co_black type3" id="place6">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img06.png"
										alt=""> <span class="num">02</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>조선의 정궁</span> 경복궁
									</strong>
									<p class="s_txt">조선의 정궁인 경복궁은 1395년 종묘, 사직단과 함께 완공되었다. 임진왜란
										때 불에 타 폐허로 방치되다가 1860년경에 이르러서야 흥선대원군에 의해 복원되었다. 동궐(창덕궁)이나
										서궐(경희궁)에 비해 위치가 북쪽에 있어 '북궐'이라 불리기도 하였다. 경복궁은 5대 궁궐 가운데 의뜸의 규모와
										건축미를 자랑한다.</p>
									<a href="https://www.royalpalace.go.kr/" target="_blank"
										class="go_btn" rel="noopener noreferrer"><span><img
											src="https://www.opencheongwadae.kr/_html/img/sub/placego_img01.png"
											alt=""></span>홈페이지 바로가기<i class="xi-arrow-right"></i></a>
								</div>
							</div>
							<div class="item blue co_black type2" id="place7">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img07.png"
										alt=""> <span class="num">03</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>대한민국의 대표적인 광장</span> 광화문 광장
									</strong>
									<p class="s_txt">경복궁 광화문에서 세종로사거리로 이어지는 대로 중앙에 길이 555m, 너비
										34m의 규모로 뻗어있는 대한민국의 대표적인 광장이다. 이순신 장군과 세종대왕 동상이 이곳의 상징물로 광장
										곳곳에 전시관과 문화 갤러리 등이 있어 다양한 볼거리를 즐길 수 있다. 현재 서울시는 세종문화회관과 맞닿아 있는
										공간에 대한 공사를 진행하고 있으며, 공사가 마무리되는 올해 하반기 광화문 광장은 새롭게 전면 개장될 예정이다.</p>
								</div>
							</div>
							<div class="item blue co_white" id="place8">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img08.png"
										alt=""> <span class="num">04</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>개성 넘치는 서울의 대표 문화거리</span>
										삼청동
									</strong>
									<p class="s_txt">개성 넘치는 음식점과 카페, 액세서리숍, 공방 등이 어우러진 서울의 대표
										문화거리이다. 공방에서 기념품을 고르거나 카페에 앉아 여유롭게 삼청동의 풍경을 감상하는 것을 추천한다.
										부엉이박물관, 티베트박물관, 세계장신구박물관 등 규모는 작지만 구성이 알찬 작은 박물관을 방문해 보기에도 좋은
										곳이다.</p>
								</div>
							</div>
							<div class="item blue co_black non_pad type2" id="place9">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img09.png"
										alt=""> <span class="num">05</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>아름다운 한옥의 지붕선</span> 북촌한옥마을
									</strong>
									<p class="s_txt">약 900여 채의 한옥이 빼곡하게 들어선 마을이다. 한옥의 지붕선이 이어진
										모습이 한국의 아름다움을 잘 보여준다. 가회동 공방골목, 삼청동 은행나무골목, 안국동 학교골목 등 취향에 따라
										골목여행을 하면서 기념사진을 남길 수 있다. 인근 한복대여소에서 한복을 대여하면 더욱 특별한 추억사진을 남길 수
										있다.</p>
								</div>
							</div>
							<div class="item blue co_black non_pad type3" id="place10">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img10.png"
										alt=""> <span class="num">06</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>조선시대 광화문과 북촌 사이를 잇는
											문화거리</span> 인사동
									</strong>
									<p class="s_txt">조선시대 광화문과 북촌 사이를 포함한 행정구역은 관인방이라 하였고, 그에
										인접하여 원각사라는 큰 절이 위치한 대사동이 있었다. 이 두 지명에서 한 글자씩을 따와 인사동이라는 이름이
										붙었다. 현재 인사동은 고미술품과 고서적 상점, 전통찻집, 전통공예품숍 등이 밀집해 있는 문화거리이다. 일상에서
										문방사우라는 단어를 쓸 일은 적어졌지만 인사동 골목골목에서는 여전히 그 흔적을 찾아볼 수 있다.</p>
								</div>
							</div>
							<div class="item blue co_black non_pad type2" id="place11">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img11.jpg"
										alt=""> <span class="num">07</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>'엽전 도시락'이 명물인 전통시장</span>
										통인시장
									</strong>
									<p class="s_txt">서울 내에서 데이트코스로 손꼽힐 정도로 인기가 많은 전통시장이다. 좁은
										골목에는 식당, 반찬가게, 옷 수선집 등 약 70여개의 점포가 촘촘하게 줄지어져 있다. 엽전을 구매하여 시장에서
										파는 음식을 취향에 따라 골라 담아 먹는 '엽전 도시락'은 통인시장의 명물로 인기가 많다.</p>
								</div>
							</div>
							<div class="item blue co_black" id="place12">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img12.png"
										alt=""> <span class="num">08</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>40년의 세월을 간직한</span> 박노수 미술관
									</strong>
									<p class="s_txt">박노수 화백이 40년간 살았던 집을 미술관으로 사용하고 있다. 남정 박노수
										화백은 한국 전통회화에 간결한 운필과 색감, 대담한 터치 등을 가미해 독자적인 화풍을 구축하였다. 기증 작품과
										소장품, 정원, 전망대, 조형미가 돋보이는 가옥 등을 둘러보는 재미가 있다.</p>
									<a href="https://www.jfac.or.kr/site/main/content/parkns01"
										target="_blank" class="go_btn" rel="noopener noreferrer"><span><img
											src="https://www.opencheongwadae.kr/_html/img/sub/placego_img01.png"
											alt=""></span>홈페이지 바로가기<i class="xi-arrow-right"></i></a>
								</div>
							</div>
							<div class="item blue co_black non_pad type2" id="place13">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img13.png"
										alt=""> <span class="num">09</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>세종대왕이 태어난</span> 서촌 세종마을
									</strong>
									<p class="s_txt">북촌과 더불어 서울의 정겨운 골목길 풍경을 만날 수 있는 장소이다. 조선
										제4대 임금인 세종대왕이 태어난 곳으로 '세종마을'로도 불린다. 60년 동안 서촌을 지켜온 대오서점,
										옥인오락실, 기념품숍 등 옛 추억을 떠올릴만한 볼거리가 가득하다. 서촌 골목 구석구석에 오래된 맛집과 디저트
										가게가 많아 찾는 이들이 많다.</p>
								</div>
							</div>
							<div class="item blue co_black non_pad type3" id="place14">
								<div class="img_box">
									<img
										src="https://www.opencheongwadae.kr/_html/img/sub/place_img14.png"
										alt=""> <span class="num">10</span>
								</div>
								<div class="txt_box">
									<strong class="tit"> <span>인왕산 자락의 숲과 잘어울리는</span>
										청운문학도서관
									</strong>
									<p class="s_txt">2014년 11월에 개관한 종로구의 16번째 도서관으로 종로구 최초 한옥
										공공도서관이다. 개관 이듬해인 2015년 대한민국 한옥공모전에서 대상을 차지할 정도로 인왕산 자락의 숲과 잘
										어울리는 풍광이 매력적인 공간이다. 공원관리사무소로 사용하던 양옥건물을 한옥으로 재건축하였고 지하 1층 공간은
										현대식 건축물의 형태를 유지하여 양옥과 한옥 양식이 공존하는 것이 특징이다.</p>
								</div>
							</div>
						</div>
					</div>
					<script
						src="https://www.opencheongwadae.kr/_html/jquery/imageMapResizer.min.js"></script>
				</div>
				<!-- 컨텐츠 내용이 들어갑니다 -->
			</div>
		</div>
	</div>
</main>
<%@ include file="/footer.jsp"%>