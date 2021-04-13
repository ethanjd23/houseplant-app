import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRowsProp,
} from "@material-ui/data-grid";
import ForumPostCard from "../components/forum page/forumPostCard";
import Navbar from "../components/Navbar";
import { Button, Container } from "@material-ui/core";


const Forum2: React.FunctionComponent = () => {    
    const [posts, setPosts] = useState([]);
    const [rows, setRows] = useState([])

    const rowsTest: GridRowsProp = [
        { id: 1, username: 'Hello', plantName: 'World', created: 1, content: "idk", title: "idk" },
        { id: 2, username: 'XGrid', plantName: 'is Awesome', created: 1, content: "idk", title: "idk" },
        { id: 3, username: 'Material-UI', plantName: 'is Amazing', created: 1, content: "idk", title: "idk" },
      ];

  useEffect(() => {
      getPosts();
  }, []);

  const columns: GridColDef[] = [
    { field: "username", headerName: "Username", width: 130 },
    { field: "plantName", headerName: "Plant Name", width: 130 },
    {
      field: "created",
      headerName: "Date of Post",      
      width: 90,
    },
    {
      field: "title",
      headerName: "Title",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "content",
      headerName: "Body",
      type: "text",
    },
  ];

  return (
    <>
    <Navbar />
    <Container>
      {posts.map((post) => <ForumPostCard post={post} />)}
      <Button variant="contained" color="secondary">Make New Post</Button>
      </Container>
    </>
  );

  async function makePost() {
      let newPost = {}
      $.ajax({
          method: "POST",
          url: `/forum/posts/${post.userid}`,
          data: JSON.stringify(newPost),
          contentType: "application/json"
      }).then(response => {
          getPosts();
      }
      )
  }

  async function getPosts() {
    let postRes = await fetch(`/forum/posts/`);
    let post = await postRes.json();
    setPosts(post);
    // let postRowArray = await post.map((post) => ({
    //     id: post.id,
    //     username: post.username,
    //     plantName: post.name,
    //     created: post._created,
    //     title: post.title,
    //     content: post.content,
    //   }))
    //   console.log(postRowArray);
    // setRows(postRowArray);
    
};
}

export default Forum2;