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
                average: 58.9,
                standardDeviation: 19.6,
                score: 74.1
            },
            {
                id: 1,
                name: 'Exam 2',
                average: 62,
                standardDeviation: 16.2,
                score: 53
            },
            {
                id: 2,
                name: 'Exam 3',
                average: 61.7,
                standardDeviation: 17.9,
                score: 81.5
            },
            {
                id: 3,
                name: 'Exam 4',
                average: 56.9,
                standardDeviation: 16.9,
                score: 70.4
            }
        ],
        fixedGradeVariables: {
            finalNormalizedMean: 0.12,
            gpa: 2.8,
            cutoff: 1.53
        }
    });

    return (
        <Slideshow>
            <GradeConfiguration
                state={state}
                setState={(newState) => setState(newState)}
            />
            <GradeCalculation
                state={state}
            />
        </Slideshow>
    );
}

export default BiocGradeCalculator;
