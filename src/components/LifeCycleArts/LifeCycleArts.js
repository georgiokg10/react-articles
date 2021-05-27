// import React, { useState, useEffect, useContext } from "react";
// import { Card } from "react-bootstrap";
// import Button from "@material-ui/core/Button";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// // import DateRangetIcon from "@material-ui/icons/DateRange";
// // import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
// // import VisibilityIcon from "@material-ui/icons/Visibility";
// // import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

// const LifeCycleArts = ({videos}) => {
//   return (
//     videos &&
//     videos.length > 0 &&
//     videos.map((video) => {
//       return (
//         <Card className="videos-box" key={video.id}>
//           <Card.Body>
//             <Card.Subtitle className="mb-2">
//               <img src={video.video_source_url} alt="" className="videos-img" />
//             </Card.Subtitle>
//             <Button className="mt-2 mb-3 defaultBtn" variant="contained">
//               Product
//             </Button>
//             <Card.Title>{video.title}</Card.Title>
//             {/* <div className="align-icons mt-2 mb-2">
//               <div className="mr-4" role="button">
//                 <DateRangetIcon />
//                 <span className="ml-2">
//                   {new Date(video?.published_at).toLocaleDateString()}
//                 </span>
//               </div>
//               <div className="mr-4" role="button">
//                 <QuestionAnswerIcon />
//                 <span className="ml-2">{video?.comments_count}</span>
//               </div>
//               <div className="mr-4" role="button">
//                 <VisibilityIcon />
//                 <span className="ml-2">{video?.comments_count}</span>
//               </div>
//               <div className="mr-4" role="button">
//                 <ThumbUpAltIcon />
//                 <span className="ml-2">{video?.positive_reactions_count}</span>
//               </div>
//             </div> */}
//             <Card.Text>{video.description}</Card.Text>
//             <div className="video-details-nav-btn">
//               <span>READ MORE</span>
//               <KeyboardArrowRightIcon className="mb-1" />
//             </div>
//           </Card.Body>
//         </Card>
//       );
//     })
//   );
// };

// export default LifeCycleArts;
