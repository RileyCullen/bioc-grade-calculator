import { Card, Container, Grid2 } from '@mui/material';
import { ReactNode } from 'react';

export interface SlideProps {
    children: ReactNode;
}

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
                <Card sx={{ width: '100%', height: '85vh' }}>
                    { children }
                </Card>
            </Grid2>
        </Container>
    );
}

export default Slide;
