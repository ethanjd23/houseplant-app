import React, { KeyboardEvent, useEffect, useState } from "react";
import { CommentItem } from "./CommentItem";
import fetch from 'node-fetch';
import { Badge } from "@material-ui/core";

const ENTER = "Enter";


export const Comments = (props) => {
    const [comments, setComments] = useState([])    
    const [newCommentContent, setNewCommentContent] = useState('')

    useEffect(() => {
        getComments()
    },[])

    const handleEnter = (e: KeyboardEvent) => {
        if (e.key === ENTER && !e.shiftKey) {
            e.preventDefault()
            postComment()
        }
    };

    async function getComments() {
        let result = await fetch (`/forum/replies/${props.postid}`);
        let replies = await result.json();
        setComments(await replies);
    };

    async function postComment() {
        let newComment = {userid: props.userid, content: comments};
        $.ajax({
            method: 'POST',
            url: `/forum/replies/${props.postid}`,
            data: JSON.stringify(newComment),
            contentType: "application/json"
        }).then((response) => {
            console.log(response);
            getComments();
        })
    }


    return (
       
        <div className="forum-app">
            <div className="comment-board">
                <h1>Post your comment</h1>
                <textarea
                    placeholder="Write something to us"
                    onChange={(e) => setNewCommentContent(e.target.value)}
                    onKeyDown={handleEnter}
                    value={comments}
                ></textarea>
                <br />
                <button onClick={postComment}>Post Comment</button>
            </div>
            <div className="comments-display">
                {
                    comments.map((comment : any) => (
                        <CommentItem key={comment._id} data={comment} />
                    ))
                }
                {/* <h1><Badge color="secondary">common names</Badge></h1> */}
            </div>
        </div>
    )
}
