import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';

const galleryItems = [
    {
        id: 1,
        caption: "Sri Vishwavallabha Thirtha Swamiji of Sri Sode Vadiraja Matha participated in the holy rituals of Murajapa and Lakshadeepothsava",
        image: "https://placehold.co/600x400?text=Murajapa+Rituals" // Placeholder
    },
    {
        id: 2,
        caption: "ಶ್ರೀ ವಿಶ್ವವಲ್ಲಭ ತೀರ್ಥರಿಂದ ತಿರುಮಲ ಶ್ರೀನಿವಾಸ ದೇವರ ದರ್ಶನ",
        image: "https://placehold.co/600x400?text=Tirumala+Darshan"
    },
    {
        id: 3,
        caption: "ಉಂಡಾರು ಶ್ರೀವಿಷ್ಣುಮೂರ್ತಿ ದೇವಸ್ಥಾನದಲ್ಲಿ ಕಾರ್ತಿಕ ದೀಪೋತ್ಸವ",
        image: "https://placehold.co/600x400?text=Karthika+Deepotsava"
    },
    {
        id: 4,
        caption: "ಬಿಚ್ಹಾಲೆ ಜಪದಕಟ್ಟೆ ಶ್ರೀರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಗಳ ಸನ್ನಿಧಿ",
        image: "https://placehold.co/600x400?text=Bichale+Japadakatte"
    },
    {
        id: 5,
        caption: "ಶ್ರೀರಾಘವೇಂದ್ರ ಸ್ವಾಮಿಗಳು ಹನ್ನೆರಡು ವರ್ಷ ತಪಸ್ಸು ಮಾಡಿ ಪಂಚಮುಖಿ ಆಂಜನೇಯ ದೇವರನ್ನು ಸಾಕ್ಷಾತ್ಕರಿಸಿಕೊಂಡ ಸ್ಥಳ. ಪಂಚಮುಖಿ - ಗಾಣಧಾಳ, ರಾಯಚೂರು.",
        image: "https://placehold.co/600x400?text=Panchamukhi+Kshetra"
    },
    {
        id: 6,
        caption: "ಶ್ರೀರಘುಪ್ರೇಮ ತೀರ್ಥರ ಸನ್ನಿಧಿ, ಅಧೋನಿ",
        image: "https://placehold.co/600x400?text=Adoni+Sannidhi"
    },
    {
        id: 7,
        caption: "ಮುಜುತ್ಪ ಸೇನಾನಿಗಳಾದ ಜಂಬೂಖಂಡಿ ಶ್ರೀವಾದಿರಾಜ ಆಚಾರ್ಯರ ಬಳ್ಳಾರಿಯ ಸತ್ಯನಾರಾಯಣ ಪೇಟೆಯಲ್ಲಿರುವ ಮನೆಯಲ್ಲಿ ಶ್ರೀಭೂತರಾಜರ ವಿಶೇಷ ಪೂಜೆ ಹಾಗೂ ಸಂಸ್ಥಾನ ದೇವರ ಪೂಜೆ ನಡೆಯಿತು",
        image: "https://placehold.co/600x400?text=Special+Pooja+Bellary"
    },
    {
        id: 8,
        caption: "Sri Vishwavallabha Thirtha Swamiji inaugurated the new centre by lighting the lamp on the holy occasion of Aradhana Festival of Sri Vijayadasaru",
        image: "https://placehold.co/600x400?text=Centre+Inauguration"
    },
    {
        id: 9,
        caption: "ಹುಬ್ಬಳ್ಳಿ ಗುರುರಾಜ ಪಾದಯಾತ್ರಾ ಸಂಘದ ಹುಬ್ಬಳ್ಳಿಯಿಂದ ಸೋದೆಗೆ ನಡೆಸುವ 25ನೇ ವರ್ಷದ ಪಾದಯಾತ್ರೆಗೆ ಶ್ರೀವಿಶ್ವವಲ್ಲಭ ತೀರ್ಥರು ಚಾಲನೆ ನೀಡಿ ಹುಬ್ಬಳ್ಳಿಯಿಂದ ಛಬ್ಬಿವರೆಗೆ 18km ಪಾದಯಾತ್ರೆ ನಡೆಸಿದರು",
        image: "https://placehold.co/600x400?text=Hubli+Padayatra"
    },
    {
        id: 10,
        caption: "ಕೋಟೇಶ್ವರ ಶ್ರೀಕೋತಂಡರಾಮ ಮಂದಿರದ ಅಮೃತ ಮಹೋತ್ಸವದಲ್ಲಿ ಶ್ರೀವಿಶ್ವವಲ್ಲಭ ತೀರ್ಥರಿಂದ ಜ್ಞಾನ ಸತ್ರ ಉದ್ಘಾಟನೆ ಹಾಗೂ ರಾಮಾಯಣ ಬಾಲಕಾಂಡ ಉಪನ್ಯಾಸ",
        image: "https://placehold.co/600x400?text=Koteshwara+Event"
    }
];

const Gallery = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h3" gutterBottom sx={{ py: 4, textAlign: 'center', color: 'primary.main' }}>
                Event Gallery
            </Typography>
            <Grid container spacing={3}>
                {galleryItems.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.image}
                                alt={item.caption}
                            />
                            <CardContent sx={{ flexGrow: 1, bgcolor: 'rgba(0,0,0,0.8)', color: 'white' }}>
                                <Typography variant="body2" component="p">
                                    {item.caption}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="caption" color="text.secondary">
                    * Images are placeholders. Admin can upload actual event photos via Dashboard.
                </Typography>
            </Box>
        </Container>
    );
};

export default Gallery;
