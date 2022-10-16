import React, { useState , useEffect } from "react";
import axios from "axios";

export function DataFetch(){
    const [ posts , setPosts] = useState([]);

    useEffect(()=> {
        
axios.get("https://avish-test-api.herokuapp.com/watches")
.then((response)=> setPosts([...response.data]))
    } , []);

    return <div>
        {
            posts.map((post)=> <> <p key={posts.id}>{post.Name}</p>
            <img src={post.urlImg} ></img>
            <p>{post.description.para } </p>
            </>
            )
        }
    </div>
}