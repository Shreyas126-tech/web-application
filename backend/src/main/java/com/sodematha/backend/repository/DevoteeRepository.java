package com.sodematha.backend.repository;

import com.sodematha.backend.model.Devotee;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface DevoteeRepository extends JpaRepository<Devotee, Long> {
    Optional<Devotee> findByMobileNumber(String mobileNumber);
}
