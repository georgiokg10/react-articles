// import React, { useState, useEffect, useContext } from "react";
// import LifeCycleArts from "../LifeCycleArts/LifeCycleArts";
// import PopularArticles from "../PopularArticles/PopularArticles";
// import RandomArticle from "../RandomArticle/RandomArticle";
// import axios from "axios";
// import { endpoints } from "../../endpoints/endpoints";
// import { Spinner } from "react-bootstrap";

// const LifeCycle = () => {
//   const [videos, setVideosData] = React.useState([]);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [error, setError] = React.useState(null);

//   const fetchArticles = async () => {
//     axios
//       .get(endpoints.getLifeCycleArts)
//       .then((response) => {
//         setVideosData(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setIsLoading(true);
//       });
//   };

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   return (
//     <>
//       {isLoading && (
//         <div className="loader">
//           <Spinner animation="border" variant="primary" />
//           <div>Loading...</div>
//         </div>
//       )}
//       <div className="articles-overflow">
//         {!isLoading && <LifeCycleArts videos={videos} />}
//         <PopularArticles videos={videos} />
//         <RandomArticle videos={videos} />
//       </div>
//     </>
//   );
//   // return <div className="content">LifeCycle News</div>;
// };

// export default LifeCycle;
import React from "react";

const LifeCycle = () => {
  return <div className="content">Life Cycles</div>;
};

export default LifeCycle;
