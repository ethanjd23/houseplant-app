import React, { KeyboardEvent, useEffect, useState } from "react";
import { CommentItem } from "./comment";
import fetch from 'node-fetch';
import { Badge } from "@material-ui/core";

const ENTER = "Enter";


export const CommentChain = (props) => {
    const [comment, setComment] = useState([])    

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
        setComment(await replies);
    };

    async function postComment() {
        let newComment = {userid: props.userid, content: comment};
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
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={handleEnter}
                    value={comment}
                ></textarea>
                <br />
                <button onClick={postComment}>Post Comment</button>
            </div>
            <div className="comments-display">
                {
                    comment.map((comment : any) => (
                        <CommentItem key={comment._id} data={comment} />
                    ))
                }
                <h1><Badge color="secondary">common names</Badge></h1>
            </div>
        </div>
    )
}
