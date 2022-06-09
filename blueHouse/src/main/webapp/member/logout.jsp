<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String id = (String)session.getAttribute("id");
if(id == null){
%>	
<script>alert('로그인 정보가 없습니다.'); location.href='login.jsp';</script>
<% 
}else {
	
	session.invalidate();
%>

<script>alert('로그 아웃 되셨습니다.'); location.href='../test.jsp';</script>

<% }%>