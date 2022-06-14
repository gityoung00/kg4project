<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/header.jsp"%>
<main id="main">
	<div class="main_wrap">
		<div id="contents">
			<div class="contents_util">
				<h1 id="contents_title">공지사항</h1>
			</div>
			<div id="contents_body">
				<!-- 컨텐츠 내용이 들어갑니다 -->
				<div class="example_wrap"></div>
				<form action="communicate-faqWriteSvc.jsp"
					class="save-form plani-form" method="post" accept-charset="utf-8">
					<input type="hidden" name="csrf_test_name"
						value="38f45fc2b6fda09731ea90c73e9d5ffb" style="display: none;">
					<input type="hidden" name="history" value="/make-review/form"
						style="display: none;"> <input type="hidden" name="id"
						value="" id="id">
					<div class="type2">
						<div class="label-wrap type3">

								<span>제목 <i class="req">*<span class="sr_only">필수입력</span></i></span>
								<input type="text" name="title" required="required" detect=""
									detect-check="true" style="width: 100%; font-size: 23px">
							
							<div class="form_cont article_contents">
								<div class="label-input label-contents">
									<span>내용 <i class="req">*<span class="sr_only">필수입력</span></i></span>
									<textarea name="content" class="w100 h400px textarea_cnt"
										></textarea>
						 
								</div>
							</div>

		
						</div>
						<div class="label-button">
							<button type="submit" class="pi-btn blue save user-search">
								<span> 저장</span>
							</button>
			
						</div>
					</div>
				</form>
			</div>

		</div>
	</div>
</main>
<%@include file="/footer.jsp"%>