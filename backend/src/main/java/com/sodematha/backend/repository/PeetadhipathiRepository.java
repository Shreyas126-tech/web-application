package com.sodematha.backend.repository;

import com.sodematha.backend.model.Peetadhipathi;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PeetadhipathiRepository extends JpaRepository<Peetadhipathi, Long> {
    List<Peetadhipathi> findAllByOrderByPeetarohanaOrderAsc();
}
