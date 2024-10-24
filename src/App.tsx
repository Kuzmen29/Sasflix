import React, { useEffect } from 'react';
import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostItem from './pages/PostItem/PostItem';
import Header from './components/Header/Header';
import Posts from './pages/Posts/Posts';
import useActions from './hooks/useActions';
import { IPostsResponse } from './types';

function App() {
    
    const {getPosts} = useActions();

    useEffect(() => {
        (async () => {
            let response = await fetch('https://dummyjson.com/posts?limit=5');
            let posts: IPostsResponse = await response.json();
            getPosts(posts.posts);
        })()
    }, [])


    return (
        <div className="App">

            <Header />

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
