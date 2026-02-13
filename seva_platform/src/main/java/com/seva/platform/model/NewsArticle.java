package com.seva.platform.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "news_articles")
public class NewsArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private String imageUrl;
    private LocalDateTime publishedAt;
    private boolean flashUpdate;

    public NewsArticle() {}

    public NewsArticle(String title, String content, String imageUrl, LocalDateTime publishedAt, boolean flashUpdate) {
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
        this.publishedAt = publishedAt;
        this.flashUpdate = flashUpdate;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public LocalDateTime getPublishedAt() { return publishedAt; }
    public void setPublishedAt(LocalDateTime publishedAt) { this.publishedAt = publishedAt; }
    public boolean isFlashUpdate() { return flashUpdate; }
    public void setFlashUpdate(boolean flashUpdate) { this.flashUpdate = flashUpdate; }

    // Builder
    public static class NewsArticleBuilder {
        private String title;
        private String content;
        private String imageUrl;
        private LocalDateTime publishedAt;
        private boolean flashUpdate;

        public NewsArticleBuilder title(String title) { this.title = title; return this; }
        public NewsArticleBuilder content(String content) { this.content = content; return this; }
        public NewsArticleBuilder imageUrl(String imageUrl) { this.imageUrl = imageUrl; return this; }
        public NewsArticleBuilder publishedAt(LocalDateTime publishedAt) { this.publishedAt = publishedAt; return this; }
        public NewsArticleBuilder flashUpdate(boolean flashUpdate) { this.flashUpdate = flashUpdate; return this; }

        public NewsArticle build() {
            return new NewsArticle(title, content, imageUrl, publishedAt, flashUpdate);
        }
    }

    public static NewsArticleBuilder builder() {
        return new NewsArticleBuilder();
    }
}
