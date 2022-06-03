package blueHouse;

import java.sql.Connection;
import java.sql.DriverManager;

public class CommonDAO {
	
	private static String url ="jdbc:oracle:thin:@bluehouse_high?TNS_ADMIN=/Users/gayeonkim/Wallet_bluehouse";
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
	
	public static void main(String[] args) {
		Connection con = null;
		
		String url = "jdbc:oracle:thin:@DBlocal_high?TNS_ADMIN=/Users/gayeonkim/Wallet_DBlocal";
		String user = "admin";
		String pwd = "KGproject1234!";

		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			con = DriverManager.getConnection(url, user, pwd);
			System.out.println("드라이브 로딩 성공");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		
		
	
	}
}
