package com.duskol.timeworks.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;

@SuppressWarnings("serial")
@Document(collection = "projects")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Project implements Serializable {
  
	@Id
    private String id;
    private String title;
    private List<Developer> developers;
    private float hours;
    
    public Project(String id, String title, List<Developer> devList) {
		this.id = id;
		this.title = title;
		this.developers = devList;
	}
    
    public Project(String id, String title, List<Developer> devList, float hours) {
    	this.id = id;
		this.title = title;
		this.developers = devList;
    	this.hours = hours;
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
	public float getHours() {
		return hours;
	}
	public void setHours(float hours) {
		this.hours = hours;
	}
    
	
}
