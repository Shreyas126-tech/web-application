package com.seva.platform.repository;

import com.seva.platform.model.Artefact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtefactRepository extends JpaRepository<Artefact, Long> {
}
