package com.sodematha.backend.config;

import com.sodematha.backend.model.NewsArticle;
import com.sodematha.backend.model.Peetadhipathi;
import com.sodematha.backend.model.Seva;
import com.sodematha.backend.repository.NewsArticleRepository;
import com.sodematha.backend.repository.PeetadhipathiRepository;
import com.sodematha.backend.repository.SevaRepository;
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
        };
    }
}
