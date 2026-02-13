package com.seva.platform.controller;

import com.seva.platform.model.RoomBooking;
import com.seva.platform.repository.RoomBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "*")
public class RoomBookingController {

    @Autowired
    private RoomBookingRepository roomBookingRepository;

    @PostMapping("/book")
    public RoomBooking bookRoom(@RequestBody RoomBooking booking) {
        booking.setStatus("REQUESTED");
        return roomBookingRepository.save(booking);
    }

    @GetMapping("/my-bookings/{email}")
    public List<RoomBooking> getMyBookings(@PathVariable String email) {
        // Simple implementation for demo
        return roomBookingRepository.findAll().stream()
                .filter(b -> b.getEmail().equalsIgnoreCase(email))
                .toList();
    }
}
