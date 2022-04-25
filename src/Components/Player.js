import React, { Component, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'Components/CSS/Player.css';
import Playerpost from 'Components/Playerpost';
import Playerpage from './Playerpage';
import Addplayer from './Addplayer';

function Player() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  //고유 값으로 사용될 ID
  const nextId = useRef(11);

  useEffect( () => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get('http://127.0.0.1:5000/api/v1/player');
      setPosts(response.data);
      setLoading(false);
    }
    fetchData();
  },[]);

  const handleSave = (data) => {
    if (data.id) {
      setPosts(
        posts.map(row => data.id === row.id ? {
          id: data.id,
          name: data.name
        } : row)
      )
    }
    else {
      console.log(data.name);
      setPosts( posts => posts.concat (
        {
          id : nextId.current,
          name: data.name
        }
      ))
      nextId.current += 1;
      console.log(posts);
    }
  }

  console.log(posts);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  return (
    <div className="Player">
      <Playerpost posts={currentPosts(posts)} loading={loading}></Playerpost>
      <Playerpage postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Playerpage>
      <Addplayer onSaveData={handleSave}></Addplayer>
    </div>
  );
}
export default Player;
