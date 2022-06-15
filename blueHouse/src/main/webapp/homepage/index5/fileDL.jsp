<%@page import="java.io.OutputStream"%>
<%@page import="java.io.FileInputStream"%>
<%@page import="java.io.File"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	
		request.setCharacterEncoding("utf-8");
		
		
		String fileName = request.getParameter("fileName");
		String downLoadFile = "/Users/gayeonkim/blueHouseDB/notice/" + fileName; 
		
		System.out.print(downLoadFile);
	  
		File file = new File(downLoadFile);
	    FileInputStream in = new FileInputStream(downLoadFile);
		
	    fileName = new String(fileName.getBytes("utf-8"), "8859_1");   

	    response.setContentType("application/octet-stream");							
	    response.setHeader("Content-Disposition", "attachment; filename=" + fileName ); 

		out.clear();					
		out = pageContext.pushBody();
	    
	    OutputStream os = response.getOutputStream();
	    
	    int length;
	    byte[] b = new byte[(int)file.length()];

	    while ((length = in.read(b)) > 0) {
	    	os.write(b,0,length);
	    }
	    
	    os.flush();
	    
	    os.close();
	    in.close();
	    
	%>
	
	<script>history.back();</script>
	
	
	
<%-- <%

	String saveFolder = "/Users/gayeonkim/caredb/" + id + "/" + fileName";
	File file = new File(saveFolder);
	FileInutStream iStream = new FileInputStream(file);
	
	ServletOutputStream oStream = reponse.getOutputStream();
	out.clear();
	
	response.setContentType("application/octet-stream");							
    response.setHeader("Content-Disposition", "attachment; filename=" + fileName ); 
    
    byte[] b = new byte[1024];
    while(true) {
    	int currentDataSize = iStream.read(b,0,b.length);
    	
    }
    
    iStream.close();
    
    
%> --%>