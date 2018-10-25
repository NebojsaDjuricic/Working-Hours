package com.duskol.timeworks.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Developer {

    public Developer(String string, List<TimeWork> asList) {
		// TODO Auto-generated constructor stub
	}
	@NonNull
    private String username;
    private List<TimeWork> timeWorks;
	public Object getUsername() {
		// TODO Auto-generated method stub
		return null;
	}
	public List<TimeWork> getTimeWorks() {
		// TODO Auto-generated method stub
		return null;
	}
}
