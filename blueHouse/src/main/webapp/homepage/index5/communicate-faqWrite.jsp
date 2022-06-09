<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<style>
input, select {
    max-width: 100%;
    vertical-align: middle;
}
input {
    padding: 5px 8px;
    border-radius: 2px;
    border: 1px solid #ccc;
    margin: 1px 0;
        max-width: 100%;
    vertical-align: middle;
    text-rendering: auto;
        width: 200px;
}
.req {
    color: #E23E58;
}
.text_area{ margin: 1px 0;
        max-width: 100%;
    vertical-align: middle;
    text-rendering: auto;
    max-width: 1024px;

}

</style>
<body>
<form></form>
<div>
<div class="form_cont article_id">


    <span>관리자ID <i class="req">*</i></span>
    <input type="text" name="name" value="" required="required" maxlength="6" placeholder="6자 이내로 입력해주세요." id="name" detect="" detect-check="true">   </label>

    <span>비밀번호 <i class="req">*</i></span>
    <input type="password" name="passwd" value="" required="required" placeholder="비밀번호 6자리 입력해주세요." id="passwd">   </label>
  </div>

    <span>내용 <i class="req">*</i></span>
    <textarea name="contents" class="text_area" required="" detect="" detect-check="true"></textarea>
    <div class="help txt_cnt">0/1,000자</div>
   </div>

</div>
</form>
</body>
</html>