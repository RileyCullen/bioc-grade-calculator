import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BiocGradeCalculator from './bioc-grade-calculator';
import { MathJaxContext } from 'better-react-mathjax';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MathJaxContext>
            <BiocGradeCalculator />
        </MathJaxContext>
    </StrictMode>,
);
