import { Grid2, TextField } from '@mui/material';
import { FixedGradeVariables as IFixedGradeVariables } from '../../types';

interface FixedGradeVariablesProps {
    state: IFixedGradeVariables;
    setState(newState: IFixedGradeVariables): void;
}

function FixedGradeVariables(props: FixedGradeVariablesProps){
    const { state, setState } = props;
    const { finalNormalizedMean, gpa, cutoff } = state;
    return (
        <Grid2
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ marginTop: '20px' }}
            spacing={2}
        >
            <TextField
                label='Final Normalized Mean'
                type='number'
                defaultValue={finalNormalizedMean}
                onChange={(e) => {
                    const value = Number(e.target.value);
                    setState({
                        ...state,
                        finalNormalizedMean: value
                    });
                }}
            />
            <TextField
                label='Normalized Mean to GPA'
                type='number'
                defaultValue={gpa}
                onChange={(e) => {
                    const value = Number(e.target.value);
                    setState({
                        ...state,
                        gpa: value
                    });
                }}
            />
            <TextField
                label='Cutoff for 4.0'
                type='number'
                defaultValue={cutoff}
                onChange={(e) => {
                    const value = Number(e.target.value);
                    setState({
                        ...state,
                        cutoff: value
                    });
                }}
            />
        </Grid2>
    );
}

export default FixedGradeVariables;
