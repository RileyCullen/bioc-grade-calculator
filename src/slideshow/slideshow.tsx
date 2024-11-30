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
        <Container maxWidth='lg' sx={{ border: '1px solid red'}}>
            <Grid2
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={0}
            >
                <Button
                    disabled={currentSlide === 0}
                    onClick={() => setCurrentSlide(currentSlide - 1)}
                >
                    Back
                </Button>
                {slides[currentSlide]}
                <Button
                    disabled={currentSlide === (slides.length - 1)}
                    onClick={() => setCurrentSlide(currentSlide + 1)}
                >
                    Next
                </Button>
            </Grid2>
        </Container>
    )
}
