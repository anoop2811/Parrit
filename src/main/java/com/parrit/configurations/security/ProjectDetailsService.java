package com.parrit.configurations.security;

import com.parrit.entities.Project;
import com.parrit.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class ProjectDetailsService implements UserDetailsService {

    private ProjectRepository projectRepository;

    @Autowired
    public ProjectDetailsService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        Project project = projectRepository.findByName(name);

        if(project == null)
            throw new UsernameNotFoundException("Username <" + name + "> was not found");

        return new User(project.getName(), project.getPassword(), Collections.emptyList());
    }
}
