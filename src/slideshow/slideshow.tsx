import { Button, Container, Grid2 } from '@mui/material';
import React, { ReactNode, useState } from 'react';

interface SlideshowProps {
    children: ReactNode;
}

export function Slideshow(props: SlideshowProps) {
    const { children } = props;
    const slides = React.Children.toArray(children);
    const [ currentSlide, setCurrentSlide ] = useState(0);

    return (
        <Container maxWidth='lg' sx={{ height: '95vh', marginTop: '15px' }}>
            <Grid2
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={3}
            >
                <>
                    {slides[currentSlide]}
                </>
                <Grid2
                    container
                    spacing={2}
                >
                    <Button
                        variant='contained'
                        color='primary'
                        disabled={currentSlide === 0}
                        onClick={() => setCurrentSlide(currentSlide - 1)}
                    >
                        Back
                    </Button>
                    <Button
                        variant='contained'
                        color='primary'
                        disabled={currentSlide === (slides.length - 1)}
                        onClick={() => setCurrentSlide(currentSlide + 1)}
                    >
                        Next
                    </Button>
                </Grid2>
            </Grid2>
        </Container>
    )
}
