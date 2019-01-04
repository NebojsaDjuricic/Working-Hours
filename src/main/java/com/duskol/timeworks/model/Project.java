package com.duskol.timeworks.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
@Document(collection = "projects")
@Data
@NoArgsConstructor
public class Project implements Serializable {
  
	@Id
    private String id;
    private String title;
    private List<Developer> developers;
    private int minutes;
    
    public Project(String id, String title, List<Developer> devList) {
		this.id = id;
		this.title = title;
		this.developers = devList;
	}
    
    public Project(String id, String title, List<Developer> devList, int mins) {
    	this.id = id;
		this.title = title;
		this.developers = devList;
    	this.minutes = mins;
	}
    
    public Project(String title) {
		this.title = title;
	}
    
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public List<Developer> getDevelopers() {
		return developers;
	}
	
	public void setDevelopers(List<Developer> developers) {
		this.developers = developers;
	}
	
	public int getMinutes() {
		return minutes;
	}
	
	public void setMinutes(int mins) {
		this.minutes = mins;
	}
    
	
}
