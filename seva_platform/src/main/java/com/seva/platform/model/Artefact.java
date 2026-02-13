package com.seva.platform.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Artefact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String category;
    private String fileUrl;
    private String fileType;

    public Artefact() {}

    public Artefact(String title, String category, String fileUrl, String fileType) {
        this.title = title;
        this.category = category;
        this.fileUrl = fileUrl;
        this.fileType = fileType;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getFileUrl() { return fileUrl; }
    public void setFileUrl(String fileUrl) { this.fileUrl = fileUrl; }
    public String getFileType() { return fileType; }
    public void setFileType(String fileType) { this.fileType = fileType; }

    public static class ArtefactBuilder {
        private String title;
        private String category;
        private String fileUrl;
        private String fileType;

        public ArtefactBuilder title(String title) { this.title = title; return this; }
        public ArtefactBuilder category(String category) { this.category = category; return this; }
        public ArtefactBuilder fileUrl(String fileUrl) { this.fileUrl = fileUrl; return this; }
        public ArtefactBuilder fileType(String fileType) { this.fileType = fileType; return this; }

        public Artefact build() {
            return new Artefact(title, category, fileUrl, fileType);
        }
    }

    public static ArtefactBuilder builder() {
        return new ArtefactBuilder();
    }
}
