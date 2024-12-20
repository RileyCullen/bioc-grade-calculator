import { useState } from 'react';
import { SlideDirection } from './slide/animated-slide';

/**
 * Utility hook that syncs the current slide as well as the direction of the 
 * change.
 */
export function useSlideChange(initialValue: number) {
    const [ currentSlide, setCurrentSlide ] = useState(initialValue);
    const [ slideDirection, setSlideDirection ] = useState<SlideDirection | null>(null);
    return {
        currentSlide,
        slideDirection,
        nextSlide() {
            setCurrentSlide(currentSlide + 1);
            setSlideDirection(SlideDirection.RIGHT);
        },
        previousSlide() {
            setCurrentSlide(currentSlide - 1);
            setSlideDirection(SlideDirection.LEFT);
        }
    };
}
