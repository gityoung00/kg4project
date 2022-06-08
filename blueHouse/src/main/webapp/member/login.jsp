<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>청와대 로그인</title>
<style>
body {
	margin: 0px;
}

#member-page {
	height: 100vh;
	background: url(../img/member/memberLayer.png) no-repeat center;
	background-size: cover;
}

#member-block {
	position: relative;
	top: 25%;
	margin: auto;
	background-color: #fff;
	width: 730px;
	height: 570px;
	border-radius: 9px;
	font-align: center;
	box-shadow: 0 24px 57px -2px rgba(0, 0, 0, 0.3);
}

.member-title {
	font-family: "넥슨Lv1고딕 Low OTF";
	font-size: 35px;
	font-weight: bold;
	position: relative;
	left: 190px;
	top: 80px;
}

.login-input {
	position: relative;
	top: 130px;
	margin: auto;
	border: 0px;
	align: center;
}

.login-input tr {
	height: 100px;
	text-align: center;
}

.login-id, .login-pw {
	outline: 0;
	padding: 5px;
	border: 0;
	border-bottom: 3px solid #19a0b5;
	width: 500px;
	font-size: 25px;
}

.login-register, .login-submit {
	border: 0;
	color: #ffffff;
	font-weight: bold;
	font-size: 23px;
	box-shadow: 3px 7px 20px 2px rgb(0 0 0/ 30%);
	background-color: #19a0b5;
	width: 230px;
	height: 60px;
}

.login-register {
	background-color: #058CFF;
}

.member-find {
	font-family: "넥슨Lv1고딕 Low OTF";
	color: #B0B0B0;
	font-size: 20px;
	position: relative;
	left: 250px;
	top: 140px;
}

a:link {
	color: #B0B0B0;
	text-decoration: none;
}

a:visited {
	color: #B0B0B0;
	text-decoration: none;
}

a:hover {
	color: black;
	text-decoration: underline;
}

a:active {
	color: black;
	text-decoration: none;
}


</style>
</head>
<body>
	<div id="member-page">
		<div id="member-block">
			<div class="member-title">대한민국 청와대 로그인</div>
			<form action="loginSvc.jsp" method="post" id="f">
				<table class="login-input">
					<tr>
						<td colspan="2"><input type="text" name="id" class="login-id"
							placeholder="아이디 입력"></td>
					</tr>
					<tr>
						<td colspan="2"><input type="password" name="pw"
							class="login-pw" placeholder="비밀번호 입력"></td>
					</tr>

					<tr>
						<td><input type="submit" class="login-submit" value="로그인"></td>
						<td><input type="button" class="login-register" value="회원가입"
							onclick="location.href='register.jsp'"></td>
					</tr>
				</table>
			</form>

			<div class="member-find">
				<a href="idFind.jsp">아이디 찾기</a> | <a href="pwFind">비밀번호 찾기</a>
			</div>

		</div>
	</div>
	<footer id="footer_section"
		class="footer section fp-auto-height fp-section fp-table active-start fp-completely">
		<div class="footer_wrap">
			<div id="siteinfo">
				<a class="logo"><img src="../img/homepage/logo_f2.png"
					alt="문화재청 청와대 국민개방 추진단"></a>
			</div>
			<div class="addrinfo">
				<address>우)110031 서울특별시 종로구 궁정동 1-2</address>
				<a href="/policy" class="policy_btn">개인정보처리방침</a>
				<p class="warning">
					청와대 업무표장(CI)은 상표권에 등록된 국가재산입니다.<br> 사적·상업적 무단사용은 법적인 규제 대상이
					됩니다.
				</p>
			</div>
			<a href="#" class="btn_top active" style="bottom: 19rem;">TOP</a>
		</div>
	</footer>
</body>
</html>