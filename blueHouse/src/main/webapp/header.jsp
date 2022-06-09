<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<link
	href="/blueHouse/css/629c9a8a89181902c0c9e9ac444ea4b1f35a.css"
	rel="stylesheet" type="text/css" charset="UTF-8" media="all">

<script async="" src="/blueHouse/js/bstrk.1.js"></script>
<script type="text/javascript"
	src="/blueHouse/js/f8305fecf5c3934d7348845831473b4d.js"></script>
<style type="text/css">
.JColResizer {
	table-layout: fixed;
}

.JColResizer>tbody>tr>td, .JColResizer>tbody>tr>th {
	overflow: hidden
}

.JCLRgrips {
	height: 0px;
	position: relative;
}

.JCLRgrip {
	margin-left: -5px;
	position: absolute;
	z-index: 5;
}

.JCLRgrip .JColResizer {
	position: absolute;
	background-color: red;
	filter: alpha(opacity = 1);
	opacity: 0;
	width: 10px;
	height: 100%;
	cursor: col-resize;
	top: 0px
}

.JCLRLastGrip {
	position: absolute;
	width: 1px;
}

.JCLRgripDrag {
	border-left: 1px dotted black;
}

.JCLRFlex {
	width: auto !important;
}

.JCLRgrip.JCLRdisabledGrip .JColResizer {
	cursor: default;
	display: none;
}
</style>
<link rel="stylesheet" type="text/css"
	href="/blueHouse/www.opencheongwadae.kr/_res/plani_api/social.css">

