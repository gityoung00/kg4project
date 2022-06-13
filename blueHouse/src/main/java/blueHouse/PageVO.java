package blueHouse;

public class PageVO {
	private int pageNumber; // 현재 페이지 번호
	private int start; // 페이지 번호 마다 ArrayList의 시작 인덱스 값
	private int end; // 페이지 번호마다 ArrayList의 끝 인덱스 값
	private int block ; // 한 화면에 출력할 게시글 수
	private int totalCount; // 조회한 총 게시글의 수(ArrayList.size())
	private int totalPage; //  총 페이지 수
	
	public PageVO() {
		this.block = 3;
	}
	public PageVO(int block) {
		this.block = block;
	}
	
	private void setStart() {
		this.start = (this.pageNumber - 1) * block;
	}
	private void setEnd() {
		this.end = this.block + this.start;
	}
	public void setPageNumber(String pageNumber) {
		if(pageNumber == null || pageNumber == "")
			this.pageNumber = 1;
		else
			this.pageNumber = Integer.parseInt(pageNumber);
		
		setStart();
		setEnd();
	}
	
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
		setTotalPage();
	}
	private void setTotalPage() {
		this.totalPage = totalCount / block;
		if(totalCount % block > 0)
			this.totalPage++;
	}
	
	public int getEnd() {
		return end;
	}
	public int getPageNumber() {
		return pageNumber;
	}
	public int getStart() {
		return start;
	}
	public int getBlock() {
		return block;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public int getTotalPage() {
		return totalPage;
	}
}
