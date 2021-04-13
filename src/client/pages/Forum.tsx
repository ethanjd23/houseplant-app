
// import React, { useEffect, useState, Component } from 'react';
// import { RouteComponentProps } from 'react-router-dom';
// import fetch from 'node-fetch';
// import ForumPost from '../components/forum page/forumPostCard';
// import Reply from '../components/forum page/reply';
// import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
// import { Comments } from '../components/forum page/Comments';

// const Forum: React.FunctionComponent<RouteComponentProps> = ({match}) => {
//   return (
//     <>
    
//     <Comments postid={match.params.userid} /> 
//     {/* Gets all the comments */}    
//     </>
//   );
// }

// const ForumDetails: React.FunctionComponent<RouteComponentProps> = (props) => {
//     const [post, setPost] = useState ({});
//     const [replies, setReplies] = useState([]);

//     useEffect(() => {
//         getPost();
//         getReplies();
//     }, []);

//     return (
//         <>
//             <ForumPost post={post} />
//             {replies.map(reply => <Reply reply={reply} />)}
//         </>
//     )

//     async function getPost() {
//         let postRes = await fetch(`/forum/posts/${props.match.params.postid}`);
//         let [post] = await postRes.json();
//         setPost(post);
//     }

//     async function getReplies() {
//         let repliesRes = await fetch(`/forum/replies/${props.match.params.postid}`);
//         setReplies(await repliesRes.json());
//     }
// }

// interface ForumDetailsProps extends RouteComponentProps {
//     postid: number;
// }

// const forumPage: React.FunctionComponent = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         getPosts();
//     }, [])    

//     return (
//         <>
//             <h1>Test Forun</h1>
//             {posts.map(post => <ForumPost post={post} />)}
//         </>
//     )


//     async function getPosts() {
//         let postsRes = await fetch("/forum/posts");
//         setPosts(await postsRes.json());
//     }
// }

// // React.createElement("nav", { class: "navbar navbar-expand-lg navbar-light bg-light" },
// //     React.createElement("a", { class: "navbar-brand", href: "#" }, "HousePlant"),
// //     React.createElement("button", { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation" },
// //         React.createElement("span", { class: "navbar-toggler-icon" })),
// //     React.createElement("div", { class: "collapse navbar-collapse", id: "navbarNav" },
// //         React.createElement("ul", { class: "navbar-nav" },
// //             React.createElement("li", { class: "nav-item active" },
// //                 React.createElement("a", { class: "nav-link", href: "#" },
// //                     "Home ",
// //                     React.createElement("span", { class: "sr-only" }, "(current)"))),
// //             React.createElement("li", { class: "nav-item" },
// //                 React.createElement("a", { class: "nav-link", href: "#" }, "Forum")),
// //             React.createElement("li", { class: "nav-item" },
// //                 React.createElement("a", { class: "nav-link", href: "#" }, "Schedule")),
// //             React.createElement("li", { class: "nav-item" },
// //                 React.createElement("a", { class: "nav-link disabled", href: "#" }, "Disabled")))));

//     //             React.createElement("table", { class: "table table-hover" },
//     // React.createElement("thead", null,
//     //     React.createElement("tr", null,
//     //         React.createElement("th", { scope: "col" }, "#"),
//     //         React.createElement("th", { scope: "col" }, "Name"),
//     //         React.createElement("th", { scope: "col" }, "Subject"),
//     //         React.createElement("th", { scope: "col" }, "Username"))),
//     // React.createElement("tbody", null,
//     //     React.createElement("tr", null,
//     //         React.createElement("th", { scope: "row" }, "1"),
//     //         React.createElement("td", null, "Name"),
//     //         React.createElement("td", null, "Plants"),
//     //         React.createElement("td", null, "@plants")),
//     //     React.createElement("tr", null,
//     //         React.createElement("th", { scope: "row" }, "2"),
//     //         React.createElement("td", null, "Name"),
//     //         React.createElement("td", null, "big plant"),
//     //         React.createElement("td", null, "@bigplant")),
//     //     React.createElement("tr", null,
//     //         React.createElement("th", { scope: "row" }, "3"),
//     //         React.createElement("td", { colspan: "2" }, "Name"),
//     //         React.createElement("td", null, "little plant"),
//     //         React.createElement("td", null, "@littlename"))));

    

// const columns: ColDef[] = [
//   { field: 'Username', headerName: 'Username', width: 130 },
//   { field: 'Plant Name', headerName: 'Plant Name', width: 130 },
//   {
//     field: 'Date of Post',
//     headerName: 'Date of Post',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'Post',
//     headerName: 'Post',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: ValueGetterParams) =>
//       `${params.getValue('Username') || ''} ${params.getValue('Plant Name') || ''}`,
//   },
// ];

// // const rows = [
// //   { id: 1, plantName: plantid , username: userid, dateofPost: 1 },
// //   { id: 2, plantName: plantid, username: userid, dateofPost: 1 },
// //   { id: 3, plantName: plantid, username: userid, dateofPost: 1},
// //   { id: 4, plantName: plantid, username: userid, dateofPost: 1 },
// //   { id: 5, plantName: plantid, username: userid, dateofPost: 1 },
// //   { id: 6, plantName: plantid, username: userid, dateofPost: 1},
// //   { id: 7, plantName: plantid, username: userid, dateofPost: 1 },
// //   { id: 8, plantName: plantid, username: userid, dateofPost: 1},
// //   { id: 9, plantName: plantid, username: userid, dateofPost: 1 },
// // ];

// // export function DataTable() {
// //   return (
// //     <div style={{ height: 400, width: '100%' }}>
// //       <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
// //     </div>
// //   );
// // }

// async function getUser() {
//     let postsRes = await fetch("/forum/userid");
//     setUser(await postsRes.json());
// }

// async function getPlant() {
//     let postsRes = await fetch("/forum/postid");
//     setPlant(await postsRes.json());
// }

// interface ForumPostProps {
//   post: {
//       id: number;
//     userid: number;
//     plantid: number;
//     title: string;
//     content: string;
//     _created: Date;
//   };
// }

// export default Forum;