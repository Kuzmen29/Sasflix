import React from 'react';
import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostItem from './pages/PostItem/PostItem';
import Header from './components/Header/Header';
import Posts from './pages/Posts/Posts';

function App() {
    return (
        <div className="App">

            <Header/>
            
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Posts />} />
                        <Route path='/post/:id' element={<PostItem />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
