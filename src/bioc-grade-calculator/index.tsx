import Slideshow from '../slideshow';
import GradeConfiguration from './slides/grade-configuration/grade-configuration';
import GradeCalculation from './slides/grade-calculation/grade-calculation';
import { GradeState } from './types';
import { useState } from 'react';

function BiocGradeCalculator() {
    // TODO: Should we define initial state outside of component?
    const [state, setState] = useState<GradeState>({
        gradeTableRows: [
            {
                id: 0,
                name: 'Exam 1',
                average: 0,
                standardDeviation: 0,
                score: 0
            },
            {
                id: 1,
                name: 'Exam 2',
                average: 0,
                standardDeviation: 0,
                score: 0
            },
            {
                id: 2,
                name: 'Exam 3',
                average: 0,
                standardDeviation: 0,
                score: 0
            },
            {
                id: 3,
                name: 'Exam 4',
                average: 0,
                standardDeviation: 0,
                score: 0
            }
        ]
    });

    return (
        <Slideshow>
            <GradeConfiguration
                state={state}
                setState={(newState) => setState(newState)}
            />
            <GradeCalculation />
        </Slideshow>
    );
}

export default BiocGradeCalculator;
