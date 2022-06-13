package blueHouse;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class NoticeDAO {
	private CommonDAO commonDao;
	private Connection con;
	
	public NoticeDAO() {
		commonDao = new CommonDAO();
		con = commonDao.makeConnection();
	}
	public void write(NoticeDTO notice) {

		String sql = "INSERT INTO notice VALUES(?,?,?)";

		PreparedStatement ps = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, notice.getSubject());
			ps.setString(2, notice.getContent());
			ps.setString(3, notice.getFileName());
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
	public ArrayList<NoticeDTO> selectAll() {
		String sql = "SELECT * FROM care_center ORDER BY num DESC";
		PreparedStatement ps = null;
		ResultSet rs = null;
		ArrayList<NoticeDTO> list = new ArrayList<>();
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while (rs.next()) {
				NoticeDTO notice = new NoticeDTO();

				notice.setNum(rs.getInt("num"));
				notice.setSubject(rs.getString("subject"));
				notice.setContent(rs.getString("content"));
				notice.setFileName(rs.getString("filename"));
				list.add(notice);
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
		return list;
	}

	public ArrayList<NoticeDTO> search(String find, String data) {
		String sql = "";

		if (find.equals("subject"))
			sql = "SELECT * FROM care_center WHERE subject like ? ORDER BY num DESC";
		else if (find.equals("content"))
			sql = "SELECT * FROM care_center WHERE content like ? ORDER BY num DESC";


		PreparedStatement ps = null;
		ResultSet rs = null;
		ArrayList<NoticeDTO> list = new ArrayList<>();
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, "%" + data + "%");
			rs = ps.executeQuery();
			while (rs.next()) {
				NoticeDTO notice = new NoticeDTO();

				notice.setNum(rs.getInt("num"));
				notice.setSubject(rs.getString("subject"));
				notice.setContent(rs.getString("content"));
				notice.setFileName(rs.getString("filename"));
				list.add(notice);
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
		return list;
	}

}

