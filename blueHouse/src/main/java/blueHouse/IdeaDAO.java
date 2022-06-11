package blueHouse;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class IdeaDAO {
	private CommonDAO commonDao;
	private Connection con;

	public IdeaDAO() {
		commonDao = new CommonDAO();
		con = commonDao.makeConnection();
	}

	public void write(boardDTO boardDto) {

		String sql = "INSERT INTO idea_board VALUES(idea_board_seq.nextval, ?,?,?,?,?)";

		PreparedStatement ps = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, boardDto.getTitle());
			ps.setString(2, boardDto.getContent());
			ps.setString(3, boardDto.getName());
			ps.setString(4, boardDto.getId());
			ps.setInt(5, boardDto.getWrite_date());
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

	public boardDTO selectNum(int num) {

		String sql = "SELECT * FROM idea_board WHERE num=?";
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
				boardDto.setName(rs.getString("name"));
				boardDto.setId(rs.getString("id"));
				boardDto.setWrite_date(rs.getInt("write_date"));
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

	public void update(boardDTO boardDto) {
		String sql = "UPDATE idea_board SET title=?, content=?, write_date=? WHERE num=?";

		PreparedStatement ps = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, boardDto.getTitle());
			ps.setString(2, boardDto.getContent());
			ps.setInt(3, boardDto.getWrite_date());
			ps.setInt(4, boardDto.getNum());
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
		ArrayList<boardDTO> boards = new ArrayList<boardDTO>();
		
		String sql = "SELECT * FROM idea_board ORDER BY num DESC";
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()) {
				boardDTO boardDto = new boardDTO();
				boardDto.setNum(rs.getInt("num"));
				boardDto.setTitle(rs.getString("title"));
				boardDto.setContent(rs.getString("content"));
				boardDto.setName(rs.getString("name"));
				boardDto.setId(rs.getString("id"));
				boardDto.setWrite_date(rs.getInt("write_date"));
				boards.add(boardDto);
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
		return boards;
	}
	
	public void delete(int num) {
		String sql = "DELETE FROM idea_board WHERE num=?";
		
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
	
	//검색
	public ArrayList<boardDTO> search(String search_keyword) {
		String sql = "SELECT * FROM idea_board WHERE title like ? OR name like ? ORDER BY num DESC";
		System.out.println(search_keyword);
		ArrayList<boardDTO> boards = new ArrayList<boardDTO>();
		
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1,  "%"+search_keyword+"%");
			ps.setString(2,  "%"+search_keyword+"%");
			rs = ps.executeQuery();
			while(rs.next()) {
				boardDTO boardDto = new boardDTO();
				boardDto.setNum(rs.getInt("num"));
				boardDto.setTitle(rs.getString("title"));
				boardDto.setContent(rs.getString("content"));
				boardDto.setName(rs.getString("name"));
				boardDto.setId(rs.getString("id"));
				boardDto.setWrite_date(rs.getInt("write_date"));
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

}
