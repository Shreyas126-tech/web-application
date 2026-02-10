package com.sodematha.backend.repository;

import com.sodematha.backend.model.NewsArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface NewsArticleRepository extends JpaRepository<NewsArticle, Long> {
    List<NewsArticle> findTop5ByOrderByPublishedAtDesc();
    List<NewsArticle> findAllByFlashUpdateTrueOrderByPublishedAtDesc();
}
