  import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Reply from "./reply";

const ForumPostCard: React.FunctionComponent<ForumPostProps> = ({ post }) => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    getReplies();
  }, []);

  return (
    <>
    <Container>
    <div className="card" style={{ width: "75vh" }} key={String(post.id)}>
      <div className="card-body">
        <h5 className="card-title">{post.title}<span className="badge badge-success">{post.name}</span></h5>
        <h6 className="card-subtitle mb-2 text-muted">{post.username}</h6>
        <p className="card-text">{post.content}</p>
      </div>
    </div>
    {replies.map((reply) => <Reply reply={reply} />)}
    </Container>
    </>
  );

  async function getReplies() {
    let result = await fetch(`/forum/replies/${post.id}`)
    let replies = await result.json();
    setReplies(replies);
  }
};

interface ForumPostProps {
  post: {
      id: number;
    username: string;
    name: string;
    title: string;
    content: string;
    _created: Date;
  };
}

export default ForumPostCard;

