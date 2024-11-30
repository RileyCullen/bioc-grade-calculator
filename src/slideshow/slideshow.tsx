import { Button, Container, Grid2 } from '@mui/material';
import React, { ReactNode } from 'react';
import AnimatedSlide from './slide/animated-slide';
import { useSlideChange } from './use-slide-change';

interface SlideshowProps {
    children: ReactNode;
}

export function Slideshow(props: SlideshowProps) {
    const { children } = props;
    const slides = React.Children.toArray(children);
    const {
        currentSlide,
        slideDirection,
        nextSlide,
        previousSlide
    } = useSlideChange(0);

    return (
        <Container maxWidth='lg' sx={{ height: '95vh', marginTop: '15px' }}>
            <Grid2
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={3}
            >
                <AnimatedSlide
                    direction={slideDirection}
                    slideId={`slide-number-${currentSlide}`}
                >
                    {slides[currentSlide]}
                </AnimatedSlide>
                <Grid2
                    container
                    spacing={2}
                >
                    <Button
                        variant='contained'
                        color='primary'
                        disabled={currentSlide === 0}
                        onClick={() => previousSlide()}
                    >
                        Back
                    </Button>
                    <Button
                        variant='contained'
                        color='primary'
                        disabled={currentSlide === (slides.length - 1)}
                        onClick={() => nextSlide()}
                    >
                        Next
                    </Button>
                </Grid2>
            </Grid2>
        </Container>
    )
}
