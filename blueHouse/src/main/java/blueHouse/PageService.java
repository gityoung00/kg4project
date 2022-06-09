package blueHouse;

public class PageService {
	public static String getNavi(String url, int currentPage, int pageBlock, int totalCount) {
		String result = "";
		
		int totalPage = totalCount / pageBlock;
		if(totalCount % pageBlock > 0)
			totalPage++;
				
		if(currentPage<= 1){
			result += "<a href='#'>[이전] </a>";
		}else{
			int tmp = currentPage - 1;
			result += "<a href='"+url + tmp+"'>[이전] </a>";
		} 
		
		for(int i = 1; i <= totalPage; i++){
			if(currentPage == i)
				result += "<b> " + i + " </b>";
			else	
				result += "<a href='"+url + i+"'> "+ i +" </a>";
		}
		
		if(currentPage >= totalPage){
			result +="<a href='#'>[다음] </a>";
		}else{
			int tmp = currentPage + 1;
			result += "<a href='"+url + tmp+"'>[다음] </a>";
		} 
		return result;
	}
}
