import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const CommentItem = ({data} : any) => {

    const [onEdit, setOnEdit] = useState(false)
    const [text, setText] = useState(data.content)

    const handleEdit = () => {
        if(onEdit){
            setText(data.content)
        }
        setOnEdit(!onEdit)
    }

    const handleCancel = () => {
        setText(data.content)
        setOnEdit(false)
    }

    // const upComment = async () => {]    ]]
    //     setOnEdit(false)
    // }

    // const delComment = async () => {        
    // }

    return (
        <div className="comment-item animate__animated animate__fadeInLeft">
            <div className="comment-info">
                <div className="user-info">
                    <i className="fas fa-user"></i>
                    <span> user</span>
                </div>
                <div className="comment-options">
                    <i className="fas fa-edit" onClick={handleEdit}></i>
                    <i className="fas fa-trash" onClick={delComment}></i>
                </div>
            </div>
            {
                onEdit ? 
                (
                    <div className="comment-edit">
                        <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        <Button variant="primary" onClick={upComment}>Update</Button>
                        <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                    </div>
                )
                : <p>{data.content}</p>
            }
        </div>
    );
};