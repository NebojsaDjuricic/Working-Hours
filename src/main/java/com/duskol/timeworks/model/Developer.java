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

	//mozda id
	
	@NonNull
    private String username;
    private List<TimeWork> timeWorks;
    private Project project;
    
	public Developer(String user, List<TimeWork> twList) {
		this.username = user;
		this.timeWorks = twList;
	}
	
	public Developer(String user, List<TimeWork> twList, Project proj) {
		this.username = user;
		this.timeWorks = twList;
		this.project = proj;
	}
    
    public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<TimeWork> getTimeWorks() {
		return timeWorks;
	}

	public void setTimeWorks(List<TimeWork> timeWorks) {
		this.timeWorks = timeWorks;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}  
    
}
