package blueHouse;

public class ReserveDTO {

	private int reserve_num;
	private String id;
	private int company;
	private int see_date;
	private int see_time;
	private String req_date;
	private String name;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getReserve_num() {
		return reserve_num;
	}
	public void setReserve_num(int reserve_num) {
		this.reserve_num = reserve_num;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getCompany() {
		return company;
	}
	public void setCompany(int company) {
		this.company = company;
	}
	public int getSee_date() {
		return see_date;
	}
	public void setSee_date(int see_date) {
		this.see_date = see_date;
	}
	public int getSee_time() {
		return see_time;
	}
	public void setSee_time(int see_time) {
		this.see_time = see_time;
	}
	public String getReq_date() {
		return req_date;
	}
	public void setReq_date(String req_date) {
		this.req_date = req_date;
	}
	
	
}
