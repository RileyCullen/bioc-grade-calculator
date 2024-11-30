import Slideshow from '../slideshow';
import GradeConfiguration from './slides/grade-configuration/grade-configuration';
import GradeCalculation from './slides/grade-calculation/grade-calculation';
import { GradeState, GradeTableRow } from './types';
import { useState } from 'react';

const INITIAL_TABLE_ROWS = Object.freeze([
    {
        id: 0,
        name: 'Exam 1',
        average: 0,
        standardDeviation: 0,
        score: 0,
        zScore: 0
    },
    {
        id: 0,
        name: 'Exam 2',
        average: 0,
        standardDeviation: 0,
        score: 0,
        zScore: 0
    },
    {
        id: 0,
        name: 'Exam 3',
        average: 0,
        standardDeviation: 0,
        score: 0,
        zScore: 0
    },
    {
        id: 0,
        name: 'Exam 4',
        average: 0,
        standardDeviation: 0,
        score: 0,
        zScore: 0
    }
]);

function BiocGradeCalculator() {
    const [state, setState] = useState<GradeState>({
        gradeTableRows: [
            {
                name: 'Exam 1',
                average: 0,
                standardDeviation: 0,
                score: 0,
                zScore: 0
            },
            {
                name: 'Exam 2',
                average: 0,
                standardDeviation: 0,
                score: 0,
                zScore: 0
            },
            {
                name: 'Exam 3',
                average: 0,
                standardDeviation: 0,
                score: 0,
                zScore: 0
            },
            {
                name: 'Exam 4',
                average: 0,
                standardDeviation: 0,
                score: 0,
                zScore: 0
            }
        ]
    });

    return (
        <Slideshow>
            <GradeConfiguration
                state={state}
                setState={() => { }}
            />
            <GradeCalculation />
        </Slideshow>
    );
}

export default BiocGradeCalculator;
