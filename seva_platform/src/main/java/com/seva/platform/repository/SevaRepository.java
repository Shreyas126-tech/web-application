package com.seva.platform.repository;

import com.seva.platform.model.Seva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SevaRepository extends JpaRepository<Seva, Long> {
}
