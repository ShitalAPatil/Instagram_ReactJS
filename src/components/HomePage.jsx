import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { Link } from "react-router-dom";
import './style.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);
 
  return (
    <div className="container">
      <h1 className="text-center">Social Media App</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <div className="card mb-4 shadow-sm">
              <img
                className="card-img-top"
                src={`https://picsum.photos/200?random=${post.id}`}
                alt=""
              />
              <div className="card-body">
              <h4 className="card-title">UserID : {post.id}</h4>
                <h5 className="card-title">Title : {post.title}</h5>
                <p className="card-text">Details : {post.body.slice(0, 100)}...</p>
                <Link to={`/item/${post.id}`}>Read More...</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;