import { Box, CardContent, CardHeader, Grid2, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { GradeState } from '../../types';
import getRowsSortedByZScore, { calculateAverageZScore, GradeTableRowWithZScore } from './z-score';
import { useMemo } from 'react';
import calculateFinalGrade from './calculate-final-grade';
import { MathJax } from 'better-react-mathjax';

interface GradeCalculationProps {
    state: GradeState;
}

function GradeCalculation(props: GradeCalculationProps) {
    const { state } = props;
    const {
        gradeTableRows,
        fixedGradeVariables: {
            finalNormalizedMean,
            gpa,
            cutoff
        }
    } = state;

    const sortedRowsWithZScore = useMemo(
        () => getRowsSortedByZScore(gradeTableRows),
        [gradeTableRows]
    );
    const topThreeZScores = sortedRowsWithZScore
        .slice(0, 3).map((row) => row.zScore);

    // Todo: Memoize?
    const averageZScore = calculateAverageZScore(topThreeZScores);
    const finalGrade = calculateFinalGrade(
        averageZScore,
        finalNormalizedMean,
        gpa,
        cutoff
    );

    return (
        <>
            <CardHeader
                title='Result'
                sx={{
                    backgroundColor: 'green',
                    color: 'white'
                }}
            />
            <CardContent>
                <Grid2
                    direction='column'
                >
                    <Box>
                        <Typography variant='body1'>
                            Your final GPA is {finalGrade.toFixed(1)}
                        </Typography>
                    </Box>
                    <CalculationBreakdown
                        rowsWithZScore={sortedRowsWithZScore}
                        averageZScore={averageZScore}
                        finalNormalizedMean={finalNormalizedMean}
                        gpa={gpa}
                        cutoff={cutoff}
                        finalGrade={finalGrade}
                    />
                </Grid2>
            </CardContent>
        </>
    );
}

interface CalculationBreakdownProps {
    rowsWithZScore: GradeTableRowWithZScore[];
    averageZScore: number;
    finalNormalizedMean: number;
    gpa: number;
    cutoff: number;
    finalGrade: number;
}

function CalculationBreakdown(props: CalculationBreakdownProps) {
    const {
        rowsWithZScore,
        averageZScore,
        finalNormalizedMean,
        gpa,
        cutoff,
        finalGrade
    } = props;

    return (
        <Box sx={{ marginTop: '15px' }}>
            <Typography variant='h6'>
                Calculation Breakdown
            </Typography>
            <Typography variant='body2'>
                Your z-scores are
            </Typography>
            {/* TODO: Break out to separate component */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell>Name</TableCell>
                        <TableCell align='right'>z-score</TableCell>
                    </TableHead>
                    <TableBody>
                        {
                            rowsWithZScore.map((row) => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell align='right'>
                                            {row.zScore.toFixed(2)}
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        <Typography variant='body2' sx={{ marginTop: '15px' }}>
            Your top 3 z-scores averaged is: 
            <MathJax inline>
                {`\\(
                    \\frac{
                        ${rowsWithZScore[0].zScore.toFixed(2)}
                        + ${rowsWithZScore[1].zScore.toFixed(2)}
                        + ${rowsWithZScore[2].zScore.toFixed(2)}
                    }{3} = ${averageZScore.toFixed(2)}\\)
                `}
            </MathJax>
        </Typography>
        <Typography variant='body2' sx={{ marginTop: '15px' }}>
            The final calculation for your grade is then: <wbr />
            <MathJax inline>
                {`\\(${gpa} + (4.0 - ${gpa}) *
                    \\frac{
                        ${averageZScore.toFixed(2)} - ${finalNormalizedMean}
                    }{
                        ${cutoff} - ${finalNormalizedMean}
                    } = ${finalGrade.toFixed(1)}
                \\)`}
            </MathJax>
        </Typography>
        </Box>
    );
}

export default GradeCalculation;
