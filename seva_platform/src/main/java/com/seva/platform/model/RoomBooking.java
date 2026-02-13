package com.seva.platform.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;

@Entity
public class RoomBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String devoteeName;
    private String email;
    private String mobileNumber;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private Integer numberOfRooms;
    private String status;

    public RoomBooking() {}

    public RoomBooking(String devoteeName, String email, String mobileNumber, LocalDate checkInDate, LocalDate checkOutDate, Integer numberOfRooms, String status) {
        this.devoteeName = devoteeName;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.numberOfRooms = numberOfRooms;
        this.status = status;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getDevoteeName() { return devoteeName; }
    public void setDevoteeName(String devoteeName) { this.devoteeName = devoteeName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }
    public LocalDate getCheckInDate() { return checkInDate; }
    public void setCheckInDate(LocalDate checkInDate) { this.checkInDate = checkInDate; }
    public LocalDate getCheckOutDate() { return checkOutDate; }
    public void setCheckOutDate(LocalDate checkOutDate) { this.checkOutDate = checkOutDate; }
    public Integer getNumberOfRooms() { return numberOfRooms; }
    public void setNumberOfRooms(Integer numberOfRooms) { this.numberOfRooms = numberOfRooms; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public static class RoomBookingBuilder {
        private String devoteeName;
        private String email;
        private String mobileNumber;
        private LocalDate checkInDate;
        private LocalDate checkOutDate;
        private Integer numberOfRooms;
        private String status;

        public RoomBookingBuilder devoteeName(String devoteeName) { this.devoteeName = devoteeName; return this; }
        public RoomBookingBuilder email(String email) { this.email = email; return this; }
        public RoomBookingBuilder mobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; return this; }
        public RoomBookingBuilder checkInDate(LocalDate checkInDate) { this.checkInDate = checkInDate; return this; }
        public RoomBookingBuilder checkOutDate(LocalDate checkOutDate) { this.checkOutDate = checkOutDate; return this; }
        public RoomBookingBuilder numberOfRooms(Integer numberOfRooms) { this.numberOfRooms = numberOfRooms; return this; }
        public RoomBookingBuilder status(String status) { this.status = status; return this; }

        public RoomBooking build() {
            return new RoomBooking(devoteeName, email, mobileNumber, checkInDate, checkOutDate, numberOfRooms, status);
        }
    }

    public static RoomBookingBuilder builder() {
        return new RoomBookingBuilder();
    }
}
