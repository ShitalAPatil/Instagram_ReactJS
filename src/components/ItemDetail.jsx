import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { useParams } from "react-router-dom";
import './details.css'

// const ItemDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchPosts(id));
//   }, [dispatch, id]);

//   const post = useSelector((state) => state.posts.posts);
//   // console.log(post)

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card mb-4 shadow-sm">
//             <img
//               className="card-img-top"
//               src={`https://picsum.photos/200?random=${post.id}`}
//               alt=""
//             />
//             <div className="card-body">
//               <h5 className="card-title">Title:{post.title}</h5>
//               <p className="card-text">Details:{post.body}</p>
//               <p className="card-text">
//                 <small className="text-muted">User ID: {post.userId}</small>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemDetail;


const ItemDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(id)); // Assuming you have a fetchPost action creator that fetches a single post based on id
  }, [dispatch, id]);

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <img
              className="card-img-top"
              src={`https://picsum.photos/200?random=${post.id}`}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Title:{post.title}</h5>
              <p className="card-text">Details:{post.body}</p>
              <p className="card-text">
                <small className="text-muted">User ID: {post.userId}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
