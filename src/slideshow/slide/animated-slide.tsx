import { motion, AnimatePresence } from 'motion/react';
import Slide, { SlideProps } from './slide';

/**
 * Represents direction of the slide.
 * 
 * {@link variants} code below is coupled to the value of this enum so do not
 * change!
 */
export enum SlideDirection {
    LEFT = -1,
    RIGHT = 1
}

interface AnimatedSlideProps extends SlideProps {
    /** Direction of slide animation. */
    direction: SlideDirection | null;
    /**
     * Unique ID to represent the slide. This is needed for motion to know when
     * to animate items if still in the DOM.
     */
    slideId: string;
};

const variants = {
    enter: (direction: SlideDirection) => {
        return {
            zIndex: 0,
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: SlideDirection) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};
  
/** Wrapper around {@link Slide} component that provides animation. */
function AnimatedSlide(props: AnimatedSlideProps) {
    const { children, direction, slideId } = props

    return (
        <AnimatePresence initial={false} custom={direction} mode='popLayout'>
            <motion.div
                key={slideId}
                custom={direction}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                style={{ width: '100%' }}
            >
                <Slide>
                    {children}
                </Slide>
            </motion.div>
        </AnimatePresence>
    );
}

export default AnimatedSlide;
