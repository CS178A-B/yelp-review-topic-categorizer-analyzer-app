import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    
    console.log(posts);

    return (
        <div>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </div>
    );
}

export default Posts;