package blueHouse;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


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
			ps.setInt(1, reserve.getReserve_num());
			ps.setString(2, reserve.getId());
			ps.setInt(3, reserve.getCompany());
			ps.setInt(4, reserve.getSee_date());
			ps.setInt(5, reserve.getSee_time());
			ps.setString(6, reserve.getReq_date());
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
	
	public ArrayList<ReserveDTO> selectAll() {
		ArrayList<ReserveDTO> reserveInfo = new ArrayList<ReserveDTO>();
		
		String sql = "SELECT * FROM reserve JOIN member ON reserve.id = member.id";
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()) {
				ReserveDTO reserve = new ReserveDTO();
				reserve.setReserve_num(rs.getInt("reserve_num"));
				reserve.setId(rs.getString("id"));
				reserve.setCompany(rs.getInt("company"));
				reserve.setSee_date(rs.getInt("see_date"));
				reserve.setSee_time(rs.getInt("see_time"));
				reserve.setReq_date(rs.getString("req_date"));
				reserve.setName(rs.getString("name"));
				reserveInfo.add(reserve);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs != null) rs.close();
				if(ps != null) ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return reserveInfo;
	}
	

	public ReserveDTO selectId(String id) {
		System.out.println("넘어온아이디:"+ id);
		String sql = "SELECT * FROM reserve WHERE id=?";
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, id);
			rs = ps.executeQuery();
			if (rs.next()) {
				System.out.print("야 된다 근데 왜?");
				ReserveDTO reserve = new ReserveDTO();
				reserve.setReserve_num(rs.getInt("reserve_num"));
				reserve.setId(rs.getString("id"));
				reserve.setCompany(rs.getInt("company"));
				reserve.setSee_date(rs.getInt("see_date"));
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
	
	public ArrayList<ReserveDTO> selectDate(int date) {
		ArrayList<ReserveDTO> reserveInfo = new ArrayList<ReserveDTO>();
		
		String sql = "SELECT * FROM reserve JOIN member ON reserve.id = member.id WHERE see_date=?";
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, date);
			rs = ps.executeQuery();
			while(rs.next()) {
				ReserveDTO reserve = new ReserveDTO();
				reserve.setReserve_num(rs.getInt("reserve_num"));
				reserve.setId(rs.getString("id"));
				reserve.setCompany(rs.getInt("company"));
				reserve.setSee_date(rs.getInt("see_date"));
				reserve.setSee_time(rs.getInt("see_time"));
				reserve.setReq_date(rs.getString("req_date"));
				reserve.setName(rs.getString("name"));
				System.out.println("id="+rs.getString("id"));
				reserveInfo.add(reserve);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs != null) rs.close();
				if(ps != null) ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		System.out.println(reserveInfo);
		return reserveInfo;
	}
	
	public ArrayList<ReserveDTO> searchId(String id) {
		ArrayList<ReserveDTO> reserveInfo = new ArrayList<ReserveDTO>();
		
		String sql = "SELECT * FROM reserve JOIN member ON reserve.id = member.id WHERE reserve.id like ?";
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, "%"+id+"%");
			rs = ps.executeQuery();
			while(rs.next()) {
				ReserveDTO reserve = new ReserveDTO();
				reserve.setReserve_num(rs.getInt("reserve_num"));
				reserve.setId(rs.getString("id"));
				reserve.setCompany(rs.getInt("company"));
				reserve.setSee_date(rs.getInt("see_date"));
				reserve.setSee_time(rs.getInt("see_time"));
				reserve.setReq_date(rs.getString("req_date"));
				reserve.setName(rs.getString("name"));
				System.out.println("id="+rs.getString("id"));
				reserveInfo.add(reserve);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs != null) rs.close();
				if(ps != null) ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		System.out.println(reserveInfo);
		return reserveInfo;
	}
	
	public ArrayList<ReserveDTO> searchBoth(int date, String id) {
		ArrayList<ReserveDTO> reserveInfo = new ArrayList<ReserveDTO>();
		
		String sql = "SELECT * FROM reserve JOIN member ON reserve.id = member.id WHERE reserve.id like ? AND reserve.see_date=?";
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, "%"+id+"%");
			ps.setInt(2, date);
			rs = ps.executeQuery();
			while(rs.next()) {
				ReserveDTO reserve = new ReserveDTO();
				reserve.setReserve_num(rs.getInt("reserve_num"));
				reserve.setId(rs.getString("id"));
				reserve.setCompany(rs.getInt("company"));
				reserve.setSee_date(rs.getInt("see_date"));
				reserve.setSee_time(rs.getInt("see_time"));
				reserve.setReq_date(rs.getString("req_date"));
				reserve.setName(rs.getString("name"));
				System.out.println("id="+rs.getString("id"));
				reserveInfo.add(reserve);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs != null) rs.close();
				if(ps != null) ps.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		System.out.println(reserveInfo);
		return reserveInfo;
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
			if (rs.next()) {
				int sum = rs.getInt("sum(company)");
				return sum;
			}
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
		
		return 0;
	}
	
	public int sumToday(int date) {
		String sql = "SELECT SUM(company) FROM reserve WHERE see_date=?";
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, date);
			rs = ps.executeQuery();
			if (rs.next()) {
				int sum = rs.getInt("sum(company)");
				return sum;
			}
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
		
		return 0;
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
