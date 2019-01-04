package com.duskol.timeworks.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.Date;

@Data
@NoArgsConstructor
public class TimeWork {

	@NonNull
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date dateOfCharge;

    @NonNull  
    private int minutesOnProject;
    

    public TimeWork(Date date, int mins) {
		this.dateOfCharge = date;
		this.minutesOnProject = mins;
	}
    

	public int getMinutesOnProject() {
		return minutesOnProject;
	}

	public void setMinutesOnProject(int mins) {
		this.minutesOnProject = mins;
	}

	public Date getDateOfCharge() {
		return dateOfCharge;
	}

	public void setDateOfCharge(Date dateOfCharge) {
		this.dateOfCharge = dateOfCharge;
	}



}
