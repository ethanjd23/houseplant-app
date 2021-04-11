import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import fetch from 'node-fetch';
import ForumPost, { ForumPostProps } from './ForumPost';
import Reply from './Reply';

const ForumDetails: React.FunctionComponent<ForumDetailsProps> = (props) => {
    const [post, setPost] = useState ({});
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        getPost();
        getReplies();
    }, []);

    return (
        <>
            <ForumPost post={post} />
            {replies.map(reply => <Reply reply={reply} />)}
        </>
    )

    async function getPost() {
        let postRes = await fetch(`/forum/posts/${props.match.params.postid}`);
        let [post] = await postRes.json();
        setPost(post);
    }

    async function getReplies() {
        let repliesRes = await fetch(`/forum/replies/${props.match.params.postid}`);
        setReplies(await repliesRes.json());
    }
}

interface ForumDetailsProps extends RouteComponentProps {
    postid: number;
}

export default ForumDetails
