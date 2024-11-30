import { motion, AnimatePresence } from 'motion/react';
import Slide, { SlideProps } from './slide';

export enum SlideDirection {
    LEFT = -1,
    RIGHT = 1
}

interface AnimatedSlideProps extends SlideProps {
    direction: SlideDirection | null;
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
