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
				<form action="https://www.opencheongwadae.kr/make-review/form_"
					class="save-form plani-form" method="post" accept-charset="utf-8">
					<div class="alert-error"></div>
					<div class="alert-success"></div>
					<input type="hidden" name="csrf_test_name"
						value="38f45fc2b6fda09731ea90c73e9d5ffb" style="display: none;">
					<input type="hidden" name="history" value="/make-review/form"
						style="display: none;"> <input type="hidden" name="id"
						value="" id="id">
					<div class="type2">
						<div class="label-wrap type3">
							<div class="form_cont article_id">

								<label class="label-input block50"> <span>관리자ID <i
										class="req">*<span class="sr_only">필수입력</span></i></span> <input
									type="text" name="name" value="" required="required"
									maxlength="6" placeholder="6자 이내로 입력해주세요." id="name" detect=""
									detect-check="true">
								</label> <label class="label-input block50"> <span>비밀번호 <i
										class="req">*<span class="sr_only">필수입력</span></i></span> <input
									type="password" name="passwd" value="" required="required"
									placeholder="비밀번호 6자리 입력해주세요." id="passwd">
								</label>
							</div>
							<div class="form_cont article_radio"></div>

							<div class="form_cont article_contents">
								<div class="label-input label-contents">
									<span>내용 <i class="req">*<span class="sr_only">필수입력</span></i></span>
									<textarea name="contents" class="w100 h400px textarea_cnt"
										required="" detect="" detect-check="true"></textarea>
									<div class="help txt_cnt">0/1,000자</div>
								</div>
							</div>

							<div class="form_cont article_file">
								<label class="label-input"> <span>첨부파일</span>
									<div class="fileup">
										<input type="file" name="upfile">
									</div>
									<div class="help" style="font-size: 1em; line-height: 1.5em;">*
										첨부파일은 최대 2개 까지, png, jpeg, jpg파일만 등록 가능 합니다.</div>
								</label>
							</div>
						</div>
						<div class="label-button">
							<button type="submit" class="pi-btn blue save user-search">
								<span> 저장</span>
							</button>
							<button type="button" class="pi-btn list"
								onclick="window.location.href='/homepage/index5/communicate-notice.jsp'; return false;">
								<span> 목록으로</span>
							</button>
						</div>
					</div>
				</form>
			</div>

		</div>
	</div>
</main>
<%@include file="/footer.jsp"%>