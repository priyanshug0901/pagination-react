import React, { useState, useEffect } from 'react';
import './style.css';
import Pagination from '../src/Pagination/Pagination.js';
import Post from '../src/Posts/Posts.js';

const url = 'https://jsonplaceholder.typicode.com/posts';

export default function App() {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState('');

  // setPost(posts);
  // useEffect(() => {
  //   fetch(url)
  //     .then(response => {
  //       if (response.ok) return response.json();
  //       throw new Error('something went wrong');
  //     })
  //     .then(posts => {
  //      setPost(posts);
  //     })
  //     .catch(error => setError(error.message));
  // }, []);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          setPost(result);
        },
        error => {
          console.log(error);
        }
      );
  }, []);

  console.log(posts);
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
        <h1>No Posts to display</h1>
      )}
    </div>
  );
}
