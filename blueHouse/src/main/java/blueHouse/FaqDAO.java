package blueHouse;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class FaqDAO {
		private CommonDAO commonDao;
		private Connection con;
		
		public FaqDAO() {
			commonDao = new CommonDAO();
			con = commonDao.makeConnection();
		}
		public void write(boardDTO boardDto) {

			String sql = "INSERT INTO faq_board VALUES(notice_board_seq.nextval, ?,?,?)";

			PreparedStatement ps = null;
			try {
				ps = con.prepareStatement(sql);
				ps.setString(1, boardDto.getTitle());
				ps.setString(2, boardDto.getContent());
				ps.setString(3, boardDto.getFile_name());
				ps.executeUpdate();
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					if (ps != null) ps.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		public ArrayList<boardDTO> selectAll() {
			ArrayList<boardDTO> boards = new ArrayList<>();
			String sql = "SELECT * FROM faq_board ORDER BY num DESC";
			PreparedStatement ps = null;
			ResultSet rs = null;

			try {
				ps = con.prepareStatement(sql);
				rs = ps.executeQuery();
				while (rs.next()) {
					boardDTO boardDto = new boardDTO();
					boardDto.setNum(rs.getInt("num"));
					boardDto.setTitle(rs.getString("title"));
					boardDto.setContent(rs.getString("content"));
					boards.add(boardDto);
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
			return boards;
		}

		//검색
		public ArrayList<boardDTO> search(String search_keyword) {
			String sql = "SELECT * FROM faq_board WHERE title like ? ORDER BY num DESC";
			System.out.println(search_keyword);
			ArrayList<boardDTO> boards = new ArrayList<boardDTO>();
			
			PreparedStatement ps = null;
			ResultSet rs = null;
			try {
				ps = con.prepareStatement(sql);
				ps.setString(1,  "%"+search_keyword+"%");
				rs = ps.executeQuery();
				while(rs.next()) {
					boardDTO boardDto = new boardDTO();
					boardDto.setNum(rs.getInt("num"));
					boardDto.setTitle(rs.getString("title"));
					boardDto.setContent(rs.getString("content"));
					boards.add(boardDto);
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					if(rs != null) rs.close();
					if(ps != null) ps.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			return boards;
		}
		public void update(boardDTO boardDto) {
			String sql = "UPDATE faq_board SET title=?, content=?, WHERE num=?";

			PreparedStatement ps = null;
			try {
				ps = con.prepareStatement(sql);
				ps.setString(1, boardDto.getTitle());
				ps.setString(2, boardDto.getContent());
				ps.setInt(3, boardDto.getNum());
				ps.executeUpdate();
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					if (ps != null) ps.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		public void delete(int num) {
			String sql = "DELETE FROM faq_board WHERE num=?";
			
			PreparedStatement ps = null;
			try {
				ps = con.prepareStatement(sql);
				ps.setInt(1, num);
				ps.executeUpdate();
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					if(ps != null) ps.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		public boardDTO selectNum(int num) {

			String sql = "SELECT * FROM faq_board WHERE num=?";
			PreparedStatement ps = null;
			ResultSet rs = null;
			try {
				ps = con.prepareStatement(sql);
				ps.setInt(1, num);
				rs = ps.executeQuery();
				if (rs.next()) {
					boardDTO boardDto = new boardDTO();
					boardDto.setNum(rs.getInt("num"));
					boardDto.setTitle(rs.getString("title"));
					boardDto.setContent(rs.getString("content"));

					return boardDto;
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					if (rs != null) rs.close();
					if (ps != null) ps.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			return null;
		}

	}




