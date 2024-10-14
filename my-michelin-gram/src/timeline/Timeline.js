import React, { useState } from 'react';
import './Timeline.css';
import Post from './posts/Post';
import Suggestions from './Suggestions';

function Timeline() {
    const [posts,setPosts] = useState([
        {
            user: 'redian_',
            postImage:
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            likes: 12,
            timestamp:'2d',
        },
        {
            user: 'johndoe',
            postImage:
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            likes: 56,
            timestamp:'3d',
        },
        {
            user: 'max',
            postImage:
            'https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00021.jpg',
            likes: 27,
            timestamp:'3d',
        },
        {
            user: 'caesar',
            postImage:
            'https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00016.jpg',
            likes: 27,
            timestamp:'3d',
        },
    ]);
    return (
        <div className="timeline">
            <div className="timeline__left">
                <div className="timeline_posts">
                    {posts.map((post) =>(
                        <Post
                            user = {post.user}
                            postImage = {post.postImage}
                            likes = {post.likes}
                            timestamp = {post.timestamp} />
                    ))}
                </div>
            </div>
            <div className="timeline__right">
                <Suggestions />
            </div>
        </div>
    );
}

export default Timeline;
