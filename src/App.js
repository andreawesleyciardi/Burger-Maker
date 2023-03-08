import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import './App.scss';



const Signin = React.lazy(() => import('./components/public/features/signin/Signin'));
const Private = React.lazy(() => import('./components/private/Private'));



const App = () => (
    <>
        <Routes>
            <Route path="/" exact element={
                <Navigate to="/signin" />
            } />
            <Route path="signin" element={
                <React.Suspense fallback={<></>}>
                    <Signin />
                </React.Suspense>
            } />
            <Route path="app/*" element={
                <React.Suspense fallback={<></>}>
                    <Private />
                </React.Suspense>
            } />
        </Routes>
        <footer>
            Footer
        </footer>
    </>
);

export default App;