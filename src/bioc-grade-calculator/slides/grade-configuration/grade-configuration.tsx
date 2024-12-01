import { CardContent, CardHeader } from '@mui/material';
import { FixedGradeVariables as IFixedGradeVariables, GradeState } from '../../types';
import GradeTable from './grade-table';
import FixedGradeVariables from './fixed-grade-variables';

interface GradeConfigurationProps {
    state: GradeState;
    setState(newState: GradeState): void; 
}

function GradeConfiguration(props: GradeConfigurationProps) {
    const { state, setState } = props
    const { gradeTableRows, fixedGradeVariables } = state;
    return (
        <>
            <CardHeader
                title='Configure Grade Calculation'
                subheader='Please enter the grade information and fixed variables below.'
            />
            <CardContent>
                <GradeTable
                    rows={gradeTableRows}
                    setTableRows={(rows) => setState({
                        ...state,
                        gradeTableRows: rows
                    })}
                />
                <FixedGradeVariables
                    state={fixedGradeVariables}
                    setState={(newState: IFixedGradeVariables) => setState({
                        ...state,
                        fixedGradeVariables: newState
                    })}
                />
            </CardContent>
        </>
    );
}

export default GradeConfiguration;
