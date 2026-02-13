package com.seva.platform.controller;

import com.seva.platform.model.NewsArticle;
import com.seva.platform.model.Peetadhipathi;
import com.seva.platform.model.Seva;
import com.seva.platform.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/content")
@CrossOrigin(origins = "*")
public class ContentController {

    @Autowired
    private ContentService contentService;

    @GetMapping("/news")
    public List<NewsArticle> getNews() {
        return contentService.getTopNews();
    }

    @GetMapping("/flash-updates")
    public List<NewsArticle> getFlashUpdates() {
        return contentService.getFlashUpdates();
    }

    @GetMapping("/parampara")
    public List<Peetadhipathi> getParampara() {
        return contentService.getParampara();
    }

    @GetMapping("/sevas")
    public List<Seva> getSevas() {
        return contentService.getAllSevas();
    }
}
