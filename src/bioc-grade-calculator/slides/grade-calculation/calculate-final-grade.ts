function calculateFinalGrade(
    averageZScore: number,
    finalNormalizedMean: number,
    gpa: number,
    cutoff: number
) {
    return (
        gpa + (4.0 - gpa) * (
            (averageZScore - finalNormalizedMean)
            / (cutoff - finalNormalizedMean)
        )
    );
}

export default calculateFinalGrade;
