import React from 'react';
import {Routes, Route} from 'react-router-dom';

import logo from './../../assets/images/logo.svg';

import './Private.scss';



const Editor = React.lazy(() => import('./features/editor/Editor'));



const Private = () => {
    return (
        <>
            <header>
                HEADER
            </header>
            <main>
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