<title>Insert title here</title>
</head>
<body>
	<!-- header -->
	<header id="header" class="on">
		<div class="header_wrap">
			<h1 id="logo">
				<a href="/"> <img
					src="/blueHouse/img/logo.png"
					alt="청와대, 국민 품으로" class="n_ov"><img
					src="/blueHouse/img/logo_black.png"
					alt="청와대, 국민 품으로" class="ov">
				</a>
			</h1>
			<!--<span class="h_dday">D+<em>28</em></span>-->
			<nav id="gnb1">
				<ul id="head_menu" class="topmenu">
					<li class="lnb2 mnfirst"><a href="/open-message">개방의 의미</a></li>
					<li class="lnb3"><a href="/introduce-history">청와대 소개</a>
						<div class="submenu">
							<ul class="sub03">
								<li class="sub02 subfirst"><a href="/introduce-history">역사</a>
								</li>
								<li class="sub03"><a href="/introduce-map00">지도 및 주요시설</a>
								</li>
								<li class="sub04"><a href="/introduce-heritage">경내 주요
										유적</a></li>
							</ul>
						</div></li>
					<li class="lnb4"><a href="/sub0506">관람안내</a>
						<div class="submenu">
							<ul class="sub04">
								<li class="sub02 subfirst"><a
									href="/blueHouse/www.opencheongwadae.kr/sub0506.html">관람시간
										및 해설안내</a></li>
								<li class="sub03"><a href="/sub0303">관람 신청</a></li>
								<li class="sub04"><a href="/sub0507">안내도 및 관람코스</a></li>
								<li class="sub05"><a href="/sub0508">활용 프로그램</a></li>
								<li class="sub06"><a href="/sub050402">오시는 길</a></li>
								<li class="sub07"><a href="/event-tourism">함께 가 볼 만한 장소</a>
								</li>
								<li class="sub08"><a href="/event-program">개방
										특별행사(5.10.~5.22.)</a></li>
								<li class="sub09"><a href="/sub0510">주말 공연(5.28.~6.26.)</a>
								</li>
							</ul>
						</div></li>
					<li class="lnb5"><a href="/trail-summary">등산로</a>
						<div class="submenu">
							<ul class="sub05">
								<li class="sub02 subfirst"><a href="/trail-summary">개요</a>
								</li>
								<li class="sub03"><a href="/trail-course">등산로 코스</a></li>
								<li class="sub04"><a
									href="/blueHouse/www.opencheongwadae.kr/trail-relic.html">등산로
										이모저모</a></li>
							</ul>
						</div></li>
					<li class="lnb6"><a href="/communicate-notice">국민소통</a>
						<div class="submenu">
							<ul class="sub06">
								<li class="sub02 subfirst"><a href="/communicate-notice">공지사항</a>
								</li>
								<li class="sub03"><a href="/communicate-photo">미디어센터</a></li>
								<li class="sub04"><a href="/communicate-faq">자주하는 질문</a></li>
							</ul>
						</div></li>
					<li class="lnb7"><a href="/make-idea">내가 만드는 청와대</a>
						<div class="submenu">
							<ul class="sub07">
								<li class="sub02 subfirst"><a href="/make-idea">국민 아이디어
										제안</a></li>
								<li class="sub03"><a href="/make-review">관람후기</a></li>
							</ul>
						</div></li>
				</ul>
			</nav>

			<nav id="gnb2" class="">
				<a href="/" class="logo"><img
					src="/blueHouse/img/logo.png"
					alt="청와대, 국민 품으로" class="n_ov"></a> 
					<% String id = (String)session.getAttribute("id");
						if(id == null) {%>
					<a href="../member/login.jsp"
					class="global">MY<span class="sr_only">로그인 페이지로 이동</span></a> 
					<%}else { %>
					<a href="../member/mypage.jsp"
					class="global">MY<span class="sr_only">마이페이지로 이동</span></a> 
					<%} %>
					<a href="" class="control open">전체 메뉴 열기</a>
				<h5 class="title">
					<img
						src="/blueHouse/img/sitemap_logo.png"
						alt=""> SITE MAP
				</h5>
				<ul id="head_menu_all" class="topmenu_all">
					<li class="lnb2 mnfirst active"><a href="/open-message">개방의
							의미</a></li>
					<li class="lnb3  "><a href="/introduce-history">청와대 소개</a>
						<div class="submenu">
							<ul class="sub03">
								<li class="sub02 subfirst "><a href="/introduce-history"><span>역사</span></a>
								</li>
								<li class="sub03 on"><a href="/introduce-map00"><span>지도
											및 주요시설</span></a>
									<ul class="depth3">
										<li class="sub02 subfirst "><a href="/introduce-map00">지도
												및 주요시설</a></li>
										<li class="sub03  "><a href="/introduce-map01">청와대 본관</a>
										</li>
										<li class="sub04  "><a href="/introduce-map02">영빈관</a></li>
										<li class="sub05  "><a href="/introduce-map03">대통령 관저</a>
										</li>
										<li class="sub06  "><a href="/introduce-map04">수궁터</a></li>
										<li class="sub07  "><a href="/introduce-map05">상춘재</a></li>
										<li class="sub08  "><a href="/introduce-map06">녹지원</a></li>
										<li class="sub09  "><a href="/introduce-map07">대통령
												비서실</a></li>
										<li class="sub10  "><a href="/introduce-map08">춘추관</a></li>
										<li class="sub11  "><a href="/introduce-map09">무궁화 동산</a>
										</li>
										<li class="sub12  "><a href="/introduce-map10">칠궁</a></li>
									</ul></li>
								<li class="sub04  "><a href="/introduce-heritage"><span>경내
											주요 유적</span></a></li>
							</ul>
						</div></li>
					<li class="lnb4  "><a href="/sub0506">관람안내</a>
						<div class="submenu">
							<ul class="sub04">
								<li class="sub02 subfirst "><a href="/sub0506"><span>관람시간
											및 해설안내</span></a></li>
								<li class="sub03  "><a href="/sub0303"><span>관람
											신청</span></a></li>
								<li class="sub04  "><a href="/sub0507"><span>안내도
											및 관람코스</span></a></li>
								<li class="sub05  "><a href="/sub0508"><span>활용
											프로그램</span></a></li>
								<li class="sub06  "><a href="/sub050402"><span>오시는
											길</span></a></li>
								<li class="sub07  "><a href="/event-tourism"><span>함께
											가 볼 만한 장소</span></a></li>
								<li class="sub08  "><a href="/event-program"><span>개방
											특별행사(5.10.~5.22.)</span></a></li>
								<li class="sub09  "><a href="/sub0510"><span>주말
											공연(5.28.~6.26.)</span></a></li>
							</ul>
						</div></li>
					<li class="lnb5  "><a href="/trail-summary">등산로</a>
						<div class="submenu">
							<ul class="sub05">
								<li class="sub02 subfirst "><a href="/trail-summary"><span>개요</span></a>
								</li>
								<li class="sub03  "><a href="/trail-course"><span>등산로
											코스</span></a></li>
								<li class="sub04 on"><a href="/trail-relic"><span>등산로
											이모저모</span></a>
									<ul class="depth3">
										<li class="sub02 subfirst "><a href="/trail-relic">유적
												안내</a></li>
										<li class="sub03  "><a href="/trail-application">관련 앱</a>
										</li>
									</ul></li>
							</ul>
						</div></li>
					<li class="lnb6  "><a href="/communicate-notice">국민소통</a>
						<div class="submenu">
							<ul class="sub06">
								<li class="sub02 subfirst "><a href="/communicate-notice"><span>공지사항</span></a>
								</li>
								<li class="sub03 on"><a href="/communicate-photo"><span>미디어센터</span></a>
									<ul class="depth3">
										<li class="sub02 subfirst "><a href="/communicate-photo">사진</a>
										</li>
										<li class="sub03  "><a href="/communicate-video">영상</a></li>
										<li class="sub04  "><a href="/communicate-news">카드뉴스</a>
										</li>
									</ul></li>
								<li class="sub04  "><a href="/communicate-faq"><span>자주하는
											질문</span></a></li>
							</ul>
						</div></li>
					<li class="lnb7  "><a href="/make-idea">내가 만드는 청와대</a>
						<div class="submenu">
							<ul class="sub07">
								<li class="sub02 subfirst "><a href="/make-idea"><span>국민
											아이디어 제안</span></a></li>
								<li class="sub03  "><a href="/make-review"><span>관람후기</span></a>
								</li>
							</ul>
						</div></li>
					<!--<li><a href="https://20insu.go.kr/message" target="_blank">국민이 당선인에 바란다</a></li>-->
				</ul>
				<a href="" class="control close">전체 메뉴 닫기</a>
			</nav>
		</div>
	</header>
	<!-- header 끝 -->