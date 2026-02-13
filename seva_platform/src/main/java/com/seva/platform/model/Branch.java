package com.seva.platform.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Branch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String phoneNumber;
    private Double latitude;
    private Double longitude;

    public Branch() {}

    public Branch(String name, String address, String phoneNumber, Double latitude, Double longitude) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
    public Double getLatitude() { return latitude; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }
    public Double getLongitude() { return longitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }

    public static class BranchBuilder {
        private String name;
        private String address;
        private String phoneNumber;
        private Double latitude;
        private Double longitude;

        public BranchBuilder name(String name) { this.name = name; return this; }
        public BranchBuilder address(String address) { this.address = address; return this; }
        public BranchBuilder phoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; return this; }
        public BranchBuilder latitude(Double latitude) { this.latitude = latitude; return this; }
        public BranchBuilder longitude(Double longitude) { this.longitude = longitude; return this; }

        public Branch build() {
            return new Branch(name, address, phoneNumber, latitude, longitude);
        }
    }

    public static BranchBuilder builder() {
        return new BranchBuilder();
    }
}
