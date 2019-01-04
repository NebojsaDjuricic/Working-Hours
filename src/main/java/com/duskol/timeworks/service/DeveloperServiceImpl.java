package com.duskol.timeworks.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.duskol.timeworks.exception.ResourceNotFoundException;
import com.duskol.timeworks.model.Developer;
import com.duskol.timeworks.model.Project;
import com.duskol.timeworks.repository.DeveloperRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class DeveloperServiceImpl implements DeveloperService {
	
	@Autowired
	DeveloperRepository developerRepository;

	@Override
	public Flux<Developer> getAllDevelopers() {
		return developerRepository.findAll();
	}

	@Override
	public Mono<Developer> getDeveloper(String username) {
		 Mono<Developer> fallback = Mono.error(new ResourceNotFoundException("GET DEVELOPER: Developer with username:" + username + " does not exist in the database"));

	        return developerRepository.findByUsername(username)
	                .switchIfEmpty(fallback);
	}

	@Override
	public Mono<Void> deleteDeveloperByUsername(String username) {
		 Mono<Developer> fallback = Mono.error(new ResourceNotFoundException("DELETE DEVELOPER: Developer with username:" + username + " does not exist in the database"));

	        return developerRepository.findByUsername(username)
	                .switchIfEmpty(fallback)
	                .flatMap(existingDeveloper -> developerRepository.delete(existingDeveloper));
	}
}
