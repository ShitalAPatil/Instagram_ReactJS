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
