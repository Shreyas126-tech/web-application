package com.sodematha.backend.controller;

import com.sodematha.backend.model.Devotee;
import com.sodematha.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/request-otp")
    public ResponseEntity<String> requestOtp(@RequestParam String mobileNumber) {
        String otp = authService.generateOtp(mobileNumber);
        return ResponseEntity.ok("OTP sent: " + otp);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String mobileNumber, @RequestParam String otp) {
        return authService.verifyOtpAndLogin(mobileNumber, otp)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(401).body(null));
    }

    @PostMapping("/register")
    public ResponseEntity<Devotee> register(@RequestBody Devotee devotee) {
        return ResponseEntity.ok(authService.registerDevotee(devotee));
    }
    
    @PutMapping("/profile/{id}")
    public ResponseEntity<Devotee> updateProfile(@PathVariable Long id, @RequestBody Devotee devotee) {
        return authService.updateDevotee(id, devotee)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
