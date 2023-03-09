import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';

import {Loader} from './components/ui/UI';

import './App.scss';
import './assets/fonts/Fonts.scss';

import assignment from './assets/documents/assignment.pdf';



const Signin = React.lazy(() => import('./components/public/features/signin/Signin'));
const Private = React.lazy(() => import('./components/private/Private'));

const queryClient = new QueryClient();



const App = () => (
    <>
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={
                    <Navigate to="/signin" />
                } />
                <Route path="signin" exact element={
                    <React.Suspense fallback={<Loader />}>
                        <Signin />
                    </React.Suspense>
                } />
                <Route path="app/*" element={
                    <React.Suspense fallback={<Loader />}>
                        <Private />
                    </React.Suspense>
                } />
            </Routes>
        </QueryClientProvider>
        <footer>
            <a href={ assignment } download>Assignment description</a>
    	    <a href="mailto:developer@andreaciardi.com">Andrea Ciardi - developer@andreaciardi.com</a>
        </footer>
    </>
);

export default App;