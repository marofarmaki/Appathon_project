package controller;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/MedServlet")
public class MedServlet extends HttpServlet {
		private static final long serialVersionUID = 1L;
		String jsondata ;
		boolean siteisLoaded = false ;
		
	       
    public MedServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
	

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String site = "defaultvalue";
		response.addHeader("Access-Control-Allow-Origin","http://localhost:3000");
		System.out.println(site);
		site = request.getParameter("dataFromJquery");  // load the site from jquery
		site = site.replace(" ", "+") ;			// fixing the url changing spaces with "+"		
		System.out.println(site);
		if (site != "defaultvalue") {	
			siteisLoaded = true ;
		}
		
		if (siteisLoaded) {
	    	  HttpClient client = HttpClient.newHttpClient();
	    	  HttpRequest requesting = HttpRequest.newBuilder().uri(URI.create(site)).build();
	    	  jsondata = client.sendAsync(requesting, HttpResponse.BodyHandlers.ofString())
	    	  	.thenApply(HttpResponse::body)
	    	  	.join();                // fetching data from clinicaltrialsgov 
	        response.setContentType("application/json");
	        response.setCharacterEncoding("UTF-8");
	        response.getWriter().write(jsondata);	// return data to js
	    	}
	}

}
