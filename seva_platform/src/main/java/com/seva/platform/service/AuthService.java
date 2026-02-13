package com.seva.platform.service;

import com.seva.platform.model.Devotee;
import com.seva.platform.repository.DevoteeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private DevoteeRepository devoteeRepository;

    public String generateOtp(String mobileNumber) {
        // Mock OTP generation: for hackathon, let's say it's always "123456"
        return "123456";
    }

    public Optional<Devotee> verifyOtpAndLogin(String mobileNumber, String otp) {
        if ("123456".equals(otp)) {
            return devoteeRepository.findByMobileNumber(mobileNumber);
        }
        return Optional.empty();
    }

    public Devotee registerDevotee(Devotee devotee) {
        return devoteeRepository.save(devotee);
    }
    
    public Optional<Devotee> updateDevotee(Long id, Devotee details) {
        return devoteeRepository.findById(id).map(devotee -> {
            devotee.setFullName(details.getFullName());
            devotee.setEmail(details.getEmail());
            devotee.setAddress(details.getAddress());
            devotee.setGotra(details.getGotra());
            devotee.setNakshatra(details.getNakshatra());
            devotee.setVolunteerSignup(details.isVolunteerSignup());
            devotee.setDataConsent(details.isDataConsent());
            return devoteeRepository.save(devotee);
        });
    }
}
