import React from "react";

const Reply: React.FunctionComponent<ReplyProps> = ({ reply }) => {
  return (
  <>
  <div className="card" style={{  width: "50vh", marginLeft: "5rem" }} key={String(reply.id)}>
      <div className="card-body">
        <h5 className="card-title">{reply.username}</h5>
        <p className="card-text">{reply.content}</p>
        <h6 className="card-subtitle mb-2 text-muted">{reply._created}</h6>
      </div>
    </div>
  </>
  );
};

interface ReplyProps {
  reply: {
    id: number;
    userid: number;
    content: string;
    _created: Date;
    username: string;
  };
}

export default Reply;