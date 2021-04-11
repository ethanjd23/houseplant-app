import React, {useEffect, useState} from "react";
import fetch from 'node-fetch'


const forumReply: React.FunctionComponent<forumReplyProps> = (props) => {
    const [ reply, setReply ] = useState([]);
   
    useEffect (() => {
        fetch (`/forum/replies${props.postid}`)
        .then((res) => res.json())
        .then((allReplies) => setReply(allReplies));
    }, []);
  return (
    <>
      <h1>House Plants</h1>

  {
  reply.map((reply) => (
    <div className="col-md-6" key={`content-card-${reply.userid}`}>
      <div className="card shadow my-2">
        <div className="card-body">
          <h4 className="card-title">{reply.content}</h4>
          <p className="card-subtitle text-muted">
            {" "}
             {reply._created}
          </p>
        </div>
      </div>
    </div>
  ))
  };
    </>
  );
};

interface forumReplyProps {
  postid: number;
}

  

export default forumReply;
