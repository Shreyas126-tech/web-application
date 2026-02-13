package com.seva.platform.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private LocalDateTime eventDate;
    private String location;
    private String type;

    public Event() {}

    public Event(String title, String description, LocalDateTime eventDate, String location, String type) {
        this.title = title;
        this.description = description;
        this.eventDate = eventDate;
        this.location = location;
        this.type = type;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public LocalDateTime getEventDate() { return eventDate; }
    public void setEventDate(LocalDateTime eventDate) { this.eventDate = eventDate; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public static class EventBuilder {
        private String title;
        private String description;
        private LocalDateTime eventDate;
        private String location;
        private String type;

        public EventBuilder title(String title) { this.title = title; return this; }
        public EventBuilder description(String description) { this.description = description; return this; }
        public EventBuilder eventDate(LocalDateTime eventDate) { this.eventDate = eventDate; return this; }
        public EventBuilder location(String location) { this.location = location; return this; }
        public EventBuilder type(String type) { this.type = type; return this; }

        public Event build() {
            return new Event(title, description, eventDate, location, type);
        }
    }

    public static EventBuilder builder() {
        return new EventBuilder();
    }
}
