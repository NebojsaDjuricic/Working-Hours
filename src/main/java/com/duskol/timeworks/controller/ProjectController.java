package com.duskol.timeworks.controller;

import com.duskol.timeworks.error.ErrorCodes;
import com.duskol.timeworks.error.ErrorMessenger;
import com.duskol.timeworks.exception.DeveloperAlreadyAddedToProjectException;
import com.duskol.timeworks.exception.ResourceNotFoundException;
import com.duskol.timeworks.model.Developer;
import com.duskol.timeworks.model.Project;
import com.duskol.timeworks.model.TimeWork;
import com.duskol.timeworks.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@RestController
@RequestMapping(value = "/projects")
@CrossOrigin(origins = "http://localhost:3000") 
public class ProjectController {

    private ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public Flux<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Mono<Project> getProject(@PathVariable @NotNull String id) {
        return projectService.getProject(id);
    }

    @PutMapping("/{id}/developers")
    @ResponseStatus(HttpStatus.OK)
    public Mono<Project> addDeveloperToProject(@PathVariable @NotNull String id, @RequestBody @Valid Developer developer) {
        return projectService.addDeveloperToProject(id, developer);
    }

    @PutMapping("/{id}/developers/{username}")
    @ResponseStatus(HttpStatus.OK)
    public Mono<Project> chargeProject(@PathVariable @NotNull String id,
                                       @PathVariable @NotNull String username,
                                       @RequestBody @Valid TimeWork timeWork) {
        return projectService.chargeProject(id, username, timeWork);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Mono<Void> deleteProject(@PathVariable @NotNull String id) {
        return projectService.deleteProjectById(id);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorMessenger resourceNotFoundError(Exception e) {
        ErrorCodes errorCode = ErrorCodes.PROJECT_CAN_NOT_BE_FOUND;
        return new ErrorMessenger(errorCode.getCode(), e.getMessage());
    }

    @ExceptionHandler(DeveloperAlreadyAddedToProjectException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ErrorMessenger developerCanNotBeAdded(Exception e) {
        ErrorCodes errorCode = ErrorCodes.DEVELOPER_CAN_NOT_BE_ADDED;
        return new ErrorMessenger(errorCode.getCode(), e.getMessage());
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorMessenger internalError(Exception e) {
        ErrorCodes errorCode = ErrorCodes.INTERNAL_ERROR;
        return new ErrorMessenger(errorCode.getCode(), e.getMessage());
    }
}
