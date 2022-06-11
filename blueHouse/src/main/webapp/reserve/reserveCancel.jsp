<%@page import="blueHouse.ReserveDAO"%>
<%@page import="blueHouse.ReserveDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

	String id = (String)session.getAttribute("id");
	
	ReserveDAO reserveDao = new ReserveDAO();
	ReserveDTO reserve = reserveDao.selectId(id);
	
	if(reserve != null) {
		reserveDao.delete(reserve);
		out.print("<script>alert('해당 예약이 취소 완료되었습니다.'); location.href='/blueHouse/reserve/reserveMain.jsp'</script>");
	}else{
		out.print("<script>alert('예약 정보를 확인 할 수 없습니다.'); location.href='/blueHouse/reserve/reserveMain.jsp'</script>");
		
	}

%>