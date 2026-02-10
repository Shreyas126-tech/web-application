package com.sodematha.backend.service;

import com.sodematha.backend.model.NewsArticle;
import com.sodematha.backend.model.Peetadhipathi;
import com.sodematha.backend.model.Seva;
import com.sodematha.backend.repository.NewsArticleRepository;
import com.sodematha.backend.repository.PeetadhipathiRepository;
import com.sodematha.backend.repository.SevaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ContentService {

    @Autowired
    private NewsArticleRepository newsArticleRepository;

    @Autowired
    private PeetadhipathiRepository peetadhipathiRepository;

    @Autowired
    private SevaRepository sevaRepository;

    public List<NewsArticle> getTopNews() {
        return newsArticleRepository.findTop5ByOrderByPublishedAtDesc();
    }

    public List<NewsArticle> getFlashUpdates() {
        return newsArticleRepository.findAllByFlashUpdateTrueOrderByPublishedAtDesc();
    }

    public List<Peetadhipathi> getParampara() {
        return peetadhipathiRepository.findAllByOrderByPeetarohanaOrderAsc();
    }

    public List<Seva> getAllSevas() {
        return sevaRepository.findAll();
    }
}
