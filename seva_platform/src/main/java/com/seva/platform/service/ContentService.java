package com.seva.platform.service;

import com.seva.platform.model.NewsArticle;
import com.seva.platform.model.Peetadhipathi;
import com.seva.platform.model.Seva;
import com.seva.platform.repository.NewsArticleRepository;
import com.seva.platform.repository.PeetadhipathiRepository;
import com.seva.platform.repository.SevaRepository;
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
