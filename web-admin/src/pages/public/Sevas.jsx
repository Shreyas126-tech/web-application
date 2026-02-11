import React from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

const Sevas = () => {
    const sevas = [
        { id: 1, name: 'Alankara Seva', price: '₹ 500', description: 'Special decoration for the deity.' },
        { id: 2, name: 'Pooja Seva', price: '₹ 200', description: 'Daily pooja offering.' },
        { id: 3, name: 'Annadana Seva', price: '₹ 1000', description: 'Serving food to devotees.' },
    ];

    return (
        <Container maxWidth="lg">
            <Typography variant="h3" gutterBottom sx={{ py: 4 }}>Online Sevas</Typography>
            <Grid container spacing={3}>
                {sevas.map((seva) => (
                    <Grid item xs={12} md={4} key={seva.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">{seva.name}</Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">{seva.price}</Typography>
                                <Typography variant="body2">{seva.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained">Book Now</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Sevas;
