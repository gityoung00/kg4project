<%@page import="blueHouse.ReserveDTO"%>
<%@page import="blueHouse.ReserveDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
 <%
 	String id = (String)session.getAttribute("id");
 	String reserve_num = "";
 	int company = Integer.parseInt(request.getParameter("company"));
 	//LocalTime time = new LocalDateTime();
 	
 	ReserveDAO reserveDao = new ReserveDAO();
 	ReserveDTO myReserve = reserveDao.selectId(id);
 	
 
 
 
 %>
    