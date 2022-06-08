<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>청와대 회원가입</title>
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
		top:100px;
		margin: auto;
		background-color: #fff;
		width: 730px;
		height: 750px;
		border-radius: 9px;
		box-shadow: 0 24px 57px -2px rgba(0, 0, 0, 0.3);
		padding: 0 10px;
	}
	
	#member-block {
		position: relative;
		margin: auto;
		background-color: #fff;
		width: 730px;
		height: 750px;
		overflow-x:hidden;  
		overflow-y:auto; 
	}
	
	#member-block::-webkit-scrollbar {
	   width: 10px;
	}
	
	#member-block::-webkit-scrollbar-thumb {
	   /* background-color: #90CFDE ; */
	   -webkit-box-shadow: inset 0 0 13px rgb(78 131 184 / 90%);
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
		left: 175px;
		top: 60px;
	}
	
	.register-input {
		position: relative;
		top: 80px;
		margin: auto;
		border: 0px;
		padding-bottom: 30px;
	}
	
	.register-input tr {
		height: 100px;
	}
	
	label {
		font-weight: bold;
		color: #5D5D5D;
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
	
	.register-cancel, .register-submit {
		border: 0;
		color: #ffffff;
		font-weight: bold;
		font-size: 23px;
		box-shadow: 3px 7px 20px 2px rgb(0 0 0 / 30%);
		background-color: #058CFF;
		width: 230px;
		height: 60px;
	}
	
	.register-cancel {
		background-color: #ADADAD;
	}
	
</style>
<script src="register.js"></script>
</head>

<body>
<div id="member-page">
	<div id="member-container">
		<div id="member-block">
			<div class="member-title">대한민국 청와대 회원가입</div>
			<form action="registerSvc.jsp" method="post" id="f">
		 		<table class="register-input">
		 			<tr>
			 			<td colspan="2">
			 				<label>아이디</label><br>
			 				<input type="text" tabIndex="1" onkeydown="return tab(this, event)" name="id" id="id" class="reigster-id" onchange="idCheck()"><br>
			 				<span id="idAlert"></span>
			 			</td>
		 			</tr>
		 			<tr>
			 			<td colspan="2">
			 				<label>비밀번호</label><br>
			 				<input type="password" tabIndex="2" onkeydown="return tab(this, event)" name="pw" id="pw" class="register-pw" onchange="pwCheck()"><br>
			 				<span id="pwAlert"></span>
			 				
			 			</td>
		 			</tr>
		 			<tr>
			 			<td colspan="2">
			 				<label>비밀번호 확인</label><br>
			 				<input type="password" tabIndex="3" onkeydown="return tab(this, event)" name="pwChk" id="pwChk" class="register-pw" onchange="confirmCheck()"><br>
			 				<span id="pwChkAlert"></span>
			 			</td>
		 			</tr>
		 			<tr>
		 				<td colspan="2">
			 				<label>이름</label><br>
			 				<input type="text" tabIndex="4" onkeydown="return tab(this, event)" name="name" id="name" class="reigster-name" placeholder="홍길동" onchange="nameCheck()"><br>
			 				<span id="nameAlert"></span>
			 			</td>
		 			</tr>
		 			<tr>
		 				<td colspan="2">
			 				<label>전화번호</label><br>
			 				<input type="text" tabIndex="5" onkeydown="return tab(this, event)" name="tel" id="tel" class="reigster-tel" placeholder="01012340000"><br>
			 				<span id="telAlert"></span>
			 			</td>
		 			</tr>
		 			<tr>
		 				<td colspan="2">
			 				<label>이메일</label><br>
			 				<input type="text" tabIndex="6" onkeydown="return tab(this, event)" name="email" id="email" class="reigster-email"><br>
			 				<span id="emailAlert"></span>
			 			</td>
		 			</tr>
		 			<tr>
			 			<td><input type="button" class="register-cancel" value="취소" onclick="location.href='login.jsp'"></td>
			 			<td><input type="submit" class="register-submit" value="회원가입"></td>
		 			</tr>
		 		</table>
		 	</form>
		 	
		 	
		
		
		
		
		
		</div>
	</div>
</div>



</body>
</html>