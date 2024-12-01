import { GradeState } from '../../types';

interface GradeCalculationProps {
    state: GradeState;
}

function GradeCalculation(props: GradeCalculationProps) {
    return (
        <>
            {JSON.stringify(props.state)}
        </>
    );
}

export default GradeCalculation;
