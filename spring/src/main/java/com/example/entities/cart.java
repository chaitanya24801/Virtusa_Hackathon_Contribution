package com.example.entities;

public class cart {
	private int user_id;
	private int book_id;
	private int quantity;
	private int tot_price;
	private String book_name;
	public cart(int user_id, int book_id, int quantity, int tot_price, String book_name) {
		super();
		this.user_id = user_id;
		this.book_id = book_id;
		this.quantity = quantity;
		this.tot_price = tot_price;
		this.book_name = book_name;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getBook_id() {
		return book_id;
	}
	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getTot_price() {
		return tot_price;
	}
	public void setTot_price(int tot_price) {
		this.tot_price = tot_price;
	}
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	
}
