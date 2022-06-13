<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../../header.jsp" %>
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
											src="/blueHouse/img/homepage/등산로/등산로이모저모/sns_facebook.png" alt=""></a></li>
									<li class="band"><a href="@band" class="social"><img
											src="/blueHouse/img/homepage/등산로/등산로이모저모/sns_band.png" alt=""></a></li>
									<li class="kakao"><a href="javascript:kakaoShare()"
										class=""><img src="/blueHouse/img/homepage/등산로/등산로이모저모/sns_kakao.png" alt=""></a></li>
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
												title : '청와대, 국민 품으로 – 등산로 – 등산로 이모저모 – 유적 안내 ',
												description : '청와대, 국민 품으로 – 등산로 – 등산로 이모저모 – 유적 안내 ',
												imageUrl : 'https://opencheongwadae.kr/kakao_images.png',
												link : {
													mobileWebUrl : 'https://www.opencheongwadae.kr/trail-relic',
													webUrl : 'https://www.opencheongwadae.kr/trail-relic',
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
						<h1 id="contents_title">유적 안내</h1>
						<div class="depth3_tab">
							<button class="m_active" style="display: none;">
								<span>유적 안내</span><i class="xi-angle-down-min"></i>
							</button>
							<ul class="tab_list ">
								<li class="active"><a href="trail-relic.jsp">유적 안내</a></li>
								<li class=""><a href="trail-application.jsp">관련 앱</a></li>
							</ul>
						</div>
					</div>
					<div id="contents_body">
						<!-- 컨텐츠 내용이 들어갑니다 -->
						<div class="example_wrap">
							<div class="ruins_wrap">
								<div class="ruins_map_wrap">
									<p>
										<img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img02.png" alt="">지도 내의
										장소를 클릭하여 자세히 살펴보세요
									</p>
									<div class="ruins_map place_map_wrap">
										<img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img01.jpg" alt="" usemap="#Map">
										<map name="Map">
											<area shape="rect" coords="435,247,521,313" href="#ruins1">

											<area shape="rect" coords="176,361,329,402" href="#ruins2">

											<area shape="rect" coords="665,303,806,337" href="#ruins3">

											<area shape="rect" coords="563,246,652,285" href="#ruins4">

											<area shape="rect" coords="248,317,394,361" href="#ruins5">

											<area shape="rect" coords="337,362,418,401" href="#ruins6">

											<area shape="rect" coords="770,336,860,388" href="#ruins7">

											<area shape="rect" coords="465,105,563,155" href="#ruins8">
											<area shape="rect" coords="296,560,368,653" href="#ruins9">
											<area shape="rect" coords="424,463,518,510" href="#ruins10">
										</map>
									</div>
								</div>
								<div class="ruins_list">
									<div class="item" id="ruins1">
										<div class="txt_box">
											<span>01</span> <strong>법흥사(法興寺) 터</strong>
											<p class="s_txt">
												신라 진평왕 때 건립한 절터로 알려져 있으며<br> 북악산 동편 기슭에 위치하고 있다. <br>지금은
												축대, 주춧돌 등이 남아있다.
											</p>
										</div>
										<div class="img_box">
											<span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img04.png" alt=""></span>
										</div>
									</div>
									<!--<div class="item type1">
        <div class="img_box"><span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img05.png" alt="" /><em class="tag">정선의 ‘독락정’</em></span></div>
        <div class="txt_box"><span>02</span> <strong>독락정(獨樂亭)</strong>
         <p class="s_txt">서울특별시 종로구 청와대로 1번지 청와대 내 <br /> 본관 동쪽 후원 산기슭에 있었던 정자로 <br /> 숙종 초에 건립된 것으로 추정된다. <br />현재 정자는 남아있지 않으나 정선이 그린 그림 화첩 <br /> 『장동팔경첩』에 독락정의 모습을 그린 그림이 있어 <br /> 그 모습을 짐작할 수가 있다. 고요한 산골짜기 <br /> 흐르는 계곡물 위에 세워진 초가집의 소박한 정자이다.</p>
        </div>
       </div>-->
									<!--<div class="item type1">
        <div class="img_box"><span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img06.png" alt="" /><em class="tag">정선의 ‘취미대’</em></span></div>
        <div class="txt_box"><span>03</span> <strong>취미대(翠微臺)</strong>
         <p class="s_txt">청와대 내부 동쪽 일대의 북악산 기슭에 위치한 것으로 <br />추정되는 녹음이 그윽한 산의 중턱이다.</p>
        </div>
       </div>-->
									<div class="item" id="ruins2">
										<div class="txt_box">
											<span>02</span> <strong>북악산 서쪽 암자</strong>
											<p class="s_txt">
												창의문에서 북악산(정식명칭:백악산) 정상으로 <br> 약 200m 떨어진 계곡에 이름을 알 수 없는
												<br> 작은 사찰의 암자 터이다. 바위굴(巖窟), <br>
												마애미륵보살입상(磨崖彌勒菩薩立像)과 <br> 여러 개의 각자가 있다.
											</p>
										</div>
										<div class="img_box">
											<span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img07.png" alt=""></span>
										</div>
									</div>
									<div class="item" id="ruins3">
										<div class="txt_box">
											<span>03</span> <strong>서울 한양도성(사적)</strong>
											<p class="s_txt">
												서울 한양도성은 서울 주위를 에워싸고 있는<br> 조선시대의 도성(都城)으로, 둘레는 약
												18㎞이다. <br> 서울특별시 종로구 누상동 산1~3번지 일대로, <br> 남대문과
												동대문 등의 성문과 암문(暗門), <br> 수문(水門), 여장(女墻), 옹성(甕城) 등에 <br>
												방어시설을 갖추고 있다. <br> 1963년 1월 21일에 사적으로 지정되었다.
											</p>
										</div>
										<div class="img_box">
											<span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img08.png" alt=""></span>
										</div>
									</div>
									<div class="item type1" id="ruins4">
										<div class="txt_box">
											<span>04</span> <strong>숙정문(肅靖門)</strong>
											<p class="s_txt">
												조선의 도성 4대문 중 정북에 위치한 문으로 <br> 북쪽 방향을 출입할 때 이용했다. 본래 이름은
												<br> 숙청문(肅淸門)이었으나 중종(中宗: 재위1506~1544년) <br> 이후
												숙정문(肅靖門)으로 바뀌었다.
											</p>
										</div>
										<div class="img_box">
											<span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img09.png" alt=""></span>
										</div>
									</div>
									<div class="item type2" id="ruins5">
										<div class="txt_box">
											<span>05</span> <strong>북악산 정상의 바위</strong>
											<p class="s_txt">
												북악산 정상에 두 개의 바위가 있다. <br> 선사시대 소망을 기원하며 작은 돌로 <br>
												바위 표면을 갈아낸 홈인 성혈(性穴)이 있다.
											</p>
										</div>
										<div class="img_box">
											<span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img10.png" alt=""><em
												class="tag">바위 내 성혈</em></span><span><img
												src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img11.png" alt=""><em
												class="tag">새 모양의 바위</em></span>
										</div>
									</div>
									<div class="item" id="ruins6">
										<div class="txt_box">
											<span>06</span> <strong>부아암(負兒岩)</strong>
											<p class="s_txt">
												어머니가 어린아이를 안고 있는 모양을 닮았다고 하여 붙여진 이름인 부아암.<br> 조선시대 후기
												화가인 겸재 정선의 &lt;부아암&gt;을 탄생시킨 풍경으로 백악 정상의 절경을 감상할 수 있다.
											</p>
										</div>
										<div class="img_box">
											<span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img12.png" alt=""></span>
										</div>
									</div>
									<div class="item" id="ruins7">
										<div class="txt_box">
											<span>07</span> <strong>말바위(末岩, 馬岩)</strong>
											<p class="s_txt">
												청와대 뒤 북악산 동쪽 끝에 위치한 이 바위는 <br> 북악산의 끝이라 하여 말바위(末岩)라 하기도
												하고, 생긴 형상이 <br> 말머리와 흡사하다 하여 말바위(馬岩)라고 칭한다는 두 가지 설이 있다.
												<br> 정상에서 내려다보면 성북동, 동대문, 세종로, 경복궁 등을 <br> 포함한 일대가
												한눈에 들어온다.
											</p>
										</div>
										<div class="img_box">
											<span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img13.png" alt=""></span>
										</div>
									</div>
									<div class="item type1" id="ruins8">
										<div class="txt_box">
											<span>08</span> <strong>촛대바위</strong>
											<p class="s_txt">
												숙정문(肅靖門) 북서쪽 약 400m 지점에 있으며 <br> 정남쪽방향으로 경복궁이 자리잡고 있다.
												<br> 일제는 이 바위 상단부에 쇠말뚝을 박았다. <br> 광복 후 이 바위의 쇠말뚝을
												제거하고 <br> 우리 민족의 발전을 기원하는 촛대를 <br> 세우며 이름을 ‘촛대바위’라
												정했다. <br> 2006년 4월 1일 숙정문과 함께 삼청터널 <br> 북쪽
												홍련사(紅蓮寺)에서 도성(서울성곽)을 <br> 따라 이곳까지 약 1.1km가 일반에게 공개되었다.
											</p>
										</div>
										<div class="img_box">
											<span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img14.png" alt=""></span>
										</div>
									</div>
									<div class="item" id="ruins9">
										<div class="txt_box">
											<span>09</span> <strong>칠궁</strong>
											<p class="s_txt">
												왕의 어머니가 된 일곱 후궁들의 신주를 모신 사당. <br> 사적 제 149호로 지정이 되어 있으며
												저경궁을 시작으로 대빈궁, 육상궁, 연호궁, 선희궁, 경후궁, 덕안궁의 일곱 개의 사당으로 이루어져
												칠궁이라고 불리운다.
											</p>
										</div>
										<div class="img_box">
											<span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img15.jpg" alt=""></span>
										</div>
									</div>
									<div class="item" id="ruins10">
										<div class="txt_box">
											<span>10</span> <strong>백악정</strong>
											<p class="s_txt">
												북악산 남측면의 정자와 함께 쉴 수 있는 쉼터. <br> 양 옆으로 김대중, 노무현 대통령의 기념
												식수가 심어져 있으며, 청와대 전망대를 향하는 입구이기도 하다.
											</p>
										</div>
										<div class="img_box">
											<span><img src="/blueHouse/img/homepage/등산로/등산로이모저모/ruins_img16.jpg" alt=""></span>
										</div>
									</div>
								</div>
								<span class="ruins_tag">출처: 문화재청</span>
							</div>
							<script src="/_html/jquery/imageMapResizer.min.js"></script>
						</div>
						<!-- 컨텐츠 내용이 들어갑니다 -->
					</div>
				</div>
			</div>
		</main>
<%@ include file="../../footer.jsp"%>