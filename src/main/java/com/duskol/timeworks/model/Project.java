package com.duskol.timeworks.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;

@Document(collection = "projects")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Project implements Serializable {

    public Project(String string, String title2, List<Developer> asList) {
		// TODO Auto-generated constructor stub
	}
	@Id
    private String id;
    private String title;
    private List<Developer> developers;
	public Object getDevelopers() {
		// TODO Auto-generated method stub
		return null;
	}
	public Object getId() {
		// TODO Auto-generated method stub
		return null;
	}
	public Object getTitle() {
		// TODO Auto-generated method stub
		return null;
	}

}
