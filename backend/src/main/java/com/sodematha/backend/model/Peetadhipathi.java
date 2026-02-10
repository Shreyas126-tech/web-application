package com.sodematha.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "peetadhipathis")
public class Peetadhipathi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private Integer peetarohanaOrder;
    private String ashramaGuru;
    private String ashramaShishya;
    private String photoUrl;
    private String timelineFromTo;

    @Column(columnDefinition = "TEXT")
    private String biography;

    private String poorvashramaName;
    private String aaradhane;

    @Column(columnDefinition = "TEXT")
    private String keyWorks;

    private String vrindavanaLocation;
    private String vrindavanaAddress;

    public Peetadhipathi() {}

    public Peetadhipathi(String name, Integer peetarohanaOrder, String ashramaGuru, String ashramaShishya, String photoUrl, String timelineFromTo, String biography, String poorvashramaName, String aaradhane, String keyWorks, String vrindavanaLocation, String vrindavanaAddress) {
        this.name = name;
        this.peetarohanaOrder = peetarohanaOrder;
        this.ashramaGuru = ashramaGuru;
        this.ashramaShishya = ashramaShishya;
        this.photoUrl = photoUrl;
        this.timelineFromTo = timelineFromTo;
        this.biography = biography;
        this.poorvashramaName = poorvashramaName;
        this.aaradhane = aaradhane;
        this.keyWorks = keyWorks;
        this.vrindavanaLocation = vrindavanaLocation;
        this.vrindavanaAddress = vrindavanaAddress;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public Integer getPeetarohanaOrder() { return peetarohanaOrder; }
    public void setPeetarohanaOrder(Integer peetarohanaOrder) { this.peetarohanaOrder = peetarohanaOrder; }
    public String getAshramaGuru() { return ashramaGuru; }
    public void setAshramaGuru(String ashramaGuru) { this.ashramaGuru = ashramaGuru; }
    public String getAshramaShishya() { return ashramaShishya; }
    public void setAshramaShishya(String ashramaShishya) { this.ashramaShishya = ashramaShishya; }
    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String photoUrl) { this.photoUrl = photoUrl; }
    public String getTimelineFromTo() { return timelineFromTo; }
    public void setTimelineFromTo(String timelineFromTo) { this.timelineFromTo = timelineFromTo; }
    public String getBiography() { return biography; }
    public void setBiography(String biography) { this.biography = biography; }
    public String getPoorvashramaName() { return poorvashramaName; }
    public void setPoorvashramaName(String poorvashramaName) { this.poorvashramaName = poorvashramaName; }
    public String getAaradhane() { return aaradhane; }
    public void setAaradhane(String aaradhane) { this.aaradhane = aaradhane; }
    public String getKeyWorks() { return keyWorks; }
    public void setKeyWorks(String keyWorks) { this.keyWorks = keyWorks; }
    public String getVrindavanaLocation() { return vrindavanaLocation; }
    public void setVrindavanaLocation(String vrindavanaLocation) { this.vrindavanaLocation = vrindavanaLocation; }
    public String getVrindavanaAddress() { return vrindavanaAddress; }
    public void setVrindavanaAddress(String vrindavanaAddress) { this.vrindavanaAddress = vrindavanaAddress; }

    // Builder
    public static class PeetadhipathiBuilder {
        private String name;
        private Integer peetarohanaOrder;
        private String ashramaGuru;
        private String ashramaShishya;
        private String photoUrl;
        private String timelineFromTo;
        private String biography;
        private String poorvashramaName;
        private String aaradhane;
        private String keyWorks;
        private String vrindavanaLocation;
        private String vrindavanaAddress;

        public PeetadhipathiBuilder name(String name) { this.name = name; return this; }
        public PeetadhipathiBuilder peetarohanaOrder(Integer peetarohanaOrder) { this.peetarohanaOrder = peetarohanaOrder; return this; }
        public PeetadhipathiBuilder ashramaGuru(String ashramaGuru) { this.ashramaGuru = ashramaGuru; return this; }
        public PeetadhipathiBuilder ashramaShishya(String ashramaShishya) { this.ashramaShishya = ashramaShishya; return this; }
        public PeetadhipathiBuilder photoUrl(String photoUrl) { this.photoUrl = photoUrl; return this; }
        public PeetadhipathiBuilder timelineFromTo(String timelineFromTo) { this.timelineFromTo = timelineFromTo; return this; }
        public PeetadhipathiBuilder biography(String biography) { this.biography = biography; return this; }
        public PeetadhipathiBuilder poorvashramaName(String poorvashramaName) { this.poorvashramaName = poorvashramaName; return this; }
        public PeetadhipathiBuilder aaradhane(String aaradhane) { this.aaradhane = aaradhane; return this; }
        public PeetadhipathiBuilder keyWorks(String keyWorks) { this.keyWorks = keyWorks; return this; }
        public PeetadhipathiBuilder vrindavanaLocation(String vrindavanaLocation) { this.vrindavanaLocation = vrindavanaLocation; return this; }
        public PeetadhipathiBuilder vrindavanaAddress(String vrindavanaAddress) { this.vrindavanaAddress = vrindavanaAddress; return this; }

        public Peetadhipathi build() {
            return new Peetadhipathi(name, peetarohanaOrder, ashramaGuru, ashramaShishya, photoUrl, timelineFromTo, biography, poorvashramaName, aaradhane, keyWorks, vrindavanaLocation, vrindavanaAddress);
        }
    }

    public static PeetadhipathiBuilder builder() {
        return new PeetadhipathiBuilder();
    }
}
