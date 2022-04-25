import React, { Component, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Record from './Record'

function Overall() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect( () => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setPosts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  console.log(posts);

  // 승무패 개수 세기
  let win = 0, draw = 0, lose = 0;
  for (var i=0; i<posts.length; i++) {
    if (posts[i].id %2 == 1) {
      win++;
    }
    else {
      lose++;
    }
   // console.log(win, draw, lose);
  }
  
  return(
    <>
      <h1>역대 기록</h1>
      <p>승: {win} 무: {draw} 패: {lose}</p>
    </>
  );
}

export default Overall;
