package blueHouse;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


public class ReserveDAO {
	
	private CommonDAO commonDao;
	private Connection con;

	public ReserveDAO() {
		commonDao = new CommonDAO();
		con = commonDao.makeConnection();
	}

	public void insert(ReserveDTO reserve) {

		String sql = "INSERT INTO reserve VALUES(?,?,?,?,?)";

		PreparedStatement ps = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, reserve.getId());
			ps.setString(2, reserve.getPw());
			ps.setString(3, reserve.getName());
			ps.setString(4, reserve.getTel());
			ps.setString(5, reserve.getEmail());
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (ps != null)
					ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	public ReserveDTO selectId(String id) {

		String sql = "SELECT * FROM reserve WHERE id=?";
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement(sql);
			System.out.println(ps);
			ps.setString(1, id);
			rs = ps.executeQuery();
			if (rs.next()) {
				ReserveDTO reserve = new ReserveDTO();
				reserve.setId(rs.getString("id"));
				reserve.setPw(rs.getString("pw"));
				reserve.setName(rs.getString("name"));
				reserve.setEmail(rs.getString("email"));
				reserve.setTel(rs.getString("tel"));
				return reserve;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				if (rs != null)
					rs.close();
				if (ps != null)
					ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return null;
	}
	
	public int sumNum(int date) {
		
	}
	
	public void delete(ReserveDTO reserve) {
		String sql = "DELETE FROM care WHERE id=?";
		
		PreparedStatement ps = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, reserve.getId());
			ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(ps != null) ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

}
