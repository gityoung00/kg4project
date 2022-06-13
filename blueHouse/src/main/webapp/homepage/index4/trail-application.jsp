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
											src="/blueHouse/img/homepage/등산로/등산로관련앱/sns_facebook.png" alt=""></a></li>
									<li class="band"><a href="@band" class="social"><img
											src="/blueHouse/img/homepage/등산로/등산로관련앱/sns_band.png" alt=""></a></li>
									<li class="kakao"><a href="javascript:kakaoShare()"
										class=""><img src="/blueHouse/img/homepage/등산로/등산로관련앱/sns_kakao.png" alt=""></a></li>
								</ul>
							</div>
						</div>

						<script type="text/javascript">
  Kakao.init('9da64b9dda2ac6b378ebe13069219e47');

  function kakaoShare() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '청와대, 국민 품으로 – 등산로 – 등산로 이모저모 – 관련 앱 ',
        description: '청와대, 국민 품으로 – 등산로 – 등산로 이모저모 – 관련 앱 ',
        imageUrl: 'https://opencheongwadae.kr/kakao_images.png',
        link: {
          mobileWebUrl: 'https://www.opencheongwadae.kr/trail-application',
          webUrl: 'https://www.opencheongwadae.kr/trail-application',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: '카카오공유하기 시 클릭 후 이동 경로',
            webUrl: '카카오공유하기 시 클릭 후 이동 경로',
          },
        },
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    })
  }
