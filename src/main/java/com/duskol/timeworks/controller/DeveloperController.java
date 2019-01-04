package com.duskol.timeworks.controller;

import javax.validation.constraints.NotNull;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.duskol.timeworks.error.ErrorCodes;
import com.duskol.timeworks.error.ErrorMessenger;
import com.duskol.timeworks.exception.DeveloperAlreadyAddedToProjectException;
import com.duskol.timeworks.exception.ResourceNotFoundException;
import com.duskol.timeworks.model.Developer;
import com.duskol.timeworks.model.Project;
import com.duskol.timeworks.service.DeveloperService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/developers")
@CrossOrigin(origins = "http://localhost:3000") 
public class DeveloperController {
	
	private DeveloperService developerService;
	
	public DeveloperController(DeveloperService devService) {
		this.developerService = devService;
	}
	
	@GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public Flux<Developer> getAllDevelopers() {
        return developerService.getAllDevelopers();
    }
	
	@GetMapping("/{username}")
    @ResponseStatus(HttpStatus.OK)
    public Mono<Developer> getDeveloper(@PathVariable @NotNull String username) {
        return developerService.getDeveloper(username);
    }
	
	@DeleteMapping("/{username}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Mono<Void> deleteDeveloper(@PathVariable @NotNull String username) {
        return developerService.deleteDeveloperByUsername(username);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorMessenger resourceNotFoundError(Exception e) {
        ErrorCodes errorCode = ErrorCodes.PROJECT_CAN_NOT_BE_FOUND;
        return new ErrorMessenger(errorCode.getCode(), e.getMessage());
    }


    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorMessenger internalError(Exception e) {
        ErrorCodes errorCode = ErrorCodes.INTERNAL_ERROR;
        return new ErrorMessenger(errorCode.getCode(), e.getMessage());
    }
}
