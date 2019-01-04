package com.duskol.timeworks.service;

import com.duskol.timeworks.model.Developer;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface DeveloperService {
	Flux<Developer> getAllDevelopers();
	
	Mono<Developer> getDeveloper(String username);
	
	Mono<Void> deleteDeveloperByUsername(String username);
	
	
}
