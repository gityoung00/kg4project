package blueHouse;

import java.sql.Connection;
import java.sql.DriverManager;

public class CommonDAO {
	
	private static String url ="jdbc:oracle:thin:@bluehouse_high?TNS_ADMIN=C:/Users/이나경/Downloads/Wallet_bluehouse";
	private static String user = "admin";
	private static String pwd = "Bluehouse1234";
	
	public static Connection makeConnection() {
	Connection conn = null;
	
	try {
		Class.forName("oracle.jdbc.OracleDriver");
		conn = DriverManager.getConnection(url, user, pwd);
		System.out.println("드라이브 로딩 성공");
	} catch (Exception e) {
		e.printStackTrace();
	}
	
	return conn;
	}
	
	
}
