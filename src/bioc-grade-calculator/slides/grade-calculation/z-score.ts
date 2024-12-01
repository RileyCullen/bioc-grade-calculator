import { GradeTableRow } from '../../types';

export interface GradeTableRowWithZScore extends GradeTableRow {
    /**
     * Z-score computed using average, standardDeviation, and score from
     * original GradeTableRow.
     */
    zScore: number;
}

function getRowsSortedByZScore(rows: GradeTableRow[]) {
    const rowsWithZScore = addZScoreToRows(rows);
    return rowsWithZScore.sort((a, b) => b.zScore - a.zScore);
}

function addZScoreToRows(rows: GradeTableRow[]): GradeTableRowWithZScore[] {
    return rows.map((row) => ({
        ...row,
        zScore: calculateZScore(row)
    }));
}

function calculateZScore(row: GradeTableRow) {
    const { score, average, standardDeviation } = row;
    return (score - average) / standardDeviation;
}

export function calculateAverageZScore(zScores: number[]) {
    const sum = zScores.reduce((partialSum, zScore) => partialSum + zScore, 0);
    return sum / zScores.length;
}

export default getRowsSortedByZScore;
