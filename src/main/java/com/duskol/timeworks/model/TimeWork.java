package com.duskol.timeworks.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimeWork {

	@NonNull
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date dateOfCharge;

    @NonNull
    //@DateTimeFormat(style = "hh:ss:mm")
    private String hoursOnProject;
    
    private float hop;
    
    public TimeWork(Date date, String hours) {
		this.dateOfCharge = date;
		this.hoursOnProject = hours;
	}
    
    public TimeWork(Date date, float hours) {
		this.dateOfCharge = date;
		this.hop = hours;
	}
    

	public float getHop() {
		return hop;
	}

	public void setHop(float hop) {
		this.hop = hop;
	}

	public Date getDateOfCharge() {
		return dateOfCharge;
	}

	public void setDateOfCharge(Date dateOfCharge) {
		this.dateOfCharge = dateOfCharge;
	}

	public String getHoursOnProject() {
		return hoursOnProject;
	}

	public void setHoursOnProject(String hoursOnProject) {
		this.hoursOnProject = hoursOnProject;
	}

}
