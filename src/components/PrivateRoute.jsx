// // import React from 'react'

// // const PrivateRoute = () => {
// //   return (
// //     <div>PrivateRoute</div>
// //   )
// // }

// // export default PrivateRoute


// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router";

// const PrivateRoute = ({ children }) => {
//   const { user } = useSelector((state) => state.auth);

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default PrivateRoute;