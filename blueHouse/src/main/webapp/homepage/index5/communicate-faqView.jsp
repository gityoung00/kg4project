<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<main id="main">
  <div class="main_wrap">
   <div id="contents">
    <div class="contents_util">
          <h1 id="contents_title">관람후기</h1>
         </div>
    <div id="contents_body">
     <!-- 컨텐츠 내용이 들어갑니다 -->
     <div class="example_wrap">
      
<div class="idea_writeTop t2">
 <span>* 비방 및 욕설 등 부적절한 후기, 개인정보 노출 우려가 있는 후기 등은 관리자에 의해 숨김처리 혹은 삭제 될 수 있습니다.</span></div>
</div><form action="https://www.opencheongwadae.kr/make-review/form_" class="save-form plani-form" method="post" accept-charset="utf-8"><div class="alert-error"></div><div class="alert-success"></div>
<input type="hidden" name="csrf_test_name" value="3ca5e3d13f2c419564a2dfc691b2f2db" style="display:none;">
<input type="hidden" name="history" value="/make-review/form" style="display:none;">
<input type="hidden" name="id" value="" id="id">


<div class="type2"> 
 <div class="label-wrap type3">
  <div class="form_cont article_id">

   <label class="label-input block50">
    <span>작성자 <i class="req">*<span class="sr_only">필수입력</span></i></span>
    <input type="text" name="name" value="" required="required" maxlength="6" placeholder="6자 이내로 입력해주세요." id="name" detect="" detect-check="true">   </label>

   <label class="label-input block50">
    <span>비밀번호 <i class="req">*<span class="sr_only">필수입력</span></i></span>
    <input type="password" name="passwd" value="" required="required" placeholder="비밀번호 6자리 입력해주세요." id="passwd">   </label>
  </div>


  
  <div class="form_cont article_radio">
     </div>

  

  

  <div class="form_cont article_contents">
   <div class="label-input label-contents">
    <span>내용 <i class="req">*<span class="sr_only">필수입력</span></i></span>
    <textarea name="contents" class="w100 h400px textarea_cnt" required="" detect="" detect-check="true"></textarea>
    <div class="help txt_cnt">0/1,000자</div>
   </div>
  </div>

    <div class="form_cont article_file">
   <label class="label-input">
   <span>첨부파일</span>
     <div class="simple_uploader">
 <div class="uploader_1" id="o_1g542ulde10o8eeq17381ikbmdj1" style="position: relative;"><a href="#" class="plupload_button plupload_add pi-btn cursor-hand" id="o_1g542ulde10o8eeq17381ikbmdj1_browse" title="파일을 업로드 큐에 추가하거나 파일찾기 버튼을 선택해 주세요." style="position: relative; z-index: 1;"><i class="far fa-save"></i> 파일추가</a><div class="plupload_wrapper plupload_scroll"><div id="o_1g542ulde10o8eeq17381ikbmdj1_container" class="plupload_container" title="Using runtime: html5"><div class="plupload"><div class="plupload_header"><div class="plupload_header_content"><div class="plupload_header_title">파일 선택</div><div class="plupload_header_text">파일을 업로드 큐에 추가하거나 파일찾기 버튼을 선택해 주세요.</div></div></div><div class="plupload_content"><div class="plupload_filelist_header"><div class="plupload_file_name">파일명</div><div class="plupload_file_action">&nbsp;</div><div class="plupload_file_status"><span>상태</span></div><div class="plupload_file_size">크기</div><div class="plupload_clearer">&nbsp;</div></div><ul id="o_1g542ulde10o8eeq17381ikbmdj1_filelist" class="plupload_filelist ui-sortable" style="position: relative;"><li class="plupload_droptext ui-sortable-handle">이곳에 파일을 드래그 하세요.</li></ul><div class="plupload_filelist_footer"><div class="plupload_file_name"><div class="plupload_buttons"><a href="#" class="plupload_button plupload_start plupload_disabled">업로드 시작</a></div><span class="plupload_upload_status"></span></div><div class="plupload_file_action"></div><div class="plupload_file_status"><span class="plupload_total_status">0%</span></div><div class="plupload_file_size"><span class="plupload_total_file_size">0 b</span></div><div class="plupload_progress"><div class="plupload_progress_container"><div class="plupload_progress_bar"></div></div></div><div class="plupload_clearer">&nbsp;</div></div></div></div></div><input type="hidden" id="o_1g542ulde10o8eeq17381ikbmdj1_count" name="o_1g542ulde10o8eeq17381ikbmdj1_count" value="0"></div><div id="html5_1g542uldm1dl01irq15j21o4716ff4_container" class="moxie-shim moxie-shim-html5" style="position: absolute; top: 1px; left: 0px; width: 159px; height: 44px; overflow: hidden; z-index: 0;"><input id="html5_1g542uldm1dl01irq15j21o4716ff4" type="file" title="html5 uploader hidden box" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" multiple="" accept=".jpg,.png,.jpeg"></div></div>
</div><div class="help" style="font-size:1em; line-height:1.5em;">* 첨부파일은 최대 2개 까지, png, jpeg, jpg파일만 등록 가능 합니다.</div>   </label>
  </div>
  
  


 </div>
 <div class="label-button">
  <button type="submit" class="pi-btn blue save user-search"><span> 저장</span></button><button type="button" class="pi-btn list" onclick="window.location.href='/make-review/index'; return false;"><span> 목록으로</span></button> </div>
</div>


<input type="hidden" name="recaptcha_response" id="recaptchaResponse" value="03AGdBq271lnHn8LY5GuAvh71-Yn3B2gB9DwbH1jI5w3ankafJiARFXw7KMFEWdfojOtfEhMLPG30D4ucBxl2RDaOlgLLWJQk77dfWQxlz7Ljr2aPXrYFzeVrt53L91Owi507xa48dYpGgVX9cMEqWwQso34JI07hZO7OFvktsvmJ0QdkxhxCUMxyrHvXoIF-G8Uraj5gklFof8OSH17cEMXwaHmHh9aTC3LETpScou1H74XLT__75zeoWc_SJHDUMDeI7lJbFrUulgSH4MtHI2vMefcB2EtLjO0oCG3B9o_9sBqoR8_HK_i-3DgypVrc2fzVRb9-QXNfMhleDIOdPQdZ0iPb1FsnlUoazwzGc7sgAqyK8pnIlX-ojhN8pZ5gRlGhqPpTau-uWdpzPdQZPkkj3qhICMwwTLo-dJCsj8rZt7PZlkxi-b4U4-k0vrXjHPvjBbvOpyaHPrTAfdA3ltkeuhDacDuf0GA"></form>








     </div>
     <!-- 컨텐츠 내용이 들어갑니다 -->
    </div>
   </div>
  </main>

</body>
</html>