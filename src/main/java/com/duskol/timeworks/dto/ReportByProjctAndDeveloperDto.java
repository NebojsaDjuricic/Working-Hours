package com.duskol.timeworks.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReportByProjctAndDeveloperDto {
    private ProjectDto projectDto;
    private DeveloperDto  developerDto;
	public void setProjectDto(ProjectDto projectDto2) {
		// TODO Auto-generated method stub
		
	}
}
