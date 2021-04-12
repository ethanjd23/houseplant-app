import React, { useEffect, useState } from 'react';
import { CommentItem } from '../components/forum page/CommentItem';
import { Comments } from '../components/forum page/Comments'
import { RouteComponentProps } from 'react-router-dom';
import fetch from 'node-fetch';
import ForumPost from '../components/forum page/forumPostCard';
import Reply from '../components/forum page/reply';


const Forum: React.FunctionComponent<RouteComponentProps> = ({match}) => {
  return (
    <>
    
    <Comments postid={match.params.userid} /> 
    {/* Gets all the comments */}    
    </>
  );
}

const ForumDetails: React.FunctionComponent<RouteComponentProps> = (props) => {
    const [post, setPost] = useState ({});
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        getPost();
        getReplies();
    }, []);

    return (
        <>
            <ForumPost post={post} />
            {replies.map(reply => <Reply reply={reply} />)}
        </>
    )

    async function getPost() {
        let postRes = await fetch(`/forum/posts/${props.match.params.postid}`);
        let [post] = await postRes.json();
        setPost(post);
    }

    async function getReplies() {
        let repliesRes = await fetch(`/forum/replies/${props.match.params.postid}`);
        setReplies(await repliesRes.json());
    }
}

interface ForumDetailsProps extends RouteComponentProps {
    postid: number;
}

const forumPage: React.FunctionComponent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, [])    

    return (
        <>
            <h1>Test Forun</h1>
            {posts.map(post => <ForumPost post={post} />)}
        </>
    )


    async function getPosts() {
        let postsRes = await fetch("/forum/posts");
        setPosts(await postsRes.json());
    }
}

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
    userid: number;
    plantid: number;
    title: string;
    content: string;
    _created: Date;
  };
}

export default Forum;