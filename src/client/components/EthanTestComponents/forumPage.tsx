import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import ForumPost from './ForumPost';

const forumPage: React.FunctionComponent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, [])    

    return (
        <>
            <h1>Test Forun</h1>
            {posts.map(post => <ForumPost post={post} />)}
        </>
    )


    async function getPosts() {
        let postsRes = await fetch("/forum/posts");
        setPosts(await postsRes.json());
    }
}

export default forumPage
