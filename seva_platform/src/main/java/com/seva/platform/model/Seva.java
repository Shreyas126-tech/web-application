package com.seva.platform.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "sevas")
public class Seva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String description;
    private BigDecimal amount;
    private boolean udupiParyayaOnly;

    public Seva() {}

    public Seva(String name, String description, BigDecimal amount, boolean udupiParyayaOnly) {
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.udupiParyayaOnly = udupiParyayaOnly;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }
    public boolean isUdupiParyayaOnly() { return udupiParyayaOnly; }
    public void setUdupiParyayaOnly(boolean udupiParyayaOnly) { this.udupiParyayaOnly = udupiParyayaOnly; }

    // Builder
    public static class SevaBuilder {
        private String name;
        private String description;
        private BigDecimal amount;
        private boolean udupiParyayaOnly;

        public SevaBuilder name(String name) { this.name = name; return this; }
        public SevaBuilder description(String description) { this.description = description; return this; }
        public SevaBuilder amount(BigDecimal amount) { this.amount = amount; return this; }
        public SevaBuilder udupiParyayaOnly(boolean udupiParyayaOnly) { this.udupiParyayaOnly = udupiParyayaOnly; return this; }

        public Seva build() {
            return new Seva(name, description, amount, udupiParyayaOnly);
        }
    }

    public static SevaBuilder builder() {
        return new SevaBuilder();
    }
}
