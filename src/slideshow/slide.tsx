import { Container, Grid2 } from '@mui/material';
import { ReactNode } from 'react';

export interface SlideProps {
    children: ReactNode;
}

function Slide(props: SlideProps) {
    const { children } = props;
    return (
        <Container maxWidth='md' sx={{ border: '1px solid blue' }}>
            <Grid2
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                <>
                    { children }
                </>
            </Grid2>
        </Container>
    );
}

export default Slide;
