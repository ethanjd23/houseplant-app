import React from "react";
import { Link } from "react-router-dom";

const ForumPost: React.FunctionComponent<ForumPostProps> = ({ post }) => {
  return (
    <>
      <Link to={`/test/${post.id}`} style={{ textDecoration: 'none'}}>
        <div className="card" style={{ width: "18rem" }} key={String(post.id)}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{post.userid}</h6>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export interface ForumPostProps {
  post: {
    id: number;
    userid: number;
    plantid: number;
    title: string;
    content: string;
    _created: Date;
  };
}

export default ForumPost;
