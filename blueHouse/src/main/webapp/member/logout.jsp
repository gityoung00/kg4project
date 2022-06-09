<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String id = (String)session.getAttribute("id");
if(id == null){
%>	
<script>alert('로그인 먼저 해주세요.'); location.href='login.jsp';</script>
<% 
}else {
	
	session.invalidate();
%>

<script>alert('로그 아웃 되셨습니다.'); location.href='../main.jsp';</script>

<% }%>