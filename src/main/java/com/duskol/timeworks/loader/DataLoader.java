package com.duskol.timeworks.loader;

import com.duskol.timeworks.model.Developer;
import com.duskol.timeworks.model.Project;
import com.duskol.timeworks.model.TimeWork;
import com.duskol.timeworks.repository.DeveloperRepository;
import com.duskol.timeworks.repository.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.Date;

@Component
public class DataLoader implements CommandLineRunner {

    private ProjectRepository projectRepository;
    private DeveloperRepository developerRepository;

    @Autowired
    public DataLoader(ProjectRepository projectRepository, DeveloperRepository developerRepository) {
        this.projectRepository = projectRepository;
        this.developerRepository = developerRepository;
    }
    

    @Override
    public void run(String... args) {
    	
    	developerRepository.deleteAll().then(Mono.just("developer1"))
    		.map(username -> new Developer(username, Arrays.asList( new TimeWork(new Date(), 140)), new Project("Project1") ))
    			.flatMap(developerRepository::save)
    			.subscribe(null, null, this::run);
    	
    	developerRepository.deleteAll().then(Mono.just("developer2"))
		.map(username -> new Developer(username, Arrays.asList( new TimeWork(new Date(), 180)), new Project("Project1") ))
			.flatMap(developerRepository::save)
			.subscribe(null, null, this::run);

        projectRepository.deleteAll().then(Mono.just("Project1"))
        	.map(title->new Project("1", title,
        			Arrays.asList(new Developer("developer1", Arrays.asList( new TimeWork(new Date(), 140))),
                                new Developer("developer2", Arrays.asList( new TimeWork(new Date(), 180))) ), 320))
                .flatMap(projectRepository::save)
                .subscribe(null, null, this::run);
    }

    private void run() {
        projectRepository.findAll().subscribe(System.out::println);
        developerRepository.findAll().subscribe(System.out::println);
    }
}
