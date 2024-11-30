import React, { ReactNode } from 'react';

interface SlideshowProps {
    children: ReactNode;
}

export function Slideshow(props: SlideshowProps) {
    const { children } = props;
    const slides = React.Children.toArray(children);

    return (
        <>
            { slides[0] }
        </>
    )
}
