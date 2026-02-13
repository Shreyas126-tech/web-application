package com.seva.platform.controller;

import com.seva.platform.model.Event;
import com.seva.platform.model.Media;
import com.seva.platform.model.Artefact;
import com.seva.platform.model.Branch;
import com.seva.platform.repository.EventRepository;
import com.seva.platform.repository.MediaRepository;
import com.seva.platform.repository.ArtefactRepository;
import com.seva.platform.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PlatformController {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private ArtefactRepository artefactRepository;

    @Autowired
    private BranchRepository branchRepository;

    @GetMapping("/events")
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @GetMapping("/gallery")
    public List<Media> getAllMedia() {
        return mediaRepository.findAll();
    }

    @GetMapping("/artefacts")
    public List<Artefact> getAllArtefacts() {
        return artefactRepository.findAll();
    }

    @GetMapping("/branches")
    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }
}
