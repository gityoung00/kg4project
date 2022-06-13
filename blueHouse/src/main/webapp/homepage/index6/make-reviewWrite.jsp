<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@include file="/header.jsp"%>

<style>
	#idea_write_btn{
	border: none;
	background-color: #2f3337;
	color: white;
	font-size: 13px;
	width: 80px;
	height: 35px;
	padding: 8px 10px 15px 10px;
	margin-top: 15px;
}
</style>
<main id="main">
	<div class="main_wrap">
		<div id="contents">
			<div class="contents_util">
				<h1 id="contents_title">관람후기</h1>
			</div>
			<div id="contents_body">
				<div class="example_wrap">
					<form action="make-reviewWriteSvc.jsp" class="board-form plani-form" method="post" accept-charset="utf-8">
						<div class="alert-error"></div>
						<div class="alert-success"></div>
						<input type="hidden" name="redirect" value="/make-review/index" style="display: none;"> 
						<input type="hidden" name="encoding" value="1" style="display: none;"> 
						<input type="hidden" name="csrf_test_name" value="c4a3256126ec9dbc908a188f0a9742ad" style="display: none;">
						<input type="hidden" name="history" value="/make-review/index" style="display: none;">
						<div class="type2 bbsWrap_def">
							<h5>Lists</h5>
							
							<div class="idea_wrap review">
								<strong class="tit"><span>청와대</span> 관람후기</strong>
								<div class="idea_cnt">
									<p>
										<span>현재까지 등록 </span><strong>133</strong><i>건</i>
									</p>
									<a href="/make-review/form" class="defBtn fill arrow">관람후기 등록하기</a>
								</div>
								<p class="warning">
									* 비방 및 욕설 등 부적절한 후기, 개인정보 노출 우려가 있는 후기 등은<br> 관리자에 의해 숨김처리 혹은 삭제 될 수 있습니다.
								</p>
								<div class="bg"></div>
							</div>
							
							<div class="request plani-board-lists">
								<table class="bbs" style="margin-left: 130px; width: 1100px;">
									<tr>
										<th width="200">내용</th>
										<td><textarea style="height: 300px; font-size: 18px" name="content"></textarea></td>
									</tr>
								</table>
								<div align="center">
									<input type="submit" value="완료" id="idea_write_btn">
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</main>

<%@include file="/footer.jsp"%>





