import { CardContent, CardHeader } from '@mui/material';
import { GradeState } from '../../types';
import GradeTable from './grade-table';

interface GradeConfigurationProps {
    state: GradeState;
    setState(newState: GradeState): void; 
}

function GradeConfiguration(props: GradeConfigurationProps) {
    const { state, setState } = props
    return (
        <>
            <CardHeader
                title='Configure Grade Calculation'
                subheader='Please enter the grade information and fixed variables below.'
            />
            <CardContent>
                <GradeTable
                    rows={state.gradeTableRows}
                    setTableRows={(rows) => setState({
                        ...state,
                        gradeTableRows: rows
                    })}
                />
            </CardContent>
        </>
    );
}

export default GradeConfiguration;
