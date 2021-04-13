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

React.createElement("nav", { class: "navbar navbar-expand-lg navbar-light bg-light" },
    React.createElement("a", { class: "navbar-brand", href: "#" }, "HousePlant"),
    React.createElement("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation" },
        React.createElement("span", { class: "navbar-toggler-icon" })),
    React.createElement("div", { class: "collapse navbar-collapse", id: "navbarNav" },
        React.createElement("ul", { class: "navbar-nav" },
            React.createElement("li", { class: "nav-item active" },
                React.createElement("a", { class: "nav-link", href: "#" },
                    "Home ",
                    React.createElement("span", { class: "sr-only" }, "(current)"))),
            React.createElement("li", { class: "nav-item" },
                React.createElement("a", { class: "nav-link", href: "#" }, "Forum")),
            React.createElement("li", { class: "nav-item" },
                React.createElement("a", { class: "nav-link", href: "#" }, "Schedule")),
            React.createElement("li", { class: "nav-item" },
                React.createElement("a", { class: "nav-link disabled", href: "#" }, "Disabled")))));

                React.createElement("table", { class: "table table-hover" },
    React.createElement("thead", null,
        React.createElement("tr", null,
            React.createElement("th", { scope: "col" }, "#"),
            React.createElement("th", { scope: "col" }, "Name"),
            React.createElement("th", { scope: "col" }, "Subject"),
            React.createElement("th", { scope: "col" }, "Username"))),
    React.createElement("tbody", null,
        React.createElement("tr", null,
            React.createElement("th", { scope: "row" }, "1"),
            React.createElement("td", null, "Name"),
            React.createElement("td", null, "Plants"),
            React.createElement("td", null, "@plants")),
        React.createElement("tr", null,
            React.createElement("th", { scope: "row" }, "2"),
            React.createElement("td", null, "Name"),
            React.createElement("td", null, "big plant"),
            React.createElement("td", null, "@bigplant")),
        React.createElement("tr", null,
            React.createElement("th", { scope: "row" }, "3"),
            React.createElement("td", { colspan: "2" }, "Name"),
            React.createElement("td", null, "little plant"),
            React.createElement("td", null, "@littlename"))));

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

