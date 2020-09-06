import React, { useState, useEffect } from 'react';
import UserPost from '../UserPost/UserPost';

const Home = () => {
    const [userPosts, setUserPosts] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUserPosts(data))
    }, [])
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Posts: {userPosts.length}</h1>
            {
                userPosts.map(userPosts => <UserPost userPosts={userPosts}></UserPost>)
            }
        </div>
    );
};

export default Home;