import React from 'react';
import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from './pages/Post/Post';
import PostItem from './pages/PostItem/PostItem';

function App() {
    return (
        <div className="App">
            <header>

            </header>

            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Post />} />
                        <Route path='/post/:id' element={<PostItem />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
