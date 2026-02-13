package com.seva.platform.repository;

import com.seva.platform.model.NewsArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface NewsArticleRepository extends JpaRepository<NewsArticle, Long> {
    List<NewsArticle> findTop5ByOrderByPublishedAtDesc();
    List<NewsArticle> findAllByFlashUpdateTrueOrderByPublishedAtDesc();
}
