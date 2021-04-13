import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams, GridRowsProp } from '@material-ui/data-grid';

const Forum2: React.FunctionComponent = () => {
    const [posts, setPosts] = useState([])
    const rows: GridRowsProp = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'XGrid', col2: 'is Awesome' },
        { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
      ];
      
      const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
      ];

    useEffect(() => {
        getPosts();
    }, [])


    return (
        
    )



    async function getPosts() {        
        let postRes = await fetch(`/forum/posts/`);
        let post = await postRes.json();
        setPosts(post);
        
    }
}

export default Forum2
