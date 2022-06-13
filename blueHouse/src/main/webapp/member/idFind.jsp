<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="../header.jsp"%>
<style>
body {
	margin: 0px;
}

#member-page {
	height: 100vh;
	background: url(../img/member/memberLayer.png) no-repeat center;
	background-size: cover;
}

#member-container {
	position: relative;
	top: 25%;
	margin: auto;
	background-color: #fff;
	width: 730px;
	height: 470px;
	border-radius: 9px;
	box-shadow: 0 24px 57px -2px rgba(0, 0, 0, 0.3);
	padding: 0 10px;
}

#member-block::-webkit-scrollbar {
	width: 10px;
}

#member-block::-webkit-scrollbar-thumb {
	/* background-color: #90CFDE ; */
	-webkit-box-shadow: inset 0 0 13px rgb(78 131 184/ 90%);
	border-radius: 10px;
}

#member-block::-webkit-scrollbar-track {
	background-color: #fff;
}

.member-title {
	font-family: "넥슨Lv1고딕 Low OTF";
	font-size: 35px;
	font-weight: bold;
	position: relative;
	left: 265px;
	top: 40px;
}

.register-input {
	position: relative;
	top: 40px;
	margin: auto;
	border: 0px;
	padding-bottom: 15px;
}

.register-input tr {
	height: 100px;
}

.register-input td {
	width: 460px;
	padding: 0 0 0 119px;
}

label {
	font-weight: bold;
	font-size: 17px;
	color: #000;
	line-height: 30px;
}

input[type=text], input[type=password] {
	height: 40px;
	width: 450px;
	border: 0.1px solid #C0C0C0;
	border-radius: 0;
	padding: 0 10px;
	font-size: 17px;
	font-weight: bold;
}

input:focus {
	outline: 1px solid #058CFF;
}

input[type=button] {
	border: 0;
	color: #ffffff;
	font-weight: bold;
	font-size: 23px;
	box-shadow: 3px 7px 20px 2px rgb(0 0 0/ 30%);
	background-color: #058CFF;
	width: 230px;
	height: 60px;
	margin-top: 50px;
}

td .register-cancel {
	background-color: #ADADAD;
}

</style>
<script src="register.js"></script>
<title>회원가입</title>
<div id="member-page">
	<div id="member-container">
			<div class="member-title">아이디 찾기</div>
			<form action="registerSvc.jsp" method="post" id="f">
				<table class="register-input">
					<tr>
						<td><label>이름</label><br> 
							<input type="text" tabIndex="4" onkeydown="return tab(this, event)" 
							name="name" id="name" class="reigster-name"
							onchange="nameCheck()"><br> <span id="nameAlert"></span>
						</td>
					</tr>
					<tr>
						<td><label>이메일</label><br> 
							<input type="text" tabIndex="6" onkeydown="return tab(this, event)"
							name="email" id="email" class="reigster-email"
							onchange="emailCheck()"><br> <span id="emailAlert"></span>
						</td>
					</tr>
					<tr id="certify" style="display: none">
						<td><label>인증번호</label><br> 
							<input type="text" tabIndex="6" onkeydown="return tab(this, event)"
							name="certifyNum" id="certifyNum" class="certifyNum" ><br>
						</td>
					</tr>
					<tr>
						<td>
							<input type="button" class="register-cancel" value="취소"
							onclick="location.href='login.jsp'">
							<input type="button" id="sending" value="인증메일 발송" >
						</td>
					</tr>
				</table>
			</form>

	</div>
</div>


<script>
	
	$('#sending').click(function() {
		var name = $(#name).val();
		var email = $(#email).val();
		var nameCheck = $(#nameAlert).val();
		var emailCheck = $(#emailAlert).val();
		
		console.log(name)
		
		if(name=="" || email=="") {
			alert('이름과 이메일을 입력해 주세요');
			return;
		}
		if(emailCheck=="" || !nameCheck=="") {
			alert('이름과 이메일을 정확하게 입력해 주세요.');
			return;
		}
		
		$('#sending').val('아이디 찾기');
		$("#certify").show();
		$("#member-container").css({"height":"570px"});
	})
	
	
	
	
</script>

<%@include file="../footer.jsp" %>