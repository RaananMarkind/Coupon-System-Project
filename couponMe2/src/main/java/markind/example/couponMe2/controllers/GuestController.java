package markind.example.couponMe2.controllers;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import markind.example.couponMe2.beans.Company;
import markind.example.couponMe2.beans.Coupon;
import markind.example.couponMe2.facades.AdminFacade;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "/guest")
//GET - allCompanies, allCoupon
public class GuestController {
	private AdminFacade adminFacade;
	
	public GuestController(AdminFacade adminFacade) {
		this.adminFacade = adminFacade;
	}

	@GetMapping(path = "/guestlallcompanies") //v
	public List<Company> getAllCompanies(){
		return adminFacade.getAllCompany(); 
	}
	
	@GetMapping(path = "/guestlallcoupons") //v
	public ResponseEntity<?> getAllCoupons(){
		List<Company> companies = getAllCompanies();
		Set<Coupon> coupons = new HashSet<>();
		for (int i = 0; i < companies.size(); i++) {
			coupons.addAll(companies.get(i).getCoupons());
		}
		
		return ResponseEntity.ok(coupons); 
	}
}
