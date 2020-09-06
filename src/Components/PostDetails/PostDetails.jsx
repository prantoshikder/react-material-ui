import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Commends from '../Commends/Commends';

const PostDetails = () => {
    
    const {postId} = useParams();
    const [postDetails, setDetailsPost] = useState({});
    const { id, title, body } = postDetails;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetailsPost(data))
    }, [])


    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    const [profileImage, setProfileImage] = useState([])
    useEffect(() =>{
        const url = `https://randomuser.me/api/`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProfileImage(data.results[0].picture.large))
    },[])

    const detailStyle = {
        textAlign: 'center'
    }
    return (
        <div style={detailStyle}>
            <h1>Post details: {postId}</h1>
            <h1>Title</h1>
            <h4>{title}</h4>
            <img src={profileImage} alt="" style={{width: '200px', hight: '200px', borderRadius: '50%', marginBottom: '10px'}}/>
            {
                comments.map(comment => <Commends comment={comment}></Commends>)
            }
        </div>
    );
};

export default PostDetails;