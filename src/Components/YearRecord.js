import React, { Component, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Record from './Record'

function YearRecord() {
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
  return (
    <>
      <div>
        <h1> this is year record </h1>
        <a>2021</a><br />
        <a>2022</a>
      </div>
    </>
  );
}


export default YearRecord;
