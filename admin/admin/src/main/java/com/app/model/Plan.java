package com.app.model;



import jakarta.persistence.*;

@Entity
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPlanName() {
		return planName;
	}
	public void setPlanName(String planName) {
		this.planName = planName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getValidityDays() {
		return validityDays;
	}
	public void setValidityDays(int validityDays) {
		this.validityDays = validityDays;
	}
	public int getMinutes() {
		return minutes;
	}
	public void setMinutes(int minutes) {
		this.minutes = minutes;
	}
	public int getSms() {
		return sms;
	}
	public void setSms(int sms) {
		this.sms = sms;
	}
	public double getDataLimitGb() {
		return dataLimitGb;
	}
	public void setDataLimitGb(double dataLimitGb) {
		this.dataLimitGb = dataLimitGb;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	private String planName;
    private String description;
    private int validityDays;
    private int minutes;
    private int sms;
    private double dataLimitGb;
    private double price;

    
}
