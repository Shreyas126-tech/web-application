package com.seva.platform.config;

import com.seva.platform.model.*;
import com.seva.platform.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(NewsArticleRepository newsRepo, 
                                   PeetadhipathiRepository peethaRepo, 
                                   SevaRepository sevaRepo) {
        return args -> {
            // Seed News
            if (newsRepo.count() == 0) {
                newsRepo.saveAll(List.of(
                    NewsArticle.builder().title("Paryaya Mahotsava 2026").content("Grand celebrations at Udupi Sode Matha.").publishedAt(LocalDateTime.now()).flashUpdate(true).build(),
                    NewsArticle.builder().title("New Goshala Inauguration").content("Our new goshala is open for devotees.").publishedAt(LocalDateTime.now().minusDays(1)).flashUpdate(false).build(),
                    NewsArticle.builder().title("Vadiraja Aaradhane Details").content("Schedule for the upcoming Aaradhane.").publishedAt(LocalDateTime.now().minusDays(2)).flashUpdate(true).build()
                ));
            }

            // Seed Peetadhipathis (Parampara)
            if (peethaRepo.count() == 0) {
                peethaRepo.saveAll(List.of(
                    Peetadhipathi.builder()
                        .name("Sri Vishnu Teertharu")
                        .peetarohanaOrder(1)
                        .biography("Founder of the Sode Sri Vadiraja Matha parampara.")
                        .poorvashramaName("N/A")
                        .aaradhane("N/A")
                        .build(),
                    Peetadhipathi.builder()
                        .name("Sri Vadiraja Teertharu")
                        .peetarohanaOrder(20) // Simplified order for demo
                        .biography("Great saint and scholar who renovated the Udupi Krishna Temple.")
                        .aaradhane("Phalguna Bahula Dwitiya")
                        .keyWorks("Yukti Mallika, Rukminisha Vijaya")
                        .build()
                ));
            }

            // Seed Sevas
            if (sevaRepo.count() == 0) {
                sevaRepo.saveAll(List.of(
                    Seva.builder().name("Sarva Seva").description("Complete seva package").amount(new BigDecimal("5001")).build(),
                    Seva.builder().name("Pushpalankara").description("Flower decoration").amount(new BigDecimal("1001")).build(),
                    Seva.builder().name("Annadana").description("Food distribution").amount(new BigDecimal("2001")).build()
                ));
            }

            // Seed Events
            // Note: need to inject repos or use a different approach. I'll use a single bean for simplicity.
        };
    }

    @Bean
    CommandLineRunner initPlatformData(EventRepository eventRepo, 
                                       MediaRepository mediaRepo, 
                                       ArtefactRepository artefactRepo, 
                                       BranchRepository branchRepo) {
        return args -> {
            if (eventRepo.count() == 0) {
                eventRepo.saveAll(List.of(
                    Event.builder().title("Maha Shivarathri").description("Special prayers at Sode.").eventDate(LocalDateTime.now().plusDays(10)).type("Festival").build(),
                    Event.builder().title("Vadiraja Jayanthi").description("Jayanthi celebrations.").eventDate(LocalDateTime.now().plusDays(20)).type("Utsava").build()
                ));
            }

            if (mediaRepo.count() == 0) {
                mediaRepo.saveAll(List.of(
                    Media.builder().title("Temple Entrance").url("https://example.com/gate.jpg").type("IMAGE").album("General").build(),
                    Media.builder().title("Pooja Video").url("https://example.com/pooja.mp4").type("VIDEO").album("Rituals").build()
                ));
            }

            if (artefactRepo.count() == 0) {
                artefactRepo.saveAll(List.of(
                    Artefact.builder().title("Yukti Mallika").category("Reference").fileUrl("https://example.com/yukti.pdf").fileType("PDF").build(),
                    Artefact.builder().title("Evening Bhajans").category("Pravachana").fileUrl("https://example.com/audio.mp3").fileType("AUDIO").build()
                ));
            }

            if (branchRepo.count() == 0) {
                branchRepo.saveAll(List.of(
                    Branch.builder().name("Udupi Branch").address("Near Krishna Temple, Udupi").latitude(13.3409).longitude(74.7421).build(),
                    Branch.builder().name("Bangalore Branch").address("Basavanagudi, Bangalore").latitude(12.9407).longitude(77.5738).build()
                ));
            }
        };
    }
}
