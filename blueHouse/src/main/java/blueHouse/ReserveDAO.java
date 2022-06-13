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

		String sql = "INSERT INTO reserve VALUES(?,?,?,?,?,?)";

		PreparedStatement ps = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, reserve.getId());
			ps.setInt(2, reserve.getCompany());
			ps.setString(3, reserve.getSee_date());
			ps.setInt(4, reserve.getSee_time());
			ps.setString(5, reserve.getReq_date());
			ps.setInt(6, reserve.getReserve_num());
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
				reserve.setReserve_num(rs.getInt("reserve_num"));
				reserve.setCompany(rs.getInt("company"));
				reserve.setSee_date(rs.getString("see_date"));
				reserve.setSee_time(rs.getInt("see_time"));
				reserve.setReq_date(rs.getString("req_date"));
				System.out.println(reserve);
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
	
	public int sumNum(int date, int time) {
		String sql = "SELECT SUM(company) FROM reserve WHERE see_date=? AND see_time=?";
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, date);
			ps.setInt(2, time);
			rs = ps.executeQuery();
			int sum = rs.getInt("sum(company)");
			return sum;
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
		
		return 9999;
	}
	
	public void delete(ReserveDTO reserve) {
		String sql = "DELETE FROM reserve WHERE id=?";
		
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
