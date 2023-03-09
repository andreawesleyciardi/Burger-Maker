import React, { useLayoutEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import logo from './../../assets/images/logo.svg';

import './Private.scss';



const Editor = React.lazy(() => import('./features/editor/Editor'));



const Private = () => {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if ((localStorage.getItem("token") === '') || (localStorage.getItem("token") === null)) {
            navigate('/signin', {replace: true});
        }
    }, []);


    return (
        <>
            <header>
                HEADER
            </header>
            <main data-area="private">
                <Routes>
                    <Route path="editor" element={
                        <React.Suspense fallback={<>...</>}>
                            <Editor />
                        </React.Suspense>
                    } />
                </Routes>
            </main>
        </>
    );
}

export default Private;