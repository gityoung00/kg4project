function tab(field, event) {
	    if (event.which == 13 || event.keyCode == 13) {
		        for (i = 0; i < field.form.elements.length; i++) {
			            if (field.form.elements[i].tabIndex == field.tabIndex + 1) {
				                field.form.elements[i].focus();
				                if (field.form.elements[i].type == "text") {
					                    field.form.elements[i].select();
					                    break;                
								}
			            }
		        }
        		return false;
		    }
		    return true;
		}


function idCheck() {
	var id = document.getElementById("id").value;
	var msg = document.getElementById('idAlert');
	msg.style.color = "#058CFF"
	msg.style.fontWeight = "bold";
	msg.style.fontSize = "11px";
	msg.style.position = "relative";
	msg.style.left = "10px";
	msg.innerHTML = " ";
	
	
	console.log(id);
	
	if (!id) {
		msg.style.color = "red";
		msg.innerHTML = "필수 정보입니다.";
		return;
	}

	var isId = /^[a-z0-9][a-z0-9_-]{4,19}$/;
	if ( (isId.test(id)) == false ) {
		msg.innerHTML = "5~20자의 영문 소문자, 숫자만 사용 가능합니다.";
		return;
	}

}
function pwCheck() {
	var pw = document.getElementById("pw").value;
	var msg2 = document.getElementById('pwAlert');
	msg2.style.color = "#058CFF"
	msg2.style.fontWeight = "bold";
	msg2.style.fontSize = "11px";
	msg2.style.position = "relative";
	msg2.style.left = "10px";
	
	console.log(pw);

	if (pw == "") {
		msg.style.color = "red";
		msg2.innerHTML = "필수 정보입니다.";
		return;
	}

	var isPW = /^[A-Za-z0-9`\-=\\\[\];',\./~!@#\$%\^&\*\(\)_\+|\{\}:"<>\?]{8,20}$/;
	if (!isPW.test(pw)) {
		msg2.innerHTML = "8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
		return;
	}

	msg2.innerHTML = "";
}

function confirmCheck() {
	var pw = document.getElementById("pw").value;
	var confirmPw = document.getElementById("pwChk").value;
	var msg = document.getElementById('pwChkAlert');
	msg.style.color = "red";
	msg.style.fontWeight = "bold";
	msg.style.fontSize = "11px";
	msg.style.position = "relative";
	msg.style.left = "10px";
	
	console.log(pw);
	console.log(confirmPw);
	
	if (confirmPw == "") {
		msg.innerHTML = "필수 정보입니다.";
		return;
	}

	if (pw != confirmPw) {
		msg.innerHTML = "비밀번호가 일치하지 않습니다.";
		return;
	}
	msg.innerHTML = "";
}

function nameCheck() {
	var name = document.getElementById("name").value;
	var msg = document.getElementById('nameAlert');
	msg.style.fontWeight = "bold";
	msg.style.fontSize = "11px";
	msg.style.position = "relative";
	msg.style.left = "10px";
	
	console.log(name);
	
	if (name == "") {
		msg.style.color = "red";
		msg.innerHTML = "필수 정보입니다.";
		return;
	}

	var nonchar = /[^가-힣a-zA-Z0-9]/gi;
	if (nonchar.test(name)) {
		msg.innerHTML = "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
		return;
	}
	msg.innerHTML = "";
}

function telCheck() {
	var tel = document.getElementById("tel").value;
	var msg = document.getElementById('telAlert');
	msg.style.color = "red";
	msg.style.fontWeight = "bold";
	msg.style.fontSize = "11px";
	msg.style.position = "relative";
	msg.style.left = "10px";
	
	console.log(tel);
	
	if (tel == "") {
		msg.style.color = "red";
		msg.innerHTML = "필수 정보입니다.";
		return;
	}

	var isTel = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
	if (!isTel.test(tel)) {
		msg.innerHTML = "숫자만 입력할 수 있습니다";
		return;
	}
	msg.innerHTML = "";
}

function emailCheck() {
	var email = document.getElementById("email").value;
	var msg = document.getElementById('emailAlert');
	msg.style.color = "red";
	msg.style.fontWeight = "bold";
	msg.style.fontSize = "11px";
	msg.style.position = "relative";
	msg.style.left = "10px";
	
	console.log(email);
	
	if (email == "") {
		msg.style.color = "red";
		msg.innerHTML = "필수 정보입니다.";
		return;
	}

	var isEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
	if (!isEmail.test(email)) {
		msg.innerHTML = "유효한 이메일 주소가 아닙니다.";
		return;
	}
	msg.innerHTML = "";
}