</script>
						<h1 id="contents_title">관련 앱</h1>
						<div class="depth3_tab">
							<button class="m_active" style="display: none;">
								<span>관련 앱</span><i class="xi-angle-down-min"></i>
							</button>
							<ul class="tab_list ">
								<li class=""><a href="trail-relic.jsp">유적 안내</a></li>
								<li class="active"><a href="trail-application.jsp">관련 앱</a></li>
							</ul>
						</div>
					</div>
					<div id="contents_body">
						<!-- 컨텐츠 내용이 들어갑니다 -->
						<div class="example_wrap">
							<div class="app_video_wrap">
								<h2 class="title">
									<span>청와대와 북악산, </span> 국민품으로
								</h2>
								<div class="youtube_box">
									<iframe width="300" height="150" style="width: 100%;"
										src="https://www.youtube.com/embed/Ej73NCrevkk"
										title="YouTube video player" frameborder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen="allowfullscreen"></iframe>
								</div>
								<!--<div class="desc">
        <p><img src="/blueHouse/img/homepage/등산로/등산로관련앱/app_img01.png" alt="">청와대와 북악산 개방의 즐거움을 더해줄 앱을 준비하고 있습니다. 자세한 내용은 곧 공개할 예정입니다.</p>
       </div>-->
							</div>
							<div class="app_guide_wrap">
								<div class="ag_topbar">청와대와 북악산 개방의 즐거움을 더해줄 앱을 다운로드
									받아보세요.</div>
								<div class="ag_top">
									<div class="ag_top_left">
										<div class="img_jump">
											<img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_jump.png" alt="jump">
										</div>
										<h2 class="img_desc">
											<img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide1.png"
												alt="백악이를 소환해 북악산의 숨겨져 있던 재밌는 이야기를 들어보세요." class="pc">
											<img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide1_mo.png"
												alt="백악이를 소환해 북악산의 숨겨져 있던 재밌는 이야기를 들어보세요." class="mo">
										</h2>
										<div class="img_ar">
											<img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide2.png"
												alt="AR로 바로 내 옆에 불러올 수 있어요.">
										</div>
										<div class="ag_btn">
											<a
												href="https://play.google.com/store/apps/details?id=com.skt.massivear"
												target="_blank" class="defBtn down">안드로이드 다운로드</a> <a
												href="#" class="defBtn down ios none"
												onclick="alert('추후 업데이트 예정 입니다');return false;">IOS 다운로드
												(업데이트 예정)</a>
										</div>
									</div>
									<div class="ag_top_right">
										<img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide3.png" alt="">
									</div>
								</div>
								<div class="ag_content">
									<div class="ag_con_pc">
										<img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide.png"
											alt="사용자 가이드 - 자세한 내용은 하단 참조">
										<div class="sr_only">
											<ul>
												<li><strong>1단계</strong>
													<p>판넬 하단의 QR코드를 인식해주세요.</p></li>
												<li><strong>2단계</strong>
													<p>Jump 앱 설치 후 열어주세요.</p></li>
												<li><strong>3단계</strong>
													<p>앱의 전면 팝업 터치 혹은 하단 왼쪽 메뉴의 배너 터치</p></li>
												<li><strong>4단계</strong>
													<p>콘텐츠의 시작하기 버튼, 상단의 이미지 인식 버튼 중에서 하나 터치해 주세요.</p></li>
												<li><strong>5단계</strong>
													<p>화면의 사각 테두리 안에 이미지를 배치 후 기다리면 인식 성공!</p></li>
												<li><strong>6단계</strong>
													<p>백악이의 재밌는 해설, 게임, 셀피 등 다양한 콘텐츠를 즐겨보세요!</p></li>
											</ul>
										</div>
									</div>
									<div class="ag_con_mo">
										<div class="ag_con_section">
											<h3>
												<img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guideTit.png" alt="사용자 가이드">
											</h3>
											<ul class="lst">
												<li><img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide4.png"
													alt="1단계 - 판넬 하단의 QR코드를 인식해주세요."></li>
												<li><img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide5.png"
													alt="2단계 - Jump 앱 설치 후 열어주세요."></li>
												<li><img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide6.png"
													alt="3단계 - 앱의 전면 팝업 터치 혹은 하단 왼쪽 메뉴의 배너 터치"></li>
											</ul>
										</div>
										<div class="ag_con_section">
											<ul class="lst">
												<li><img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide7.png"
													alt="4단계 - 콘텐츠의 시작하기 버튼, 상단의 이미지 인식 버튼 중에서 하나 터치해 주세요.">
												</li>
												<li><img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide8.png"
													alt="5단계 - 화면의 사각 테두리 안에 이미지를 배치 후 기다리면 인식 성공!"></li>
												<li><img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_guide9.png"
													alt="6단계 - 백악이의 재밌는 해설, 게임, 셀피 등 다양한 콘텐츠를 즐겨보세요!"></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="app_bas_wrap">
								<h3 class="title">
									<span>북악산 안내지도</span> 및 주요 유적지 소개
								</h3>
								<p class="mo_text">
									북악산 안내지도는 PC 사이즈에 최적화 되어 있습니다.<br> 확대하시면 더욱 편하게 확인 하실 수
									있습니다.
								</p>
								<div class="map_wrap">
									<div class="map_img">
										<img src="/blueHouse/img/homepage/등산로/등산로관련앱/img_app_basMap.jpg" alt="북악산 안내지도"
											usemap="#Map">
										<map name="Map">
											<area shape="rect" coords="379,188,530,221" href="#item1">
											<area shape="rect" coords="442,77,592,108" href="#item2">
											<area shape="rect" coords="396,467,502,500" href="#item3">
											<area shape="rect" coords="501,394,609,426" href="#item4">
											<area shape="rect" coords="483,153,615,187" href="#item5">
											<area shape="rect" coords="463,258,567,291" href="#item6">
											<area shape="rect" coords="331,303,493,334" href="#item7">
											<area shape="rect" coords="592,59,742,91" href="#item8">
										</map>
									</div>
									<ul class="map_listItem">
										<li id="item1">
											<div class="item_l">
												<span>01</span> <strong>군견훈련장</strong>
											</div>
											<div class="item_r">
												<p>이곳은 수도방위사령부의 군견들이 훈련받던 장소로 현재는 시민들을 위한 휴식 공간으로 활용되고
													있다. 안내판의 이미지를 인식하면 백악이의&nbsp;해설과 군견과의 원반 날리기 게임을 체험할 수 있다.</p>
											</div>
										</li>
										<li id="item2">
											<div class="item_l">
												<span>02</span> <strong>한양도성 옆길</strong>
											</div>
											<div class="item_r">
												<p>600여 년 동안 서울을 지켜온 ‘한양도성’이다. &nbsp;성을 쌓은 성돌 모양으로 축성
													시기와 축성 기법의 발달을 알 수 있다. 성벽의 일부 구간에 공사에 관한 기록을 세세하게 남겼다. 안내판의
													이미지를 인식시, 각 시대별 축성 기법을 백악이를 통해 들을 수 있다.</p>
											</div>
										</li>
										<li id="item3">
											<div class="item_l">
												<span>03</span> <strong>백악마루</strong>
											</div>
											<div class="item_r">
												<p>한양도성 백악구간 개방 전까지 서울의 하늘을 방어하던 발칸포가 있던 곳이다. 1976년 청와대
													상공에 미확인 비행물체(UFO)가 진입하였고, 국군이 비행물체 격추를 시도하였다는 사례가 있다. 추후
													벨기에 트랜스유러피안 항공의 보잉707의 항로이탈이라고 보고 되었다.&nbsp;안내판의 이미지를 인식하여,
													관련&nbsp;UFO 게임 콘텐츠를 &nbsp;즐길 수 있다.</p>
											</div>
										</li>
										<li id="item4">
											<div class="item_l">
												<span>04</span> <strong>만세동방</strong>
											</div>
											<div class="item_r">
												<p>만세동방은 ‘동방의 우리나라가 영원토록 무궁하고 남극 노인성이 돌보아 성상께서
													장수하라’&nbsp;는 뜻이 담겨 있다. 안내판의 이미지를 인식하면 백악이의 만세동방에 대한 해설과 함께
													증강현실(AR)로 구현된 고종의 모습을 볼 수 있다.&nbsp;</p>
											</div>
										</li>
										<li id="item5">
											<div class="item_l">
												<span>05</span> <strong>청운대 쉼터</strong>
											</div>
											<div class="item_r">
												<p>
													넓은 광장에서 앉아 휴식을 취하며 즐길 수 있는 곳으로,<br> 풍경과 함께 즐거운 추억을 담을
													수 있는 셀프카메라 콘텐츠가 준비되어 있다.
												</p>
											</div>
										</li>
										<li id="item6">
											<div class="item_l">
												<span>06</span> <strong>청운대</strong>
											</div>
											<div class="item_r">
												<p>안내판의 이미지를 인식하면 백악이를 통해 청운대 관련 이야기를 들을 수 있다.</p>
											</div>
										</li>
										<li id="item7">
											<div class="item_l">
												<span>07</span> <strong>1.21사태 소나무</strong>
											</div>
											<div class="item_r">
												<p>1968년 1.21사태(청와대 기습 미수사건)에 대한 설명을 백악이를 통해 들을 수 있다.</p>
											</div>
										</li>
										<li id="item8">
											<div class="item_l">
												<span>08</span> <strong>촛대바위 쉼터</strong>
											</div>
											<div class="item_r">
												<p>
													촛대바위 쉼터에서는 두 개의 콘텐츠를 즐길 수 있다.<br> 백악이에게 촛대바위 유래를
													들으며,&nbsp;사슴과 호랑이 AR과 함께 셀프카메라를 찍을 수 있다.
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<script src="/_html/jquery/imageMapResizer.min.js"></script>
						</div>
						<!-- 컨텐츠 내용이 들어갑니다 -->
					</div>
				</div>
			</div>
		</main>
		<!--<footer id="footer_section" class="footer section fp-auto-height fp-section fp-table active-start fp-completely">
<div class="footer_wrap">
<div id="siteinfo"><a class="logo"><img src="/_html/img/layout/logo_f.png" alt="청와대, 국민 품으로" /></a></div>
<div class="addrinfo"><address>03053 서울 종로구 삼청로 118(삼청동, 한국금융연수원 별관)</address>
<p><a href="mailto:opencheongwadae@gmail.com">opencheongwadae@gmail.com</a></p>
</div>
<a href="#" class="btn_top">TOP</a></div>
</footer>-->
<%@ include file="../../footer.jsp"%>