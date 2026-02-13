package com.seva.platform.model;

import jakarta.persistence.*;

@Entity
@Table(name = "devotees")
public class Devotee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String mobileNumber;

    private String fullName;
    private String email;
    private String address;
    private String gotra;
    private String nakshatra;
    private boolean volunteerSignup;
    private boolean dataConsent;

    public Devotee() {}

    public Devotee(String mobileNumber, String fullName, String email, String address, String gotra, String nakshatra, boolean volunteerSignup, boolean dataConsent) {
        this.mobileNumber = mobileNumber;
        this.fullName = fullName;
        this.email = email;
        this.address = address;
        this.gotra = gotra;
        this.nakshatra = nakshatra;
        this.volunteerSignup = volunteerSignup;
        this.dataConsent = dataConsent;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public String getGotra() { return gotra; }
    public void setGotra(String gotra) { this.gotra = gotra; }
    public String getNakshatra() { return nakshatra; }
    public void setNakshatra(String nakshatra) { this.nakshatra = nakshatra; }
    public boolean isVolunteerSignup() { return volunteerSignup; }
    public void setVolunteerSignup(boolean volunteerSignup) { this.volunteerSignup = volunteerSignup; }
    public boolean isDataConsent() { return dataConsent; }
    public void setDataConsent(boolean dataConsent) { this.dataConsent = dataConsent; }

    // Simple Builder Pattern implementation
    public static class DevoteeBuilder {
        private String mobileNumber;
        private String fullName;
        private String email;
        private String address;
        private String gotra;
        private String nakshatra;
        private boolean volunteerSignup;
        private boolean dataConsent;

        public DevoteeBuilder mobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; return this; }
        public DevoteeBuilder fullName(String fullName) { this.fullName = fullName; return this; }
        public DevoteeBuilder email(String email) { this.email = email; return this; }
        public DevoteeBuilder address(String address) { this.address = address; return this; }
        public DevoteeBuilder gotra(String gotra) { this.gotra = gotra; return this; }
        public DevoteeBuilder nakshatra(String nakshatra) { this.nakshatra = nakshatra; return this; }
        public DevoteeBuilder volunteerSignup(boolean volunteerSignup) { this.volunteerSignup = volunteerSignup; return this; }
        public DevoteeBuilder dataConsent(boolean dataConsent) { this.dataConsent = dataConsent; return this; }

        public Devotee build() {
            return new Devotee(mobileNumber, fullName, email, address, gotra, nakshatra, volunteerSignup, dataConsent);
        }
    }

    public static DevoteeBuilder builder() {
        return new DevoteeBuilder();
    }
}
