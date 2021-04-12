import React from 'react';
import { CommentItem } from '../components/forum page/comment';
import { ForumApp } from '../components/forum page/post'

function Forum() {
  return (
    <>
    <div className='forum'>
      <h1>Forum</h1>
    </div>      
    <ForumApp />
    <CommentItem />
    </>
  );
}

export default Forum;