package com.seva.platform.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Media {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String url;
    private String type;
    private String album;

    public Media() {}

    public Media(String title, String url, String type, String album) {
        this.title = title;
        this.url = url;
        this.type = type;
        this.album = album;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getAlbum() { return album; }
    public void setAlbum(String album) { this.album = album; }

    public static class MediaBuilder {
        private String title;
        private String url;
        private String type;
        private String album;

        public MediaBuilder title(String title) { this.title = title; return this; }
        public MediaBuilder url(String url) { this.url = url; return this; }
        public MediaBuilder type(String type) { this.type = type; return this; }
        public MediaBuilder album(String album) { this.album = album; return this; }

        public Media build() {
            return new Media(title, url, type, album);
        }
    }

    public static MediaBuilder builder() {
        return new MediaBuilder();
    }
}
