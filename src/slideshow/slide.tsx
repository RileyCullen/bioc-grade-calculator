import { ReactNode } from 'react';

export interface SlideProps {
    children: ReactNode;
}

function Slide(props: SlideProps) {
    const { children } = props;
    return (
        <>
            { children }
        </>
    );
}

export default Slide;
