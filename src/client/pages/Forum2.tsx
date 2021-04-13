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

  useEffect(() => {
      getPosts();
  }, []);

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
};
}

export default Forum2;