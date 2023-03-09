import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';

import {Loader} from './components/ui/UI';

import './App.scss';



const Signin = React.lazy(() => import('./components/public/features/signin/Signin'));
const Private = React.lazy(() => import('./components/private/Private'));

const queryClient = new QueryClient();



const App = () => {
    const isAuth = () => {
        console.log(localStorage.getItem("token"));
        return ((localStorage.getItem("token") !== '') && (localStorage.getItem("token") !== null));
    };

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" exact element={
                        <Navigate to="/signin" />
                    } />
                    <Route path="signin" exact element={
                        <React.Suspense fallback={<Loader />}>
                            <Signin />
                        </React.Suspense>
                    } />
                    <Route path="app/*" element={
                        <React.Suspense fallback={<Loader />}>
                            {/* {
                                isAuth() ? */}
                                    <Private />
                                {/* :
                                    <Navigate to="/signin" />
                            } */}
                        </React.Suspense>
                    } />
                </Routes>
            </QueryClientProvider>
            <footer>
                Footer
            </footer>
        </>
    );
};

export default App;