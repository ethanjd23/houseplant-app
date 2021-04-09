import React, {useEffect, useState} from "react";


const formDetails = () => {
    const [ reply, setReply ] = useState([]);
   

    useEffect (() => {
        fetch ("/replies")
        .then((res) => res.json())
        .then((allData) => setReply(allData));
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



  

export default formDetails;
