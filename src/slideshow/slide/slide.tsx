import { Card, Container, Grid2 } from '@mui/material';
import { ReactNode } from 'react';

export interface SlideProps {
    /** Components to render within {@link Card} element. */
    children: ReactNode;
}

/** Wrapper around card component that centers content within slideshow. */
function Slide(props: SlideProps) {
    const { children } = props;

    return (
        <Container maxWidth='md' sx={{ height: '85vh' }}>
            <Grid2
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                <Card sx={{ width: '100%', height: '85vh', overflow: 'auto' }}>
                    { children }
                </Card>
            </Grid2>
        </Container>
    );
}

export default Slide;
