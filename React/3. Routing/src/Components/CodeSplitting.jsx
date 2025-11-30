import { lazy, Suspense } from "react";

const CodeSpBundle = lazy(() => import('./CodeSpBundle.jsx'))

export default function CodeSplitting() {
    return (
        <>
            <h2>Code Splitting</h2>
            <Suspense fallback={<div>Loading...</div>}>

            <CodeSpBundle />
            </Suspense>
        </>
        );
}