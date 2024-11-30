import { Button, Container, Grid2 } from '@mui/material';
import React, { ReactNode } from 'react';
import AnimatedSlide from './slide';
import { useSlideChange } from './use-slide-change';

interface SlideshowProps {
    /**
     * Slide content to be rendered within slideshow.
     * 
     * Each direct child constitutes a separate slide. I.e.,
     * 
     * <Slideshow>
     *    <div>Direct Child 1</div>
     *    <div>Direct Child 2</div>
     * </Slideshow>
     * 
     * will have 2 separate slides.
     */
    children: ReactNode;
    /** Disables next button from being clickable. */
    disableNext?: boolean;
}

/**
 * Component that renders one or more {@link AnimatedSlide} components.
 * 
 * Only one slide displays on the screen at a time, and next/previous slides are
 * accessible via a "Next" and "Previous" button.
 */
function Slideshow(props: SlideshowProps) {
    const { children, disableNext } = props;
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
                        disabled={disableNext || currentSlide === (slides.length - 1)}
                        onClick={() => nextSlide()}
                    >
                        Next
                    </Button>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default Slideshow;
